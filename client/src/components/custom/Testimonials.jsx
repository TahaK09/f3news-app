import React from "react";

const testimonials = [
  {
    name: "Donald Jackman",
    title: "Content Creator",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
    review:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: "Richard Nelson",
    title: "Instagram Influencer",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
    review:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: "James Washington",
    title: "Digital Content Creator",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    review:
      "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
];

const Star = () => (
  <svg
    width="22"
    height="20"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
      fill="#FF532E"
    />
  </svg>
);

const TestimonialCard = ({ name, title, image, review }) => (
  <div className="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden">
    <div className="flex items-center gap-4 px-5 py-4 bg-red-500/10">
      <img className="h-12 w-12 rounded-full" src={image} alt={name} />
      <div>
        <h1 className="text-lg font-medium text-gray-800">{name}</h1>
        <p className="text-gray-800/80">{title}</p>
      </div>
    </div>
    <div className="p-5 pb-7">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} />
        ))}
      </div>
      <p className="text-gray-500 mt-5">{review}</p>
    </div>
    <a href="#" className="text-red-500 underline px-5">
      Read more
    </a>
  </div>
);

const TestimonialSection = () => (
  <div className="flex flex-wrap items-center justify-center gap-6">
    {testimonials.map((item, idx) => (
      <TestimonialCard key={idx} {...item} />
    ))}
  </div>
);

export default TestimonialSection;
