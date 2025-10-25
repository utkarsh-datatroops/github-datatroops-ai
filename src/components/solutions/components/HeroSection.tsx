"use client";

import React from "react";
import { barlowSemiCondensed, inter } from "@/improved-fonts";
import HeroContactForm from "@/sections/HeroContactForm";

const features = [
  "24/7 Patient Support",
  "Rapid Deployment",
  "Scalable Solutions",
  "Reduced Workload",
];

export default function HeroSection() {
  return (

    <section
      id="connect"
      className="relative w-full flex items-center overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20"
      style={{
        background: "linear-gradient(90deg, #10002B 0%, #4B4582 100%)",
        minHeight: "calc(100vh - 8rem)",
      }}
    >
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto py-10 md:py-14" >

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* LEFT: Title, Description, Features, CTA */}
          <div className="w-full lg:w-[58%] space-y-8 text-white text-center lg:text-left">
            <h1
              className={`${barlowSemiCondensed.className} text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-tight md:leading-[1.1] lg:leading-[85px] font-normal`}
            >
              AI Healthcare Chatbots <br /> Designed for 24/7 Patient Care

            </h1>

            <p
              className={`${inter.className} text-lg text-[#ffffffe5] sm:text-2xl italic  mx-auto lg:mx-0`}
            >
              Not just another AI Healthcare Chatbot - An AI Healthcare Assistant that listens, learns and delivers.

            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-4 w-fit mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <div key={index} className="flex text-sm sm:text-balance md:text-[12px] lg:text-[20px] items-center justify-start gap-2">
                  <span className="text-yellow-400 ">✔</span>
                  <span className="text-white font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-8 md:pt-12 ">
              <a
                href="/contact-us"
                className={`${inter.className} inline-flex items-center justify-start gap-3 px-4 py-4 lg:px-8 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg text-white text-sm lg:text-lg font-medium w-full sm:w-fit`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                  />
                  </svg>
                <span>Get your custom chatbot for absolutely free</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="w-full sm:w-3/4 lg:w-[40%] flex justify-center items-center">
            {/* Ensuring the form itself is also responsive is key */}
            <HeroContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}