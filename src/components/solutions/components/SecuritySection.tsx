import React from "react";
import Image from "next/image";
import SecuritySectionImage from "@/assets/images/solutions/security-section-image.svg?url";
import { barlowSemiCondensed, inter } from "@/improved-fonts";

export default function SecuritySection() {
  return (
    <section
      className="relative w-full overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20"
      style={{
        background: "linear-gradient(90deg, #10002B 0%, #4B4582 100%)",
      }}
    >
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto py-10 md:py-14">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-[58%] flex flex-col max-w-[700px] z-10 items-center lg:items-start">
            <h2
              className={`${barlowSemiCondensed.className} text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-center lg:text-left`}
            >
              Smart. Secure. Healthcare AI Chatbots You Can Trust.
            </h2>
            <p className="font-inter font-normal text-[15px] leading-[15px] mb-8 text-center lg:text-left sm:text-[15px] text-white/90">
              We understand the sensitivity of healthcare data.
            </p>
            <ul className="mb-8 space-y-4 w-full">
              <li className="flex items-center gap-4 justify-start">
                <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                    <circle cx="11" cy="11" r="11" fill="#2563eb" />
                    <path
                      d="M6 11.5l3 3 7-7"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-inter italic font-normal text-[16px] leading-[16px] sm:text-md text-white">
                  No unauthorized data storage
                </span>
              </li>
              <li className="flex items-center gap-4 justify-start">
                <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                    <circle cx="11" cy="11" r="11" fill="#2563eb" />
                    <path
                      d="M6 11.5l3 3 7-7"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-inter italic font-normal text-[16px] leading-[16px] sm:text-md text-white">
                  Encrypted patient communication
                </span>
              </li>
              <li className="flex items-center gap-4 justify-start">
                <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                    <circle cx="11" cy="11" r="11" fill="#2563eb" />
                    <path
                      d="M6 11.5l3 3 7-7"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-inter italic font-normal text-[16px] leading-[16px] sm:text-md text-white">
                  Verified user identity for every interaction
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="flex pt-8 md:pt-12 justify-center lg:justify-start w-full">
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

            <div className="mt-2 text-center lg:text-left">
              <span className="font-inter font-semibold italic text-[16px] leading-[16px] sm:text-lg text-white">
                &quot;Care beyond consultations — with intelligent
                automation.&quot;
              </span>
            </div>
          </div>

          {/* Right Image */}
          {/* MODIFIED: Increased negative margin to remove the gap */}
          <div className="w-full lg:w-[40%] flex justify-center items-end z-10 -mb-12 md:-mb-16">
            <Image
              src={SecuritySectionImage}
              alt="Custom medical chatbot interface displayed behind man using phone"
              width={600}
              height={400}
              className="max-w-full rounded-xl"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Optional: Gradient overlay for effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 40%, rgba(41,121,255,0.10) 0%, transparent 70%)",
        }}
      />
    </section>
  );
}