import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Dummy Data
const storyItems = [
  {
    title:
      "Tollywood’s Prince, Mahesh Babu, attended the wedding reception of Akhil Akkineni and Zainab Ravadjee, accompanied by his family.",
    source: "Credit: X/@AnnapurnaStudios",
    image:
      "https://media.vanityfair.com/photos/67a527c82bbd821b55a4fad1/9:16/w_747,h_1328,c_limit/elon-musk-doge.jpg",
  },
  {
    title: "Dolund Tirump is back in the US state.",
    source: "DH Web Desk",
    image:
      "https://media.vanityfair.com/photos/672a497a98a8cfd30ca61fde/9:16/w_1206,h_2144,c_limit/fv1124-trump.jpg",
  },
];

const StorySlide = ({ title, source, image }) => (
  <div className="relative w-full h-screen overflow-hidden">
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
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperContainerRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      !swiperInstance.destroyed
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();

      swiperInstance.on("slideChange", () => {
        setCurrentIndex(swiperInstance.realIndex + 1);
      });
    }
  }, [swiperInstance]);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      {/* Blurred Background */}
      <img
        src={storyItems[currentIndex - 1].image}
        alt="Blurred"
        className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Swiper Container with Buttons */}
      <div
        ref={swiperContainerRef}
        className="relative z-10 flex items-center gap-4"
      >
        {/* Left Button */}
        <button
          ref={prevRef}
          className="bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Swiper */}
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Navigation]}
          className="w-[320px] sm:w-[400px] md:w-[450px] h-[1000px]"
        >
          {storyItems.map((item, index) => (
            <SwiperSlide key={index}>
              <StorySlide {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Button */}
        <button
          ref={nextRef}
          className="bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-10 z-20 text-white text-lg font-semibold bg-black/40 px-4 py-2 rounded-full">
        {currentIndex} / {storyItems.length}
      </div>
    </div>
  );
};

export default StoryPage;
