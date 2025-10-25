// "use client";

// import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
// import { motion, useTransform, useScroll } from "framer-motion";
// import { FaChevronRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
// import Image from "next/image";
// import integrationData from "@/assets/images/aiSolutions/solutions-section/integration-data.png";
// import workflowAutomation from "@/assets/images/aiSolutions/solutions-section/workflow-automation.png";
// import prediction from "@/assets/images/aiSolutions/solutions-section/prediction.png";
// import chatbots from "@/assets/images/aiSolutions/solutions-section/chatbots.png";
// import aiops from "@/assets/images/aiSolutions/solutions-section/AI-it-ops.png";
// import voicebots from "@/assets/images/aiSolutions/solutions-section/voicebots.png";
// import Link from "next/link";

// const solutionsData = [
//   {
//     id: 1,
//     title: "Data Integration & Analytics",
//     description:
//       "Unifies and analyzes data from multiple sources for actionable insights.",
//     image: integrationData,
//     points: [
//       "Breaks down data silos and enables smarter, data-driven decisions.",
//       "Empowers cross-functional teams with a single source of truth.",
//     ],
//   },
//   {
//     id: 2,
//     title: "AI-Powered Customer Support & Chatbots",
//     description: "24/7, personalized customer support using advanced NLP.",
//     image: chatbots,
//     points: [
//       "Handles queries, onboarding, and internal support autonomously.",
//       "Boosts satisfaction and reduces response times.",
//     ],
//     href: "/ai-chatbot",
//   },
//   {
//     id: 3,
//     title: "Predictive Analytics & Forecasting",
//     description: "Forecasts market trends, customer behavior, and demand.",
//     image: prediction,
//     points: [
//       "Drives proactive decision-making and resource optimization.",
//       "Reduces waste and enhances business agility.",
//     ],
//   },
//   {
//     id: 4,
//     title: "Workflow Automation",
//     description:
//       "Orchestrates multi-departmental processes from approvals to data sync.",
//     image: workflowAutomation,
//     points: [
//       "Eliminates bottlenecks and manual intervention.",
//       "Speeds up execution and ensures compliance.",
//     ],
//     href: "/solutions/workflow-automation",
//   },
//   {
//     id: 5,
//     title: "AIOps (AI for IT Operations)",
//     description: "Automates IT incident management and root cause analysis.",
//     image: aiops,
//     points: [
//       "Reduces downtime, accelerates issue resolution, and improves IT efficiency.",
//       "Ensures business continuity and operational resilience.",
//     ],
//   },
//   {
//     id: 6,
//     title: "Voice Assistants & Conversational AI",
//     description:
//       "Enables touch-free, conversational interactions across devices.",
//     image: voicebots,
//     points: [
//       "Understands multiple languages and intents for seamless user experience.",
//       "Ideal for virtual reception, support, and smart office automation.",
//     ],
//   },
// ];

// export default function SolutionsSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [carouselWidth, setCarouselWidth] = useState(0);
//   const [containerVisibleWidth, setContainerVisibleWidth] = useState(0);
//   const [currentScrollProgress, setCurrentScrollProgress] = useState(0);
//   // const [expandedDetails, setExpandedDetails] = useState<{
//   //   [key: number]: boolean;
//   // }>({});

//   const expandedDetails: {
//     [key: number]: boolean;
//   } = {};

//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//     const checkScreenSize = () => {
//       // No need to set isSmallScreen, window.innerWidth can be directly used
//     };

