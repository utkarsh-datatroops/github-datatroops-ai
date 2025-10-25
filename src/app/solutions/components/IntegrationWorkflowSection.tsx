// "use client";

// import React, { useRef, useLayoutEffect, useState, useCallback } from "react";
// import { motion, useScroll } from "framer-motion";
// import {
//   FaSearch,
//   FaPencilRuler,
//   FaPlug,
//   FaShieldAlt,
//   FaRocket,
//   FaChartLine,
//   FaArrowRight,
//   FaCheckCircle,
//   FaChevronDown,
//   FaChevronUp,
//   FaTimes,
// } from "react-icons/fa";
// import { twMerge } from "tailwind-merge";
// import ContactForm from "@/sections/contact-us/ContactForm";

// const integrationSteps = [
//   {
//     id: 1,
//     number: "01",
//     title: "Kickstart: Discover What's Possible",
//     subtitle: "Let's Explore Together",
//     description:
//       "Tell us your goals! We'll work side by side to spot the best AI opportunities for your business and map out your tech strengths.",
//     icon: FaSearch,
//     keyFeatures: [
//       "Share your vision in a collaborative session",
//       "Pinpoint high-impact AI opportunities—together",
//       "Quick tech-readiness check—no jargon",
//       "See your potential ROI and a clear action plan",
//     ],
//   },
//   {
//     id: 2,
//     number: "02",
//     title: "Co-Create: Design Your AI Blueprint",
//     subtitle: "Shape Solutions With Us",
//     description:
//       "Join our experts to design an AI solution tailored for you. Pick the perfect models and build smart data flows—your input matters at every step.",
//     icon: FaPencilRuler,
//     keyFeatures: [
//       "Choose AI models that fit your needs",
//       "Map out easy, efficient data flows",
//       "Visual system integration plan",
//       "Plan for growth—your future, your way",
//     ],
//   },
//   {
//     id: 3,
//     number: "03",
//     title: "Plug In: Integrate Seamlessly",
//     subtitle: "Connect Your World",
//     description:
//       "Watch AI come alive in your favorite tools (CRM, ERP, cloud)—with zero hassle. We handle the tech, you see the magic.",
//     icon: FaPlug,
//     keyFeatures: [
//       "Instant connection to your business apps",
//       "Custom APIs—built for your workflow",
//       "No-disruption, smooth rollout",
//       "Real-time data sync for instant results",
//     ],
//   },
//   {
//     id: 4,
//     number: "04",
//     title: "Lock Down: Secure & Govern",
//     subtitle: "Your Data, Always Safe",
//     description:
//       "Rest easy—your data is protected with top-tier security, privacy controls, and compliance built in from day one.",
//     icon: FaShieldAlt,
//     keyFeatures: [
//       "Bank-level security for your peace of mind",
//       "Full data privacy and control",
//       "Compliance? We've got it covered",
//       "Ethical AI—responsible and transparent",
//     ],
//   },
//   {
//     id: 5,
//     number: "05",
//     title: "Go Live: Deploy with Confidence",
//     subtitle: "Launch, Learn, Succeed",
//     description:
//       "It's launch time! We test, fine-tune, and train your team—so you get results from day one, with support always on standby.",
//     icon: FaRocket,
//     keyFeatures: [
//       "Thorough testing for a flawless start",
//       "Performance tweaks for real-world use",
//       "Hands-on team training sessions",
//       "Live support as you go live",
//     ],
//   },
//   {
//     id: 6,
//     number: "06",
//     title: "Grow: Optimize & Evolve",
//     subtitle: "Smarter Every Day",
//     description:
//       "Your AI never stops learning. With ongoing monitoring and feedback, we keep improving your solution as your business grows.",
//     icon: FaChartLine,
//     keyFeatures: [
//       "Real-time performance dashboards",
//       "Continuous improvement with your feedback",
//       "Automatic updates and retraining",
//       "Scale up seamlessly as you grow",
//     ],
//   },
// ];

// export default function SeamlessIntegration() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [currentScrollProgress, setCurrentScrollProgress] = useState(0);
//   const [currentStep, setCurrentStep] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showSentPopup, setShowSentPopup] = useState(false);
//   const [formKey, setFormKey] = useState(0); // for remounting ContactForm after send

