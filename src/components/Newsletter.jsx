import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Newsletter = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up" className="w=full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Elevate Your Horizons with Skywalk Newsletter
          </h1>
          <p>
            Stay updated with the latest innovations and insights from Skywalk.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button
              href=""
              className="bg-[#3db6d7] w-[200px] text-black rounded-md font-medium ml-4 my-6 px-6 py-3"
            >
              Notify Me
            </button>
          </div>
          <p>Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
