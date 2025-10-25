// "use client";

// import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
// import { motion } from "framer-motion";

// const industryData = [
//   {
//     id: 1,
//     title: "Financial Services",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     gradient: "from-amber-500/20 to-black/80",
//     points: [
//       "Real-time fraud detection and prevention systems",
//       "AI for credit scoring and risk assessment",
//       "Automated financial advisory and robo-advisors",
//       "Customer service automation with conversational AI",
//       "Predictive analytics for loan default and churn",
//     ],
//   },
//   {
//     id: 2,
//     title: "Healthcare",
//     image:
//       "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     gradient: "from-purple-400/30 to-purple-900/80",
//     points: [
//       "AI-assisted diagnostics and medical imaging",
//       "Patient triaging with intelligent chatbots",
//       "Predictive analytics for disease outbreak & risk scoring",
//       "NLP-powered documentation and medical records automation",
//       "Drug discovery acceleration using machine learning",
//     ],
//   },
//   {
//     id: 3,
//     title: "Manufacturing",
//     image:
//       "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     gradient: "from-black/100 to-orange-500/20",
//     points: [
//       "Automated quality control and defect detection",
//       "Optimized production planning and scheduling",
//       "Predictive maintenance for machinery",
//       "Supply chain optimization",
//       "Robotics integration for efficiency",
//     ],
//   },
//   {
//     id: 4,
//     title: "Energy",
//     image:
//       "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     gradient: "from-blue-400/30 to-blue-900/80",
//     points: [
//       "AI-driven grid optimization and smart energy management",
//       "Predictive analytics for energy demand and supply",
//       "Automated fault detection and repair in energy infrastructure",
//       "Renewable energy forecasting and integration",
//       "Smart metering and consumption analysis",
//     ],
//   },
//   {
//     id: 5,
//     title: "Retail & E-Commerce",
//     image:
//       "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     gradient: "from-black/80 to-amber-500/20 ",
//     points: [
//       "Personalized product recommendations to boost sales",
//       "AI-driven demand forecasting and inventory management",
//       "Intelligent chatbots for real-time customer support",
//       "Visual search and image-based product discovery",
//       "Sentiment analysis on customer reviews",
//     ],
//   },
//   {
//     id: 6,
//     title: "Transportation",
//     image:
//       "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     gradient: "from-black/80 to-black/20",
//     points: [
//       "Autonomous vehicle navigation and safety systems",
//       "Route optimization and traffic management",
//       "Predictive maintenance for fleet management",
//       "Smart logistics and supply chain automation",
//       "Real-time monitoring and analytics",
//     ],
//   },
// ];

// const IndustrySection = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [numPages, setNumPages] = useState(0);
//   const [cardStepWidth, setCardStepWidth] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeftStart, setScrollLeftStart] = useState(0);
//   const animationFrameId = useRef<number | null>(null);

//   const getCardStepWidth = (ref: HTMLDivElement | null) => {
//     if (ref && ref.children.length > 0) {
//       const firstCard = ref.children[0] as HTMLElement;
//       return firstCard.offsetWidth + 24;
//     }
//     return 344;
//   };

//   const handleScroll = () => {
//     if (scrollRef.current && numPages > 0) {
//       const scrollPosition = scrollRef.current.scrollLeft;
//       const maxScrollLeft =
//         scrollRef.current.scrollWidth - scrollRef.current.offsetWidth;

//       if (maxScrollLeft > 0 && numPages > 1) {
//         setCurrentIndex(
//           Math.min(
//             numPages - 1,
//             Math.round((scrollPosition / maxScrollLeft) * (numPages - 1)),
//           ),
//         );
//       } else {
//         setCurrentIndex(0);
//       }
//     }
//   };

//   useLayoutEffect(() => {
//     const updateScrollMetrics = () => {
//       if (scrollRef.current) {
//         const currentCardStepWidth = getCardStepWidth(scrollRef.current);
//         setCardStepWidth(currentCardStepWidth);

//         const calculatedNumPages = industryData.length - 1;

//         setNumPages(Math.max(1, calculatedNumPages));
//         handleScroll();
//       }
//     };

