import React, { useState, useEffect } from "react";
import RecentSocialPosts from "../components/custom/RecentSocialPosts";
import LatestNewsWidget from "../components/custom/LatestNewsWidget";
import StoryPage from "../components/custom/StoryPage.jsx";
import axios from "axios";
import { Link } from "react-router-dom";

function Entertainment() {
  const [stories, setStories] = useState([]);
  const [articles, setArticles] = useState([]);
  const API_URL = import.meta.env.VITE_RENDER_SERVER_URL;

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

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/api/articles/category/entertainment`
        );
        if (res.data.success) {
          setArticles(res.data.articles || []);
        }
      } catch (err) {
        console.error("Error fetching articles:", err);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata", // Ensures IST
      timeZoneName: "short",
    });
  };
  const DateFormat = (uploadedAt) => {
    const now = new Date();
    const uploadedDate = new Date(uploadedAt);
    const diff = now - uploadedDate;

    const minsDiff = Math.floor(diff / (1000 * 60));
    const hoursDiff = Math.floor(diff / (1000 * 60 * 60));
    const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minsDiff < 1) return "Just now";
    if (hoursDiff < 1) return `${minsDiff} min ago`;
    if (daysDiff < 1) return `${hoursDiff} hour${hoursDiff > 1 ? "s" : ""} ago`;
    return `${daysDiff} day${daysDiff > 1 ? "s" : ""} ago`;
  };
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % articles.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + articles.length) % articles.length);
  return (
    <>
      <div className="mt-40 mx-auto w-[60vw]">
        <div className="px-6 py-10 bg-white">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">MOVIE articles</h2>
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline flex items-center gap-1"
            >
              See More <span>→</span>
            </a>
          </div>

          {/* Content */}
          {articles.length > 0 && (
            <div className="relative flex w-full overflow-hidden">
              {/* Image */}
              <div className="w-2/3">
                <img
                  src={articles[current].image_url}
                  alt={articles[current].title}
                  className="w-full h-[450px] object-cover rounded"
                />
              </div>

              {/* Text */}
              <div className="w-1/3 pl-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold leading-snug mb-3">
                  {articles[current].title}
                </h3>
                <p className="text-gray-700 mb-2">
                  {articles[current].excerpt}
                </p>
                <p className="text-sm text-gray-400">
                  {formatDate(articles[current].createdAt)}
                </p>
              </div>

              {/* Arrows */}
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
              >
                ◀
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
              >
                ▶
              </button>
            </div>
          )}

          {/* Dots */}
          <div className="mt-4 flex justify-center space-x-2">
            {articles.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === current ? "bg-black" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>

        <RecentSocialPosts />

        <div className="px-6 py-10 bg-white">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">PHOTOS</h2>
            <Link
              to={`story/1`}
              className="text-sm text-blue-600 hover:underline flex items-center gap-1"
            >
              See More <span>→</span>
            </Link>
          </div>

          {/* Horizontal scrollable container */}
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-3">
            {stories.map((story, index) => (
              <Link
                to={`story/${index + 1}`}
                key={index}
                className="flex-shrink-0 w-72 border-r border-gray-400 pr-4"
              >
                <img
                  src={story.image_url}
                  alt={story.title}
                  className="w-full h-80 object-cover rounded"
                />
                <h3 className="mt-3 font-bold text-lg leading-tight hover:text-blue-600 transition">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {DateFormat(story.createdAt)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Entertainment;
