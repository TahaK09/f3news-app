import React from "react";

const Contact = () => {
  return (
    <div className="mt-44 flex items-center justify-center mx-auto bg-[#f6f1f1]">
      <div className="flex h-[700px] w-full">
        <div className="w-full hidden md:inline-block">
          <img
            className="h-full"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
            alt="leftSideImage"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <form className="flex flex-col items-center text-sm">
            <p className="text-lg text-blue-600 font-medium pb-2">Contact Us</p>
            <h1 className="text-4xl font-semibold text-slate-700 pb-4">
              Get in touch with us
            </h1>
            <p className="text-sm text-gray-500 text-center pb-10 font-light">
              F3News is an outstanding platform for advertisers aiming to reach
              their target audience, even in the smallest localities. Whether
              you are an advertiser or an ambitious business person seeking a
              high-value customer base, F3News can accelerate your growth
              swiftly.
              <br /> Our unique focus and competitive edge enable advertisers to
              achieve their desired success smoothly. Both new entrants and
              established entrepreneurs looking for significant expansion can
              fulfill their goals with us.
              <br />
              Placing your business message on our site is extremely convenient.
              Contact our team for the appropriate assistance and get your
              advertisement prominently displayed on our website.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
              <div className="w-full">
                <label className="text-black/70" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300 bg-white"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="w-full">
                <label className="text-black/70" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="bg-white h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="mt-6 w-[350px] md:w-[700px]">
              <label className="text-black/70" htmlFor="message">
                Message
              </label>
              <textarea
                className="bg-white w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
                id="message"
                name="message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-5 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
