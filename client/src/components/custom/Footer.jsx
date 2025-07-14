import React from "react";
import Logo from "../../assets/f3news-logo-new.png";

function Footer() {
  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", link: "/" },
        { name: "Mumbai", link: "/mumbai" },
        { name: "World", link: "/world" },
        { name: "Politics", link: "/politics" },
        { name: "Sports", link: "/sports" },
        { name: "Contact Us", link: "/contact" },
        { name: "F3 Plus", link: "/" },
      ],
    },
    {
      title: "Careers",
      links: [
        { name: "Apply for Journalist", link: "/apply-for-journalist" },
        { name: "Apply for Copywriter", link: "/apply-for-copywriting" },
        { name: "Video Editors", link: "/video-editors" },
        { name: "Internships", link: "/apply-for-internships" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { name: "Instagram", link: "https://instagram.com/f3news" },
        { name: "Facebook", link: "https://facebook.com/f3news.in" },
        { name: "Youtube", link: "https://youtube.com/@f3news" },
        { name: "X", link: "https://x.com/F3NewsOfficial" },
        { name: "LinkedIn", link: "https://linkedin.com/company/f3news" },
      ],
    },
  ];

  return (
    <>
      <div className="border-t py-20 bg-[#1c1c1d] border-gray-300 px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-white text-white">
          <div>
            <div className="min-w-3xl flex flex-row gap-5">
              <img
                className="w-24 md:w-24 rounded-full"
                src={Logo}
                alt="dummyLogoColored"
              />
              <div className="flex flex-col gap-4">
                <div className="text-xl font-medium">F3News</div>
                <div className="text-base font-light">
                  FAST | FACTS | FEARLESS
                </div>
              </div>
            </div>

            <p className="max-w-[410px] mt-6">
              Address: F3 News, Tattoo, Office No 1, 1st Floor, 545, Kalbadevi
              Street, opp. Metro Cinema, near Mao Resturant, Mumbai, Maharashtra
              400002
            </p>
          </div>
          <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
            {linkSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-base text-white md:mb-5 mb-2">
                  {section.title}
                </h3>
                <ul className="text-sm space-y-1">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.link}
                        className="hover:underline transition"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="py-4 text-center text-sm md:text-base text-white/80">
          Copyright 2025 © F3News Right Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
