import React, { useState } from "react";
import { assets } from "../assets/assets";

// Hero Component (Redesigned)
const Hero = () => {
  const [jobSearch, setJobSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");

  return (
    <div className="container mx-auto mt-24 mb-16 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden">
        {/* Left side content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Find Your Dream Job
            </h1>
            <p className="text-gray-600 text-lg md:pr-8">
              Over{" "}
              <span className="text-[#f7b346] font-bold">10,000+ jobs</span>{" "}
              waiting for you. Your next career opportunity is just a search
              away.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl shadow-inner">
            <div className="flex items-center bg-white rounded px-3 py-2 mb-3 border border-gray-200">
              <img
                src={assets.search_icon}
                alt="Search"
                className="w-5 h-5 mr-2"
              />
              <input
                type="text"
                value={jobSearch}
                onChange={(e) => setJobSearch(e.target.value)}
                placeholder="Job title, keywords, or company"
                className="flex-1 p-2 outline-none text-gray-700"
              />
            </div>

            <div className="flex items-center bg-white rounded-lg px-3 py-2 mb-4 border border-gray-200">
              <img
                src={assets.location_icon}
                alt="Location"
                className="w-5 h-5 mr-2"
              />
              <input
                type="text"
                value={locationSearch}
                onChange={(e) => setLocationSearch(e.target.value)}
                placeholder="City, state, or remote"
                className="flex-1 p-2 outline-none text-gray-700"
              />
            </div>

            <button className="btn-primary px-6 py-3 w-full rounded-lg hover:bg-blue-50 transition-colors font-medium">
              Find Jobs
            </button>
          </div>
        </div>

        {/* Right side image */}
        <div className="hidden md:block w-1/2 bg-gradient-to-b from-25% from-[#00b9b3] to-20% to-[#00b9b3] relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/50 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="text-white text-center">
                <div className="text-5xl font-bold mb-2">10,000+</div>
                <div className="text-xl">Job Opportunities</div>
                <div className="mt-6 text-sm">
                  Updated daily with the latest openings from top companies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular searches */}
      <div className="mt-6 flex flex-wrap justify-center items-center gap-2 text-sm">
        <span className="text-gray-500">Popular searches:</span>
        {["Remote", "Full-time", "Engineering", "Marketing", "Design"].map(
          (tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full hover:bg-gray-200 cursor-pointer"
            >
              {tag}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default Hero;
