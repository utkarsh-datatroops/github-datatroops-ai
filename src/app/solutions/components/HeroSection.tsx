// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";
// import digitalMarketingHeroBg from "@/assets/images/aiSolutions/hero-section-bg.jpg";

// export default function HeroSection() {
//   const floaters = [
//     {
//       id: 1,
//       text: "Intelligent Data Integration & Analytics",
//       icon: <FaStar className="text-purple-300" />,
//       top: "15%",
//       left: "10%",
//     },
//     {
//       id: 2,
//       text: "Workflow Automation",
//       icon: <FaStar className="text-purple-300" />,
//       top: "30%",
//       right: "8%",
//     },
//     {
//       id: 3,
//       text: "Predictive Analytics & Forecasting",
//       icon: <FaStar className="text-purple-300" />,
//       bottom: "20%",
//       left: "5%",
//     },
//     {
//       id: 4,
//       text: "AI-Powered Customer Support & Chatbots",
//       icon: <FaStar className="text-purple-300" />,
//       bottom: "10%",
//       right: "15%",
//     },
//     {
//       id: 5,
//       text: "AIOps (AI for IT Operations)",
//       icon: <FaStar className="text-purple-300" />,
//       top: "5%",
//       left: "35%",
//     },
//     {
//       id: 6,
//       text: "Voice Assistants & Conversational AI",
//       icon: <FaStar className="text-purple-300" />,
//       bottom: "30%",
//       right: "10%",
//     },
//   ];

//   return (
//     <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden p-4 md:p-8">
//       <Image
//         src={digitalMarketingHeroBg}
//         alt="Digital Marketing Background"
//         layout="fill"
//         objectFit="cover"
//         quality={100}
//         className="z-0"
//         priority
//       />

//       <div className="absolute inset-0 bg-black/40 z-10"></div>

//       <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-20 md:py-28 max-w-4xl mx-auto">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
//         >
//           Architect Your Future with{" "}
//           <motion.span
//             initial={{ color: "#9D4EDD" }}
//             animate={{
//               color: ["#9D4EDD", "#E0AAFF", "#C77DFF", "#9D4EDD"],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//           >
//             AI
//           </motion.span>{" "}
//           That Delivers
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl"
//         >
//           Smarter Automation. Faster Decisions. Measurable Impact.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="flex flex-col sm:flex-row gap-4"
//         >
//           <a
//             href="/contact-us"
//             className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-gray-900 font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300"
//           >
//             Get In Touch
//           </a>
//           {/* <a
//             href="/solutions"
//             className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white text-white font-semibold shadow-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
//           >
//             Learn More
//           </a> */}
//         </motion.div>
//       </div>

//       {floaters.map((floater) => (
//         <motion.div
//           key={floater.id}
//           className={`absolute bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm flex items-center shadow-lg whitespace-nowrap text-purple-300 ${floater.id !== 3 && floater.id !== 5 && floater.id !== 1 ? "hidden md:flex" : ""}`}
//           initial={{ opacity: 0.8, scale: 1 }}
//           animate={{ opacity: 1, scale: 1, y: [0, -2, 0] }}
//           transition={{
//             duration: 2,
//             delay: 1 + floater.id * 0.1,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//           style={{
//             top: floater.top,
//             left: floater.left,
//             right: floater.right,
//             bottom: floater.bottom,
//           }}
//         >
//           <span className="mr-2 text-white">{floater.icon}</span>
//           {floater.text}
//         </motion.div>
//       ))}
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeroProps } from "@/app/solutions/components/types/heroTypes";
import { heroIcons } from "./icons/heroIcons";

export default function Hero({
  backgroundImage,
  heading,
  subheading,
  cta,
  floaters,
  showFloaters = true,
}: HeroProps) {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden p-4 md:p-8">
      <Image
        src={backgroundImage}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
        priority
      />

      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Hero text */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-20 md:py-28 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
        >
          {/* {heading.before}
          <motion.span
            initial={{ color: "#9D4EDD" }}
            animate={{
              color: ["#9D4EDD", "#E0AAFF", "#C77DFF", "#9D4EDD"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {heading.highlight}
          </motion.span>{" "}
          {heading.after} */}
          {heading.heading}
        </motion.h1>

        {subheading && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl"
          >
            {subheading}
          </motion.p>
        )}

        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={cta.href}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-gray-900 font-semibold shadow-lg hover:bg-gray-200 transition-all duration-300"
            >
              {cta.label}
            </a>
          </motion.div>
        )}
      </div>

      {/* Floaters */}
      {showFloaters &&
        floaters?.map((floater) => {
          const Icon = heroIcons[floater.icon];
          return (
            <motion.div
              key={floater.id}
              className={`absolute bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm flex items-center shadow-lg whitespace-nowrap text-purple-300 ${
                floater.responsive ? "" : "hidden md:flex"
              }`}
              initial={{ opacity: 0.8, scale: 1 }}
              animate={{ opacity: 1, scale: 1, y: [0, -2, 0] }}
              transition={{
                duration: 2,
                delay: 1 + floater.id * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              style={{
                top: floater.top,
                left: floater.left,
                right: floater.right,
                bottom: floater.bottom,
              }}
            >
              <span className="mr-2 text-white">
                <Icon />
              </span>
              {floater.text}
            </motion.div>
          );
        })}
    </section>
  );
}
