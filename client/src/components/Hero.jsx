import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl">
        <h1>Over 10,000+ jobs to apply</h1>
        <p>
          Your Next Big Career Move starts Right here - Explore the Best Job
          here in Job portal
        </p>
        <div>
          <div>
            <img src={assets.search_icon} alt="" />
            <input
              type="text"
              placeholder="search for jobs"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
            />
          </div>
          <div>
            <img src={assets.location_icon} alt="" />
            <input
              type="text"
              placeholder="search for location"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
            />
          </div>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
