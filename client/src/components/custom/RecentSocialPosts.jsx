import React from "react";

const posts = [
  {
    id: 1,
    title: "Does Hollywood treat older women poorly?",
    subtitle: "Margaret Qualley and Demi Moore on aging & beauty standards",
    embedUrl: "https://www.youtube.com/embed/lvPHqqiCJqU",
  },
  {
    id: 2,
    title: "Trump's speech before presidency",
    subtitle: "4 takeaways from Trump’s remarks",
    embedUrl: "https://www.youtube.com/embed/lvPHqqiCJqU",
  },
  {
    id: 3,
    title: "Trending Instagram Reel",
    subtitle: "Popular creator discusses mental health",
    embedUrl: "https://www.youtube.com/embed/lvPHqqiCJqU",
  },
  {
    id: 2,
    title: "Trump's speech before presidency",
    subtitle: "4 takeaways from Trump’s remarks",
    embedUrl: "https://www.youtube.com/embed/lvPHqqiCJqU",
  },
  {
    id: 2,
    title: "Trump's speech before presidency",
    subtitle: "4 takeaways from Trump’s remarks",
    embedUrl: "https://www.youtube.com/embed/lvPHqqiCJqU",
  },
];

const RecentSocialPosts = () => {
  return (
    <div className="px-6 py-8 w-full">
      <h2 className="text-2xl text-gray-700 font-semibold mb-4">
        Recent Social Media Posts
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="min-w-[260px] max-w-[260px] flex-shrink-0 rounded-xl shadow-sm border border-gray-200 bg-white "
          >
            <div className="aspect-[9/16] w-full">
              <iframe
                width="461"
                height="820"
                src={post.embedUrl}
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-t-xl "
              ></iframe>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold">{post.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{post.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSocialPosts;
