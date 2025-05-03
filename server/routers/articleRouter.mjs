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

articleRouter.get("/", getAllArticles);
articleRouter.get("/:slug", getArticleBySlug);
articleRouter.get("/category/:category", getArticleByCategory);
articleRouter.post("/create", createArticle);

export default articleRouter;
