import React from "react";

const articles = [
  {
    title:
      "Assam panchayat polls: Over 56% voter turnout till 3.30 pm amidst stray incidents of violence",
    summary:
      "Voting began at 7.30 am and concluded at 4.30 pm in 14 districts...",
    image:
      "https://images.deccanherald.com/deccanherald%2F2025-05-02%2Fxd6vf18u%2Ffile80gnfd7m0ll1fhicch0g.jpg?rect=0%2C0%2C1200%2C675&auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=300&dpr=1.1", // Replace with actual image path
    time: "3 minutes ago",
  },
  {
    title:
      "'If India attacks Pakistan…': Yunus aide's 'northeast' warning over Pahalgam terror attack",
    summary: "In a Facebook post on Tuesday, Rahman wrote in Bengali...",
    image:
      "https://images.deccanherald.com/deccanherald%2F2025-05-02%2Fik26a6zz%2FBangladesh17461758673681746175878024.jpg?rect=0%2C0%2C549%2C309&auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=300&dpr=1.1",
    time: "4 minutes ago",
  },
  {
    title:
      "'Oppn stands with Centre but they have no clear strategy': Kharge on Pahalgam",
    summary:
      "The Congress president credited former party chief Rahul Gandhi...",
    image:
      "https://images.deccanherald.com/deccanherald%2F2025-05-02%2Fxd6vf18u%2Ffile80gnfd7m0ll1fhicch0g.jpg?rect=0%2C0%2C1200%2C675&auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=300&dpr=1.1",
    time: "9 minutes ago",
  },
  {
    title:
      "Assam panchayat polls: Over 56% voter turnout till 3.30 pm amidst stray incidents of violence",
    summary:
      "Voting began at 7.30 am and concluded at 4.30 pm in 14 districts...",
    image:
      "https://images.deccanherald.com/deccanherald%2F2025-05-02%2Fxd6vf18u%2Ffile80gnfd7m0ll1fhicch0g.jpg?rect=0%2C0%2C1200%2C675&auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=300&dpr=1.1", // Replace with actual image path
    time: "3 minutes ago",
  },
  {
    title:
      "'If India attacks Pakistan…': Yunus aide's 'northeast' warning over Pahalgam terror attack",
    summary: "In a Facebook post on Tuesday, Rahman wrote in Bengali...",
    image:
      "https://images.deccanherald.com/deccanherald%2F2025-05-02%2Fik26a6zz%2FBangladesh17461758673681746175878024.jpg?rect=0%2C0%2C549%2C309&auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=300&dpr=1.1",
    time: "4 minutes ago",
  },
  {
    title:
      "'Oppn stands with Centre but they have no clear strategy': Kharge on Pahalgam",
    summary:
      "The Congress president credited former party chief Rahul Gandhi...",
    image:
      "https://images.deccanherald.com/deccanherald%2F2025-05-02%2Fxd6vf18u%2Ffile80gnfd7m0ll1fhicch0g.jpg?rect=0%2C0%2C1200%2C675&auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=300&dpr=1.1",
    time: "9 minutes ago",
  },
];

const NewsSection = ({ sectionTitle = "India News" }) => {
  return (
    <div className="max-w-full mx-auto px-10 py-4">
      <h2 className="text-2xl font-bold border-b-2 border-gray-600 pb-7">
        {sectionTitle}
      </h2>
      <div className="divide-y mt-4">
        {articles.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row py-4 gap-4 border-gray-200"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold leading-snug">
                {item.title}
              </h3>
              <p className="text-lg text-gray-600 mt-1">{item.summary}</p>
              <p className="text-sm text-gray-400 mt-1">{item.time}</p>
            </div>
            <div className="w-full md:w-72 h-44 flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
