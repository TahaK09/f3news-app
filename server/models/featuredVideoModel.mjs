import mongoose from "mongoose";

const featuredVidSchema = new mongoose.Schema(
  {
    embed_link: { type: String, required: true },
    tag: { type: String, unique: true },
    title: { type: String, required: true },
  },
  { timestamps: true }
); // <-- Automatically adds createdAt & updatedAt

const vidModel = mongoose.model("Video", featuredVidSchema);
//It will search for this user model and if that's not available then it will create

export default vidModel;
