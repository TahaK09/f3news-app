import React from "react";
import { Link } from "react-router-dom";

function StoryPage({ storyBack, storyForward, stories, story }) {
  const currentStory = stories[story - 1];

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Backward Button */}
      {storyBack >= 1 && (
        <Link
          to={`/entertainment/story/${storyBack}`}
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-white/80 backdrop-blur-sm text-black p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-white transition flex justify-center items-center"
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
        </Link>
      )}

      {/* Forward Button */}
      {storyForward <= stories.length && (
        <Link
          to={`/entertainment/story/${storyForward}`}
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-white/80 backdrop-blur-sm text-black p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-white transition flex justify-center items-center"
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
        </Link>
      )}

      {/* Story Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full px-3 sm:px-6 pb-16 sm:pb-20 text-white text-center">
        <img
          src={currentStory.image_url}
          alt={currentStory.description}
          className="rounded-xl sm:rounded-2xl shadow-lg mb-4 sm:mb-6 max-h-[50vh] sm:max-h-[65vh] w-auto max-w-full object-contain"
        />
        <div className="flex flex-col gap-2 absolute bottom-20 sm:bottom-28 max-w-[90%] sm:max-w-80 bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl">
          <h2 className="text-lg sm:text-xl font-semibold leading-snug">
            {currentStory.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-200">
            {currentStory.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StoryPage;