//     updateScrollMetrics();
//     window.addEventListener("resize", updateScrollMetrics);
//     return () => window.removeEventListener("resize", updateScrollMetrics);
//   }, [industryData.length]);

//   const scrollLeft = () => {
//     if (scrollRef.current && cardStepWidth > 0) {
//       const newScrollLeft = scrollRef.current.scrollLeft - cardStepWidth;
//       scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current && cardStepWidth > 0) {
//       const newScrollLeft = scrollRef.current.scrollLeft + cardStepWidth;
//       scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
//     }
//   };

//   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!scrollRef.current) return;
//     setIsDragging(true);
//     setStartX(e.pageX);
//     setScrollLeftStart(scrollRef.current.scrollLeft);
//     scrollRef.current.style.cursor = "grabbing";
//     scrollRef.current.style.userSelect = "none";
//     e.preventDefault();
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging || !scrollRef.current) return;
//     e.preventDefault();

//     if (animationFrameId.current) {
//       cancelAnimationFrame(animationFrameId.current);
//     }

//     animationFrameId.current = requestAnimationFrame(() => {
//       if (scrollRef.current) {
//         const walk = e.pageX - startX;
//         scrollRef.current.scrollLeft = scrollLeftStart - walk;
//       }
//       animationFrameId.current = null;
//     });
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     if (scrollRef.current) {
//       scrollRef.current.style.cursor = "grab";
//       scrollRef.current.style.userSelect = "auto";
//     }
//     if (animationFrameId.current) {
//       cancelAnimationFrame(animationFrameId.current);
//       animationFrameId.current = null;
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, [isDragging, startX, scrollLeftStart]);

//   const [backgroundColor, setBackgroundColor] = useState("bg-white");

//   useEffect(() => {
//     const checkURLForAI = () => {
//       if (window.location.href.includes("solutions")) {
//         setBackgroundColor("bg-white");
//       } else {
//         setBackgroundColor("");
//       }
//     };

//     checkURLForAI();
//   }, []); // Empty dependency array to run once on component mount

//   return (
//     <section
//       className={`w-full ${backgroundColor}  text-gray-900 py-20 overflow-hidden`}
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex justify-between items-start mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6 }}
//             className={`text-4xl md:text-5xl lg:text-6xl font-normal ${backgroundColor == "bg-white" ? "text-gray-900" : "text-gray-100"}   leading-tight max-w-3xl`}
//           >
//             AI solutions for the world&apos;s most complex industries
//           </motion.h2>

//           <div className="flex space-x-3 mt-4">
//             <button
//               onClick={scrollLeft}
//               disabled={currentIndex === 0}
//               className={`p-3 rounded-full border transition-all duration-200 ${
//                 currentIndex === 0
//                   ? "text-transparent border-gray-200 cursor-not-allowed"
//                   : "text-gray-600 border-gray-300 hover:text-gray-900 hover:border-gray-400"
//               }`}
//             >
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//             </button>
//             <button
//               onClick={scrollRight}
//               disabled={currentIndex >= numPages - 1}
//               className={`p-3 rounded-full border transition-all duration-200 ${
//                 currentIndex >= numPages - 1
//                   ? "text-transparent border-gray-200 cursor-not-allowed"
//                   : "text-gray-600 border-gray-300 hover:text-gray-900 hover:border-gray-400"
//               }`}
//             >
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         <div className="relative">
//           <div
//             ref={scrollRef}
//             className="flex gap-6 overflow-x-auto scrollbar-hide py-4"
//             style={{
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//               cursor: "grab",
//             }}
//             onScroll={handleScroll}
//             onMouseDown={handleMouseDown}
//           >
//             {industryData.map((industry, index) => (
//               <motion.div
//                 key={industry.id}
//                 initial={{ opacity: 0, y: 0 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="flex-shrink-0 w-80 h-96 rounded-3xl relative overflow-hidden group cursor-pointer"
//               >
//                 <img
//                   src={industry.image}
//                   alt={industry.title}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />

//                 <div
//                   className={`absolute inset-0 bg-gradient-to-t ${industry.gradient} transition-opacity opacity-80 duration-300 group-hover:opacity-100`}
//                 />

