import express from "express";
import "dotenv/config";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "../config/mongodb.mjs";
import articleRouter from "../routers/articleRouter.mjs";
import featureRouter from "../routers/fVideoRouter.mjs";
import storyRouter from "../routers/storyRouter.mjs";
import articleModel from "../models/articleModel.mjs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(helmet());

const allowedOrigins = ["https://www.f3news.in", "http://localhost:5173"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// ROUTES
app.get("/", (req, res) => res.send("API WORKING"));
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use("/api/articles", articleRouter);
app.use("/api/featuredvideo", featureRouter);
app.use("/api/stories", storyRouter);

// Dynamic SEO route for article pages
app.get("/:category/article/:slug", async (req, res) => {
  try {
    const { slug, category } = req.params;
    const article = await articleModel.findOne({ slug });

    if (!article) {
      return res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    }

    const description = article.summary || article.content?.slice(0, 150) || "";

    res.send(`<!DOCTYPE html>
             <html lang="en">
           <head>
              <meta charset="utf-8" />
                    <title>${article.title} | F3News</title>
                  <meta name="description" content="${description}" />

                     <meta property="og:title" content="${article.title}" />
                     <meta property="og:description" content="${description}" />
                     <meta property="og:image" content="${article.image_url}" />
                     <meta property="og:url" content="https://www.f3news.in/${category}/article/${slug}" />
                     <meta property="og:type" content="article" />

                     <meta name="twitter:card" content="summary_large_image" />
                     <meta name="twitter:title" content="${article.title}" />
                     <meta name="twitter:description" content="${description}" />
                     <meta name="twitter:image" content="${article.image_url}" />
                   </head>
                   <body>
                     <div id="root"></div>
                    <script type="module" src="/main.jsx"></script>
                </body>
                  </html>`);
  } catch (err) {
    console.error("SEO error:", err);
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  }
});

// Fallback to React SPA for everything else
app.get("/*path", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// DB & SERVER
connectDB()
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  });
