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
        const res = await axios.get(`${API_URL}/api/stories`);
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
      timeZone: "Asia/Kolkata",
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
      <div className="mt-25 sm:mt-40 mx-auto w-full sm:w-[60vw] px-4">
        <div className="px-4 sm:px-6 py-6 sm:py-10 bg-white">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <h2 className="text-lg sm:text-xl font-semibold">
              MOVIE Reviews & Articles
            </h2>
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline flex items-center gap-1 mt-2 sm:mt-0"
            >
              See More <span>→</span>
            </a>
          </div>

          {/* Content */}
          {articles.length > 0 && (
            <Link
              to={`/entertainment/article/${articles[current].slug}`}
              className="relative flex flex-col sm:flex-row w-full overflow-hidden gap-4 sm:gap-0"
            >
              {/* Image */}
              <div className="w-full sm:w-2/3">
                <img
                  src={articles[current].image_url}
                  alt={articles[current].title}
                  className="w-full h-60 sm:h-[450px] object-cover rounded"
                />
              </div>

              {/* Text */}
              <div className="w-full sm:w-1/3 sm:pl-6 flex flex-col justify-center mt-4 sm:mt-0">
                <h3 className="text-lg sm:text-2xl font-bold leading-snug mb-3">
                  {articles[current].title}
                </h3>
                <p className="text-gray-700 mb-2 text-sm sm:text-base">
                  {articles[current].excerpt}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  {formatDate(articles[current].createdAt)}
                </p>
              </div>

              {/* Arrows */}
              <button
                onClick={prev}
                className="absolute left-2 sm:left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 -960 960 960"
                  width="18px"
                  className="sm:h-[20px] sm:w-[20px]"
                  fill="#999999"
                >
                  <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-2 sm:right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 -960 960 960"
                  width="18px"
                  className="sm:h-[20px] sm:w-[20px]"
                  fill="#999999"
                >
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                </svg>
              </button>
            </Link>
          )}

          {/* Dots */}
          <div className="mt-4 flex justify-center space-x-2">
            {articles.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  i === current ? "bg-black" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>

        <RecentSocialPosts />

        <div className="px-4 sm:px-6 py-6 sm:py-10 bg-white">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <h2 className="text-lg sm:text-xl font-semibold">PHOTOS</h2>
            <Link
              to={`story/1`}
              className="text-sm text-blue-600 hover:underline flex items-center gap-1 mt-2 sm:mt-0"
            >
              See More <span>→</span>
            </Link>
          </div>

          {/* Horizontal scrollable container */}
          <div className="flex space-x-4 sm:space-x-6 overflow-x-auto scrollbar-hide py-3">
            {stories.map((story, index) => (
              <Link
                to={`story/${index + 1}`}
                key={index}
                className="flex-shrink-0 w-56 sm:w-72 border-r border-gray-400 pr-4"
              >
                <img
                  src={story.image_url}
                  alt={story.title}
                  className="w-full h-56 sm:h-80 object-cover rounded"
                />
                <h3 className="mt-3 font-bold text-base sm:text-lg leading-tight hover:text-blue-600 transition">
                  {story.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
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