//                 <div className="absolute inset-0 flex flex-col justify-end p-8">
//                   <h3 className="text-white text-center text-2xl font-semibold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
//                     {industry.title}
//                   </h3>

//                   <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
//                     <ul className="text-white text-sm space-y-1 mt-3">
//                       {industry.points.slice(0, 3).map((point, idx) => (
//                         <li key={idx} className="flex items-start">
//                           <span className="w-1 h-1 bg-white rounded-full mt-2 mr-2 flex-shrink-0" />
//                           {point}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center space-x-2 mt-12">
//           {Array.from({ length: numPages }).map((_, index) => (
//             <div
//               key={index}
//               className={`h-1 rounded-md transition-all duration-300 ${
//                 currentIndex === index ? "w-8 bg-purple-600" : "w-4 bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default IndustrySection;

"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Industry } from "@/app/Types/industryTypes";
import { industries } from "@/app/Data/industryData";

interface IndustrySectionProps {
  data: Industry[];
  title?: string;
  backgroundColor?: string;
}

const IndustrySection: React.FC<IndustrySectionProps> = ({
  data = industries,
  title = "AI solutions for the world’s most complex industries",
  backgroundColor = "bg-white",
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [cardStepWidth, setCardStepWidth] = useState(0);

  useLayoutEffect(() => {
    const getCardStepWidth = () => {
      if (scrollRef.current && scrollRef.current.children.length > 0) {
        const firstCard = scrollRef.current.children[0] as HTMLElement;
        return firstCard.offsetWidth + 24;
      }
      return 344;
    };

    const updateScrollMetrics = () => {
      if (scrollRef.current) {
        const calculatedStepWidth = getCardStepWidth();
        setCardStepWidth(calculatedStepWidth);
        setNumPages(Math.max(1, data.length - 1));
      }
    };

    updateScrollMetrics();
    window.addEventListener("resize", updateScrollMetrics);
    return () => window.removeEventListener("resize", updateScrollMetrics);
  }, [data.length]);

  const handleScroll = () => {
    if (!scrollRef.current || numPages <= 0) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const maxScrollLeft =
      scrollRef.current.scrollWidth - scrollRef.current.offsetWidth;
    const newIndex = Math.round((scrollPosition / maxScrollLeft) * numPages);
    setCurrentIndex(Math.min(numPages, newIndex));
  };

  const scrollLeft = () => {
    if (scrollRef.current && cardStepWidth) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - cardStepWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && cardStepWidth) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + cardStepWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={`w-full ${backgroundColor} py-20 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-start mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-3xl ${
              backgroundColor === "bg-white" ? "text-gray-900" : "text-white"
            }`}
          >
            {title}
          </motion.h2>

          <div className="flex space-x-3 mt-4">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full border transition-all duration-200 ${
                currentIndex === 0
                  ? "text-transparent border-gray-200 cursor-not-allowed"
                  : "text-gray-600 border-gray-300 hover:text-gray-900 hover:border-gray-400"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15 19l-7-7 7-7" strokeWidth={2} />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex >= numPages - 1}
              className={`p-3 rounded-full border transition-all duration-200 ${
                currentIndex >= numPages - 1
                  ? "text-transparent border-gray-200 cursor-not-allowed"
                  : "text-gray-600 border-gray-300 hover:text-gray-900 hover:border-gray-400"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7" strokeWidth={2} />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {data.map((industry) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 w-80 h-96 rounded-3xl relative overflow-hidden group cursor-pointer"
              >
                {industry.image ? (
                  <img
                    src={industry.image}
                    alt={industry.title || "Industry"}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-200" />
                )}

                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    industry.gradient || "from-black/70 to-transparent"
                  } opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {industry.title && (
                    <h3 className="text-white text-center text-2xl font-semibold mb-2">
                      {industry.title}
                    </h3>
                  )}

                  {industry.points?.length ? (
                    <ul className="text-white text-sm space-y-1 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      {industry.points.slice(0, 3).map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1 h-1 bg-white rounded-full mt-2 mr-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-12">
          {Array.from({ length: numPages }).map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-md transition-all duration-300 ${
                currentIndex === index ? "w-8 bg-purple-600" : "w-4 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default IndustrySection;
