import Typed from "react-typed";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import backer1 from "../assets/backer1.png";
import backer2 from "../assets/backer2.jpg";
import backer3 from "../assets/backer3.jpg";
import backer4 from "../assets/backer4.png";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="text-white">
      <div className="md:text-3xl sm:text-l max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold md:py-6">
          THE FIRST WEARABLE <br /> INTERFACE FOR AI
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold py-3 text-[#3db6d7]">
            Unlock the potential of
          </p>
          <Typed
            className="md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 p-2 text-[#FFF]"
            strings={["AR", "VR", "MR"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button
          href=""
          className="bg-[#3db6d7] w-[20%] hover:shadow-xl shadow-white rounded-md font-medium my-6 mx-auto py-2.5 md:text-xl text-x.5 text-black transition-all duration-300"
        >
          Get Started
        </button>

        <div>
          <p className="md:text-[60%] font-medium md:pl-4 p-2 text-[#FFF]">
            Backed by
          </p>
          <div className="flex justify-center space-x-4">
            <div
              className="rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              style={{ height: "40px", width: "auto" }}
            >
              <img
                src={backer1}
                className="object-cover h-full"
                alt="Image 1"
              />
            </div>
            <div
              className="rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              style={{ height: "40px", width: "auto" }}
            >
              <img
                src={backer2}
                className="object-cover h-full"
                alt="Image 2"
              />
            </div>
            <div
              className="rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              style={{ height: "40px", width: "auto" }}
            >
              <img
                src={backer3}
                className="object-cover h-full"
                alt="Image 3"
              />
            </div>
            <div
              className="rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              style={{ height: "40px", width: "auto" }}
            >
              <img
                src={backer4}
                className="object-cover h-full"
                alt="Image 4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
