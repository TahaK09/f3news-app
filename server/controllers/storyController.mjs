import storyModel from "../models/storyModel.mjs";

export const addStory = async (req, res) => {
  try {
    const { image_url, title, description } = req.body;

    if (!image_url?.trim() || !title?.trim() || !description?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Image, Title and Description are required",
      });
    }

    const newStory = new storyModel({
      image_url,
      title,
      description,
    });

    await newStory.save();

    res.status(201).json({ success: true, story: newStory });
  } catch (err) {
    console.error("Error adding story:", err);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

// Will make it to show only stories within 24 hours
export const getAllStories = async (req, res) => {
  try {
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const stories = await storyModel
      .find({ createdAt: { $gte: twentyFourHoursAgo } })
      .sort({ createdAt: -1 });

    res.json({ success: true, stories });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};
