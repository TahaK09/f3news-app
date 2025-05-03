import React from "react";

const SocialWidget = () => {
  return (
    <div className="fixed right-5 top-1/6 z-50 bg-white rounded-xl p-7 w-72 border border-gray-300 shadow-sm text-black space-y-4 ">
      <h3 className="text-md font-medium rounded-sm py-2 px-3.5 bg-[#292828] text-white">
        STAY CONNECTED
      </h3>

      <a
        href="https://facebook.com/f3news"
        className="flex items-center space-x-2"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
          alt="Facebook"
          className="w-6 h-6"
        />
        <div>
          <p className="text-sm leading-4">Followers</p>
          <p className="font-bold text-md">152k</p>
        </div>
      </a>

      <a
        href="https://x.com/F3NewsOfficial"
        className="flex items-center space-x-2"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png "
          alt="X"
          className="w-6 h-6"
        />
        <div>
          <p className="text-sm leading-4">Followers</p>
          <p className="font-bold text-md">1K</p>
        </div>
      </a>

      <a
        href="https://instagram.com/f3news"
        className="flex items-center space-x-2"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
          alt="Instagram"
          className="w-6 h-6"
        />
        <div>
          <p className="text-sm leading-4">Followers</p>
          <p className="font-bold text-md">183K</p>
        </div>
      </a>

      <a
        href="https://youtube.com/f3news"
        className="flex items-center space-x-2"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
          alt="YouTube"
          className="w-6 h-6"
        />
        <div>
          <p className="text-sm leading-4">Subscribers</p>
          <p className="font-bold text-md">92.1k</p>
        </div>
      </a>
    </div>
  );
};

export default SocialWidget;
