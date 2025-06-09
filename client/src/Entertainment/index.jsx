import React, { useState } from "react";
import RecentSocialPosts from "../components/custom/RecentSocialPosts";
import LatestNewsWidget from "../components/custom/LatestNewsWidget";
import StoryPage from "../components/custom/StoryPage.jsx";

function Entertainment() {
  const photoStories = [
    {
      image: "/images/varun.jpg",
      title:
        "Varun Dhawan to Veer Pahariya: Bollywood actors flaunt their washboard abs",
      time: "31 minutes ago",
    },
    {
      image: "/images/kesari.jpg",
      title:
        "'Kesari Veer' Trailer Launch: Celebrities shine bright on the red carpet",
      time: "2 hours ago",
    },
    {
      image: "/images/dance.jpg",
      title:
        "World Dance Day 2025: Celebrating the icons behind Bollywood’s most iconic moves",
      time: "29 April 2025, 16:17 IST",
    },
    {
      image: "/images/padma.jpg",
      title: "Padma Award Kumar, Balak Shekhar Kapur",
      time: "28 April 2025, 21:14 IST",
    },
  ];

  const reviews = [
    {
      image: "/images/heist.jpg",
      title: "'Jewel Thief: The Heist Begins' movie review: No sparkle...",
      excerpt:
        "When a ‘heist’ begins in this fashion, you know you have to endure two hours of abominable triteness...",
      date: "26 April 2025, 05:10 IST",
    },
    {
      image: "/images/movie2.jpg",
      title: "'Silent Echoes' movie review: A hauntingly empty promise",
      excerpt:
        "Despite its eerie visuals, this thriller fails to deliver the emotional punch it promises...",
      date: "25 April 2025, 14:00 IST",
    },
    {
      image: "/images/movie3.jpg",
      title: "'Battle of Realms' review: Spectacle over substance",
      excerpt:
        "Explosions and effects abound, but the soul of storytelling is missing in action...",
      date: "24 April 2025, 20:15 IST",
    },
  ];
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  return (
    <>
      <div className="mt-40 mx-auto w-[60vw]">
        <div className="px-6 py-10 bg-white">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">MOVIE REVIEWS</h2>
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline flex items-center gap-1"
            >
              See More <span>→</span>
            </a>
          </div>

          {/* Content */}
          <div className="relative flex w-full overflow-hidden">
            {/* Image */}
            <div className="w-2/3">
              <img
                src={reviews[current].image}
                alt={reviews[current].title}
                className="w-full h-[450px] object-cover rounded"
              />
            </div>

            {/* Text */}
            <div className="w-1/3 pl-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold leading-snug mb-3">
                {reviews[current].title}
              </h3>
              <p className="text-gray-700 mb-2">{reviews[current].excerpt}</p>
              <p className="text-sm text-gray-400">{reviews[current].date}</p>
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

          {/* Dots */}
          <div className="mt-4 flex justify-center space-x-2">
            {reviews.map((_, i) => (
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
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline flex items-center gap-1"
            >
              See More <span>→</span>
            </a>
          </div>

          {/* Horizontal scrollable container */}
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-3">
            {photoStories.map((story, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 border-r border-gray-400 pr-4"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-80 object-cover rounded"
                />
                <h3 className="mt-3 font-bold text-lg leading-tight hover:text-blue-600 transition">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{story.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <LatestNewsWidget /> */}
      {/* <div className="fixed top-0 w-screen h-screen z-1000">
        <StoryPage />
      </div> */}
    </>
  );
}

export default Entertainment;
