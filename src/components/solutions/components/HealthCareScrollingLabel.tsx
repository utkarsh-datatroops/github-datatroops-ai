"use client";

import React from "react";

export default function ScrollingLabel({ 
  text = "Get your Custom Chatbot for Absolutely Free", 
  backgroundColor = "#fec50a",
  textColor = "white",
  fontSize = "text-2xl",
  height = "h-20"
}) {
  return (
    <div 
      className={`w-full ${height} overflow-hidden flex items-center`}
      style={{ backgroundColor }}
    >
      <div className="animate-scroll flex whitespace-nowrap">
        {/* First set */}
        <span className={`${fontSize} font-bold ${textColor === 'white' ? 'text-white' : 'text-black'} px-8`}>
          {text}
        </span>
        <span className={`${fontSize} font-bold ${textColor === 'white' ? 'text-white' : 'text-black'} px-8`}>
          {text}
        </span>
        <span className={`${fontSize} font-bold ${textColor === 'white' ? 'text-white' : 'text-black'} px-8`}>
          {text}
        </span>
        <span className={`${fontSize} font-bold ${textColor === 'white' ? 'text-white' : 'text-black'} px-8`}>
          {text}
        </span>
        {/* Second set - duplicate for seamless loop */}
        <span className={`${fontSize} font-bold ${textColor === 'white' ? 'text-white' : 'text-black'} px-8`}>
          {text}
        </span>
        <span className={`${fontSize} font-bold ${textColor === 'white' ? 'text-white' : 'text-black'} px-8`}>
          {text}
        </span>
        <span className={`${fontSize} font-bold ${textColor === 'white' ? 'text-white' : 'text-black'} px-8`}>
          {text}
        </span>
        <span className={`${fontSize} font-bold ${textColor === 'white' ? 'text-white' : 'text-black'} px-8`}>
          {text}
        </span>
      </div>
      
      <style jsx>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}