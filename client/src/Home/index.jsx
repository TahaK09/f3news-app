import React from "react";
import image from "../assets/News-1.webp";
import SocialWidget from "../components/custom/SocialWidget.jsx";
import Newsletter from "../components/custom/Newsletter.jsx";
import CallToAction from "../components/custom/CallToAction.jsx";
import RecentSocialPosts from "../components/custom/RecentSocialPosts.jsx";
import { Clock } from "lucide-react";

function Home() {
  const contents = [
    {
      tag: "Sports",
      image:
        "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400",
      title:
        "Tren de Aragua’s explosion in US ‘likely’ facilitated by Venezuelan officials, FBI says",
      href: "https://localhost:3000/international/this-is-sample-link",
      readTime: "25 mins",
    },
    {
      tag: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400",
      title:
        "Tren de Aragua’s explosion in US ‘likely’ facilitated by Venezuelan officials, FBI says",
      href: "https://localhost:3000/international/this-is-sample-link",
      readTime: "25 mins",
    },
    {
      tag: "India",
      image:
        "https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400",
      title:
        "Tren de Aragua’s explosion in US ‘likely’ facilitated by Venezuelan officials, FBI says",
      href: "https://localhost:3000/international/this-is-sample-link",
      readTime: "25 mins",
    },
  ];

  const cards = [
    {
      image:
        "https://a57.foxnews.com/prod-hp.foxnews.com/images/2025/04/458/258/b3b0618d3541a10eb10e7803c7c34dec.png?tl=1&ve=1",
      tag: "Fox News Podcasts",
      title:
        "LISTEN: Stories of killers, murder and survival on FOX True Crime Podcast",
      cta: "Listen Now →",
    },
    {
      image:
        "https://a57.foxnews.com/prod-hp.foxnews.com/images/2025/04/458/258/a300110434f7df14a1c61e69f67aa08e.jpg?tl=1&ve=1",
      tag: "Outkick",
      title:
        "Universal Orlando’s brand-new Epic Universe reviewed by annual pass holder",
    },
    {
      image:
        "https://a57.foxnews.com/prod-hp.foxnews.com/images/2025/04/458/258/d59da7541191868c210745a72805ae51.jpg?tl=1&ve=1",
      tag: "Fox Nation",
      title:
        "WATCH NOW: 'Blood on the Bridge: The Battle of Lexington and Concord'",
      cta: "Watch Now →",
    },
    {
      image:
        "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2025/04/458/258/istock-2184901070.jpg?tl=1&ve=1",
      tag: "Deals",
      title:
        "Amazon Haul weekly deals: Save on gardening accessories, travel gear and more",
    },
  ];

  const newsItems = [
    {
      title:
        "Jammu & Kashmir SIA arrests key accused in drug syndicate from Punjab",
      time: "2 hours ago",
      image:
        "https://a57.foxnews.com/prod-hp.foxnews.com/images/2025/04/458/258/b3b0618d3541a10eb10e7803c7c34dec.png?tl=1&ve=1",
    },
    {
      title:
        "Major fire breaks out in central Kolkata hotel, two persons injured",
      time: "2 hours ago",
      image:
        "https://a57.foxnews.com/prod-hp.foxnews.com/images/2025/04/458/258/b3b0618d3541a10eb10e7803c7c34dec.png?tl=1&ve=1",
    },
    {
      title:
        "Boy injured in 'Pushpa 2' screening stampede shifted to neurorehab centre",
      time: "2 hours ago",
      image:
        "https://a57.foxnews.com/prod-hp.foxnews.com/images/2025/04/458/258/b3b0618d3541a10eb10e7803c7c34dec.png?tl=1&ve=1",
    },
    {
      title:
        "Pahalgam terror attack: PM Modi meets RSS chief Bhagwat at the former's...",
      time: "2 hours ago",
      image:
        "https://a57.foxnews.com/prod-hp.foxnews.com/images/2025/04/458/258/b3b0618d3541a10eb10e7803c7c34dec.png?tl=1&ve=1",
    },
    {
      title:
        "IATA flags concerns over Mumbai airport's plan to stop cargo flights, withdraw...",
      time: "3 hours ago",
      image:
        "https://a57.foxnews.com/prod-hp.foxnews.com/images/2025/04/458/258/b3b0618d3541a10eb10e7803c7c34dec.png?tl=1&ve=1",
    },
    {
      title:
        "Muslims utter 'Allahu Akbar' in most situations: Father of Pahalgam zip line worker",
      time: "3 hours ago",
      image:
        "https://a57.foxnews.com/prod-hp.foxnews.com/images/2025/04/458/258/b3b0618d3541a10eb10e7803c7c34dec.png?tl=1&ve=1",
    },
  ];

  const newsData = [
    {
      title: "Bengaluru: Breach exposes 2.9 lakh BWSSB customers' data",
      description:
        "The access to these records, including PAN, Aadhaar numbers...",
      time: "18 hours ago",
      image:
        "https://images.deccanherald.com/deccanherald%2F2025-04-29%2Fegap9hnk%2Fdeccanherald2025-03-149prhvs08deccanherald2025-01-227mbe1nofdeccanherald2024-076b5c6e03-217d-4f72-963b-433131eb9970file7un4chx800o170n3g8x9.avif?rect=0%2C0%2C599%2C337&auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=376&dpr=1", // Replace with actual image
    },
    {
      title:
        "Bengaluru: Bike taxi drivers meet transport minister, urge him to...",
      description:
        "In a petition addressed to the minister on behalf of one lakh...",
      time: "19 hours ago",
      image:
        "https://images.deccanherald.com/deccanherald%2F2025-04-29%2Fah4ptlou%2Ffile80epitcxeid1h7g0e474.jpeg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=376&dpr=1",
    },
    {
      title: "White-topping works: Contractors penalised by BBMP",
      description: "While one company failed to begin work on the stretch...",
      time: "19 hours ago",
      image:
        "https://images.deccanherald.com/deccanherald%2F2025-04-28%2Fbu7ihm03%2Fdeccanherald2025-03-28churmmv4BBMPDH1550863802.avif?rect=0%2C1%2C1000%2C563&auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=376&dpr=1",
    },
    {
      title:
        "Bengaluru: Bike taxi drivers meet transport minister, urge him to...",
      description:
        "In a petition addressed to the minister on behalf of one lakh...",
      time: "19 hours ago",
      image:
        "https://images.deccanherald.com/deccanherald%2F2025-04-29%2Fah4ptlou%2Ffile80epitcxeid1h7g0e474.jpeg?rect=0%2C0%2C1280%2C720&auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=376&dpr=1",
    },
  ];

  const explainers = [
    {
      title: "Explained | Canada votes: What’s at stake?",
      excerpt:
        "One of the world’s most prosperous nations and America’s closest ally and trading partner...",
      date: "28 April 2025, 15:29 IST",
    },
    {
      title: "Explained | Will Pope Francis be made a saint?",
      excerpt:
        "To date, 80 of the 266 popes to serve over nearly 2,000 years have been canonized...",
      date: "27 April 2025, 00:21 IST",
    },
    {
      title: "Explained | What’s at stake in the Iran-US nuclear talks",
      excerpt:
        "The talks have the potential to reshape regional and global security...",
      date: "26 April 2025, 16:03 IST",
    },
    {
      title:
        "Explained | How Pakistan’s decision to close airspace for India affects airlines and fliers",
      excerpt:
        "Earlier also, Pakistan had barred Indian airlines from using its airspace...",
      date: "25 April 2025, 12:38 IST",
    },
  ];

  return (
    <>
      <div className="my-5 mt-44 gap-5 w-[60vw] flex flex-col justify-center items-center mx-auto">
        {/* Trnding/Featured Section */}
        <div className="h-96 flex flex-row relative bg-gray-100 rounded-lg">
          {/* Image section with badge overlay */}
          <div className="w-[50%] h-full relative">
            {/* Trending badge */}
            <div className="flex justify-center items-center absolute bottom-4 left-4 bg-[#3270d4bd] py-4 px-10 font-medium rounded-sm h-9 text-amber-50 max-w-52 z-20">
              TRENDING
            </div>
            <img
              className="w-full h-full rounded-l-lg object-cover"
              src={image}
              alt="News"
            />
          </div>

          {/* Text section */}
          <div className="w-[50%] px-10 py-2 flex flex-col gap-1">
            {/* BreadCrums */}
            <div className="text-base text-blue-700 font-normal">
              US Politics
            </div>
            <div className="text-3xl font-semibold text-gray-900">
              Trump admin files charges after FOX News exposes state's plan for
              illegal who killed American teens
            </div>
            <div className="font-normal text-gray-600 mt-5 flex flex-col gap-2">
              <div className="text-lg/5">
                Kerr County officials took 90 minutes to send emergency alert:
                Dispatch audio
              </div>
              <div className="text-lg/5">
                'I think this is it': Dad leaves harrowing voicemails before
                dying in Texas flood
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-0.5 bg-[#d2d2d2]"></div>

        <div className="border-b-3 border-[#c1c1c1]"></div>
        <div className="flex border-b border-gray-300 pb-6">
          {contents.map((item, index) => (
            <div key={index} className="flex items-stretch">
              {/* Card */}
              <a href={item.href} className="w-80 space-y-2">
                <div className="relative">
                  <img
                    src={item.image}
                    alt="News"
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <span className="absolute bottom-2 left-2 bg-blue-900 text-white text-xs font-bold px-4 py-1.5 rounded-sm">
                    {item.tag}
                  </span>
                </div>
                <h2 className="text-md font-bold text-[#003366] leading-snug">
                  {item.title}
                </h2>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={16} className="mr-1" />
                  {item.readTime}
                </div>
              </a>

              {/* Vertical Divider */}
              {index !== contents.length - 1 && (
                <div className="border-r mx-4 border-gray-300 h-auto" />
              )}
            </div>
          ))}
        </div>
        <div className="flex border-b border-gray-300 pb-6">
          {contents.map((item, index) => (
            <div key={index} className="flex items-stretch">
              {/* Card */}
              <a href={item.href} className="w-80 space-y-2">
                <div className="relative">
                  <img
                    src={item.image}
                    alt="News"
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <span className="absolute bottom-2 left-2 bg-blue-900 text-white text-xs font-bold px-2 py-1 rounded-sm">
                    {item.tag}
                  </span>
                </div>
                <h2 className="text-md font-bold text-[#003366] leading-snug">
                  {item.title}
                </h2>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={16} className="mr-1" />
                  {item.readTime}
                </div>
              </a>

              {/* Vertical Divider */}
              {index !== contents.length - 1 && (
                <div className="border-r mx-4 border-gray-300 h-auto" />
              )}
            </div>
          ))}
        </div>

        <CallToAction />
        <RecentSocialPosts />

        <div className="w-full h-0.25 bg-[#d2d2d2]"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white"
            >
              <img
                src={item.image}
                alt="Card"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-2">
                <p className="text-xs font-bold uppercase text-red-600">
                  {item.tag}
                </p>
                <h2 className="text-sm font-semibold text-[#003366] leading-snug">
                  {item.title}
                </h2>
                {item.cta && (
                  <button className="mt-2 text-xs font-bold text-red-600 hover:underline">
                    {item.cta}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-0.25 bg-[#d2d2d2]"></div>

        <div className="w-full mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-gray-700 font-semibold">INDIA</h2>
            <a
              href="#"
              className="text-sm text-gray-600 hover:underline flex items-center"
            >
              See More
              <span className="ml-1">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Left: Featured news */}
            <div className="md:col-span-1">
              <img
                src="https://a57.foxnews.com/prod-hp.foxnews.com/images/2025/04/458/258/b3b0618d3541a10eb10e7803c7c34dec.png?tl=1&ve=1"
                alt="Main"
                className="w-full rounded"
              />
              <h3 className="font-bold text-2xl mt-3">
                Congress deletes post against Modi on Pahalgam; asks leaders ...
              </h3>
              <p className="text-sm/5 text-gray-600 mt-3">
                Already under fire from the BJP over the remarks by some leaders
                like Siddaramaiah...
              </p>
              <p className="text-xs text-gray-400 mt-2">42 minutes ago</p>
            </div>

            {/* Right: Smaller news items */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {newsItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 border-b border-gray-300 pb-3"
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{item.title}</h4>
                    <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                  </div>
                  <img
                    src={item.image}
                    alt="News thumbnail"
                    className="w-[80px] h-[60px] object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-0.25 bg-[#d2d2d2]"></div>

        <div className="w-full mx-auto px-4 py-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-gray-700 font-semibold">Mumbai</h2>

            <a
              href="#"
              className="text-sm text-gray-600 hover:underline flex items-center"
            >
              See More <span className="ml-1">→</span>
            </a>
          </div>

          {/* Horizontal Scroll */}
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide snap-x snap-mandatory items-stretch pb-4">
            {newsData.map((item, index) => (
              <div key={index} className="flex gap-4">
                <a href="#" className="snap-start flex-shrink-0 w-72 bg-white">
                  <div>
                    <img
                      src={item.image}
                      alt="news"
                      className="w-full h-40 object-cover rounded-t-md"
                    />
                    <div className="p-3">
                      <h3 className="font-semibold text-md mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                      <p className="text-xs text-gray-400 mt-2">{item.time}</p>
                    </div>
                  </div>
                </a>

                {/* Vertical Divider */}
                {index !== newsData.length - 1 && (
                  <div className="w-0.25 h-full bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-0.25 bg-[#d2d2d2]"></div>

        <div className="w-full mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left side */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold">OPINION</h2>
              <a href="#" className="text-sm font-medium text-blue-600">
                See More →
              </a>
            </div>
            <img
              src="https://example.com/arab-india.jpg"
              alt="Main news"
              className="w-full h-64 object-cover rounded-md"
            />
            <h3 className="mt-4 text-xl font-bold leading-snug">
              Pahalgam Terror Attack | What does shift in support from Arab
              nations mean for India, Pakistan
            </h3>
            <p className="text-gray-700 mt-2">
              The firm criticism of the attack and the willingness of the Gulf
              Cooperation Council countries to publicly stand by India is a
              triumph of New Delhi’s diplomacy...
            </p>
            <p className="text-sm text-gray-400 mt-2">9 hours ago</p>

            <div className="mt-4 flex gap-4">
              <div className="flex-1 border-r pr-4">
                <p className="font-semibold text-sm">Kerala’s Drug Crisis</p>
                <p className="text-xs text-gray-500">
                  A war on users, a win for cartels
                </p>
              </div>
              <div className="flex-1 border-r pr-4">
                <p className="font-semibold text-sm">
                  Stop scaring future world leaders
                </p>
                <p className="text-xs text-gray-500">Out of US campuses</p>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">Trump returns</p>
                <p className="text-xs text-gray-500">to campaign spotlight</p>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold">EXPLAINERS</h2>
              <a href="#" className="text-sm font-medium text-blue-600">
                See More →
              </a>
            </div>

            {explainers.map((item, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-bold text-md">
                  {index + 1}. {item.title}
                </h4>
                <p className="text-sm text-gray-700">{item.excerpt}</p>
                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
}

export default Home;
