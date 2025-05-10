import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JobCategories from "../components/JobCategories";
import FeaturedJobs from "../components/FeaturedJobs";
import HowItWorks from "../components/HowITWorks";
import TopCompanies from "../components/TopCompanies";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <JobCategories />
        <FeaturedJobs />
        <HowItWorks />
        <TopCompanies />
        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default Home;
