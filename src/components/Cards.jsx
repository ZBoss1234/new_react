import { LuBrainCircuit } from "react-icons/lu";
import { LuCpu } from "react-icons/lu";
import { LuLayers } from "react-icons/lu";
import { LuSquareEqual } from "react-icons/lu";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up" className="w-full py-[-10rem] px-4 bg-[003000]">
      <h2
        data-aos="flip-up"
        className="md:text-3xl text-2xl font-bold text-center py-10 text-white mt-[2rem]"
      >
        Enabling Mainstream Augmented Reality
      </h2>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-10">
        <div className="bg-white w-full shadow-xl shadow-[#3db6d7] flex-col p-4 my- rounded-lg hover:scale-105 duration-300">
          <LuCpu size={60} className="w-20 mx-auto bg-white" />
          <h2 className="text-lg font-bold text-center py-8">
            High-Entropy Sensing
          </h2>
        </div>
        <div className="bg-white w-full shadow-xl shadow-[#3db6d7] flex-col p-4 my- rounded-lg hover:scale-105 duration-300">
          <LuBrainCircuit size={60} className="w-20 mx-auto bg-white" />
          <h2 className="text-lg font-bold text-center py-8">
            Embedded Machine Learning
          </h2>
        </div>
        <div className="bg-white w-full shadow-xl shadow-[#3db6d7] flex-col p-4 my- rounded-lg hover:scale-105 duration-300">
          <LuLayers size={60} className="w-20 mx-auto bg-white" />
          <h2 className="text-lg font-bold text-center py-8">
            Proprietary Emulation OS
          </h2>
        </div>
        <div className="bg-white w-full shadow-xl shadow-[#3db6d7] flex-col p-4 my- rounded-lg hover:scale-105 duration-300">
          <LuSquareEqual size={60} className="w-20 mx-auto bg-white" />
          <h2 className="text-lg font-bold text-center py-8">
            Cross-Platform Integration
          </h2>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center"
        data-aos="fade-up"
      >
        <h2
          data-aos="flip-up"
          className="md:text-3xl text-2xl font-bold py-10 text-white mt-[6rem]"
        >
          Watch Demo
        </h2>
        <div className="rounded-lg overflow-hidden video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/e8F5cxVMcwM"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            className=""
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Cards;
