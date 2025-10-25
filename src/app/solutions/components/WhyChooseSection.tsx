// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaRocket,
//   FaUsers,
//   FaShieldAlt,
//   FaChartLine,
//   FaCogs,
//   FaAward,
// } from "react-icons/fa";

// const whyChooseData = [
//   {
//     id: 1,
//     icon: FaRocket,
//     title: "Future-Ready AI Technologies",
//     description:
//       "Purpose-built solutions that seamlessly integrate with your existing systems and evolve with your business needs.",
//     highlight: "Seamless Integration",
//   },
//   {
//     id: 2,
//     icon: FaUsers,
//     title: "Deep AI Expertise",
//     description:
//       "Elite team of ML engineers and AI specialists with proven expertise across Machine Learning and Generative AI technologies.",
//     highlight: "Expert Team",
//   },
//   {
//     id: 3,
//     icon: FaCogs,
//     title: "Complete Solution Portfolio",
//     description:
//       "End-to-end AI capabilities from data integration to conversational AI, designed specifically for enterprise scale and complexity.",
//     highlight: "Full-Stack Solutions",
//   },
//   {
//     id: 4,
//     icon: FaChartLine,
//     title: "Guaranteed Measurable Results",
//     description:
//       "Average 40% cost reduction, 65% faster decision-making, and 8.5-month ROI across all implementations.",
//     highlight: "Proven ROI",
//   },
//   {
//     id: 5,
//     icon: FaShieldAlt,
//     title: "Enterprise-Grade Security",
//     description:
//       "Military-grade data protection, full regulatory compliance, and ethical AI practices built into every solution.",
//     highlight: "Bank-Level Security",
//   },
//   {
//     id: 6,
//     icon: FaAward,
//     title: "Proven Track Record",
//     description:
//       "Over 500 successful AI implementations across diverse industries, delivering consistent results and exceeding client expectations.",
//     highlight: "500+ Success Stories",
//   },
// ];

// export default function WhyChooseSection() {
//   return (
//     <section className="w-full  text-white py-20 relative overflow-hidden">
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
//         <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl md:text-6xl font-light mb-6 text-white">
//             Why Choose DataTroops?
//           </h2>
//           <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
//             We don&apos;t just implement AI—we engineer intelligent ecosystems
//             that deliver
//             <span className="text-white font-semibold">
//               {" "}
//               measurable business impact
//             </span>
//             . Our solutions tackle the most critical challenges of modern
//             enterprises, driving automation, security, and innovation at scale.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {whyChooseData.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0, delay: index * 0.1 }}
//               className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/1 transition-all duration-500 hover:transform hover:scale-105"
//             >
//               <div className="inline-flex p-4 rounded-xl bg-white/10 mb-6 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
//                 <item.icon className="text-2xl text-white" />
//               </div>

//               <div className="absolute top-4 right-4">
//                 <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white">
//                   {item.highlight}
//                 </span>
//               </div>

//               <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors duration-300">
//                 {item.title}
//               </h3>
//               <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
//                 {item.description}
//               </p>

//               <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-2xl transition-all duration-500" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import { WhyChooseSectionProps } from "./types/whyChooseTypes";
import { whyChooseIcons } from "./icons/whyChooseIcons"; 

const highlighted = "measurable business impact";
export default function WhyChooseSection({
  heading,
  subheading,
  items,
}: WhyChooseSectionProps) {
  return (
    <section className="w-full text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-white">
            {heading}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {subheading.split(highlighted).map((part, index, arr) => (
              <React.Fragment key={index}>
                {part}
                {index < arr.length - 1 && (
                  <span className="text-white font-semibold">{highlighted}</span>
                )}
              </React.Fragment>
            ))}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {items.map((item, index) => {
            const Icon = whyChooseIcons[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/1 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="inline-flex p-4 rounded-xl bg-white/10 mb-6 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-2xl text-white" />
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {item.description}
                </p>

                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-2xl transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
