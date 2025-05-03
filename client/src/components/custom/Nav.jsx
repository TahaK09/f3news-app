import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { User, Search, MapPin, CalendarDays } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowPromo(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = [
    { name: "Home", link: "/" },
    { name: "India", link: "/india" },
    { name: "Mumbai", link: "/mumbai" },
    { name: "Politics", link: "/politics" },
    { name: "Opinion", link: "/opinion" },
    { name: "World", link: "/world" },
    { name: "Business", link: "/business" },
    { name: "Entertainment", link: "/entertainment" },
    { name: "Sports", link: "/sports" },
    { name: "F3+", link: "/f3-plus" },
  ];

  const date = new Date();
  const formatDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Promotion Tag - Only visible at top */}
      {showPromo && (
        <div className="w-full py-2.5 font-medium text-sm text-white flex flex-row justify-between px-40 bg-gray-800 fixed top-0 left-0 z-40">
          <div className="flex flex-row gap-5">
            <div className="gap-1.5 flex flex-row font-light text-[12px] items-center justify-center">
              FAST | FACTS | FEARLESS
            </div>
            <div className="gap-1.5 flex flex-row font-light text-[12px] items-center justify-center">
              <MapPin className="w-4 h-4" />
              Mumbai, Maharastra, India
            </div>
            <div className="gap-1.5 flex flex-row font-light text-[12px] items-center justify-center">
              <CalendarDays className="w-4 h-4" />
              {formatDate}
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav
        className={`z-50 fixed ${
          showPromo ? "top-[42px]" : "top-0"
        } left-0 right-0 flex items-center justify-between px-6 md:px-16 lg:px-22 xl:px-32 py-4 border-b border-gray-300 bg-white transition-all`}
      >
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img className="h-12" src={Logo} alt="dummyLogoColored" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-3">
          {navLink.map((item, index) => (
            <div key={index} className="inline">
              <NavLink to={item.link}>{item.name}</NavLink>
              {index < navLink.length - 1 && (
                <span className="text-[#202020] mx-2">|</span>
              )}
            </div>
          ))}
        </div>
        <div className="hidden sm:flex flex-row gap-2">
          <button className="flex flex-row items-center justify-center gap-1 cursor-pointer p-2 rounded-full hover:bg-primary-dull transition text-[#ffffff] text-sm font-light bg-[#7e7e7e]">
            <Search className="w-4 h-4" />
          </button>
          <button className="flex rounded flex-row items-center justify-center gap-1 cursor-pointer px-4 py-1 hover:bg-primary-dull transition text-[#ffffff] text-sm font-light bg-[#436ce9]">
            <User className="w-4 h-4" /> Sign In
          </button>
        </div>
        {/* Mobile Icons */}
        <div className="flex items-center gap-6 sm:hidden ">
          <div className="relative cursor-pointer">
            <svg
              width="18"
              height="18"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                stroke="#615fff"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <button className="absolute -top-2 -right-3 text-xs text-[#3a3a3a] bg-primary w-[18px] h-[18px] rounded-full"></button>
          </div>
          <button onClick={() => setOpen(!open)} aria-label="Menu">
            <svg
              width="21"
              height="15"
              viewBox="0 0 21 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="21" height="1.5" rx=".75" fill="#426287" />
              <rect
                x="8"
                y="6"
                width="13"
                height="1.5"
                rx=".75"
                fill="#426287"
              />
              <rect
                x="6"
                y="13"
                width="15"
                height="1.5"
                rx=".75"
                fill="#426287"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white text-[#202020] shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/" onClick={() => setOpen(false)}>
            More Products
          </NavLink>
          <NavLink to="/" onClick={() => setOpen(false)}>
            My Orders
          </NavLink>
          <NavLink to="/" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
          <button className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-indigo-600 transition text-white rounded-full text-sm">
            Login
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
