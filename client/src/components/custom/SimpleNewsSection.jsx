import React from "react";
import { Link } from "react-router-dom";

const NewsSection = ({ page, articles }) => {
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

  return (
    <div className="max-w-full mx-auto px-10 py-4">
      <h2 className="text-2xl font-bold border-b-2 border-gray-600 pb-7 capitalize">
        {page}
      </h2>
      <div className="divide-y divide-gray-200 mt-4">
        {articles.map((item, index) => (
          <Link
            to={`${page}/article/${item.slug}`}
            key={index}
            className="flex flex-col md:flex-row md:items-start py-4 gap-4"
          >
            {/* Text Section */}
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-xl font-semibold leading-snug">
                {item.title}
              </h3>
              <p className="text-lg text-gray-600 mt-1">{item.summary}</p>
              <p className="text-sm text-gray-400 mt-1">
                {DateFormat(item.createdAt)}
              </p>
            </div>

            {/* Image Section - fixed width on right */}
            <div className="w-full md:w-72 h-44 flex-shrink-0 md:order-last">
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
