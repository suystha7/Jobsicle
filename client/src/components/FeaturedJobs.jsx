import { Briefcase, ChevronDown, Clock, MapPin } from "lucide-react";
import React from "react";

const FeaturedJobs = () => {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp",
      logo: "../assets/accenture_logo.png",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      posted: "2 days ago",
      featured: true,
    },
    {
      title: "Product Marketing Manager",
      company: "GrowthInc",
      logo: "/api/placeholder/64/64",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $120k",
      posted: "1 week ago",
      featured: true,
    },
    {
      title: "UX/UI Designer",
      company: "DesignStudio",
      logo: "/api/placeholder/64/64",
      location: "New York, NY",
      type: "Contract",
      salary: "$80k - $110k",
      posted: "3 days ago",
      featured: false,
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Featured Jobs
            </h2>
            <p className="text-gray-600">
              Handpicked opportunities to apply for right now
            </p>
          </div>
          <button className="hidden md:flex items-center text-[#f7b346] font-medium">
            View all jobs <ChevronDown className="ml-1" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-12 h-12 rounded"
                  />
                  {job.featured && (
                    <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-4">{job.company}</p>

                <div className="flex flex-wrap gap-y-2">
                  <div className="flex items-center text-gray-500 text-sm mr-4">
                    <MapPin size={14} className="mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mr-4">
                    <Briefcase size={14} className="mr-1" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={14} className="mr-1" />
                    {job.posted}
                  </div>
                </div>
              </div>

              <div className="flex border-t border-gray-100">
                <div className="w-1/2 py-3 px-6 text-sm font-medium text-gray-600">
                  {job.salary}
                </div>
                <button className="w-1/2 bg-gray-50 py-3 px-6 text-sm font-medium text-[#f7b346] hover:bg-blue-50 transition-colors text-center">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:hidden">
          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
            View All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
