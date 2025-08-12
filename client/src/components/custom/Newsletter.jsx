import React, { useEffect, useState } from "react";
import { useAppContext } from "../../Context/AppContext";
import axios from "axios";

function Newsletter() {
  const { showPromo } = useAppContext();
  const top_align = showPromo === true ? "top-1/5" : "top-1/9";
  const [featuredVid, setFeaturedVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/featuredvideo`);
        if (res.data.success && res.data.video) {
          setFeaturedVideo(res.data.video);
        }
      } catch (error) {
        console.error("Error fetching featured video:", error);
      }
    };

    fetchVideo();
  }, []); // only fetch once on mount

  if (!featuredVid) return null; // don't render until we have data

  return (
    <div
      className={`fixed right-4 ${top_align} z-50 bg-white rounded-md border border-gray-300 shadow-sm text-black space-y-4 flex flex-col justify-center items-center`}
    >
      <iframe
        width="330"
        height="160"
        className="rounded-lg"
        src={featuredVid.embed_link}
        title={featuredVid.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* Tag & Title */}
      <div className="text-base/5 text-gray-600 max-w-80 text-start mb-2.5">
        <span className="mr-2 bg-red-700 text-white px-1 rounded-sm text-sm font-thin">
          &bull; {featuredVid.tag}
        </span>
        {featuredVid.title}
      </div>
    </div>
  );
}

export default Newsletter;
