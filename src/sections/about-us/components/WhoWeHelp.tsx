"use client";

import React from "react";

const industries = [
  {
    name: "Healthcare",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "FinTech",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Retail",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Insurance",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "SaaS",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Travel & Hospitality",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Fitness",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Gaming",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="relative w-full py-12 bg-gradient-to-r from-[#10002B] to-[#240046]">
      {/* Optional: Starry background effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="stars"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.2" fill="#fff" fillOpacity="0.08" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stars)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 text-center">
            Who We Help
          </h2>
          <div className="w-24 h-1 rounded bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] mb-4 mx-auto"></div>
          <p className="text-lg text-gray-200 text-center">
            We deliver impact across industries:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="bg-[#16244a]/80 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center border-2 border-[#2e3b6a] hover:scale-105 transition-transform duration-300"
            >
              <img
                src={industry.img}
                alt={industry.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-5 flex-1 flex items-center justify-center">
                <span className="text-lg font-semibold text-white text-center">
                  {industry.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
