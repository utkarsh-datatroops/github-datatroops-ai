// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaChartLine, FaRobot, FaHeadset, FaArrowRight } from "react-icons/fa";
// import Tooltip from "@/components/ToolTip";

// const caseStudiesData = [
//   {
//     id: 1,
//     title: "Global Fintech Transformation",
//     client: "Leading Digital Banking Platform",
//     industry: "Financial Services",
//     challenge:
//       "Fragmented data across 15+ systems hindering real-time decision making",
//     solution: "Intelligent Data Integration & Analytics (ML)",
//     icon: FaChartLine,
//     gradient: "from-blue-600 to-purple-600",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     results: [
//       {
//         metric: "Data Processing Time",
//         value: "85%",
//         description: "reduction (6hrs → 54min)",
//       },
//       {
//         metric: "Annual Savings",
//         value: "$2.3M",
//         description: "through automation",
//       },
//       {
//         metric: "Fraud Detection",
//         value: "40%",
//         description: "accuracy improvement",
//       },
//       {
//         metric: "Decision Speed",
//         value: "Real-time",
//         description: "instant credit decisions",
//       },
//     ],
//     details: [
//       "Real-time data harmonization from CRM, transaction systems, and external APIs",
//       "ML-powered anomaly detection and pattern recognition",
//       "Automated data reconciliation and validation processes",
//     ],
//   },
//   {
//     id: 2,
//     title: "Manufacturing Excellence",
//     client: "Fortune 500 Automotive Manufacturer",
//     industry: "Manufacturing",
//     challenge: "Unplanned equipment downtime costing $50K per hour",
//     solution: "Predictive Analytics & Workflow Automation",
//     icon: FaRobot,
//     gradient: "from-orange-500 to-red-600",
//     image:
//       "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     results: [
//       {
//         metric: "Downtime Reduction",
//         value: "72%",
//         description: "unplanned maintenance",
//       },
//       {
//         metric: "Annual Savings",
//         value: "$8.5M",
//         description: "predictive maintenance",
//       },
//       {
//         metric: "Workflow Speed",
//         value: "45%",
//         description: "faster execution",
//       },
//       {
//         metric: "Prediction Accuracy",
//         value: "94%",
//         description: "48hr advance warning",
//       },
//     ],
//     details: [
//       "IoT sensor integration with predictive maintenance algorithms",
//       "Automated workflow orchestration for maintenance scheduling",
//       "Real-time equipment health monitoring and alerts",
//     ],
//   },
//   {
//     id: 3,
//     title: "E-Commerce Support Revolution",
//     client: "Top 10 Global E-Commerce Platform",
//     industry: "E-Commerce",
//     challenge: "2M+ monthly support tickets overwhelming human agents",
//     solution: "AI-Powered Customer Support & Chatbots",
//     icon: FaHeadset,
//     gradient: "from-green-500 to-teal-600",
//     image:
//       "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     results: [
//       {
//         metric: "Query Resolution",
//         value: "89%",
//         description: "autonomous handling",
//       },
//       {
//         metric: "Response Time",
//         value: "65%",
//         description: "faster (4hrs → 1.4hrs)",
//       },
//       {
//         metric: "Cost Savings",
//         value: "$4.2M",
//         description: "annual operations",
//       },
//       {
//         metric: "Satisfaction",
//         value: "38%",
//         description: "increase in scores",
//       },
//     ],
//     details: [
//       "Multi-language conversational AI with sentiment analysis",
//       "Seamless human handoff for complex queries",
//       "24/7 automated support with contextual understanding",
//     ],
//   },
// ];

// export default function CaseStudiesSection() {
//   const [activeCase, setActiveCase] = useState(0);

//   return (
//     <section className="w-full text-white py-20">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
//             Real-World Results
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Discover how leading organizations transformed their operations with
//             our AI solutions, achieving measurable impact and sustainable
//             growth.
//           </p>
//         </motion.div>

//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {caseStudiesData.map((caseStudy, index) => (
//             <button
//               key={caseStudy.id}
//               onClick={() => setActiveCase(index)}
//               className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 activeCase === index
//                   ? "bg-white text-gray-900 shadow-lg"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               {caseStudy.industry}
//             </button>
//           ))}
//         </div>

//         <motion.div
//           key={activeCase}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="grid lg:grid-cols-2 gap-12 items-center"
//         >
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <div
//                   className={`p-3 rounded-lg bg-gradient-to-r ${caseStudiesData[activeCase].gradient}`}
//                 ></div>
//                 <div>
//                   <h3 className="text-3xl font-bold">
//                     {caseStudiesData[activeCase].title}
//                   </h3>
//                   <p className="text-purple-300">
//                     {caseStudiesData[activeCase].client}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white/5 rounded-xl p-6 border border-white/10">
//               <h4 className="text-lg font-semibold mb-3 text-red-300">
//                 Challenge
//               </h4>
//               <p className="text-gray-300">
//                 {caseStudiesData[activeCase].challenge}
//               </p>
//             </div>

