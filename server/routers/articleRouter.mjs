import express from "express";
import {
  createArticle,
  getAllArticles,
  getArticleBySlug,
  updateArticle,
  deleteArticle,
  getArticleByCategory,
  getArticleByID,
  getLatestFeaturedArticle,
} from "../controllers/articleController.mjs";

const articleRouter = express.Router();

// Get all articles
articleRouter.get("/", getAllArticles);

//Get latest featured article
articleRouter.get("/featuredArticle", getLatestFeaturedArticle);

// Get articles by category
articleRouter.get("/category/:category", getArticleByCategory);

articleRouter.get("/id/:_id", getArticleByID);

// Create new article
articleRouter.post("/create", createArticle);

// Update an article
articleRouter.put("/id/:_id", updateArticle);

// Delete an article
articleRouter.delete("/:slug", deleteArticle);

// Get article by slug (last so it doesn’t override others)
articleRouter.get("/:slug", getArticleBySlug);

export default articleRouter;
