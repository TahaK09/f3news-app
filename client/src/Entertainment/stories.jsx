import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import StoryPage from "../components/custom/StoryPage";

function Stories() {
  const { story } = useParams();
  const [stories, setStories] = useState([]);
  const API_URL = import.meta.env.VITE_RENDER_SERVER_URL;
  console.log(story);
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

  return (
    <>
      <div className="fixed top-0 w-screen h-screen z-[1000]">
        <Link
          to={`/entertainment`}
          className="fixed top-5 right-5 w-20 z-[1200] h-20 rounded-full bg-white"
        ></Link>
        {/* Have to change the whole Story page and make a custom component, where the slide will be done through the navigation (which will swap reading the story params and indexing aight) not a slider as such*/}
        <StoryPage stories={stories} story={story} />
      </div>
    </>
  );
}

export default Stories;
