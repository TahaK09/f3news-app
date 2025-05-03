import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    title:
      "Gujarat: Viral video of Indian-origin woman residing in Israel helps arrest woman from ‘Godmother’ Santokben’s clan",
    source: "Deccan Herald",
    image:
      "http://images.deccanherald.com/deccanherald%2F2024-03%2F15874573-9a4e-4a19-9fc9-8d2fa4896270%2Fkidnap_887072_1600014403_905497_1603354559.png?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=900&dpr=1.1",
  },
  {
    title:
      "Gujarat: Viral video of Indian-origin woman residing in Israel helps arrest woman from ‘Godmother’ Santokben’s clan",
    source: "Deccan Herald",
    image:
      "http://images.deccanherald.com/deccanherald%2F2024-03%2F15874573-9a4e-4a19-9fc9-8d2fa4896270%2Fkidnap_887072_1600014403_905497_1603354559.png?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=900&dpr=1.1",
  },
  {
    title:
      "Gujarat: Viral video of Indian-origin woman residing in Israel helps arrest woman from ‘Godmother’ Santokben’s clan",
    source: "Deccan Herald",
    image:
      "http://images.deccanherald.com/deccanherald%2F2024-03%2F15874573-9a4e-4a19-9fc9-8d2fa4896270%2Fkidnap_887072_1600014403_905497_1603354559.png?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=900&dpr=1.1",
  },
  // Add more articles as needed
];

const ArticleCard = ({ title, source, image }) => (
  <Card className="overflow-hidden w-full p-4 border-0">
    <img src={image} alt={title} className="w-full h-full object-cover" />
    <CardContent className="p-2">
      <h3 className="text-lg font-bold leading-snug">{title}</h3>
      <p className="text-sm text-gray-500 mt-1.5">{source}</p>
    </CardContent>
  </Card>
);
//Here I will put most viewed news despite categories
const AllCategoryNews = () => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full px-10">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </>
  );
};

export default AllCategoryNews;
