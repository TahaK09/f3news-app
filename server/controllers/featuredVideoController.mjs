import vidModel from "../models/featuredVideoModel.mjs";

export const addFeatureVideo = async (req, res) => {
  try {
    const { embed_link, tag, title } = req.body;

    if (!embed_link?.trim() || !tag?.trim() || !title?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Link, Tag and Title are required!",
      });
    }

    const newFW = new vidModel({
      embed_link,
      tag,
      title,
    });

    await newFW.save();

    res.status(201).json({ success: true, newFW });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

export const getFeaturedVideo = async (req, res) => {
  try {
    const latestFeatured = await vidModel
      .findOne()
      .sort({ createdAt: -1 })
      .exec();

    if (!latestFeatured) {
      return res.status(404).json({
        success: false,
        message: "No featured video found",
      });
    }

    res.json({ success: true, video: latestFeatured });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error!",
    });
  }
};
