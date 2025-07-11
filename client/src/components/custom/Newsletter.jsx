import React from "react";

function Newsletter() {
  //Making this a section that will show the recent video on youtube or featured one -- putting the newsletter in the footer of the page
  return (
    <div className="fixed right-14 top-1/5 z-50 bg-white rounded-md border border-gray-300 shadow-sm text-black space-y-4 flex flex-col justify-center items-center">
      <iframe
        width="330"
        height="160"
        className="rounded-lg"
        src="https://www.youtube.com/embed/QrlWwS8RKas"
        title="Breaking : Abroad Job Ke Naam Par Crore Rupaye Ka Scam | Malad | Mumbai"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      {/* Title to the video */}
      <div className="text-base/5 text-gray-600 max-w-80 text-start mb-2.5 ">
        <span className="mr-2 bg-red-700 text-white px-1 rounded-sm text-sm font-thin">
          &bull; Breaking
        </span>
        Abroad Job Ke Naam Par Crore Rupaye Ka Scam | Malad | Mumbai
      </div>
    </div>
  );
}

export default Newsletter;
