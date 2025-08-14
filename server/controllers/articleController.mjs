import articleModel from "../models/articleModel.mjs";
import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";

export const createArticle = async (req, res) => {
  try {
    const {
      title,
      imgDescription,
      content,
      category,
      subcategory,
      summary,
      author,
      tags,
      image_url,
      is_featured,
      status,
    } = req.body;

    if (
      !title ||
      !content ||
      typeof category !== "string" ||
      !category.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Title, content and category are required!",
      });
    }
    const categoryLC = category.trim().toLowerCase();

    const slug = `${slugify(title, {
      lower: true,
      strict: true,
    })}-${uuidv4().slice(0, 8)}`;

    const TagsArr =
      typeof tags === "string" ? tags.split(",").map((tag) => tag.trim()) : [];

    const newArticle = new articleModel({
      title,
      imgDescription,
      slug,
      summary,
      content,
      category: categoryLC,
      subcategory,
      author,
      tags: TagsArr,
      image_url,
      is_featured,
      status,
    });

    await newArticle.save();

    res.status(201).json({ success: true, newArticle });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

export const getAllArticles = async (req, res) => {
  try {
    const { category, subcategory, page = 1, limit = 20 } = req.query;

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
    if (!articles.length) {
      return res
        .status(404)
        .json({ success: false, message: "No such category exists!" });
    }

    res.json({ success: true, articles });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

// Get 10 most viewed articles that and that are not more than 2 months old
export const getMostViewedArticles = async (req, res) => {
  try {
    const { category } = req.params;
    const articles = await articleModel.find({ category: category });
    if (!articles.length) {
      return res
        .status(404)
        .json({ success: false, message: "No such category exists!" });
    }

    res.json({ success: true, articles });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

export const getLatestFeaturedArticle = async (req, res) => {
  try {
    const article = await articleModel
      .findOne({ is_featured: true })
      .sort({ createdAt: -1 });

    if (!article) {
      return res
        .status(404)
        .json({ success: false, message: "No Featured Article Found!" });
    }

    res.json({ success: true, article });
  } catch (err) {
    console.error(err);
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
        .json({ success: false, message: "Article not found!" });

    // Increase view count
    await articleModel.updateOne({ slug }, { $inc: { views: 1 } });

    res.json({ success: true, article });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

export const getArticleByID = async (req, res) => {
  try {
    const { _id } = req.params;
    const article = await articleModel.findOne({ _id: _id });
    if (!article)
      return res
        .status(404)
        .json({ success: false, message: "Article not found!" });

    res.json({ success: true, article });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

export const updateArticle = async (req, res) => {
  try {
    const { _id } = req.params;
    const article = await articleModel.findOne({ _id });
    if (!article) {
      return res
        .status(404)
        .json({ success: false, message: "Article not found!" });
    }

    Object.assign(article, req.body);

    if (req.body.title) {
      article.slug = `${slugify(req.body.title, {
        lower: true,
        strict: true,
      })}-${uuidv4().slice(0, 8)}`;
    }

    await article.save();
    res.json({ success: true, article });
  } catch (err) {
    console.error("Error in updateArticle:", err);
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
