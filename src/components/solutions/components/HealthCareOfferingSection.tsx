"use client";

import React from 'react';
import { barlowSemiCondensed } from "@/improved-fonts";


const HospitalClientsSection = () => {
  return (
    <section className={`w-full py-16 px-4`}
    style={{
          background: "linear-gradient(90deg, #10002B 0%, #4B4582 100%)",
        }}>
      <div className="max-w-screen-2xl mx-auto ">
        {/* Main Title */}
        <h2 className={` ${barlowSemiCondensed.className}  text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12`}>
          Equip Your Hospital Clients with AI Healthcare Chatbots
        </h2>
        
        {/* Three Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 - Retain More Healthcare Clients */}
          <div className="bg-[#E8E2F9]  rounded-lg p-6 shadow-lg">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
                        <stop offset="100%" stopColor="#312e81" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <circle cx="35" cy="50" r="30" fill="#4c1d95" />
                    <circle cx="60" cy="35" r="22" fill="#5b21b6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#2E1065]  text-xl font-semibold leading-tight">
                Retain More Healthcare Clients
              </h3>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              Offer AI chatbots for hospitals and clinics—before your competitors do.
            </p>
          </div>

          {/* Card 2 - Launch AI Without Building It */}
          <div className="bg-[#E8E2F9]  rounded-lg p-6 shadow-lg">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
                        <stop offset="100%" stopColor="#312e81" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <circle cx="35" cy="50" r="30" fill="#4c1d95" />
                    <circle cx="60" cy="35" r="22" fill="#5b21b6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#2E1065]  text-xl font-semibold leading-tight">
                Launch AI Without Building It
              </h3>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              Integrate our custom healthcare chatbots. No dev team needed.
            </p>
          </div>

          {/* Card 3 - Modernize with AI Automation */}
          <div className="bg-[#E8E2F9]  rounded-lg p-6 shadow-lg">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
                        <stop offset="100%" stopColor="#312e81" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <circle cx="35" cy="50" r="30" fill="#4c1d95" />
                    <circle cx="60" cy="35" r="22" fill="#5b21b6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#2E1065]  text-xl font-semibold leading-tight">
                Modernize with AI Automation
              </h3>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              Equip Your Hospital Clients with AI Healthcare Chatbots
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HospitalClientsSection;