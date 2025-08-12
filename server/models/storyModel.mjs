import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
  {
    image_url: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
); // <-- Automatically adds createdAt & updatedAt

const storyModel = mongoose.model("story", storySchema);

export default storyModel;
