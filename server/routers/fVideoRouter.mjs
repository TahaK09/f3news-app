import express from "express";
import {
  addFeatureVideo,
  getFeaturedVideo,
} from "../controllers/featuredVideoController.mjs";

const featureRouter = express.Router();

// Get the latest Featured Video
featureRouter.get("/", getFeaturedVideo);

// Add a new Feature Video
featureRouter.post("/add", addFeatureVideo);

export default featureRouter;
