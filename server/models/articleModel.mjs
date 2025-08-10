import mongoose from "mongoose";

const newsArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imgDescription: { type: String, required: true },
    slug: { type: String, unique: true },
    summary: String,
    content: { type: String, required: true },
    image_url: String,
    category: { type: String, required: true },
    subcategory: String,
    author: { type: String, required: true },
    tags: [String],
    is_featured: { type: Boolean, default: false },
    views: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
  },
  { timestamps: true }
); // <-- Automatically adds createdAt & updatedAt

const articleModel = mongoose.model("Article", newsArticleSchema);
//It will search for this user model and if that's not available then it will create

export default articleModel;
