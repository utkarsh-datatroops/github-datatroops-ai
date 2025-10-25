// "use client";
// import React from "react";
// import { FaBriefcase, FaHandshake, FaUserFriends } from "react-icons/fa";
// import { motion } from "framer-motion";

// const values = [
//   {
//     icon: <FaBriefcase className="text-4xl text-white" />, // Work
//     title: "Attitude To Work",
//     desc: "We approach every project with dedication, professionalism, and a commitment to excellence.",
//     points: [
//       "Professional approach to every task",
//       "Meeting deadlines consistently",
//       "Innovative problem-solving",
//       "Continuous improvement mindset",
//     ],
//     gradient: "from-[#7B2CBF] to-[#5A189A]",
//   },
//   {
//     icon: <FaHandshake className="text-4xl text-white" />, // Client
//     title: "Attitude To Client",
//     desc: "Our clients are our partners in success, and we prioritize their needs and satisfaction.",
//     points: [
//       "Clear communication",
//       "Transparent processes",
//       "Dedicated support",
//       "Value-driven solutions",
//       "Long-term partnerships",
//     ],
//     gradient: "from-[#5A189A] to-[#7B2CBF]",
//   },
//   {
//     icon: <FaUserFriends className="text-4xl text-white" />, // Employee
//     title: "Attitude To Employee",
//     desc: "Our employees are our greatest asset, and we foster a culture of growth and respect.",
//     points: [
//       "Professional development",
//       "Work-life balance",
//       "Inclusive environment",
//       "Career growth opportunities",
//       "Recognition and rewards",
//     ],
//     gradient: "from-[#240046] to-[#7B2CBF]",
//   },
// ];

// const cardVariants = {
//   offscreen: { opacity: 0, y: 40 },
//   onscreen: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.7, type: "spring" },
//   }),
// };

// export default function CompanyEthics() {
//   return (
//     <section className="w-full py-12 px-4 bg-gradient-to-r from-[#10002B] to-[#240046] flex flex-col items-center">
//       <div className="max-w-4xl mx-auto text-center mb-12">
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
//           Our Company Ethics
//         </h2>
//         <div className="w-24 h-1 bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] mx-auto rounded-full mb-4"></div>
//         <p className="text-gray-300 max-w-2xl mx-auto">
//           At DataTroops, our values shape every interaction—with our work, our
//           clients, and our team. Here&apos;s what drives us every day.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
//         {values.map((val, i) => (
//           <motion.div
//             key={val.title}
//             className="bg-white/5 rounded-2xl shadow-xl p-8 flex flex-col items-start border border-[#7B2CBF]/20 backdrop-blur-md hover:scale-105 transition-transform duration-300"
//             initial="offscreen"
//             whileInView="onscreen"
//             viewport={{ once: true, amount: 0.3 }}
//             custom={i}
//             variants={cardVariants}
//           >
//             <div
//               className={`mb-6 w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${val.gradient} shadow-lg`}
//             >
//               {val.icon}
//             </div>
//             <h3 className="text-2xl font-bold text-white mb-2">{val.title}</h3>
//             <p className="text-gray-200 mb-4">{val.desc}</p>
//             <ul className="space-y-2">
//               {val.points.map((point, idx) => (
//                 <li key={idx} className="flex items-start gap-2">
//                   <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]"></span>
//                   <span className="text-gray-100">{point}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";
import React from "react";
import { FaBriefcase, FaHandshake, FaUserFriends } from "react-icons/fa";
import { motion } from "framer-motion";
import { CompanyEthicsData } from "@/app/about-us/Types/companyEthicsTypes";

interface Props {
  data: CompanyEthicsData;
}

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring" },
  }),
};

// Icon resolver based on string
const resolveIcon = (icon: string) => {
  switch (icon) {
    case "work":
      return <FaBriefcase className="text-4xl text-white" />;
    case "client":
      return <FaHandshake className="text-4xl text-white" />;
    case "employee":
      return <FaUserFriends className="text-4xl text-white" />;
    default:
      return null;
  }
};

export default function CompanyEthics({ data }: Props) {
  return (
    <section className="w-full py-12 px-4 bg-gradient-to-r from-[#10002B] to-[#240046] flex flex-col items-center">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          {data.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] mx-auto rounded-full mb-4"></div>
        <p className="text-gray-300 max-w-2xl mx-auto">{data.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {data.values.map((val, i) => (
          <motion.div
            key={val.title}
            className="bg-white/5 rounded-2xl shadow-xl p-8 flex flex-col items-start border border-[#7B2CBF]/20 backdrop-blur-md hover:scale-105 transition-transform duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            variants={cardVariants}
          >
            <div
              className={`mb-6 w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${val.gradient} shadow-lg`}
            >
              {resolveIcon(val.icon)}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{val.title}</h3>
            <p className="text-gray-200 mb-4">{val.desc}</p>
            <ul className="space-y-2">
              {val.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]"></span>
                  <span className="text-gray-100">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
