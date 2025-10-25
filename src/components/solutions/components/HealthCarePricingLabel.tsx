"use client";

import React from "react";
import { barlowSemiCondensed } from "@/improved-fonts";


export default function ScrollingLabel({ 
  text = "Get your Custom Chatbot for Absolutely Free", 
}) {
  return (
    <div 
      className={`${barlowSemiCondensed.className} w-full overflow-hidden flex items-center shadow-2xl rounded-3xl`}
      style={{
        height: "12vh",
        background: "linear-gradient(90deg, #10002B 0%, #4B4582 100%)",
      }}
    >
      {/* Large screens: single row layout */}
      <div className="hidden lg:flex w-full h-full items-center justify-between  text-white text-xl  lg:text-3xl px-2 py-2  lg:px-8 lg:py-8">
        <div className="flex-1">
          <span className="">
            {text}
          </span>
        </div>
        <div className="flex-shrink-0 ml-8">
          <a
            href="/contact-us"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg text-white text-lg  whitespace-nowrap"
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
            <span>Claim Now</span>
          </a>
        </div>
      </div>

      {/* Small/Mobile screens: two row layout */}
      <div className="flex lg:hidden w-full h-full flex-col justify-center text-white px-2 py-2 lg:px-6 lg:py-6">
        <div className="text-center">
          <span className="text-lg font-semibold leading-tight">
            {text}
          </span>
        </div>
        <div className="flex justify-center">
          <a
            href="#connect"
            className="inline-flex items-center justify-center gap-3 px-6 py-2 sm:px-8 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg text-white text-sm sm:text-base font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6"
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
            <span>Claim Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}