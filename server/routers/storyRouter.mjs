import express from "express";
import { addStory, getAllStories } from "../controllers/storyController.mjs";

const storyRouter = express.Router();

// Get all the latest stories
storyRouter.get("/", getAllStories);

// Add a new Story
storyRouter.post("/add", addStory);

export default storyRouter;
