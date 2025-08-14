import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const StorySlide = ({ image_url, title, description }) => (
  <div className="relative w-full h-screen overflow-hidden">
    <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-16 text-white text-center">
      <img
        src={image_url}
        alt={description}
        className="rounded-2xl shadow-lg mb-6 max-h-[65vh] object-cover"
      />
      <div className="flex flex-col gap-1.5 absolute bottom-28 max-w-80 shadow-md">
        <h2 className="text-xl font-semibold leading-snug">{title}</h2>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  </div>
);

const StoryPage = ({ stories, story }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperContainerRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(story);

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
  if (!stories || stories.length === 0) return null;
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      {/* Blurred Background */}
      <img
        src={stories[story].image_url}
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
          {stories.map((story, index) => (
            <SwiperSlide key={story._id}>
              <StorySlide
                title={story.title}
                description={story.description}
                image_url={story.image_url}
              />
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
        {currentIndex} / {stories.length}
      </div>
    </div>
  );
};

export default StoryPage;