//   useLayoutEffect(() => {
//     const updateWidths = () => {
//       if (carouselRef.current && containerRef.current) {
//         console.log("running if");
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
//     const stepIndex = Math.floor(latest * integrationSteps.length);
//     setCurrentStep(
//       Math.max(0, Math.min(stepIndex, integrationSteps.length - 1)),
//     );
//   });

//   const handleStepClick = (stepIndex: number) => {
//     if (containerRef.current) {
//       const containerTop =
//         containerRef.current.getBoundingClientRect().top + window.scrollY;
//       const containerHeight = containerRef.current.offsetHeight;
//       const viewportHeight = window.innerHeight;
//       const stepHeight = containerHeight / integrationSteps.length;
//       const targetPosition =
//         containerTop +
//         stepHeight * stepIndex -
//         viewportHeight / 2 +
//         stepHeight / 2;

//       window.scrollTo({
//         top: targetPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   const CurrentStepIcon = integrationSteps[currentStep].icon;

//   // Overlay click handler
//   const handleOverlayClick = useCallback(
//     (e: React.MouseEvent<HTMLDivElement>) => {
//       if (e.target === e.currentTarget) {
//         setIsModalOpen(false);
//       }
//     },
//     [],
//   );

//   // Close button handler
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   // Handle successful form submission
//   const handleFormSuccess = () => {
//     setShowSentPopup(true);
//     setTimeout(() => {
//       setShowSentPopup(false);
//       setIsModalOpen(false);
//       setFormKey((k) => k + 1); // Only reset form after successful send
//     }, 2000);
//   };

//   return (
//     <section className="w-full  text-white relative">
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

//       <div ref={containerRef} className="h-[500vh]">
//         <div className="sticky top-0 h-screen flex items-center py-8 md:py-16 px-4 sm:px-6 md:px-8">
//           <div className="max-w-7xl mx-auto w-full grid md:grid-cols-3 gap-8 md:gap-12 items-start">
//             {/* Left Content - Main Step Display */}
//             <div className="md:col-span-2">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-center md:text-left mb-4 md:mb-12"
//               >
//                 <h2 className="text-4xl md:text-4xl md:text-5xl font-light mb-3 text-white leading-tight">
//                   Seamless AI Integration
//                 </h2>
//                 <p className="text-base md:text-lg text-gray-300 max-w-2xl md:mx-0 mx-auto">
//                   Step by step — here&apos;s how we bring AI into your business
//                 </p>
//               </motion.div>

//               <motion.div
//                 key={currentStep}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="space-y-3 md:space-y-6"
//               >
//                 {/* Step Header */}
//                 <div className="flex items-center gap-3 md:gap-6 flex-wrap justify-center md:justify-start">
//                   <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-xl flex-shrink-0">
//                     <CurrentStepIcon className="text-xl md:text-2xl text-white" />
//                   </div>
//                   <div className="flex-1 min-w-[180px] text-center md:text-left">
//                     <div className="flex items-baseline gap-2 md:gap-3 mb-1">
//                       <div className="text-3xl md:text-4xl font-light text-white">
//                         {integrationSteps[currentStep].number}
//                       </div>
//                       <h3 className="text-2xl md:text-3xl text-left font-light text-white">
//                         <span className="">
//                           {integrationSteps[currentStep].title}
//                         </span>
//                       </h3>
//                     </div>
//                     <p className="text-sm text-purple-400 text-left">
//                       {integrationSteps[currentStep].subtitle}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center md:text-left">
//                   {integrationSteps[currentStep].description}
//                 </p>

//                 <motion.div
//                   key={`features-${currentStep}`}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                   className="bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-6 border border-white/10"
//                 >
//                   <h4 className="text-base md:text-lg font-medium mb-2 md:mb-4 text-white">
//                     Key Activities
//                   </h4>
//                   <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
//                     {integrationSteps[currentStep].keyFeatures.map(
//                       (feature, idx) => (
//                         <motion.div
//                           key={idx}
//                           initial={{ opacity: 0, x: -10 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ duration: 0.4, delay: idx * 0.1 }}
//                           className="flex items-start gap-2 md:gap-3"
//                         >
//                           <FaCheckCircle className="text-purple-300 mt-1 flex-shrink-0 text-xs md:text-sm" />
//                           <span className="text-gray-300 text-sm md:text-base">
//                             {feature}
//                           </span>
//                         </motion.div>
//                       ),
//                     )}
//                   </div>
//                 </motion.div>

