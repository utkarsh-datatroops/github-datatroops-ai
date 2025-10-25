import React from "react";
import Image from "next/image";
import FeatureImage from "@/assets/images/solutions/features-2.svg?url";
import { barlowSemiCondensed , inter} from "@/improved-fonts";

const features = [
  "AI-Based Symptom to Doctor Matching",
  "Real-Time Scheduling with Availability Sync",
  "Secure Patient Verification via Chatbot",
  "Instant Access to Medical Records",
  "Automated Reminders & Patient Notifications",
  "Multilingual Healthcare Chatbot Support",
  "Voice-Enabled AI Chat for Hospitals",
  "EHR & Lab System Integration via Custom APIs",
];

export default function CoreFeaturesSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 flex flex-col items-center justify-center">
      <h2
        className={`text-center ${barlowSemiCondensed.className} mb-8 w-full text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#22223b]`}
      >
        What Makes Our AI Healthcare Chatbots Stand Out

      </h2>
      <div className="w-full max-w-[1900px] flex flex-col lg:flex-row items-center justify-between">
        {/* Left: Large SVG Image with phone and speech bubbles */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full">
            <Image
              src={FeatureImage}
              alt="AI Healthcare Chatbot features demonstration"
              width={700}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
        {/* Right: Features List in Green Box */}
        <div className="lg:w-1/2 max-w-[580px] xl:mx-auto sm:mr-12 justify-center">
          <div className="max-w-[580px] bg-[#E6FAF3] rounded-2xl justify-center shadow-lg px-8 py-10 md:px-8 md:py-10">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4 mb-6 last:mb-10"
              >
                <span className="inline-flex flex-shrink-0 items-center justify-center w-8 h-8 rounded-full bg-[#10002B]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.75 12.375L3.375 9L4.43325 7.94175L6.75 10.25L13.5667 3.43325L14.625 4.5L6.75 12.375Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="font-inter font-normal text-lg leading-lg tracking-[0] text-[#22223b] lg:text-xl">
                  {feature}
                </span>
              </div>
            ))}
            
            {/* CTA Button */}
          <div className=" pt-8 md:pt-12 ">
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

          
        </div>
      </div>
      
    </section>
  );
}
