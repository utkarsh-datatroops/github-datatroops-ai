"use client";
import React from "react";
// import { barlowSemiCondensed, barlow } from "@/improved-fonts";
import Image from "next/image";
import integrationImage from "@/assets/images/solutions/integration.svg?url";
import customizationImage from "@/assets/images/solutions/custom_brand.svg?url";
import reqAnalysisImage from "@/assets/images/solutions/req_analysis.svg?url";
import testingAndGoLiveImage from "@/assets/images/solutions/testing_go_live.svg?url";
import { barlowSemiCondensed, barlow } from "@/improved-fonts";
// const integrationImage = require("@/assets/images/solutions/integration.svg?url") as string;
// const customizationImage = require("@/assets/images/solutions/custom_brand.svg?url") as string;
// const reqAnalysisImage = require("@/assets/images/solutions/req_analysis.svg?url") as string;
// const testingAndGoLiveImage = require("@/assets/images/solutions/testing_go_live.svg?url") as string;

const steps = [
  {
    id: 1,
    icon: reqAnalysisImage,
    color: "bg-cyan-300",
    title: "Step 1: Requirement Analysis",
    description:
      "We analyze your needs and connect our AI chatbot for hospitals to existing healthcare systems securely.",
  },
  {
    id: 2,
    icon: customizationImage,  
    color: "bg-purple-300",
    title: "Step 2: Customization & Branding",
    description:
      " We customize your healthcare chatbot with hospital branding, patient flows, and tone for seamless engagement.",
  },
  {
    id: 3,
    icon: integrationImage, 
    color: "bg-blue-400", 
    title: "Step 3: Simple Integration",
    description: "Embed the custom healthcare chatbot into your hospital website or app with simple, fast deployment.",
  },
  {
    id: 4,
    icon: testingAndGoLiveImage,
    color: "bg-orange-300", 
    title: "Step 4: Testing & Go Live",
    description:
      " We test your medical chatbot for security, accuracy, and real-time performance before going live.",
  },
];

const IntegrationWorkflow: React.FC = () => {
  const StepCard = ({ 
    icon, 
    color, 
    title, 
    description,
    isLast = false
  }: { 
    icon: any;
    color: string;
    title: string; 
    description: string;
    isLast?: boolean;
  }) => (
    <div className="flex flex-col items-start text-left my-3 ">
      <div className={`p-6 space-y-6  ${!isLast ? 'border-b md:border-b-0 md:border-r border-gray-200' : ''}`} style={{ height: "100%" }}>      
        <div className={`${color} rounded-xl flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 shadow-md shadow-slate-300`}>
          <Image
            src={icon}
            alt={title}
            width={48}
            height={48}
            className="w-12 h-12 lg:w-14 lg:h-14"
          />
          {/* <img
  src={icon}
  alt={title}
  className="w-12 h-12 lg:w-14 lg:h-14"
/> */}
        </div>
        
        <h3 
          className={`${barlow.className} text-2xl lg:text-3xl font-bold text-slate-800 leading-tight max-w-xs`}
        >
          {title}
        </h3>
        
        <p className={`${barlow.className} text-slate-600 text-xl flex-1`}>
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="relative w-full bg-white overflow-hidden sm:px-8 md:px-12 lg:px-18">
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto py-10 md:py-14">
        {/* Heading */}
        <h2
          className={`${barlowSemiCondensed.className}  text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-slate-800 mb-12 lg:mb-16`}
        >
          Seamless Healthcare Chatbot Integration

        </h2>

        {/* Responsive Grid Layout */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-y-0">
            {steps.map((step, index) => (
              <StepCard 
                key={step.id}
                icon={step.icon}
                color={step.color}
                title={step.title} 
                description={step.description}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationWorkflow;