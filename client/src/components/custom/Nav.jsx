import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/f3news-logo-new.png";
import { User, Search, MapPin, CalendarDays } from "lucide-react";
import { useAppContext } from "../../Context/AppContext";

function Navbar() {
  const { showPromo } = useAppContext();
  const [open, setOpen] = useState(false);

  //SVG Icons
  const facebook_icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
      width="20px"
      height="20px"
      viewBox="0 0 32 32"
    >
      <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" />
    </svg>
  );

  const youtube_icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="20px"
      height="20px"
      viewBox="0 -3 20 20"
      version="1.1"
    >
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-300.000000, -7442.000000)"
          fill="#ffffff"
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
              id="youtube-[#168]"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );

  const instagram_icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18px"
      height="18px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
        fill="#ffffff"
      />
      <path
        d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
        fill="#ffffff"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
        fill="#ffffff"
      />
    </svg>
  );

  const threads_icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18px"
      height="18px"
      aria-label="Threads"
      viewBox="0 0 192 192"
      fill="#ffffff"
    >
      <path
        class="x19hqcy"
        d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
      />
    </svg>
  );

  const x_icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Layer_1"
      width="17px"
      height="17px"
      viewBox="0 0 24 24"
      fill="#ffffff"
      xml:space="preserve"
    >
      <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
    </svg>
  );

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
        <div className="w-full min-h-20 py-2.5 font-medium text-sm text-white flex flex-row justify-between px-40 bg-gray-800 fixed top-0 left-0 z-40">
          <div className="flex flex-row gap-5">
            <div className="gap-1.5 flex flex-row font-light text-md items-center justify-center">
              <MapPin className="w-4 h-4" />
              Mumbai, Maharastra, India
            </div>
            <div className="gap-1.5 flex flex-row font-light text-md items-center justify-center">
              <CalendarDays className="w-4 h-4" />
              {formatDate}
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <a
              href="https://www.facebook.com/f3news"
              className="gap-1.5 flex flex-row font-light text-md items-center justify-center"
            >
              {facebook_icon}
            </a>
            <a
              href="https://www.youtube.com/@f3news"
              className="gap-1.5 flex flex-row font-light text-md items-center justify-center"
            >
              {youtube_icon}
            </a>
            <a
              href="https://www.instagram.com/f3news"
              className="gap-1.5 flex flex-row font-light text-md items-center justify-center"
            >
              {instagram_icon}
            </a>
            <a
              href="https://www.threads.com/@f3news"
              className="gap-1.5 flex flex-row font-light text-md items-center justify-center"
            >
              {threads_icon}
            </a>
            <a
              href="https://x.com/F3NewsOfficial"
              className="gap-1.5 flex flex-row font-light text-md items-center justify-center"
            >
              {x_icon}
            </a>
          </div>{" "}
        </div>
      )}

      {/* Navbar */}
      <nav
        className={`z-50 fixed ${
          showPromo ? "top-[80px]" : "top-0"
        } left-0 right-0 flex items-center justify-between px-6 md:px-16 lg:px-22 xl:px-32 py-4 border-b border-gray-300 bg-white transition-all`}
      >
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img
            className="h-12 rounded-full"
            src={Logo}
            alt="dummyLogoColored"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center">
          {navLink.map((item, index) => (
            <div key={index} className="inline font-semibold">
              <NavLink to={item.link}>{item.name}</NavLink>
              {index < navLink.length - 1 && (
                <span className="text-[#c7c7c7] font-base font-light mx-3">
                  |
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="hidden sm:flex flex-row gap-2">
          <button className="flex flex-row items-center justify-center gap-1 cursor-pointer p-2 rounded-full hover:bg-primary-dull transition text-[#ffffff] text-sm font-light bg-[#e2e2e2]">
            <Search className="w-4 h-4 text-black" />
          </button>
          <button className="flex flex-row items-center justify-center gap-1 cursor-pointer px-4 py-1 hover:bg-primary-dull transition text-[#ffffff] text-sm font-light bg-[#000000] rounded-lg">
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
          } absolute top-[60px] left-0 w-full bg-white font-bold text-[#202020] shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
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
