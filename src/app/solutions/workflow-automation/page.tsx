import React from "react";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import KeyFeatures from "./components/KeyFeatures";
import WhyThisMatters from "./components/WhyThisMatters";
import CallToAction from "./components/CallToAction";
// import CallToAction from './components/CallToAction';
// import Footer from "@/sections/Footer"

export const metadata = {
  title: "Best AI Workflow Automation for Businesses | DataTroops",
  description:
    "Explore top workflow automation services we helpbusinesses automate repetitive tasks, enhance team collaboration, and save time effortlessly",
};

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <KeyFeatures />
      <WhyThisMatters />
      <CallToAction />
    </div>
  );
}

export default App;
