import React, { useEffect, useState } from "react";
import axios from "axios";

const RecentSocialPosts = () => {
  const [shorts, setShorts] = useState([]);

  useEffect(() => {
    async function fetchShorts() {
      const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
      const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

      if (!channelId || !apiKey) {
        console.error("YouTube Channel ID or API Key is missing.");
        return;
      }

      // Step 1: Fetch recent videos
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
      );

      const videoIds = res.data.items.map((item) => item.id.videoId).join(",");

      // Step 2: Get video details (to check duration)
      const details = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds}&key=${apiKey}`
      );

      const shortsOnly = res.data.items.filter((item, i) => {
        const duration = details.data.items[i].contentDetails.duration;
        return duration.includes("S") && !duration.includes("M"); // under 1 min
      });

      setShorts(shortsOnly);
    }
    fetchShorts();
  }, []);

  return (
    <div className="px-6 py-8 w-full">
      <h2 className="text-2xl text-gray-700 font-semibold mb-4">
        Recent Videos
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {shorts.map((video, index) => (
          <div
            key={index}
            className="min-w-[260px] max-w-[260px] flex-shrink-0 rounded-xl shadow-sm border border-gray-200 bg-white "
          >
            <div className="aspect-[9/16] w-full">
              <iframe
                width="461"
                height="820"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-t-xl "
              ></iframe>
            </div>
            <div className="p-3">
              <h3 className="text-base font-semibold">{video.snippet.title}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {video.snippet.description.slice(0, 60)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSocialPosts;
