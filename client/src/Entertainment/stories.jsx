import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import StoryPage from "../components/custom/StoryPage";

function Stories() {
  const { story } = useParams();
  const [stories, setStories] = useState([]);
  const API_URL = import.meta.env.VITE_RENDER_SERVER_URL;

  const storyIndex = parseInt(story, 10); // 1-based index
  const storyBack = storyIndex - 1;
  const storyForward = storyIndex + 1;

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/stories`);
        if (res.data.success && res.data.stories) {
          setStories(res.data.stories);
        }
      } catch (error) {
        console.error("Error fetching Stories:", error);
      }
    };

    fetchStories();
  }, []);

  if (stories.length === 0) return null;

  const currentStory = stories[storyIndex - 1];

  return (
    <div className="fixed inset-0 z-[800] flex flex-col md:flex-row items-center justify-center">
      {/* Blurred Background */}
      <img
        src={currentStory.image_url}
        alt="Blurred"
        className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110"
      />

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Close Button */}
      <Link
        to="/entertainment"
        className="fixed top-3 right-3 md:top-5 md:right-5 z-[1200] bg-white text-black w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-200 transition"
      >
        ✖
      </Link>

      {/* Story Content */}
      <div className="relative z-[1100] w-full h-full flex justify-center items-center p-2 sm:p-4">
        <div className="w-full max-w-[90%] md:max-w-4xl h-[90%] md:h-auto">
          <StoryPage
            storyBack={storyBack}
            storyForward={storyForward}
            stories={stories}
            story={storyIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default Stories;
