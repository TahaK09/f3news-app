import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Article() {
  const { page, slug } = useParams();
  const [article, setArticle] = useState({});

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

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/articles/${slug}`
        );

        if (res.data.success) {
          setArticle(res.data.article);
        }
      } catch (error) {
        console.log("Error fetching article", error);
      }
    };

    fetchArticle();
  }, [slug]);

  const othersAreReading = [
    {
      title:
        "Congress chief Kharge brings demand for quota in pvt sector to fore",
      image: "https://via.placeholder.com/100x70", // Replace with real URLs
      link: "/article/1",
    },
    {
      title:
        "Maharashtra Cyber records over 10 lakh cyber attacks targeting India post-...",
      image: "https://via.placeholder.com/100x70",
      link: "/article/2",
    },
    {
      title:
        "Don't want job or money, just martyr status for husband: Pahalgam attack victim...",
      image: "https://via.placeholder.com/100x70",
      link: "/article/3",
    },
    {
      title:
        "J&K Police cracks down on cross-border terror networks, attaches property of LeT...",
      image: "https://via.placeholder.com/100x70",
      link: "/article/4",
    },
  ];

  return (
    <>
      <div className="w-[50vw] px-5 mx-auto flex flex-col my-36 border-r border-gray-200">
        {/* Breadcrumbs */}
        <div className="flex flex-row gap-2 capitalize justify-start items-center text-[#45b8e4]">
          <Link to={"/"}>Home</Link>{" "}
          <svg
            width="8"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 15 7.875-7L1 1"
              stroke="#6B7280"
              stroke-opacity=".8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <Link to={`/${page}`}>{page}</Link>{" "}
          <svg
            width="8"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 15 7.875-7L1 1"
              stroke="#6B7280"
              stroke-opacity=".8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Article
        </div>
        <div className="py-3 flex flex-col gap-4 border-b border-gray-200 ">
          <div className="font-bold text-5xl text-gray-900">
            {article.title}
          </div>
          <div className="font-medium text-lg text-gray-600 pr-4">
            {article.summary}
          </div>

          <div className="font-medium text-[15px] text-gray-500">
            Last updated: {formatDate(article.updatedAt)}
          </div>
        </div>
        <div className="py-3 flex justify-start items-center text-lg text-gray-600 flex-row gap-4 border-b border-gray-200">
          Follow Us:{" "}
          <a
            href="https://www.whatsapp.com/f3news"
            className="p-2 border border-gray-200 rounded"
          >
            <img
              className="w-6 h-6"
              src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-whatsapp-mobile-software-icon-png-image_8704828.png"
              alt=""
            />
          </a>
          <a
            href="https://www.whatsapp.com/f3news"
            className="p-1 border border-gray-200"
          >
            <img
              className="w-7 h-7"
              src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-whatsapp-mobile-software-icon-png-image_8704828.png"
              alt=""
            />
          </a>
        </div>
        {/* Content */}
        <div className="py-10 flex flex-col gap-2 border-b border-gray-200">
          <img src={article.image_url} className="w-full h-auto" alt="" />
          <div className="text-lg font-light text-gray-500">
            Credit: Amit Shah
          </div>

          <div className="font-medium text-lg text-gray-800 my-5">
            {article.content}
          </div>

          <div className="bg-[#FFEEC7] p-6 rounded">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold border-l-4 border-cyan-600 pl-2">
                What Others Are Reading
              </h2>
              <Link
                to="/others-are-reading"
                className="text-sm font-semibold text-black flex items-center gap-1"
              >
                See More <span>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {othersAreReading.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  className="flex items-start gap-3"
                >
                  <div className="flex-1 text-[15px] font-semibold text-black leading-snug hover:underline">
                    {item.title}
                  </div>
                  <img
                    src={item.image}
                    alt="news"
                    className="w-[90px] h-[60px] object-cover rounded"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="font-medium text-[15px] mt-5 text-gray-500">
            Published Date: {formatDate(article.createdAt)}
          </div>
          <div className="font-medium text-[15px] text-gray-700 flex flex-row gap-2">
            {article.tags?.map((item, index) => (
              <div
                key={index}
                className="px-3 py-1.5 bg-gray-50 border rounded border-gray-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Ads section */}
        {/* Related Articles */}
      </div>
    </>
  );
}

export default Article;
