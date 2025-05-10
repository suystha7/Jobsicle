import React from "react";

const TopCompanies = () => {
  const companies = [
    { name: "TechCorp", logo: "/api/placeholder/80/80", jobCount: 45 },
    { name: "DesignStudio", logo: "/api/placeholder/80/80", jobCount: 32 },
    { name: "MarketingPro", logo: "/api/placeholder/80/80", jobCount: 28 },
    { name: "FinanceGlobal", logo: "/api/placeholder/80/80", jobCount: 37 },
    { name: "HealthPlus", logo: "/api/placeholder/80/80", jobCount: 19 },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Top Companies Hiring
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These industry leaders are looking for talented professionals to
            join their teams
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-16 h-16 mx-auto mb-4 rounded-lg"
              />
              <h3 className="font-semibold text-gray-800 mb-1">
                {company.name}
              </h3>
              <p className="text-sm text-gray-500">
                {company.jobCount} open positions
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCompanies;
