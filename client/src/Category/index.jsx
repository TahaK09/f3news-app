import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Clock } from "lucide-react";
import RecentSocialPosts from "../components/custom/RecentSocialPosts.jsx";
import NewsSection from "../components/custom/SimpleNewsSection.jsx";
import AllCategoryNews from "../components/custom/AllCategoryNews";

function Category() {
  const { page } = useParams();
  const [articles, setArticles] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [sidenews, setSidenews] = useState([]);
  const [crimeNews, setCrimeNews] = useState([]);
  const [politicsNews, setPoliticsNews] = useState([]);
  const [trendingNews, setTrendingNews] = useState([]);

  const API_URL = import.meta.env.VITE_RENDER_SERVER_URL;

  const ReadingTime = (content) => {
    const averageReadingTime = 200;
    const words = content?.trim()?.split(/\s+/)?.length || 0;
    const time = Math.ceil(words / averageReadingTime);
    return `${time} minutes read`;
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

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/articles/category/${page}`);

        if (res.data.success) {
          setArticles(res.data.articles || []);

          const featuredArticles = res.data.articles.filter(
            (article) => article.is_featured
          );
          const crimeArticles = res.data.articles.filter(
            (article) => article.subcategory?.toLowerCase() === "crime"
          );
          const politicsArticles = res.data.articles.filter(
            (article) => article.subcategory?.toLowerCase() === "politics"
          );
          const trendingArticles = res.data.articles.filter(
            (article) => article.subcategory?.toLowerCase() === "trending"
          );

          if (featuredArticles.length) {
            const latestFeatured = featuredArticles.at(-1);
            const sidenewsArticles = featuredArticles.slice(-5, -1);
            setFeatured(latestFeatured);
            setSidenews(sidenewsArticles);
          }

          setCrimeNews(crimeArticles.reverse());
          setPoliticsNews(politicsArticles.reverse());
          setTrendingNews(trendingArticles.reverse());
        }
      } catch (err) {
        console.error("Error fetching articles:", err);
      }
    };

    fetchArticles();
  }, [page]);

  const newsDatas = [
    { category: "POLITICS", items: politicsNews },
    { category: "CRIME", items: crimeNews },
    { category: "TRENDING", items: trendingNews },
  ];

  if (!articles || !featured) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-xl text-gray-500">
        No news found for this category.
      </div>
    );
  }

  return (
    <div className="w-[90vw] lg:w-[65vw] mx-auto my-28 lg:my-40 flex flex-col justify-center items-center gap-5">
      <h1 className="text-center text-3xl font-semibold border-y py-2 mb-4 w-full capitalize text-gray-800">
        {page} News
      </h1>

      <div className="flex flex-col lg:flex-row lg:gap-6 gap-10 w-full">
        {/* Left - Featured */}
        <div className="md:w-2/3">
          <Link to={`${page}/article/${featured.slug}`}>
            <img
              src={featured.image_url}
              alt="featured"
              className="w-full lg:h-[500px] object-cover lg:rounded rounded-t-lg"
            />
            <div className="bg-[#cefbff] lg:bg-transparent pt-3 pb-2 px-2 lg:p-0 rounded-b-md lg:rounded-none">
              <h2 className="text-xl lg:text-[26px]/10 font-bold">
                {featured.title}
              </h2>
              <p className="text-gray-600 mt-2">
                {featured.summary?.slice(0, 90).trim() + "..."}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {DateFormat(featured.createdAt)}
              </p>
            </div>
          </Link>
        </div>

        <div className="hidden lg:block w-0.25 h-[600px] bg-gray-300"></div>

        {/* Right - Side news */}
        <div className="md:w-1/3 space-y-6">
          {sidenews.map((news, idx) => (
            <div key={idx} className="border-b border-gray-300 pb-4">
              <Link
                to={`${page}/article/${news.slug}`}
                className="flex items-start gap-4"
              >
                <img
                  src={news.image_url}
                  alt={news.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="text-md font-medium">{news.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 flex items-center">
                    <Clock size={16} className="mr-1" />
                    {ReadingTime(news.content)}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-0.25 bg-[#d2d2d2] my-6"></div>

      {/* Category Grids */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-3">
        {newsDatas.map((section) => (
          <div key={section.category} className="space-y-5">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2 ">
              <h2 className="text-xl font-bold">{section.category}</h2>
              <span className="text-sm text-blue-600 cursor-pointer">
                See More →
              </span>
            </div>
            {section.items.map((item, index) => (
              <div
                key={index}
                className={`${
                  index !== section.items.length - 1 ? "border-b" : ""
                } border-gray-200 pb-4`}
              >
                <Link to={`${page}/article/${item.slug}`}>
                  {index === 0 && (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-48 object-cover mb-2"
                    />
                  )}
                  <h3 className="text-lg font-semibold leading-snug text-gray-700">
                    {item.title?.length > 60
                      ? item.title.slice(0, 60) + "..."
                      : item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    {DateFormat(item.createdAt)}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="w-full h-0.25 bg-[#d2d2d2] my-6"></div>

      {/* Recent Posts*/}
      <RecentSocialPosts />

      <div className="w-full h-0.25 bg-[#d2d2d2] my-5"></div>
      <NewsSection articles={articles.reverse()} page={page} />

      <div className="w-full h-0.25 bg-[#d2d2d2] my-5"></div>

      <AllCategoryNews />
    </div>
  );
}

export default Category;
