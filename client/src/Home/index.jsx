import React, { useState, useEffect } from "react";
import image from "../assets/News-1.webp";
import SocialWidget from "../components/custom/SocialWidget.jsx";
import Newsletter from "../components/custom/Newsletter.jsx";
import CallToAction from "../components/custom/CallToAction.jsx";
import RecentSocialPosts from "../components/custom/RecentSocialPosts.jsx";
import { Clock } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const API_URL = import.meta.env.VITE_RENDER_SERVER_URL;

  const [indiaNews, setIndiaNews] = useState([]);
  const [mumbaiNews, setMumbaiNews] = useState([]);
  const [opinionNews, setOpinionNews] = useState([]);
  const [politicsNews, setPoliticsNews] = useState([]);
  const [featuredNews, setFeaturedNews] = useState({});
  const [indiaFeaturesNews, setIndiaFeaturesNews] = useState();
  const [opinionFeaturesNews, setOpinionFeaturesNews] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mixedNewsSection = [
    ...mumbaiNews.slice(0, 2),
    ...opinionNews.slice(0, 2),
    ...indiaNews.slice(0, 2),
  ];

  console.log(mixedNewsSection);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_URL}/api/articles/category/india`);
        if (res.data.success) {
          setIndiaNews(res.data.articles.reverse());
          setIndiaFeaturesNews(
            res.data.articles
              .filter((article) => article.is_featured)
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0] // only the latest
          );
        }
      } catch (err) {
        setError("Failed to fetch India news");
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [API_URL]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_URL}/api/articles/category/mumbai`);
        if (res.data.success) {
          setMumbaiNews(res.data.articles.reverse());
        }
      } catch (err) {
        setError("Failed to fetch Mumbai News!");
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [API_URL]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_URL}/api/articles/category/opinion`);
        if (res.data.success) {
          setOpinionNews(res.data.articles.reverse());
          setOpinionFeaturesNews(
            res.data.articles
              .filter((article) => article.is_featured)
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0]
          );
        }
      } catch (err) {
        setError("Failed to fetch Opinion News!");
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [API_URL]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${API_URL}/api/articles/category/politics`
        );
        if (res.data.success) {
          setPoliticsNews(res.data.articles.reverse());
        }
      } catch (err) {
        setError("Failed to fetch Politics News!");
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [API_URL]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_URL}/api/articles/featuredArticle`);
        if (res.data.success) {
          setFeaturedNews(res.data.article);
        }
      } catch (err) {
        setError("Failed to fetch Featured News!");
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [API_URL]);

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

  const contents = [
    {
      tag: "Sports",
      image:
        "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400",
      title:
        "Tren de Aragua’s explosion in US ‘likely’ facilitated by Venezuelan officials, FBI says",
      href: "https://localhost:3000/international/this-is-sample-link",
      readTime: "25 mins",
    },
    {
      tag: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400",
      title:
        "Tren de Aragua’s explosion in US ‘likely’ facilitated by Venezuelan officials, FBI says",
      href: "https://localhost:3000/international/this-is-sample-link",
      readTime: "25 mins",
    },
    {
      tag: "India",
      image:
        "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400",
      title:
        "Tren de Aragua’s explosion in US ‘likely’ facilitated by Venezuelan officials, FBI says",
      href: "https://localhost:3000/international/this-is-sample-link",
      readTime: "25 mins",
    },
  ];

  const cards = [
    {
      image:
        "https://a57.foxnews.com/prod-hp.foxnews.com/images/2025/04/458/258/b3b0618d3541a10eb10e7803c7c34dec.png?tl=1&ve=1",
      tag: "Fox News Podcasts",
      title:
        "LISTEN: Stories of killers, murder and survival on FOX True Crime Podcast",
      cta: "Listen Now →",
    },
    {
      image:
        "https://a57.foxnews.com/prod-hp.foxnews.com/images/2025/04/458/258/a300110434f7df14a1c61e69f67aa08e.jpg?tl=1&ve=1",
      tag: "Outkick",
      title:
        "Universal Orlando’s brand-new Epic Universe reviewed by annual pass holder",
    },
    {
      image:
        "https://a57.foxnews.com/prod-hp.foxnews.com/images/2025/04/458/258/d59da7541191868c210745a72805ae51.jpg?tl=1&ve=1",
      tag: "Fox Nation",
      title:
        "WATCH NOW: 'Blood on the Bridge: The Battle of Lexington and Concord'",
      cta: "Watch Now →",
    },
    {
      image:
        "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2025/04/458/258/istock-2184901070.jpg?tl=1&ve=1",
      tag: "Deals",
      title:
        "Amazon Haul weekly deals: Save on gardening accessories, travel gear and more",
    },
  ];

  const newsData = [
    {
      title: "Bengaluru: Breach exposes 2.9 lakh BWSSB customers' data",
      description:
        "The access to these records, including PAN, Aadhaar numbers...",
      time: "18 hours ago",
      image:
        "https://images.deccanherald.com/deccanherald%2F2025-04-29%2Fegap9hnk%2Fdeccanherald2025-03-149prhvs08deccanherald2025-01-227mbe1nofdeccanherald2024-076b5c6e03-217d-4f72-963b-433131eb9970file7un4chx800o170n3g8x9.avif?rect=0%2C0%2C599%2C337&auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=376&dpr=1", // Replace with actual image
    },
    {
      title:
        "Bengaluru: Bike taxi drivers meet transport minister, urge him to...",
      description:
        "In a petition addressed to the minister on behalf of one lakh...",
      time: "19 hours ago",
      image:
        "https://images.deccanherald.com/deccanherald%2F2025-04-29%2Fah4ptlou%2Ffile80epitcxeid1h7g0e474.jpeg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=376&dpr=1",
    },
    {
      title: "White-topping works: Contractors penalised by BBMP",
      description: "While one company failed to begin work on the stretch...",
      time: "19 hours ago",
      image:
        "https://images.deccanherald.com/deccanherald%2F2025-04-28%2Fbu7ihm03%2Fdeccanherald2025-03-28churmmv4BBMPDH1550863802.avif?rect=0%2C1%2C1000%2C563&auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=376&dpr=1",
    },
    {
      title:
        "Bengaluru: Bike taxi drivers meet transport minister, urge him to...",
      description:
        "In a petition addressed to the minister on behalf of one lakh...",
      time: "19 hours ago",
      image:
        "https://images.deccanherald.com/deccanherald%2F2025-04-29%2Fah4ptlou%2Ffile80epitcxeid1h7g0e474.jpeg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=376&dpr=1",
    },
  ];

  return (
    <>
      <div className="my-5 mt-44 gap-5 w-[60vw] flex flex-col justify-center items-center mx-auto">
        {/* Trnding/Featured Section */}
        {featuredNews && (
          <div className="h-96 flex flex-row relative bg-gray-100 rounded-lg">
            {/* Image section with badge overlay */}
            <div className="w-[50%] h-full relative">
              {/* Trending badge */}
              <div className="flex justify-center items-center absolute bottom-4 left-4 bg-[#3270d4bd] py-4 px-10 font-medium rounded-sm h-9 text-amber-50 max-w-52 z-20">
                TRENDING
              </div>
              <img
                className="w-full h-full rounded-l-lg object-cover"
                src={featuredNews.image_url}
                alt="News"
              />
            </div>

            {/* Text section */}
            <div className="w-[50%] px-10 py-2 flex flex-col gap-1">
              {/* BreadCrums */}
              <div className="text-base text-blue-700 font-normal">
                {featuredNews.subcategory}
              </div>
              <div className="text-3xl font-semibold text-gray-900">
                {featuredNews.title}
              </div>
              <div className="font-normal text-gray-600 mt-4 flex flex-col gap-2">
                <div className="text-lg/6">{featuredNews.summary}</div>
              </div>
            </div>
          </div>
        )}

        <div className="w-full h-0.5 bg-[#d2d2d2]"></div>

        <div className="border-b-3 border-[#c1c1c1]"></div>

        {mixedNewsSection && mixedNewsSection.length > 0 && (
          <>
            {[0, 3].map((startIndex) => (
              <div
                key={startIndex}
                className="grid grid-cols-3 border-b border-gray-300 pb-6 mb-6"
              >
                {mixedNewsSection
                  .slice(startIndex, startIndex + 3)
                  .map((news, index) => (
                    <div key={`${startIndex}-${index}`} className="flex">
                      <Link
                        to={`${news.category}/article/${news.slug}`}
                        className="space-y-2 flex-1"
                      >
                        <div className="relative">
                          <img
                            src={news.image_url}
                            alt="News"
                            className="w-full h-48 object-cover rounded-md"
                            loading="lazy"
                          />
                          <span className="absolute bottom-2 left-2 bg-blue-900 text-white text-xs font-bold px-4 py-1.5 rounded-sm capitalize">
                            {news.category}
                          </span>
                        </div>
                        <h2 className="text-md font-bold text-[#003366] leading-snug">
                          {news.title}
                        </h2>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock size={16} className="mr-1" />
                          {ReadingTime(news.content)}
                        </div>
                      </Link>

                      {/* Divider between cards in the same row */}
                      {index !== 2 && (
                        <div className="w-0.25 bg-gray-300 mx-6"></div>
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </>
        )}

        <CallToAction />
        <RecentSocialPosts />

        <div className="w-full h-0.25 bg-[#d2d2d2]"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white"
            >
              <img
                src={item.image}
                alt="Card"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-2">
                <p className="text-xs font-bold uppercase text-red-600">
                  {item.tag}
                </p>
                <h2 className="text-sm font-semibold text-[#003366] leading-snug">
                  {item.title}
                </h2>
                {item.cta && (
                  <button className="mt-2 text-xs font-bold text-red-600 hover:underline">
                    {item.cta}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-0.25 bg-[#d2d2d2]"></div>

        <div className="w-full mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-gray-700 font-semibold">INDIA</h2>
            <Link
              to={`/india`}
              className="text-sm text-gray-600 hover:underline flex items-center"
            >
              See More
              <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Left: Featured news */}
            {indiaFeaturesNews && (
              <Link
                to={`/india/article/${indiaFeaturesNews.slug}`}
                className="md:col-span-1"
              >
                <img
                  src={indiaFeaturesNews.image_url}
                  alt={indiaFeaturesNews.summary}
                  className="w-full rounded"
                />
                <h3 className="font-bold text-2xl mt-3">
                  {indiaFeaturesNews.title}
                </h3>
                <p className="text-sm/5 text-gray-600 mt-3">
                  {indiaFeaturesNews.summary}
                </p>
                <p className="text-xs text-gray-400 mt-2">42 minutes ago</p>
              </Link>
            )}

            {/* Right: Smaller news items */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {indiaNews &&
                indiaNews.map((news, idx) => (
                  <Link
                    to={`/india/article/${news.slug}`}
                    key={news._id}
                    className="flex gap-3 border-b border-gray-300 pb-3"
                  >
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{news.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">
                        {ReadingTime(news.content)}
                      </p>
                    </div>
                    <img
                      src={news.image_url}
                      alt="News thumbnail"
                      className="w-[80px] h-[60px] object-cover rounded"
                    />
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <div className="w-full h-0.25 bg-[#d2d2d2]"></div>

        <div className="w-full mx-auto px-4 py-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-gray-700 font-semibold">Mumbai</h2>

            <Link
              to={`/mumbai`}
              className="text-sm text-gray-600 hover:underline flex items-center"
            >
              See More <span className="ml-1">→</span>
            </Link>
          </div>

          {/* Horizontal Scroll */}
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide snap-x snap-mandatory items-stretch pb-4">
            {mumbaiNews.map((news, index) => (
              <div key={index} className="flex gap-4">
                <a href="#" className="snap-start flex-shrink-0 w-72 bg-white">
                  <div>
                    <img
                      src={news.image_url}
                      alt="news"
                      className="w-full h-40 object-cover rounded-t-md"
                    />
                    <div className="p-3">
                      <h3 className="font-semibold text-md mb-1">
                        {news.title}
                      </h3>
                      <p className="text-sm text-gray-600">{news.summary}</p>
                      <p className="text-xs text-gray-400 mt-2">
                        {DateFormat(news.createdAt)}
                      </p>
                    </div>
                  </div>
                </a>

                {/* Vertical Divider */}
                {index !== newsData.length - 1 && (
                  <div className="w-0.25 h-full bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-0.25 bg-[#d2d2d2]"></div>

        <div className="w-full mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left side */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold">OPINION</h2>
              <Link
                to={`/opinion`}
                className="text-sm font-medium text-blue-600"
              >
                See More →
              </Link>
            </div>
            {opinionFeaturesNews && (
              <div className="flex flex-col gap-2">
                <img
                  src={opinionFeaturesNews.image_url}
                  alt={opinionFeaturesNews.title}
                  className="w-full h-64 object-cover rounded-md"
                />
                <h3 className="text-xl font-bold leading-snug">
                  {opinionFeaturesNews.title}
                </h3>
                <p className="text-gray-700">
                  {opinionFeaturesNews.summary.slice(0, 100) + `...`}
                </p>
                <p className="text-sm text-gray-400">
                  {DateFormat(opinionFeaturesNews.createdAt)}
                </p>
              </div>
            )}

            <div className="mt-4 flex gap-4">
              {opinionNews &&
                opinionNews.map((news, index) => (
                  <div className="flex-1 border-r pr-4" key={news._id}>
                    <p className="font-semibold text-sm">{news.title}</p>
                    <p className="text-xs text-gray-500">
                      {news.summary.slice(0, 100) + `...`}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* Right side */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold">POLITICS</h2>
              <Link
                to={`/politics`}
                className="text-sm font-medium text-blue-600"
              >
                See More →
              </Link>
            </div>

            {politicsNews &&
              politicsNews.map((news, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-bold text-md">
                    {index + 1}. {news.title}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {news.summary.slice(0, 100) + "..."}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {formatDate(news.createdAt)}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
}

export default Home;
