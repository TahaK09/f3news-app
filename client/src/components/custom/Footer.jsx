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
    <footer className="bg-[#1c1c1d] text-white">
      <div className="border-t border-gray-300 px-6 md:px-12 lg:px-24 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-white pb-10">
          {/* Logo & Address */}
          <div className="flex flex-col sm:flex-row gap-5">
            <img
              className="w-20 md:w-24 h-20 md:h-24 rounded-full"
              src={Logo}
              alt="F3News Logo"
            />
            <div>
              <h2 className="text-xl font-semibold">F3News</h2>
              <p className="text-base font-light">FAST | FACTS | FEARLESS</p>
              <p className="mt-4 text-sm max-w-[350px] leading-relaxed">
                Address: F3 News, Tattoo, Office No 1, 1st Floor, 545, Kalbadevi
                Street, opp. Metro Cinema, Near Mao Restaurant, Mumbai,
                Maharashtra, 400002
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full md:w-[50%]">
            {linkSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-base mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-1 text-sm">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.link}
                        className="hover:underline hover:text-gray-300 transition-colors duration-200"
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

        {/* Copyright */}
        <p className="pt-6 text-center text-xs md:text-sm text-white/80">
          © {new Date().getFullYear()} F3News. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
