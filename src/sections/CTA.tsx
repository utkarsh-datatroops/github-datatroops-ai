// "use client";

// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import RobotIcon2 from "@/assets/images/test-30.png";

// const MotionDiv = dynamic(
//   () => import("framer-motion").then((mod) => mod.motion.div),
//   { ssr: false },
// );

// const CTASection: React.FC = () => {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) return null;

//   return (
//     // from-purple-700 via-indigo-800 to-purple-900
//     <section
//       className=" pb-24 md:pb-14 bg-gradient-to-r
//   `from-[var(--color-5A189A)] via-[var(--color-7B2CBF)] to-[var(--color-9D4EDD)]`   py-16 px-4 text-white text-center md:text-left"
//     >
//       <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center ">
//         <MotionDiv
//           className="md:w-1/2 space-y-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//         >
//           {/* from-pink-500 via-yellow-400 to-blue-500 */}
//           <h2 className="text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-C77DFF)] via-[var(--color-E0AAFF)] to-[var(--color-240046)]">
//             Ready to Revolutionize Your Workflow?
//           </h2>
//           <p className="text-lg md:text-xl font-light opacity-80">
//             Emphasize how your AI assistant can help users streamline their
//             scheduling and tasks, improve efficiency, and transform their
//             workflow.
//           </p>
//           <div className="mt-8">
//             {/* from-pink-500 to-blue-600 */}
//             <a
//               href="#contact"
//               className="inline-flex items-center justify-center md:justify-start px-8 py-4 rounded-lg bg-gradient-to-r bg-[var(--color-7B2CBF)] hover:bg-[var(--color-9D4EDD)] text-white font-bold text-xl hover:from-pink-600 hover:to-blue-700 transition ease-in-out duration-300 transform hover:scale-105"
//             >
//               Get Started
//               <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
//             </a>
//           </div>
//         </MotionDiv>

//         <MotionDiv
//           className="md:w-1/2 mt-8 mb-16 md:mt-0"
//           initial={{ x: 200 }}
//           animate={{ x: 0 }}
//           transition={{ type: "spring", stiffness: 120, damping: 30 }}
//         >
//           <div className="rounded-full  text-purple-800 flex items-center justify-center mx-auto">
//             <Image
//               src={RobotIcon2}
//               unoptimized={true}
//               alt="Robot assistant"
//               //   width={64}
//               //   height={64}
//               style={{
//                 borderRadius: "50px",
//               }}
//             />
//           </div>
//         </MotionDiv>
//       </div>
//     </section>
//   );
// };

// export default CTASection;

"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import Image, { StaticImageData } from "next/image";
import RobotIcon2 from "@/assets/images/test-30.png";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: StaticImageData | string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to Revolutionize Your Workflow?",
  description = "Emphasize how your AI assistant can help users streamline their scheduling and tasks, improve efficiency, and transform their workflow.",
  buttonText = "Get Started",
  buttonLink = "/contact-us",
  image = RobotIcon2,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section
      className="pb-24 md:pb-14 bg-gradient-to-r 
      `from-[var(--color-5A189A)] via-[var(--color-7B2CBF)] to-[var(--color-9D4EDD)]` py-16 px-4 text-white text-center md:text-left"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
        <MotionDiv
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {title && (
            <h2 className="text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-C77DFF)] via-[var(--color-E0AAFF)] to-[var(--color-240046)]">
              {title}
            </h2>
          )}

          {description && (
            <p className="text-lg md:text-xl font-light opacity-80">
              {description}
            </p>
          )}

          {buttonText && buttonLink && (
            <div className="mt-8">
              <a
                href={buttonLink}
                className="inline-flex items-center justify-center md:justify-start px-8 py-4 rounded-lg bg-gradient-to-r bg-[var(--color-7B2CBF)] hover:bg-[var(--color-9D4EDD)] text-white font-bold text-xl hover:from-pink-600 hover:to-blue-700 transition ease-in-out duration-300 transform hover:scale-105"
              >
                {buttonText}
                <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
              </a>
            </div>
          )}
        </MotionDiv>

        {image && (
          <MotionDiv
            className="md:w-1/2 mt-8 mb-16 md:mt-0"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 30 }}
          >
            <div className="rounded-full text-purple-800 flex items-center justify-center mx-auto">
              <Image
                src={image}
                alt="CTA image"
                unoptimized
                style={{
                  borderRadius: "50px",
                }}
              />
            </div>
          </MotionDiv>
        )}
      </div>
    </section>
  );
};

export default CTASection;