//                 {currentStep === integrationSteps.length - 1 && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.3 }}
//                     className="pt-3 md:pt-4 text-center md:text-left"
//                   >
//                     <button
//                       onClick={() => setIsModalOpen(true)}
//                       className="inline-flex bg-white text-[#10002B] hover:bg-gray-100 px-5 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto md:mx-0"
//                     >
//                       <span>Start Your AI Journey</span>
//                       <FaArrowRight className="text-sm" />
//                     </button>
//                   </motion.div>
//                 )}
//               </motion.div>
//             </div>

//             {/* Right Content - Integration Steps List */}
//             <div className="md:col-span-1 mt-4 md:mt-0">
//               <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white text-center md:text-left">
//                 Integration Steps
//               </h3>
//               <nav className="grid grid-cols-2 gap-x-2 md:gap-x-4 md:grid-cols-1 gap-y-1 md:gap-y-2">
//                 {integrationSteps.map((step, index) => (
//                   <div
//                     key={step.id}
//                     onClick={() => handleStepClick(index)}
//                     className={twMerge(
//                       "w-full text-left flex items-center gap-3 p-2 md:p-4 rounded-lg transition-all duration-300 cursor-pointer",
//                       currentStep === index
//                         ? "bg-[#3F0071] shadow-lg border border-purple-600"
//                         : "bg-transparent border border-white/10 hover:bg-white/10",
//                     )}
//                   >
//                     <div
//                       className={twMerge(
//                         "w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all duration-300",
//                         currentStep === index ? "bg-white/10" : "bg-white/5",
//                       )}
//                     >
//                       <step.icon
//                         className={twMerge(
//                           "text-xs md:text-sm transition-colors duration-300",
//                           currentStep === index
//                             ? "text-white"
//                             : "text-gray-400 group-hover:text-white",
//                         )}
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-center gap-1 md:gap-2 mb-1">
//                         <span
//                           className={twMerge(
//                             "text-xs font-medium transition-colors duration-300",
//                             currentStep === index
//                               ? "text-white"
//                               : "text-gray-400 group-hover:text-white",
//                           )}
//                         >
//                           {step.number}
//                         </span>
//                         <span
//                           className={twMerge(
//                             "text-sm font-medium transition-colors hidden md:inline duration-300",
//                             currentStep === index
//                               ? "text-white"
//                               : "text-gray-400 group-hover:text-white",
//                           )}
//                         >
//                           {step.title}
//                         </span>
//                         <span
//                           className={twMerge(
//                             "text-sm font-medium transition-colors inline md:hidden duration-300",
//                             currentStep === index
//                               ? "text-white"
//                               : "text-gray-400 group-hover:text-white",
//                           )}
//                         >
//                           {step.title.split(":")[0]}
//                         </span>
//                       </div>
//                       <div
//                         className={twMerge(
//                           "w-full h-1 rounded-full transition-all duration-500",
//                           currentStep === index
//                             ? "bg-purple-500"
//                             : index < currentStep
//                               ? "bg-white/60"
//                               : "bg-white/20",
//                         )}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </nav>
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

//       {/* Modal */}
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//           onClick={handleOverlayClick}
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             className="bg-gradient-to-br from-[#10002B] to-[#240046] rounded-xl shadow-2xl w-full max-w-2xl relative"
//           >
//             <button
//               onClick={handleCloseModal}
//               className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
//             >
//               <FaTimes className="w-6 h-6" />
//             </button>
//             <div className="p-6">
//               <h2 className="text-2xl font-semibold mb-6 text-center text-white">
//                 Start Your AI Journey
//               </h2>
//               <ContactForm key={formKey} onSuccess={handleFormSuccess} />
//             </div>
//             {/* Sent popup */}
//             {showSentPopup && (
//               <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
//                 <div className="bg-[#7B2CBF] text-white px-8 py-4 rounded-lg shadow-lg text-xl font-semibold animate-fade-in-out">
//                   Message Sent!
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         </div>
//       )}
//     </section>
//   );
// }

