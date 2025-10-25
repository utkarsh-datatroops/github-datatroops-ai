"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Icon247 from "@/assets/images/solutions/icon/24-7-icon.svg";
import IconProfile from "@/assets/images/solutions/icon/profile-icon.svg";
import IconClock from "@/assets/images/solutions/icon/clock-icon.svg";
import IconDoubleTick from "@/assets/images/solutions/icon/double-tick.svg";
import WhySectionImage from "@/assets/images/solutions/solution-why-section.svg?url";
import { barlow, barlowSemiCondensed } from "@/improved-fonts";

const patientFeatures = [
  { icon: <Icon247 className="w-7 h-7" />, label: "24/7 Accessibility" },
  {
    icon: <IconProfile className="w-7 h-7" />,
    label: "Personalized Experience",
  },
  { icon: <IconClock className="w-7 h-7" />, label: "Faster Consultations" },
  {
    icon: <IconDoubleTick className="w-7 h-7" />,
    label: "Secure Interactions",
  },
];

const orgFeatures = [
  { icon: <Icon247 className="w-7 h-7" />, label: "Drive More Appointments" },
  { icon: <IconProfile className="w-7 h-7" />, label: "Data-Driven Insights" },
  { icon: <IconClock className="w-7 h-7" />, label: "Reduced Workload" },
  {
    icon: <IconDoubleTick className="w-7 h-7" />,
    label: "Improved Patient Loyalty",
  },
];

export default function WhyHealthAssistAi() {
  const [selected, setSelected] = useState<"patients" | "org">("patients");

  return (
    <section className="pb-16 bg-white">
      <h2
        className={`${barlowSemiCondensed.className} font-medium text-center text-[36px] leading-[48px] tracking-[0] text-[#22223b]
        sm:text-[48px] sm:leading-[48px] mb-12`}
      >
        Why Hospitals and Clinics Choose <br /> HealthAssist AI
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-20 mx-8 sm:mx-10 lg:mx-12">
        {/* Left Column: Toggle Buttons */}
        <div className="flex flex-col gap-6 max-w-[550px] w-full">
          <button
            className={`text-left bg-white rounded-2xl shadow-md p-4 text-center sm:p-6 transition border-2 ${
              selected === "patients"
                ? "border-blue-500"
                : "border-transparent hover:border-gray-200"
            }`}
            onClick={() => setSelected("patients")}
          >
            <div
              className={`${barlow.className} text-xl leading-xl text-[#181028] mb-2`}
            >
              Benefits for Your Patients
            </div>
          </button>
          <button
            className={`text-left bg-white rounded-2xl shadow-md p-4 text-center sm:p-6 transition border-2 ${
              selected === "org"
                ? "border-blue-500"
                : "border-transparent hover:border-gray-200"
            }`}
            onClick={() => setSelected("org")}
          >
            <div
              className={`${barlow.className} text-xl leading-xl text-[#181028] mb-2`}
            >
              Benefits for Your Organization
            </div>
          </button>
          <button className="mt-4 bg-[#2979ff] hover:bg-[#1565c0] transition text-white rounded-full py-4 font-inter font-normal text-lg leading-lg shadow-md">
            See How It Transforms Patient Care
          </button>
        </div>
        {/* Center Image */}
        <div className="flex justify-center items-center min-w-[340px] max-w-[540px]">
          <Image
            src={WhySectionImage}
            alt="HealthAssist AI"
            width={440}
            height={450}
            className="w-[510px] h-auto"
          />
        </div>
        {/* Right Column: Features */}
        <div className="flex flex-col gap-6 max-w-md justify-center content-center w-full">
          {(selected === "patients" ? patientFeatures : orgFeatures).map(
            (feature) => (
              <div
                key={feature.label}
                className="bg-white rounded-xl shadow p-5 flex items-center gap-4"
              >
                {feature.icon}
                <span
                  className={`${barlow.className} text-lg sm:text-xl leading-[30px] text-[#181028]`}
                >
                  {feature.label}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
