import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="max-w-[1240px] mx-auto py-16 px-4 flex flex-col lg:flex-row lg:justify-between gap-8 text-gray-300"
    >
      <div>
        <h1 className="text-3xl font-bold text-[#3db6d7]">SKYWALK</h1>
        <p className="py-4">
          Skywalk is an early-stage deep tech startup founded by a team of
          Stanford PhDs and MBAs. We are building the next generation of human
          computer interaction - a wearable smartband that turns your hand into
          a powerful Augmented Reality (AR) controller. With custom hardware and
          cutting-edge machine learning algorithms, our smartband allows users
          to become AR native in minutes. Recent winners of the Tufts 100K New
          Ventures Competition, StartX SIR, and VentureWell E-Team, we are
          growing rapidly as we bring our first product to market.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a
            href="https://www.linkedin.com/company/skywalk-inc/"
            target="_blank" // Open the link in a new tab
            rel="noopener noreferrer" // Recommended for security
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
      <div className="lg:w-2/3">
        <h6 className="font-medium text-gray-400">Company</h6>
        <ul>
          <li className="py-2 text-sm">About</li>
          <li className="py-2 text-sm">Blog</li>
          <li className="py-2 text-sm">Press</li>
          <li className="py-2 text-sm">Careers</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