//     window.addEventListener("resize", checkScreenSize);

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   useLayoutEffect(() => {
//     const updateWidths = () => {
//       if (carouselRef.current && containerRef.current) {
//         setCarouselWidth(carouselRef.current.scrollWidth);
//         setContainerVisibleWidth(carouselRef.current.offsetWidth);
//       }
//     };

//     updateWidths();
//     window.addEventListener("resize", updateWidths);
//     return () => window.removeEventListener("resize", updateWidths);
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   scrollYProgress.onChange((latest) => {
//     setCurrentScrollProgress(latest);
//   });

//   const x = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, -(carouselWidth - containerVisibleWidth)],
//   );

//   return (
//     <section className="w-full text-white relative">
//       {currentScrollProgress > 0 && currentScrollProgress < 1 && (
//         <div className="fixed bottom-40 right-8 z-10">
//           <button
//             onClick={() => {
//               const currentSection = containerRef.current?.parentElement;
//               if (currentSection) {
//                 const prevSection = currentSection.previousElementSibling;
//                 if (prevSection) {
//                   prevSection.scrollIntoView({ behavior: "smooth" });
//                 }
//               }
//             }}
//             className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
//           >
//             <FaChevronUp className="text-white text-lg" />
//           </button>
//         </div>
//       )}

//       <div ref={containerRef} className="h-[400vh]">
//         <div className="sticky top-0 h-screen flex items-center py-16 md:py-24 px-4">
//           <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
//             <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-5xl lg:text-6xl font-normal mb-4 text-white"
//               >
//                 Solutions We Deliver
//               </motion.h2>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="text-lg md:text-xl text-gray-300 max-w-xl mb-8"
//               >
//                 Explore how DataTroops.ai empowers your business with
//                 cutting-edge AI solutions that drive real impact.
//               </motion.p>

//               <div className="mt-6 w-full max-w-xs">
//                 <div className="w-full bg-gray-700 rounded-full h-1">
//                   <div
//                     className="bg-gradient-to-r from-purple-500 to-indigo-500 h-1 rounded-full"
//                     style={{ width: `${currentScrollProgress * 100}%` }}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div
//               className="lg:w-2/3 overflow-hidden custom-scrollbar-hide"
//               ref={carouselRef}
//             >
//               <motion.div
//                 style={{ x }}
//                 className="flex space-x-6 px-4 md:px-0 lg:ml-8 pb-4"
//               >
//                 {solutionsData.map((solution) => (
//                   <motion.div
//                     key={solution.id}
//                     initial={{ opacity: 1, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, amount: 0.3 }}
//                     transition={{ duration: 0.2, delay: 0.1 }}
//                     className="flex-shrink-0 w-[320px] sm:w-[350px] md:w-[400px] lg:w-[400px] h-[400px] md:h-[480px] bg-[#21003D] text-white rounded-xl shadow-lg overflow-hidden flex flex-col border border-[#38106a] hover:border-purple-500 transition-all duration-300 cursor-grab relative"
//                   >
//                     {solution.id === 2 || solution.id === 4 ? (
//                       <Link
//                         href={`${solution.href || "default-link"}`}
//                         // target="_blank"
//                         rel="noopener noreferrer"
//                         className="absolute inset-0 flex flex-col justify-between p-5 group"
//                       >
//                         <div className="flex flex-col flex-grow">
//                           <Image
//                             src={solution.image}
//                             alt={solution.title}
//                             width={210}
//                             height={210}
//                             className="mx-auto mb-3 object-contain"
//                             priority={solution.id <= 2}
//                           />
//                           <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
//                             {solution.title}
//                           </h3>
//                           <div className="flex-grow overflow-y-auto custom-scrollbar-hide pr-2 min-h-0">
//                             <p className="text-base md:text-base text-gray-300 mb-2">
//                               {isClient &&
//                               window.innerWidth < 768 &&
//                               !expandedDetails[solution.id] &&
//                               solution.description.length > 150
//                                 ? `${solution.description.substring(0, 150)}...`
//                                 : solution.description}
//                             </p>

//                             <ul
//                               className={`list-none space-y-0.5 text-base md:text-base text-gray-300 ${isClient && window.innerWidth < 768 && !expandedDetails[solution.id] ? "hidden" : "block"}`}
//                             >
//                               {solution.points.map((point, idx) => (
//                                 <li key={idx} className="flex items-start">
//                                   <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-1.5" />
//                                   {point}
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         </div>
//                         <FaChevronRight className="absolute top-4 right-4 text-white group-hover:text-purple-400 transition-colors duration-300 text-xl" />
//                       </Link>
//                     ) : (
//                       <div className="p-5 flex flex-col flex-grow">
//                         <Image
//                           src={solution.image}
//                           alt={solution.title}
//                           width={210}
//                           height={210}
//                           className="mx-auto mb-3 object-contain"
//                           priority={solution.id <= 2}
//                         />
//                         <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
//                           {solution.title}
//                         </h3>
//                         <div className="flex-grow overflow-y-auto custom-scrollbar-hide pr-2 min-h-0">
//                           <p className="text-base md:text-base text-gray-300 mb-2">
//                             {isClient &&
//                             window.innerWidth < 768 &&
//                             !expandedDetails[solution.id] &&
//                             solution.description.length > 150
//                               ? `${solution.description.substring(0, 150)}...`
//                               : solution.description}
//                           </p>

//                           <ul
//                             className={`list-none space-y-0.5 text-base md:text-base text-gray-300 ${isClient && window.innerWidth < 768 && !expandedDetails[solution.id] ? "hidden" : "block"}`}
//                           >
//                             {solution.points.map((point, idx) => (
//                               <li key={idx} className="flex items-start">
//                                 <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-1.5" />
//                                 {point}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     )}
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {currentScrollProgress > 0 && currentScrollProgress < 1 && (
//         <div className="fixed bottom-24 right-8 z-10">
//           <button
//             onClick={() => {
//               const currentSection = containerRef.current?.parentElement;
//               if (currentSection) {
//                 const nextSection = currentSection.nextElementSibling;
//                 if (nextSection) {
//                   nextSection.scrollIntoView({ behavior: "smooth" });
//                 }
//               }
//             }}
//             className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
//           >
//             <FaChevronDown className="text-white text-lg" />
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }
"use client";

import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { FaChevronRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { SolutionsSectionProps } from "./types/solutionTypes";

export default function SolutionsSection({
  title,
  description,
  solutions,
}: SolutionsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [carouselWidth, setCarouselWidth] = useState(0);
  const [containerVisibleWidth, setContainerVisibleWidth] = useState(0);
  const [currentScrollProgress, setCurrentScrollProgress] = useState(0);
  const expandedDetails: { [key: number]: boolean } = {};

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    window.addEventListener("resize", () => {});
    return () => window.removeEventListener("resize", () => {});
  }, []);

  useLayoutEffect(() => {
    const updateWidths = () => {
      if (carouselRef.current && containerRef.current) {
        setCarouselWidth(carouselRef.current.scrollWidth);
        setContainerVisibleWidth(carouselRef.current.offsetWidth);
      }
    };
    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  scrollYProgress.onChange((latest) => {
    setCurrentScrollProgress(latest);
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(carouselWidth - containerVisibleWidth)],
  );

  return (
    <section className="w-full text-white relative">
      {currentScrollProgress > 0 && currentScrollProgress < 1 && (
        <div className="fixed bottom-40 right-8 z-10">
          <button
            onClick={() => {
              const currentSection = containerRef.current?.parentElement;
              currentSection?.previousElementSibling?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
          >
            <FaChevronUp className="text-white text-lg" />
          </button>
        </div>
      )}

      <div ref={containerRef} className="h-[400vh]">
        <div className="sticky top-0 h-screen flex items-center py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-5xl lg:text-6xl font-normal mb-4 text-white"
              >
                {title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-300 max-w-xl mb-8"
              >
                {description}
              </motion.p>

              <div className="mt-6 w-full max-w-xs">
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 h-1 rounded-full"
                    style={{ width: `${currentScrollProgress * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 overflow-hidden custom-scrollbar-hide" ref={carouselRef}>
              <motion.div
                style={{ x }}
                className="flex space-x-6 px-4 md:px-0 lg:ml-8 pb-4"
              >
                {solutions.map((solution) => (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 1, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="flex-shrink-0 w-[320px] sm:w-[350px] md:w-[400px] lg:w-[400px] h-[400px] md:h-[480px] bg-[#21003D] text-white rounded-xl shadow-lg overflow-hidden flex flex-col border border-[#38106a] hover:border-purple-500 transition-all duration-300 cursor-grab relative"
                  >
                    {solution.href ? (
                      <Link
                        href={solution.href}
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex flex-col justify-between p-5 group"
                      >
                        <SolutionCardContent
                          solution={solution}
                          isClient={isClient}
                          expandedDetails={expandedDetails}
                        />
                        <FaChevronRight className="absolute top-4 right-4 text-white group-hover:text-purple-400 transition-colors duration-300 text-xl" />
                      </Link>
                    ) : (
                      <div className="p-5 flex flex-col flex-grow">
                        <SolutionCardContent
                          solution={solution}
                          isClient={isClient}
                          expandedDetails={expandedDetails}
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {currentScrollProgress > 0 && currentScrollProgress < 1 && (
        <div className="fixed bottom-24 right-8 z-10">
          <button
            onClick={() => {
              const currentSection = containerRef.current?.parentElement;
              currentSection?.nextElementSibling?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
          >
            <FaChevronDown className="text-white text-lg" />
          </button>
        </div>
      )}
    </section>
  );
}

function SolutionCardContent({
  solution,
  isClient,
  expandedDetails,
}: {
  solution: SolutionsSectionProps["solutions"][0];
  isClient: boolean;
  expandedDetails: { [key: number]: boolean };
}) {
  return (
    <>
      <Image
        src={solution.image}
        alt={solution.title}
        width={210}
        height={210}
        className="mx-auto mb-3 object-contain"
        priority={solution.id <= 2}
      />
      <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
        {solution.title}
      </h3>
      <div className="flex-grow overflow-y-auto custom-scrollbar-hide pr-2 min-h-0">
        <p className="text-base text-gray-300 mb-2">
          {isClient &&
          typeof window !== "undefined" &&
          window.innerWidth < 768 &&
          !expandedDetails[solution.id] &&
          solution.description.length > 150
            ? `${solution.description.substring(0, 150)}...`
            : solution.description}
        </p>
        <ul
          className={`list-none space-y-0.5 text-base text-gray-300 ${
            isClient &&
            typeof window !== "undefined" &&
            window.innerWidth < 768 &&
            !expandedDetails[solution.id]
              ? "hidden"
              : "block"
          }`}
        >
          {solution.points.map((point, idx) => (
            <li key={idx} className="flex items-start">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-1.5" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
