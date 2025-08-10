import express from "express";
import {
  createArticle,
  getAllArticles,
  getArticleBySlug,
  updateArticle,
  deleteArticle,
  getArticleByCategory,
} from "../controllers/articleController.mjs";

const articleRouter = express.Router();

// Get all articles with optional pagination/filter
articleRouter.get("/", getAllArticles);

// Get articles by category
articleRouter.get("/category/:category", getArticleByCategory);

// Create new article
articleRouter.post("/create", createArticle);

// Update an article
articleRouter.put("/:slug", updateArticle);

// Delete an article
articleRouter.delete("/:slug", deleteArticle);

// Get article by slug (last so it doesn’t override others)
articleRouter.get("/:slug", getArticleBySlug);

export default articleRouter;
