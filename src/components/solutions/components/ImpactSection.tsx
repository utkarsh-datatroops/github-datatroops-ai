import React from "react";
import Image from "next/image";
import ImpactImage from "@/assets/images/solutions/impact-section.png";
import { barlowSemiCondensed, barlow } from "@/improved-fonts";

const features = [
  "50%+ reduction in front-desk workload",
  "30% faster appointment scheduling rates",
  "2x higher patient satisfaction scores",
  "24/7 service without additional staffing costs",
];

export default function ImpactSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-12 flex flex-col items-center justify-center">
      <div className="w-full max-w-[1900px] mx-2 sm:mx-0 flex flex-col lg:flex-row items-center justify-between gap-0 sm:gap-6">
        {/* Left: Image */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-[650px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={ImpactImage}
              alt="Doctors using tablet"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
        {/* Right: Text Content */}
        <div className="lg:w-1/2 flex flex-col justify-center items-start max-w-[800px] px-2 lg:px-12 mt-6 lg:mt-0">
          <h2
            className={`${barlowSemiCondensed.className} text-[36px] leading-[48px] sm:text-[48px] sm:leading-[48px] text-[#22223b] mb-12`}
          >
            Impact of Medical chatbots in the industry
          </h2>
          <div className="flex flex-col gap-8 w-full mb-10">
            {features.map((feature) => (
              <div key={feature} className="flex w-full items-center gap-4">
                <span className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-[#10002B] w-6 h-6">
                  <svg
                    width="24"
                    height="24"
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
                <span
                  style={{
                    lineHeight: "20px",
                    letterSpacing: 0,
                    color: "#22223b",
                  }}
                  className={`${barlow.className} text-lg leading-md sm:text-xl sm:leading-xl`}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontStyle: "italic",
              lineHeight: "30px",
              letterSpacing: 0,
              color: "#22223b",
            }}
            className="text-lg sm:text-xl"
          >
            &#34;Built for hospitals. Loved by patients.&#34;
          </div>
        </div>
      </div>
    </section>
  );
}
