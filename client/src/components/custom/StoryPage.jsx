import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const storyItems = [
  {
    title:
      "WAVES Summit 2025: Shah Rukh, Deepika, Alia Bhatt join PM Modi in a star-studded showcase of influence",
    source: "DH Web Desk",
    image:
      "https://media.vanityfair.com/photos/672a497a98a8cfd30ca61fde/9:16/w_1206,h_2144,c_limit/fv1124-trump.jpg",
  },
  {
    title: "Dolund Tirump is back in the US state.",
    source: "DH Web Desk",
    image:
      "https://media.vanityfair.com/photos/672a497a98a8cfd30ca61fde/9:16/w_1206,h_2144,c_limit/fv1124-trump.jpg",
  },
  // Add more story items here
];

const StorySlide = ({ title, source, image }) => (
  <div className="relative w-full h-screen overflow-hidden">
    {/* Blurred Background */}
    {/* <img
      src={image}
      alt="Blurred"
      className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110"
    />
    <div className="absolute inset-0 bg-black/50" /> */}

    {/* Foreground Content */}
    <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-16 text-white text-center">
      <img
        src={image}
        alt="Main"
        className="rounded-2xl shadow-lg mb-6 max-h-[65vh] object-cover"
      />
      <div className="flex flex-col gap-1.5 absolute bottom-28 max-w-80 shadow-md">
        <h2 className="text-xl font-semibold leading-snug">{title}</h2>
        <p className="text-sm text-gray-300 ">{source}</p>
      </div>
    </div>
  </div>
);

const StoryPage = () => {
  return (
    <>
      {" "}
      {/* Blurred Background */}
      <img
        src={storyItems[0].image}
        alt="Blurred"
        className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110"
      />
      <div className="absolute inset-0 bg-black/50" />
      <Swiper navigation modules={[Navigation]} className="w-full h-full">
        {storyItems.map((item, index) => (
          <SwiperSlide key={index}>
            <StorySlide {...item} />
          </SwiperSlide>
        ))}
      </Swiper>{" "}
    </>
  );
};

export default StoryPage;
