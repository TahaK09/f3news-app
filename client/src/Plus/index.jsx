import React from "react";
import TestimonialSection from "../components/custom/Testimonials";
import {
  FaLock,
  FaBullhorn,
  FaHandsHelping,
  FaTrophy,
  FaQuestionCircle,
} from "react-icons/fa";

const PricingCard = ({
  title,
  price,
  features,
  isPopular = false,
  isPro = false,
  buttonStyle,
}) => (
  <div
    className={`relative flex-1 max-w-sm rounded-2xl p-8 shadow-lg transform transition-transform duration-300
    ${
      isPro
        ? "bg-blue-600 text-white scale-105"
        : "bg-white text-gray-800 hover:shadow-xl"
    }`}
  >
    {isPopular && (
      <div className="absolute top-0 -mt-4 left-8 bg-yellow-300 text-black text-xs px-3 py-1 rounded-full font-semibold shadow-sm">
        🌟 Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-4xl font-extrabold mb-6">
      {price}
      <span
        className={`text-sm font-medium ${
          isPro ? "text-gray-200" : "text-gray-500"
        }`}
      >
        /month
      </span>
    </p>
    <ul
      className={`space-y-3 mb-6 ${isPro ? "text-gray-200" : "text-gray-700"}`}
    >
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-3">
          <FaLock
            className={`mt-1 ${isPro ? "text-gray-200" : "text-blue-600"}`}
          />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-lg font-semibold ${buttonStyle}`}>
      Get Started
    </button>
  </div>
);

export default function F3Plus() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="mt-[120px] bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-5xl font-extrabold mb-4">
            Unlock Premium News with F3 Plus
          </h1>
          <p className="text-lg mb-8">
            Independent journalism, deeper coverage, exclusive features—all
            ad-free and powered by you.
          </p>
          <a
            href="#pricing"
            className="px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow hover:bg-yellow-500 transition"
          >
            Choose Your Plan
          </a>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center mb-12 px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600">
            From solo learners to enterprises, we have a plan tailored to your
            needs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          <PricingCard
            title="Basic"
            price="$29"
            features={[
              "Access to all articles",
              "Community forums",
              "10 saved stories",
              "Monthly newsletter",
              "Standard support",
            ]}
            buttonStyle="bg-blue-600 text-white hover:bg-blue-700"
          />
          <PricingCard
            title="Pro"
            price="$79"
            isPro
            isPopular
            features={[
              "Everything in Basic",
              "Ad-free experience",
              "Unlimited saved stories",
              "Access to archives",
              "Priority support",
              "Monthly expert webinars",
            ]}
            buttonStyle="bg-white text-blue-600 hover:bg-gray-100"
          />
          <PricingCard
            title="Enterprise"
            price="$199"
            features={[
              "Everything in Pro",
              "Dedicated account manager",
              "Team seats",
              "Custom content feeds",
              "Analytics dashboard",
              "Quarterly strategy calls",
            ]}
            buttonStyle="bg-blue-600 text-white hover:bg-blue-700"
          />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Why Subscribe */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Subscribe to F3 Plus?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex gap-4">
                <FaBullhorn className="text-blue-400 text-4xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Independent Journalism
                  </h3>
                  <p className="text-gray-600">
                    We’re funded by readers—not advertisers. That means truly
                    unbiased reporting focused on impact.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <FaHandsHelping className="text-blue-400 text-4xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Community Engagement
                  </h3>
                  <p className="text-gray-600">
                    Join forums, comment on stories, and access live Q&A
                    sessions with journalists and experts.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <FaTrophy className="text-blue-400 text-4xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Deeper Coverage
                  </h3>
                  <p className="text-gray-600">
                    Ad-free archives, expert deep-dives, investigative pieces,
                    and data-driven insights—just for subscribers.
                  </p>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="https://images.assettype.com/newslaundry/2022-05/37d862f1-d823-4244-8056-b3c9bc84759e/NL_Subscription_1_copy.png"
                alt="Why Subscribe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          {[
            {
              q: "Can I change plans later?",
              a: "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
            },
            {
              q: "Do you offer refunds?",
              a: "We offer a prorated refund if cancelled within the first 7 days of a new billing cycle.",
            },
            {
              q: "Is there a team discount?",
              a: "Yes, our Enterprise plan includes team seats and discounts—contact us for a customized quote.",
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="flex gap-4 mb-6">
              <FaQuestionCircle className="text-blue-400 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">{q}</h4>
                <p className="text-gray-600">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-400 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to go ad-free?</h2>
        <p className="mb-6">
          Join thousands of readers supporting independent journalism.
        </p>
        <a
          href="#pricing"
          className="px-6 py-4 bg-yellow-400 text-blue-800 font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition"
        >
          Choose a Plan
        </a>
      </section>
    </div>
  );
}
