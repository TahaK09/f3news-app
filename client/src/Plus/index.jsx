import React from "react";
import TestimonialSection from "./../components/custom/Testimonials";

const PricingCard = ({
  title,
  price,
  features,
  isPopular,
  isPro,
  buttonStyle,
}) => {
  return (
    <div
      className={`w-72 rounded-lg border border-gray-500/30 p-6 ${
        isPro
          ? "bg-indigo-500 text-white relative pb-14"
          : "bg-white text-gray-800/80"
      } text-center`}
    >
      {isPopular && (
        <p className="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-[#8789FB] rounded-full">
          Most Popular
        </p>
      )}
      <p className={`font-semibold ${isPro ? "pt-2" : ""}`}>{title}</p>
      <h1 className="text-3xl font-semibold">
        {price}
        <span className="text-sm font-normal text-gray-500">{`/month`}</span>
      </h1>
      <ul
        className={`list-none text-sm mt-6 space-y-1 ${
          isPro ? "text-white" : "text-gray-500"
        }`}
      >
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                fill={isPro ? "currentColor" : "#6366F1"}
              />
            </svg>
            <p>{feature}</p>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`text-sm w-full py-2 rounded font-medium mt-7 transition-all ${buttonStyle}`}
      >
        Get Started
      </button>
    </div>
  );
};

function F3Plus() {
  return (
    <>
      <div className="my-40  flex flex-wrap items-center justify-center gap-6">
        <PricingCard
          title="Basic"
          price="$29"
          features={[
            "Access to all basic courses",
            "Community support",
            "10 practice projects",
            "Course completion certificate",
            "Basic code review",
          ]}
          buttonStyle="bg-indigo-500 text-white hover:bg-indigo-600"
        />
        <PricingCard
          title="Pro"
          price="$79"
          features={[
            "Access to all Pro courses",
            "Priority community support",
            "30 practice projects",
            "Course completion certificate",
            "Advance code review",
            "1-on-1 mentoring sessions",
            "Job assistance",
          ]}
          isPopular
          isPro
          buttonStyle="bg-white text-indigo-500 hover:bg-gray-200"
        />
        <PricingCard
          title="Enterprise"
          price="$199"
          features={[
            "Access to all courses",
            "Dedicated support",
            "Unlimited projects",
            "Course completion certificate",
            "Premium code review",
            "Weekly 1-on-1 mentoring",
            "Job guarantee",
          ]}
          buttonStyle="bg-indigo-500 text-white hover:bg-indigo-600"
        />
      </div>

      <TestimonialSection />

      <div className="w-full flex flex-col gap-8 justify-center items-center mt-20">
        <div className="text-3xl text-gray-700 font-semibold">
          Why should you subscribe?
        </div>
        <div className="flex flex-row text-3xl text-gray-700 font-semibold items-center justify-center gap-3 mt-10">
          <div className="w-1/4">
            <img
              className=""
              src="https://images.assettype.com/newslaundry/2022-05/37d862f1-d823-4244-8056-b3c9bc84759e/NL_Subscription_1_copy.png?auto=format%2Ccompress&format=webp&w=240&dpr=2.0"
              alt=""
            />
          </div>
          <div className="flex w-3/4 flex-col gap-5">
            <div className="text-xl font-semibold">Pay to keep news free</div>
            <div className="text-sm max-w-xl font-medium">
              Newslaundry makes news a service to the public, not to the
              advertisers. We believe those who make sustainable efforts,
              determine its direction. You decide.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default F3Plus;
