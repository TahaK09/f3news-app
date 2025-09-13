import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";

const ArticleCard = ({ title, summary, image_url }) => (
  <Card className="overflow-hidden w-full p-4 border-0">
    <img src={image_url} alt={title} className="w-full h-full object-cover" />
    <CardContent className="p-2">
      <h3 className="text-lg font-bold leading-snug">{title}</h3>
      <p className="text-sm text-gray-500 mt-1.5">
        {summary.slice(0, 80).trim() + `...`}
      </p>
    </CardContent>
  </Card>
);
//Here I will put most viewed news despite categories
const AllCategoryNews = () => {
  const [recentArticles, setRecentArticles] = useState([]);
  const API_URL = import.meta.env.VITE_RENDER_SERVER_URL;

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/articles/`);

        if (res.data.success) {
          setRecentArticles(res.data.articles.reverse().slice(0, 10)); // Get the latest 10 articles in correct order
        }
      } catch (error) {
        console.log("Error fetching article", error);
      }
    };

    fetchArticle();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4 w-full px-5 lg:px-20">
        {recentArticles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </>
  );
};

export default AllCategoryNews;