"use client";

import React, {
  useRef,
  useLayoutEffect,
  useState,
  useCallback,
  useEffect,
} from "react";
import { motion, useScroll } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
} from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import ContactForm from "@/sections/contact-us/ContactForm";
import { IntegrationProps } from "./types/integrationTypes";
import {
  defaultIntegrationSteps,
  defaultTitle,
  defaultSubtitle,
} from "./data/integrationData";
import { integrationIcons } from "./icons/integrationIcons";

export default function SeamlessIntegration({
  steps = defaultIntegrationSteps,
  title = defaultTitle,
  subtitle = defaultSubtitle,
}: IntegrationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentScrollProgress, setCurrentScrollProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSentPopup, setShowSentPopup] = useState(false);
  const [formKey, setFormKey] = useState(0);

  useLayoutEffect(() => {
    const updateWidths = () => {
      if (carouselRef.current && containerRef.current) {
        console.log("running if");
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

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      setCurrentScrollProgress(latest);
      const stepIndex = Math.floor(latest * steps.length);
      setCurrentStep(Math.max(0, Math.min(stepIndex, steps.length - 1)));
    });
  }, [scrollYProgress, steps.length]);

  const handleStepClick = (stepIndex: number) => {
    if (containerRef.current) {
      const containerTop =
        containerRef.current.getBoundingClientRect().top + window.scrollY;
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const stepHeight = containerHeight / steps.length;
      const targetPosition =
        containerTop + stepHeight * stepIndex - viewportHeight / 2 + stepHeight / 2;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const CurrentStepIcon =
  integrationIcons[steps[currentStep].icon as keyof typeof integrationIcons];

  const handleOverlayClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setIsModalOpen(false);
  }, []);

  const handleCloseModal = () => setIsModalOpen(false);

  const handleFormSuccess = () => {
    setShowSentPopup(true);
    setTimeout(() => {
      setShowSentPopup(false);
      setIsModalOpen(false);
      setFormKey((k) => k + 1);
    }, 2000);
  };

  return (
    <section className="w-full text-white relative">
      {currentScrollProgress > 0 && currentScrollProgress < 1 && (
        <div className="fixed bottom-40 right-8 z-10">
          <button
            onClick={() => {
              const currentSection = containerRef.current?.parentElement;
              if (currentSection) {
                const prevSection = currentSection.previousElementSibling;
                if (prevSection) {
                  prevSection.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
          >
            <FaChevronUp className="text-white text-lg" />
          </button>
        </div>
      )}
      <div ref={containerRef} className="h-[500vh]">
        <div className="sticky top-0 h-screen flex items-center py-8 md:py-16 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Left Content */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-center md:text-left mb-4 md:mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-light mb-3 text-white leading-tight">
                  {title}
                </h2>
                <p className="text-base md:text-lg text-gray-300 max-w-2xl md:mx-0 mx-auto">
                  {subtitle}
                </p>
              </motion.div>
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3 md:space-y-6"
              >
                {/* Step Header */}
                <div className="flex items-center gap-3 md:gap-6 flex-wrap justify-center md:justify-start">
                  <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-xl flex-shrink-0">
                    <CurrentStepIcon className="text-xl md:text-2xl text-white" />
                  </div>
                  <div className="flex-1 min-w-[180px] text-center md:text-left">
                    <div className="flex items-baseline gap-2 md:gap-3 mb-1">
                      <div className="text-3xl md:text-4xl font-light text-white">
                        {steps[currentStep].number}
                      </div>
                      <h3 className="text-2xl md:text-3xl text-left font-light text-white">
                        <span className="">
                          {steps[currentStep].title}
                        </span>
                      </h3>
                    </div>
                    <p className="text-sm text-purple-400 text-left">
                      {steps[currentStep].subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center md:text-left">
                  {steps[currentStep].description}
                </p>

                <motion.div
                  key={`features-${currentStep}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-6 border border-white/10"
                >
                  <h4 className="text-base md:text-lg font-medium mb-2 md:mb-4 text-white">
                    Key Activities
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
                    {steps[currentStep].keyFeatures.map(
                      (feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <FaCheckCircle className="text-purple-300 mt-1 flex-shrink-0 text-xs md:text-sm" />
                          <span className="text-gray-300 text-sm md:text-base">
                            {feature}
                          </span>
                        </motion.div>
                      ),
                    )}
                  </div>
                </motion.div>

                {currentStep === steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="pt-3 md:pt-4 text-center md:text-left"
                  >
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex bg-white text-[#10002B] hover:bg-gray-100 px-5 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto md:mx-0"
                    >
                      <span>Start Your AI Journey</span>
                      <FaArrowRight className="text-sm" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Right Content - Integration Steps List */}
            <div className="md:col-span-1 mt-4 md:mt-0">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white text-center md:text-left">
                Integration Steps
              </h3>
              <nav className="grid grid-cols-2 gap-x-2 md:gap-x-4 md:grid-cols-1 gap-y-1 md:gap-y-2">
              {steps.map((step, index) => {
                  const StepIcon = integrationIcons[step.icon as keyof typeof integrationIcons];
                  return (
                    <div
                      key={step.id}
                      onClick={() => handleStepClick(index)}
                      className={twMerge(
                        "w-full text-left flex items-center gap-3 p-2 md:p-4 rounded-lg transition-all duration-300 cursor-pointer",
                        currentStep === index
                          ? "bg-[#3F0071] shadow-lg border border-purple-600"
                          : "bg-transparent border border-white/10 hover:bg-white/10"
                      )}
                    >
                      <div
                        className={twMerge(
                          "w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all duration-300",
                          currentStep === index
                            ? "bg-white/10"
                            : "bg-white/5"
                        )}
                      >
                         
                          <StepIcon
                            className={twMerge(
                              "text-xs md:text-sm transition-colors duration-300",
                              currentStep === index
                                ? "text-white"
                                : "text-gray-400 group-hover:text-white"
                            )}
                          />
                        
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1 md:gap-2 mb-1">
                          <span
                            className={twMerge(
                              "text-xs font-medium transition-colors duration-300",
                              currentStep === index
                                ? "text-white"
                                : "text-gray-400 group-hover:text-white"
                            )}
                          >
                            {step.number}
                          </span>
                          <span
                            className={twMerge(
                              "text-sm font-medium transition-colors hidden md:inline duration-300",
                              currentStep === index
                                ? "text-white"
                                : "text-gray-400 group-hover:text-white"
                            )}
                          >
                            {step.title}
                          </span>
                          <span
                            className={twMerge(
                              "text-sm font-medium transition-colors inline md:hidden duration-300",
                              currentStep === index
                                ? "text-white"
                                : "text-gray-400 group-hover:text-white"
                            )}
                          >
                            {step.title.split(":")[0]}
                          </span>
                        </div>
                        <div
                          className={twMerge(
                            "w-full h-1 rounded-full transition-all duration-500",
                            currentStep === index
                              ? "bg-purple-500"
                              : index < currentStep
                              ? "bg-white/60"
                              : "bg-white/20"
                          )}
                        />
                      </div>
                    </div>
                  );
                })}

              </nav>
            </div>
          </div>
        </div>
      </div>
      {currentScrollProgress > 0 && currentScrollProgress < 1 && (
        <div className="fixed bottom-24 right-8 z-10">
          <button
            onClick={() => {
              const currentSection = containerRef.current?.parentElement;
              if (currentSection) {
                const nextSection = currentSection.nextElementSibling;
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
          >
            <FaChevronDown className="text-white text-lg" />
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-gradient-to-br from-[#10002B] to-[#240046] rounded-xl shadow-2xl w-full max-w-2xl relative"
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                Start Your AI Journey
              </h2>
              <ContactForm key={formKey} onSuccess={handleFormSuccess} />
            </div>
            {/* Sent popup */}
            {showSentPopup && (
              <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
                <div className="bg-[#7B2CBF] text-white px-8 py-4 rounded-lg shadow-lg text-xl font-semibold animate-fade-in-out">
                  Message Sent!
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
