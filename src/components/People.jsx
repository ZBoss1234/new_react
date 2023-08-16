import React from "react";

import investor1 from "../assets/investor1.jpg";
import investor2 from "../assets/investor2.jpg";
import investor3 from "../assets/investor3.jpeg";
import investor4 from "../assets/investor4.jpg";

const People = () => {
  return (
    <div
      data-aos="fade-up"
      className="w-full py-[-20rem] px-4 my-[6rem] bg-[003000]"
    >
      <h2
        data-aos="flip-up"
        className="md:text-3xl text-2xl font-bold text-center py-10 text-white mt-[2rem]"
      >
        Skywalk Advisors
      </h2>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-10">
        <div className="bg-white w-full shadow-xl shadow-[#3db6d7] flex-col p-4 my- rounded-lg hover:scale-105 duration-300">
          <img src={investor1} className="w-40 mx-auto bg-white rounded-xl" />
          <h2 className="text-lg font-bold text-center py-4">Steve Blank</h2>
          <p className="text-center">Adjunct Professor @ Stanford University</p>
        </div>
        <div className="bg-white w-full shadow-xl shadow-[#3db6d7] flex-col p-4 my- rounded-lg hover:scale-105 duration-300">
          <img src={investor2} className="w-40 mx-auto bg-white rounded-xl" />
          <h2 className="text-lg font-bold text-center py-4">David Eagleman</h2>
          <p className="text-center">
            CEO Neosensory, Adjunct Professor @ Stanford University
          </p>
        </div>
        <div className="bg-white w-full shadow-xl shadow-[#3db6d7] flex-col p-4 my- rounded-lg hover:scale-105 duration-300">
          <img src={investor3} className="w-40 mx-auto bg-white rounded-xl" />
          <h2 className="text-lg font-bold text-center py-4">
            Steve Weinstein
          </h2>
          <p className="text-center">
            GP at America's Frontier Fund & Director H4XLabs
          </p>
        </div>
        <div className="bg-white w-full shadow-xl shadow-[#3db6d7] flex-col p-4 my- rounded-lg hover:scale-105 duration-300">
          <img src={investor4} className="w-40 mx-auto bg-white rounded-xl" />
          <h2 className="text-lg font-bold text-center py-4">Rafi Holtzman</h2>
          <p className="text-center">
            Original3 CEO, former Luidia Inc. President
          </p>
        </div>
      </div>
    </div>
  );
};

export default People;