//             <div className="bg-white/5 rounded-xl p-6 border border-white/10">
//               <h4 className="text-lg font-semibold mb-3 text-blue-300">
//                 Solution
//               </h4>
//               <p className="text-white font-medium mb-3">
//                 {caseStudiesData[activeCase].solution}
//               </p>
//               <ul className="space-y-2">
//                 {caseStudiesData[activeCase].details.map((detail, idx) => (
//                   <li key={idx} className="flex items-start text-gray-300">
//                     <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
//                     {detail}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <Tooltip message="Coming Soon">
//               <button className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
//                 <span>View Full Case Study</span>
//                 <FaArrowRight />
//               </button>
//             </Tooltip>
//           </div>

//           <div className="space-y-6">
//             <div className="relative rounded-2xl overflow-hidden h-64 mb-8">
//               <img
//                 src={caseStudiesData[activeCase].image}
//                 alt={caseStudiesData[activeCase].title}
//                 className="w-full h-full object-cover"
//               />
//               <div
//                 className={`absolute inset-0 bg-gradient-to-t ${caseStudiesData[activeCase].gradient} opacity-80`}
//               />
//               <div className="absolute bottom-4 left-4 text-white">
//                 <p className="text-sm opacity-90">Industry</p>
//                 <p className="text-xl font-bold">
//                   {caseStudiesData[activeCase].industry}
//                 </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               {caseStudiesData[activeCase].results.map((result, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5, delay: idx * 0.1 }}
//                   className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
//                 >
//                   <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
//                     {result.value}
//                   </div>
//                   <div className="text-sm text-gray-300 mb-1">
//                     {result.metric}
//                   </div>
//                   <div className="text-xs text-purple-300">
//                     {result.description}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Tooltip from "@/components/ToolTip";
import { CaseStudy } from "@/app/solutions/components/types/caseStudiesTypes";
import { caseStudiesData } from "@/app/solutions/components/data/caseStudiesData";

interface Props {
  data?: CaseStudy[];
  sectionTitle?: string;
  sectionDescription?: string;
}

const CaseStudiesSection: React.FC<Props> = ({
  data = caseStudiesData,
  sectionTitle = "Real-World Results",
  sectionDescription = "Discover how leading organizations transformed their operations with our AI solutions, achieving measurable impact and sustainable growth.",
}) => {
  const [activeCase, setActiveCase] = useState(0);

  if (!data || data.length === 0) return null;
  const caseStudy = data[activeCase];

  return (
    <section className="w-full text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            {sectionTitle}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {data.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setActiveCase(idx)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCase === idx
                  ? "bg-white text-gray-900 shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {cs.industry ?? "Industry"}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${caseStudy.gradient ?? "from-gray-500 to-gray-700"}`}
                ></div>
                <div>
                  <h3 className="text-3xl font-bold">
                    {caseStudy.title ?? "Case Study"}
                  </h3>
                  <p className="text-purple-300">
                    {caseStudy.client ?? "Client Info"}
                  </p>
                </div>
              </div>
            </div>

            {caseStudy.challenge && (
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold mb-3 text-red-300">
                  Challenge
                </h4>
                <p className="text-gray-300">{caseStudy.challenge}</p>
              </div>
            )}

            {(caseStudy.solution ||
              (caseStudy.details && caseStudy.details.length > 0)) && (
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold mb-3 text-blue-300">
                  Solution
                </h4>
                {caseStudy.solution && (
                  <p className="text-white font-medium mb-3">
                    {caseStudy.solution}
                  </p>
                )}
                {caseStudy.details && caseStudy.details.length > 0 && (
                  <ul className="space-y-2">
                    {caseStudy.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <Tooltip message="Coming Soon">
              <button className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span>View Full Case Study</span>
                <FaArrowRight />
              </button>
            </Tooltip>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden h-64 mb-8">
              <img
                src={caseStudy.image ?? ""}
                alt={caseStudy.title ?? "Case Study"}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${caseStudy.gradient ?? "from-gray-700 to-gray-900"} opacity-80`}
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-90">Industry</p>
                <p className="text-xl font-bold">
                  {caseStudy.industry ?? "N/A"}
                </p>
              </div>
            </div>

            {caseStudy.results && caseStudy.results.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {caseStudy.results.map((result, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      {result.value}
                    </div>
                    <div className="text-sm text-gray-300 mb-1">
                      {result.metric}
                    </div>
                    <div className="text-xs text-purple-300">
                      {result.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
