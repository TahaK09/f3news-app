import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "../config/mongodb.mjs";
import articleRouter from "../routers/articleRouter.mjs";
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());
app.use(cors());

// app.use(
//   cors({
//     origin: [
//       "https://www.f3news.in",
//       "http://localhost:5173/",
//       "http://localhost:5174/",
//     ],
//     credentials: true,
//   })
// );

app.get("/", (req, res) => res.send("API WORKING"));
app.use("/api/articles/", articleRouter);

app.listen(PORT, () => {
  console.log(`The Server is running at port ${PORT}`);
});
