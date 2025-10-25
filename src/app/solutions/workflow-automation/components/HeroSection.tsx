"use client";

import React, { useState } from "react";
import { Rocket, FileText, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Automated from "@/assets/images/aiSolutions/solutions-section/workflow-automation.svg?url";

const HeroSection = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  // useEffect(() => {
  //   setIsVisible(true);
  // }, []);

  const handleRequestDemo = () => {
    setShowComingSoon(true);
    // Hide the "Coming Soon" message after 3 seconds
    setTimeout(() => {
      setShowComingSoon(false);
    }, 3000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>
      <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse z-0"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000 z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-spin-slow z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Best AI Workflow Automation for Businesses
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-purple-100 mb-10 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              Let users simply type their intent, and watch your website
              intelligently respond—filling in details, navigating pages, and
              completing actions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center mb-12">
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRequestDemo}
                className="group w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:shadow-2xl flex items-center justify-center gap-3 relative"
              >
                {showComingSoon ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    Coming Soon!
                  </motion.span>
                ) : (
                  <>
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
                    Request a Demo
                  </>
                )}
              </motion.button>

              <a href="#how-it-works">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="group w-full sm:w-auto bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 text-white px-6 py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-opacity-20 hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                  See How It Works
                </motion.button>
              </a>
            </div>

            {/* Animated Tagline */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-pulse" />
                <span className="text-purple-100 text-base sm:text-lg font-medium">
                  Key Tagline
                </span>
              </div>

              <TypeAnimation
                sequence={[
                  `"From clicks to conversations — reinvent how users interact with your site."`,
                  2000,
                  `"Let your website work like magic — all through natural language."`,
                  2000,
                ]}
                wrapper="p"
                speed={50}
                className="text-lg sm:text-xl font-semibold text-white"
                repeat={Infinity}
              />
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative max-w-md sm:max-w-lg lg:max-w-xl mx-auto"
          >
            <Image
              src={Automated}
              alt="AI-powered website automation"
              className="w-full rounded-3xl shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white border-opacity-30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white bg-opacity-60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
