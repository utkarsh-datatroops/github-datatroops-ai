// "use client";

// import Tooltip from "@/components/ToolTip";
// import Link from "next/link";

// const MessageSquareIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
//   </svg>
// );

// const BrainIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 2 17.5v-11a2.5 2.5 0 0 1 2.81-2.5L9.5 2Z"></path>
//     <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 22 17.5v-11a2.5 2.5 0 0 0-2.81-2.5L14.5 2Z"></path>
//     <path d="M12 4.5a2.5 2.5 0 0 0-5-.44A2.5 2.5 0 0 0 4.5 6.5v11a2.5 2.5 0 0 0 5 .44 2.5 2.5 0 0 0 2.5-2.44v-11Z"></path>
//     <path d="M12 4.5a2.5 2.5 0 0 1 5-.44 2.5 2.5 0 0 1 2.5 2.44v11a2.5 2.5 0 0 1-5 .44 2.5 2.5 0 0 1-2.5-2.44v-11Z"></path>
//   </svg>
// );

// const BotIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <rect width="18" height="10" x="3" y="11" rx="2"></rect>
//     <circle cx="12" cy="5" r="2"></circle>
//     <path d="M12 7v4"></path>
//     <line x1="8" x2="8" y1="16" y2="16"></line>
//     <line x1="16" x2="16" y1="16" y2="16"></line>
//   </svg>
// );

// const ZapIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
//   </svg>
// );

// const EyeIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
//     <circle cx="12" cy="12" r="3"></circle>
//   </svg>
// );

// const LineChartIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M3 3v18h18"></path>
//     <path d="m19 9-5 5-4-4-3 3"></path>
//   </svg>
// );

// // Feature card component
// const FeatureCard = ({
//   title,
//   description,
//   icon: Icon,
//   href,
// }: {
//   title: string;
//   description: string;
//   icon: React.ComponentType;
//   href?: string;
// }) => {
//   const cardContent = (
//     <div className="bg-gray-900 bg-opacity-50 rounded-lg p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-purple-500">
//       <div className="bg-gradient-to-r from-[#5A189A] to-[#7B2CBF] p-4 rounded-lg mb-6">
//         <Icon />
//       </div>
//       <h3 className="text-white text-xl font-bold mb-4 text-center">{title}</h3>
//       <p className="text-gray-300 text-center">{description}</p>
//     </div>
//   );

//   return (
//     <>
//       {href ? (
//         <Link href={href} className="block w-full h-full">
//           {cardContent}
//         </Link>
//       ) : (
//         <Tooltip message="Coming Soon" key={title}>
//           {cardContent}
//         </Tooltip>
//       )}
//     </>
//   );
//   // return (
//   //   <Tooltip message="Coming Soon" key={title}>
//   //     <div className="bg-gray-900 bg-opacity-50 rounded-lg p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-purple-500">
//   //       <div className="bg-gradient-to-r from-[#5A189A] to-[#7B2CBF] p-4 rounded-lg mb-6">
//   //         <Icon />
//   //       </div>
//   //       <h3 className="text-white text-xl font-bold mb-4 text-center">
//   //         {title}
//   //       </h3>
//   //       <p className="text-gray-300 text-center">{description}</p>
//   //       {/* <button className="mt-6 flex items-center text-[#7B2CBF] hover:text-white font-medium group">
//   //       See Details
//   //       <svg
//   //         className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
//   //         fill="none"
//   //         stroke="currentColor"
//   //         viewBox="0 0 24 24"
//   //       >
//   //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//   //       </svg>
//   //     </button> */}
//   //     </div>
//   //   </Tooltip>
//   // );
// };

// export default function WhatWeDo() {
//   const featuresData = [
//     {
//       icon: MessageSquareIcon,
//       title: "Generative AI",
//       description:
//         "Unlock the creative potential of AI with generative models that can craft unique content, designs, and strategies specifically for your business needs. Harness the power of AI to generate innovative solutions across multiple domains.",
//       href: "/solutions/generative-ai", // Or whatever path you want
//     },
//     {
//       icon: BrainIcon,
//       title: "Machine Learning",
//       description:
//         "Empower your data with machine learning algorithms that enable predictive analytics, smart pattern recognition, and decision-making based on actionable insights. Optimize performance and discover new opportunities.",
//     },
//     {
//       icon: BotIcon,
//       title: "NLP & Chatbots",
//       description:
//         "Enhance user engagement through intelligent chatbots and NLP-powered systems that understand natural language, context, and user intent, delivering personalized experiences in real-time.",
//     },
//     {
//       icon: ZapIcon,
//       title: "AI Agents",
//       description:
//         "Automate your operations with autonomous AI agents capable of performing complex tasks, making decisions, and handling critical processes efficiently. Streamline workflows and boost productivity across your entire business.",
//     },
//     {
//       icon: EyeIcon,
//       title: "Computer Vision",
//       description:
//         "Implement AI-driven image and video analysis systems that can detect, recognize, and interpret visual data. Improve accuracy, automation, and decision-making in fields like security, manufacturing, and healthcare.",
//     },
//     {
//       icon: LineChartIcon,
//       title: "Deep Learning",
//       description:
//         "Leverage the power of neural networks to tackle highly complex problems. From image recognition to predictive modeling, our deep learning solutions uncover hidden patterns and drive insights from large datasets.",
//     },
//   ];

//   return (
//     // bg-gradient-to-r from-[#10002B] to-[#240046]
//     <div className=" py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
//           <div className="mt-4 flex justify-center">
//             <div className="w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]" />
//           </div>
//           <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
//             At DataTroops.ai, we specialize in developing state-of-the-art AI
//             solutions that accelerate business operations, enhance
//             decision-making, and automate tasks across industries. Whether
//             you&apos;re looking to integrate chatbots, build custom AI models,
//             or implement advanced computer vision systems, we have you covered.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {featuresData.map((feature, index) => (
//             <FeatureCard
//               key={index}
//               icon={feature.icon}
//               title={feature.title}
//               description={feature.description}
//               href={feature.href} // Add href if you want to link to a specific page
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";
import { AIFeatures } from "@/app/Data/whatWeDoData";
import FeatureCard from "@/sections/FeatureCard";

const WhatWeDo: React.FC = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
          <div className="mt-4 flex justify-center">
            <div className="w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]" />
          </div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            At DataTroops.ai, we specialize in developing state-of-the-art AI
            solutions that accelerate operations, enhance decisions, and
            automate tasks across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AIFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              href={feature.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
