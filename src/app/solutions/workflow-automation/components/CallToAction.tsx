"use client";

import React, { useEffect, useState } from "react";
import {
  Calendar,
  Users,
  PlayCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Link from "next/link";

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showComingSoonDemo, setShowComingSoonDemo] = useState(false);
  const [showComingSoonExample, setShowComingSoonExample] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-violet-1200 py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Technology background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
              <span className="text-yellow-300 text-lg font-medium">
                Ready to Transform?
              </span>
              <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Transform your website into a{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-gradient">
                smart assistant
              </span>
            </h2>

            <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to automate? Join the conversation revolution and boost your
              conversions today.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button
              onMouseEnter={() => setShowComingSoonDemo(true)}
              onMouseLeave={() => setShowComingSoonDemo(false)}
              className="group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 hover:bg-gray-50"
            >
              <Calendar className="w-6 h-6 group-hover:animate-bounce" />
              {showComingSoonDemo ? "Coming Soon" : "Schedule a Demo"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <Link href="/contact-us">
              <button className="group bg-gradient-to-r from-purple-700 to-pink-700 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3">
                <Users className="w-6 h-6" />
                Talk to Our Experts
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>

            <button
              onMouseEnter={() => setShowComingSoonExample(true)}
              onMouseLeave={() => setShowComingSoonExample(false)}
              className="group bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-opacity-20 hover:shadow-xl flex items-center gap-3"
            >
              <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              {showComingSoonExample ? "Coming Soon" : "Try Live Example"}
            </button>
          </div>

          <div
            className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold text-sm"
                  >
                    {i}K
                  </div>
                ))}
              </div>
              {/* <span className="text-purple-100 text-lg font-medium">Happy Customers</span> */}
            </div>
            <p className="text-lg text-purple-100">
              Join thousands of businesses already transforming their user
              experience with conversational automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
