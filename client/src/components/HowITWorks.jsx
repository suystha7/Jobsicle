import { Award, Briefcase, ChevronDown, Users } from "lucide-react";
import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Users size={28} />,
      title: "Create Account",
      description:
        "Sign up for free and complete your profile with your experience and skills.",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Find Jobs",
      description:
        "Search through thousands of openings or get personalized job recommendations.",
    },
    {
      icon: <Award size={28} />,
      title: "Apply & Get Hired",
      description:
        "Submit applications online and track your progress until you land your dream job.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          How Our Platform Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We've simplified the job search process to help you find and apply to
          the best opportunities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute transform translate-x-40">
                <ChevronDown
                  className="text-gray-300 transform rotate-270"
                  size={30}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
