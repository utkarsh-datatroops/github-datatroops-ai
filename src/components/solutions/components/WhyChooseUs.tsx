import React from "react";
import Image from "next/image";
// Assuming you have this font configured from the previous component
import { barlowSemiCondensed } from "@/improved-fonts";

// Data for the feature blocks on the right
const features = [
  {
    title: "Advanced NLP Capabilities",
    description:
      "Our models understand context and nuance, providing more accurate and human-like conversations.",
    bgColor: "bg-blue-700", // A medium blue
  },
  {
    title: "Custom AI Solutions",
    description:
      "We tailor the chatbot's knowledge base and personality to perfectly match your brand's voice and goals.",
    bgColor: "bg-slate-700", // A lighter purplish-blue/slate
  },
  {
    title: "Seamless Platform Integration",
    description:
      "Easily connect our chatbot to your existing CRM, record systems, and communication channels.",
    bgColor: "bg-blue-900", // A very dark navy blue
  },
  {
    title: "Robust Security & Compliance",
    description:
      "Built with enterprise-grade security to protect sensitive data and ensure industry compliance (e.g., HIPAA).",
    bgColor: "bg-slate-600", // A dark gray/slate color
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2
          className={`${barlowSemiCondensed.className} text-4xl sm:text-5xl font-bold text-center text-[#181028] mb-12`}
        >
          Why choose datatroops for building a chatbot
        </h2>

        {/* Main two-column grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Image */}
          <div className="w-full h-full min-h-[300px] lg:min-h-[450px] relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder-lab-image.jpg" // Replace with your actual image path
              alt="Scientists working in a lab"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right Column: 2x2 Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} p-6 rounded-lg text-white flex flex-col shadow-md`}
              >
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-base text-slate-200">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;