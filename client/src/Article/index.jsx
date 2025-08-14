import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";

function Article() {
  const { page, slug } = useParams();
  const [article, setArticle] = useState({});
  const API_URL = import.meta.env.VITE_RENDER_SERVER_URL;

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

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/articles/${slug}`);

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
      image: "https://via.placeholder.com/100x70",
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
      <div className="lg:w-[50vw] max-w-full px-5 sm:px-7 mx-auto flex flex-col my-10 sm:my-36 border-r border-gray-200">
        {/* Breadcrumbs */}
        <div className="mt-10 flex-row flex gap-2 capitalize justify-start items-center text-[#45b8e4] text-sm sm:text-base">
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
              strokeOpacity=".8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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
              strokeOpacity=".8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Article
        </div>

        <div className="py-3 flex flex-col gap-4 border-b border-gray-200">
          <div className="font-bold text-2xl sm:text-5xl text-gray-900">
            {article.title}
          </div>
          <div className="font-medium text-base sm:text-lg text-gray-600 pr-0 sm:pr-4">
            {article.summary}
          </div>

          <div className="font-medium text-sm sm:text-[15px] text-gray-500">
            {article.author} &bull; Last updated:{" "}
            {formatDate(article.updatedAt)}
          </div>
        </div>

        {/* Follow Us */}
        <div className="py-3 flex flex-wrap justify-start items-center text-base sm:text-lg text-gray-600 gap-3 sm:gap-4 border-b border-gray-200">
          Follow Us:{" "}
          {[
            {
              link: "https://www.whatsapp.com/f3news",
              img: "https://png.pngtree.com/png-clipart/20221019/original/pngtree-whatsapp-mobile-software-icon-png-image_8704828.png",
            },
            {
              link: "https://www.instagram.com/f3news",
              img: "https://images.seeklogo.com/logo-png/28/1/instagram-new-2016-logo-png_seeklogo-282177.png",
            },
            {
              link: "https://www.facebook.com/f3news.in",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png",
            },
            {
              link: "https://www.youtube.com/@f3news",
              img: "https://static.vecteezy.com/system/resources/previews/018/910/708/non_2x/youtube-logo-youtube-icon-youtube-symbol-free-free-vector.jpg",
            },
            {
              link: "https://www.x.com/F3NewsOfficial",
              img: "https://static.vecteezy.com/system/resources/thumbnails/042/148/611/small_2x/new-twitter-x-logo-twitter-icon-x-social-media-icon-free-png.png",
            },
            {
              link: "https://www.threads.com/f3news",
              img: "https://images.seeklogo.com/logo-png/49/2/threads-logo-png_seeklogo-491194.png",
            },
            {
              link: "https://www.telegram.com/f3news",
              img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png",
            },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              className="p-1 sm:p-2 border border-gray-200 rounded"
            >
              <img className="w-5 h-5 sm:w-6 sm:h-6" src={social.img} alt="" />
            </a>
          ))}
        </div>

        {/* Content */}
        <div className="py-6 sm:py-10 flex flex-col gap-2 border-b border-gray-200">
          <img src={article.image_url} className="w-full h-auto" alt="" />
          <div className="text-sm sm:text-base font-light text-gray-500">
            {article.imgDescription}
          </div>

          <div className="font-medium text-base sm:text-lg text-gray-800 my-5">
            <div
              className="prose prose-sm sm:prose-lg"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(article.content),
              }}
            />
          </div>

          <div className="bg-[#FFEEC7] p-4 sm:p-6 rounded">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <h2 className="text-lg sm:text-xl font-bold border-l-4 border-cyan-600 pl-2">
                What Others Are Reading
              </h2>
              <Link
                to="/others-are-reading"
                className="mt-2 sm:mt-0 text-xs sm:text-sm font-semibold text-black flex items-center gap-1"
              >
                See More <span>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {othersAreReading.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  className="flex items-start gap-3"
                >
                  <div className="flex-1 text-sm sm:text-[15px] font-semibold text-black leading-snug hover:underline">
                    {item.title}
                  </div>
                  <img
                    src={item.image}
                    alt="news"
                    className="w-[80px] h-[55px] sm:w-[90px] sm:h-[60px] object-cover rounded"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="font-medium text-sm sm:text-[15px] mt-5 text-gray-500">
            Published Date: {formatDate(article.createdAt)}
          </div>
          <div className="font-medium text-sm sm:text-[15px] text-gray-700 flex flex-wrap gap-2">
            {article.tags?.map((item, index) => (
              <div
                key={index}
                className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-50 border rounded border-gray-300 text-xs sm:text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
