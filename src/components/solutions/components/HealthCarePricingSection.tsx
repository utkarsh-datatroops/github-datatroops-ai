"use client";

import React from "react";
import { barlowSemiCondensed, inter } from "@/improved-fonts";
import ChatbotPreview from "@/components/solutions/components/ChatBotPreview";

export default function HealthCarePricingSection() {
  const benefits = [
    {
      number: "1",
      title: "47% Reduction in Operational Costs",
      description: "Our AI chatbot for hospitals automates patient interactions and repetitive admin tasks, leading to significant cost savings."
    },
    {
      number: "2",
      title: "90%+ EHR Data Accuracy",
      description: "Use custom healthcare chatbots with NLP to capture and update medical records seamlessly and precisely."
    },
    {
      number: "3",
      title: "90%+ Patient Satisfaction",
      description: "Deliver real-time, multilingual support through intelligent healthcare chatbot solutions designed for better patient experiences."
    },
    {
      number: "4",
      title: "60% Fewer Readmissions",
      description: "Proactively support high-risk patients with remote monitoring and follow-ups using AI chatbots in healthcare."
    }
  ];

  return (
    <section 
      className={`relative w-full overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20 min-h-screen flex items-center`}  
      style={{ background: "linear-gradient(90deg, #10002B 0%, #4B4582 100%)" }}
    >
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto py-16">
        
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 ">
          
          {/* Left Column */}
          <div className="w-full lg:w-[60%] space-y-8 order-last lg:order-first">
          
            {/* 3. Unified mobile & desktop titles into one responsive element. */}
            <h2 className={`${barlowSemiCondensed.className} text-white text-3xl md:text-4xl lg:text-5xl text-center font-extralight lg:text-left`}>
              Reduce Costs. Scale Smarter. Care Better — with AI Chatbots for Hospitals
            </h2>

            {/* Chat Interface */}
            <div className="mx-auto">
              <ChatbotPreview />
            </div>

          </div>

          {/* Right Column (Benefits) */}
          <div className="w-full lg:w-[40%] space-y-6 md:spa lg:space-y-12">
            {benefits.map((benefit) => (
              <div key={benefit.number}>
                <div className="relative p-2 lg:p-4 rounded-xl bg-transparent backdrop-blur-md text-white">
                  {/* Gradient lines */}
                  <div className="absolute left-0 top-0 h-full w-[1px] bg-white/70 rounded-2xl" />
                  <div className="absolute left-0 top-0 w-[70%] h-[1px] bg-gradient-to-r from-white/70 to-white/10 rounded-2xl" />
                  <div className="absolute left-0 bottom-0 w-[30%] h-[1px] bg-gradient-to-r from-white/70 to-white/10 rounded-2xl" />

                  {/* Content */}
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-md bg-[#E8E2F9] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#2E1065] font-bold text-lg sm:text-xl lg:text-3xl">
                        {benefit.number}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white text-lg sm:text-xl lg:text-[21px] font-semibold leading-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-white/70 max-w-[90%] mt-1 sm:mt-2 text-sm sm:text-base lg:text-[18px] justify-start leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex pt-8 md:pt-12 justify-center">
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
    </section>
  );
}