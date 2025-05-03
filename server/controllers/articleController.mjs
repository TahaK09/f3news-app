import articleModel from "../models/articleModel.mjs";
import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";

export const createArticle = async (req, res) => {
  try {
    const {
      title,
      content,
      category,
      subcategory,
      summary,
      author,
      tags,
      image_url,
      is_featured,
    } = req.body;

    if (!title || !content || !category) {
      return res.status(400).json({
        success: false,
        message: "Title, content and category are required!",
      });
    }
    const categoryLC = category.toLowerCase();
    const slug = `${slugify(title, {
      lower: true,
      strict: true,
    })}-${uuidv4().slice(0, 8)}`;

    const newArticle = new articleModel({
      title,
      slug,
      summary,
      content,
      category: categoryLC,
      subcategory,
      author,
      tags,
      image_url,
      is_featured,
    });

    await newArticle.save();

    res.status(201).json({ success: true, newArticle });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

export const getAllArticles = async (req, res) => {
  try {
    const { category, subcategory, page = 1, limit = 10 } = req.query;

    const filter = {};
    if (category) filter.category = category;
    if (subcategory) filter.subcategory = subcategory;

    const articles = await articleModel
      .find(filter)
      .sort({ published_at: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({ success: true, articles });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

export const getArticleByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const articles = await articleModel.find({ category: category });
    if (!articles)
      return res
        .status(404)
        .json({ success: true, message: "No such categories exists!" });

    res.json({ success: true, articles });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

export const getArticleBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const article = await articleModel.findOne({ slug: slug });
    if (!article)
      return res
        .status(404)
        .json({ success: true, message: "Article not found!" });

    // Increase view count
    article.views += 1;
    await article.save();

    res.json({ success: true, article });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

export const updateArticle = async (req, res) => {
  try {
    const { slug } = req.params;
    const article = await articleModel.findOne({ slug: slug });
    if (!article)
      return res
        .status(404)
        .json({ success: false, message: "Article not found!" });

    Object.assign(article, req.body);
    if (req.body.title) {
      article.slug = `${slugify(req.body.title, {
        lower: true,
        strict: true,
      })}-${uuidv4().slice(0, 8)}`;
    }

    await article.save();
    res.json(article);
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const result = await articleModel.findOneAndDelete({
      slug: req.params.slug,
    });
    if (!result)
      return res
        .status(404)
        .json({ success: false, message: "Article not found!" });
    res.json({ success: true, message: "Article deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};
