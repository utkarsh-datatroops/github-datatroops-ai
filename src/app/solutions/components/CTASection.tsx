// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// export default function SolutionsCTA() {
//   return (
//     <section className="w-full bg-gradient-to-br from-[#10002B] to-[#240046] text-white py-10 relative overflow-hidden">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mt-2"
//       >
//         <h3 className="text-3xl font-bold mb-4 text-white">
//           Ready to Transform Your Business?
//         </h3>
//         <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//           Experience the DataTroops difference. Let&apos;s discuss how our AI
//           solutions can drive measurable impact for your organization.
//         </p>
//         <div className="flex flex-wrap justify-center gap-4">
//           <a
//             href="/contact-us"
//             className="inline-flex bg-white text-[#10002B] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
//           >
//             Schedule a Strategy Session
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import { CTAProps } from "./types/CTATypes";
import { defaultCTAContent } from "./data/CTAData";

export default function SolutionsCTA({
  title = defaultCTAContent.title,
  description = defaultCTAContent.description,
  buttonText = defaultCTAContent.buttonText,
  buttonLink = defaultCTAContent.buttonLink,
}: CTAProps) {
  return (
    <section className="w-full bg-gradient-to-br from-[#10002B] to-[#240046] text-white py-10 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-2"
      >
        <h3 className="text-3xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={buttonLink}
            className="inline-flex bg-white text-[#10002B] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {buttonText}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
