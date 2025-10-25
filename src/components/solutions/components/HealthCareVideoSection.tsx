"use client";

import React from "react";
import { inter, barlowSemiCondensed } from "@/improved-fonts";
import HealthCarePricingLabel from "@/components/solutions/components/HealthCarePricingLabel";
import dynamic from "next/dynamic";

export default function HealthCareVideoSection() {
  // const features = [
  //   "",
  //   "Multilingual Support",
  //   "Voice Assistance",
  // ];


  const ReactPlayerr = dynamic(() => import("react-player/youtube"), {
    ssr: false, 
  });

  return (
    <section
      className="relative w-full bg-white overflow-hidden flex flex-col py-0"
      id="use-case"
    >
      {/* Top gradient */}
      <div
        className="w-full h-24 md:h-28 lg:h-32"
        style={{
          background: "linear-gradient(90deg, #10002B 0%, #4B4582 100%)",
        }}
      />
      <div className="w-full mx-auto px-4 md:px-8 lg:px-20">
        
        {/* Video Wrapper */}
        <div className="relative ">
          

          {/* Video Container with responsive height and negative margin */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[30vh] md:h-[50vh] lg:h-[60vh] -mt-24 md:-mt-28 lg:-mt-32 ">
            <div className="relative w-full max-w-5xl mx-auto h-full rounded-3xl overflow-hidden shadow-2xl">
              <ReactPlayerr
               
                url="http://youtube.com/watch?v=r6Da3VVms3c"
                controls={true}
                width="100%"
                height="100%"
                playing={false}
                config={{}}
                className="absolute top-0 left-0 w-full h-full rounded-lg lg:rounded-[20px]"
              />
            </div>
          </div>
        </div>

        {/* This spacer creates the distance from the bottom of the video to the title.
            Its height is calculated to accommodate the video's height. */}
        <div className="h-[25vh] md:h-[40vh] lg:h-[50vh]" />


        {/* Use Cases Title */}
        <div
          className="text-center rounded-t-2xl flex items-center justify-center py-4 lg:py-0 lg:h-[8vh] mx-auto max-w-screen-2xl"
          style={{
            background: "linear-gradient(90deg, #10002B 0%, #4B4582 100%)",
          }}
        >
          <h2
            className={`${barlowSemiCondensed.className} text-white text-xl sm:text-2xl lg:text-3xl`}
          >
            Use Cases for our Healthcare AI Chatbot
          </h2>
        </div>

        <div className="border border-t-0 border-gray-200 bg-white rounded-b-2xl shadow-xl overflow-hidden mx-auto max-w-screen-2xl ">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-200 h-full ">
            <div
                className="bg-white h-16 md:h-28 lg:h-32 transition-colors duration-300 hover:bg-gray-50 flex items-center justify-center"
              >
                <span
                  className={`${inter.className} block font-semibold leading-tight text-gray-800 text-center text-sm md:text-lg `}
                >
                  Appointment <br /> Booking
                </span>
            </div>

            <div
                className="bg-white h-16 md:h-28 lg:h-32 transition-colors duration-300 hover:bg-gray-50 flex items-center justify-center"
              >
                <span
                  className={`${inter.className} block font-semibold leading-tight text-gray-800 text-center text-sm md:text-lg`}
                >
                  Symptom Based <br /> Doctor Matching 
                </span>
            </div>

            <div
                className="bg-white h-16 md:h-28 lg:h-32 transition-colors duration-300 hover:bg-gray-50 flex items-center justify-center"
              >
                <span
                  className={`${inter.className} block font-semibold leading-tight text-gray-800 text-center text-sm md:text-lg`}
                >
                  Real-Time  <br /> Scheduling
                </span>
            </div>

            <div
                className="bg-white h-16 md:h-28 lg:h-32 transition-colors duration-300 hover:bg-gray-50 flex items-center justify-center"
              >
                <span
                  className={`${inter.className} block font-semibold leading-tight text-gray-800 text-center text-sm md:text-lg`}
                >
                  Calendar <br /> Integration
                </span>
            </div>

            <div
                className="bg-white h-16 md:h-28 lg:h-32 transition-colors duration-300 hover:bg-gray-50 flex items-center justify-center"
              >
                <span
                  className={`${inter.className} block font-semibold leading-tight text-gray-800 text-center text-sm md:text-lg`}
                >
                  Multilingual <br /> Support
                </span>
            </div>

            <div
                className="bg-white h-16 md:h-28 lg:h-32 transition-colors duration-300 hover:bg-gray-50 flex items-center justify-center"
              >
                <span
                  className={`${inter.className} block font-semibold leading-tight text-gray-800 text-center text-sm md:text-lg`}
                >
                  Voice <br /> Assistance
                </span>
            </div>
          </div>
        </div>


      {/* Pricing Label */}
      <div className="w-full max-w-screen-2xl mx-auto  my-8">
        <HealthCarePricingLabel />
      </div>
      </div>

    </section>
  );
}