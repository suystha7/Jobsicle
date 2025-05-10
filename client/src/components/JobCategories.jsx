import React from "react";
import { Briefcase, Star, Users, TrendingUp } from "lucide-react";

const JobCategories = () => {
  const categories = [
    {
      title: "Technology",
      icon: <TrendingUp size={24} />,
      count: 1420,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Marketing",
      icon: <Star size={24} />,
      count: 870,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Finance",
      icon: <Briefcase size={24} />,
      count: 1120,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Healthcare",
      icon: <Users size={24} />,
      count: 940,
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Explore Job Categories
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse jobs by category and find the perfect role that matches your
          experience and career goals
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer"
          >
            <div
              className={`w-14 h-14 rounded-full ${category.color} flex items-center justify-center mb-4`}
            >
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {category.title}
            </h3>
            <p className="text-gray-500">{category.count} jobs available</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="btn-primary px-6 py-3  rounded-lg hover:bg-blue-50 transition-colors font-medium">
          View All Categories
        </button>
      </div>
    </div>
  );
};

export default JobCategories;
