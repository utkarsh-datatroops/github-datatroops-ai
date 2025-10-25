// "use client";

// import React, { SVGProps, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import blogsImage from "@/assets/images/blogs.avif";
// import DataTroopsLogo from "./datatroopsLogo.svg";
// import { StaticImageData } from "next/image";

// interface SuccessStory {
//   id: number;
//   type: "case-study" | "testimonial";
//   company: string;
//   logo: React.FunctionComponent<SVGProps<SVGSVGElement>>;
//   title: string;
//   description?: string;
//   stats?: {
//     label: string;
//     value: string;
//     description: string;
//   }[];
//   backgroundImage?: string | StaticImageData; // <-- allow both
// }

// const successStories: SuccessStory[] = [
//   {
//     id: 1,
//     type: "case-study",
//     company: "FinNova Bank",
//     logo: DataTroopsLogo,
//     title:
//       "FinNova slashes support wait time with our AI-driven chat assistant",
//     description:
//       "FinNova, a digital-first banking platform, implemented our AI chat assistant to handle thousands of customer queries in real-time, reducing dependency on human agents and improving customer satisfaction.",
//     stats: [
//       {
//         label: "SUPPORT EFFICIENCY",
//         value: "95%",
//         description: "queries resolved without human involvement",
//       },
//       {
//         label: "CUSTOMER SATISFACTION",
//         value: "4.8/5",
//         description: "average user rating post-deployment",
//       },
//     ],
//     backgroundImage: blogsImage,
//   },
//   {
//     id: 2,
//     type: "testimonial",
//     company: "HealthMate",
//     logo: DataTroopsLogo,
//     title:
//       "HealthMate scaled multilingual patient support using conversational AI",
//     backgroundImage: blogsImage,
//   },
//   {
//     id: 3,
//     type: "case-study",
//     company: "LogiChain",
//     logo: DataTroopsLogo,
//     title:
//       "LogiChain boosts operational efficiency with AI-led ticket automation",
//     description:
//       "LogiChain, a global logistics firm, reduced internal support load by introducing an AI system to handle ticketing, FAQs, and workflows — saving hundreds of hours monthly.",
//     stats: [
//       {
//         label: "TICKET RESOLUTION TIME",
//         value: "↓ 60%",
//         description: "average time reduced for internal queries",
//       },
//       {
//         label: "RESOURCE SAVINGS",
//         value: "300+ hrs",
//         description: "engineering hours saved each month",
//       },
//     ],
//     backgroundImage: blogsImage,
//   },
//   {
//     id: 4,
//     type: "testimonial",
//     company: "SkillForge",
//     logo: DataTroopsLogo,
//     title: "SkillForge delivers 24/7 course assistance with our AI tutor",
//     backgroundImage: blogsImage,
//   },
//   {
//     id: 5,
//     type: "case-study",
//     company: "RetailX",
//     logo: DataTroopsLogo,
//     title: "RetailX increases conversion rates with real-time product advisors",
//     description:
//       "RetailX deployed our AI-powered product advisor to assist shoppers in real time, leading to a measurable increase in cart completions and customer engagement.",
//     stats: [
//       {
//         label: "CONVERSION LIFT",
//         value: "22%",
//         description: "increase in purchases after AI deployment",
//       },
//       {
//         label: "ENGAGEMENT BOOST",
//         value: "3.5x",
//         description: "longer average session times with AI chat",
//       },
//     ],
//     backgroundImage: blogsImage,
//   },
// ];

// const SuccessStoriesSection: React.FC = () => {
//   const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
//   const currentStory = successStories[currentStoryIndex];

//   const handlePrevious = () => {
//     setCurrentStoryIndex((prevIndex) =>
//       prevIndex === 0 ? successStories.length - 1 : prevIndex - 1,
//     );
//   };

//   const handleNext = () => {
//     setCurrentStoryIndex((prevIndex) =>
//       prevIndex === successStories.length - 1 ? 0 : prevIndex + 1,
//     );
//   };

//   const LargeScreenView = () => (
//     <div className="relative w-full overflow-hidden">
//       <motion.div
//         key={currentStory.id}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="w-full"
//       >
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">
//             Success Stories
//           </h2>
//           <div className="mt-4 flex justify-center">
//             <div className="w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]" />
//           </div>
//           <p className="mt-4 text-gray-300 max-w-3xl mx-auto"></p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
//           <div className="md:col-span-5 p-6 md:p-12 flex flex-col justify-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
//               The results speak for themselves, just like our customers
//             </h2>
//             <Link
//               href="/success-stories"
//               className="text-gray-300 font-medium flex items-center mt-4 mb-8 hover:underline"
//             >
//               View more success stories
//               <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
//             </Link>

//             <div className="flex space-x-4 mt-auto">
//               <button
//                 onClick={handlePrevious}
//                 className="h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:text-[var(--color-7B2CBF)] transition-colors"
//               >
//                 <FontAwesomeIcon
//                   icon={faArrowLeft}
//                   className="h-4 w-4 hover:text-[var(--color-7B2CBF)]"
//                 />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:text-[var(--color-7B2CBF)] transition-colors"
//               >
//                 <FontAwesomeIcon
//                   icon={faArrowRight}
//                   className="h-4 w-4 hover:text-[var(--color-7B2CBF)]"
//                 />
//               </button>
//             </div>
//           </div>

//           <div className="md:col-span-7 relative">
//             <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg">
//               <div className="relative h-64 md:h-96">
//                 {currentStory.backgroundImage && (
//                   <div className="absolute inset-0">
//                     <Image
//                       unoptimized={true}
//                       src={currentStory.backgroundImage}
//                       alt={currentStory.company}
//                       fill
//                       objectFit="cover"
//                       priority
//                       className="filter"
//                       // blur-sm
//                     />
//                   </div>
//                 )}
//                 {/*  absolute bottom-6 left-6 */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   {/* <Image
//                     src={currentStory.logo}
//                     alt={currentStory.company}
//                     width={160}
//                     height={50}
//                     className="h-10 w-auto"
//                   /> */}
//                   {/* <currentStory.logo width={2000} height={200} /> */}
//                 </div>
//               </div>

//               <div className="p-6">
//                 <div className="inline-block px-3 py-1 bg-[var(--color-E0AAFF)] text-[var(--color-7B2CBF)] text-sm font-medium rounded-md mb-3">
//                   {currentStory.type === "case-study"
//                     ? "Case study"
//                     : "Testimonial"}
//                 </div>

//                 <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
//                   {currentStory.title}
//                 </h3>

//                 {currentStory.description && (
//                   <p className="text-gray-700 mb-6">
//                     {currentStory.description}
//                   </p>
//                 )}

//                 {currentStory.stats && (
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                     {currentStory.stats.map((stat, index) => (
//                       <div key={index} className="bg-gray-100 p-4 rounded-lg">
//                         <div className="text-xs text-indigo-800 font-medium mb-1">
//                           {stat.label}
//                         </div>
//                         <div className="text-3xl font-bold mb-1">
//                           {stat.value}
//                         </div>
//                         <div className="text-sm text-gray-800">
//                           {stat.description}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* <Link
//                   href={`/success-stories/${currentStory.id}`}
//                   className="text-indigo-600 font-medium flex items-center mt-4 hover:underline"
//                 >
//                   Coming Soon...
//                   <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
//                 </Link> */}
//                 <span className="text-gray-400 font-medium flex items-center mt-2 cursor-not-allowed">
//                   Coming Soon...
//                   {/* <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" /> */}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );

//   const SmallScreenView = () => (
//     <div className="w-full md:hidden">
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold mb-4">
//           The results speak for themselves, just like our customers
//         </h2>
//         <Link
//           href="/success-stories"
//           className="text-indigo-600 font-medium flex items-center justify-center mt-4 hover:underline"
//         >
//           View more success stories
//           <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
//         </Link>
//       </div>

//       <div className="grid grid-cols-1 gap-6">
//         {successStories.map((story) => (
//           <div
//             key={story.id}
//             className="bg-white rounded-2xl overflow-hidden shadow-lg"
//           >
//             <div className="relative h-48">
//               {story.backgroundImage && (
//                 <div className="absolute inset-0">
//                   <Image
//                     unoptimized={true}
//                     src={story.backgroundImage}
//                     alt={story.company}
//                     fill
//                     objectFit="cover"
//                   />
//                 </div>
//               )}
//               <div className="absolute bottom-4 left-4">
//                 {/* <Image
//                   src={story.logo}
//                   alt={story.company}
//                   width={120}
//                   height={40}
//                   className="h-8 w-auto"
//                 /> */}
//                 {/* <story.logo width={120} height={40} /> */}
//               </div>
//             </div>

//             <div className="p-5">
//               <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-md mb-3">
//                 {story.type === "case-study" ? "Case study" : "Testimonial"}
//               </div>

//               <h3 className="text-lg font-bold mb-4 text-gray-800">
//                 {story.title}
//               </h3>

//               {/* <Link
//                 href={disabeld}
//                 className="text-indigo-600 font-medium flex items-center mt-2 hover:underline"
//               >
//                 Coming Soon...
//                 <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
//               </Link> */}
//               <span className="text-gray-400 font-medium flex items-center mt-2 cursor-not-allowed">
//                 Coming Soon...
//                 {/* <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" /> */}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <section className="py-16 px-4">
//       <div className="container mx-auto">
//         <div className="hidden md:block">
//           <LargeScreenView />
//         </div>
//         <SmallScreenView />
//       </div>
//     </section>
//   );
// };

// export default SuccessStoriesSection;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { successStories } from "@/app/Data/successStoryData";

const SuccessStoriesSection: React.FC = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const currentStory = successStories[currentStoryIndex];

  const handlePrevious = () =>
    setCurrentStoryIndex((prev) =>
      prev === 0 ? successStories.length - 1 : prev - 1,
    );

  const handleNext = () =>
    setCurrentStoryIndex((prev) =>
      prev === successStories.length - 1 ? 0 : prev + 1,
    );

  const LargeScreenView = () => (
    <div className="relative w-full overflow-hidden">
      <motion.div
        key={currentStory.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-5 p-6 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
              The results speak for themselves, just like our customers
            </h2>
            <Link
              href="#successStories"
              className="text-gray-300 font-medium flex items-center mt-4 mb-8 hover:underline"
            >
              View more success stories
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
            </Link>

            <div className="flex space-x-4 mt-auto">
              <button
                onClick={handlePrevious}
                className="h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="md:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg">
              <div className="relative h-64 md:h-96">
                {currentStory.backgroundImage && (
                  <Image
                    unoptimized
                    src={currentStory.backgroundImage}
                    alt={currentStory.company}
                    fill
                    objectFit="cover"
                    priority
                    className="filter"
                  />
                )}
              </div>

              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-[var(--color-E0AAFF)] text-[var(--color-7B2CBF)] text-sm font-medium rounded-md mb-3">
                  {currentStory.type === "case-study"
                    ? "Case study"
                    : "Testimonial"}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
                  {currentStory.title}
                </h3>

                {currentStory.description && (
                  <p className="text-gray-700 mb-6">
                    {currentStory.description}
                  </p>
                )}

                {currentStory.stats && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {currentStory.stats.map((stat, index) => (
                      <div key={index} className="bg-gray-100 p-4 rounded-lg">
                        <div className="text-xs text-indigo-800 font-medium mb-1">
                          {stat.label}
                        </div>
                        <div className="text-3xl font-bold mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-800">
                          {stat.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <span className="text-gray-400 font-medium flex items-center mt-2 cursor-not-allowed">
                  Coming Soon...
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const SmallScreenView = () => (
    <div className="w-full md:hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          The results speak for themselves, just like our customers
        </h2>
        <Link
          href="/success-stories"
          className="text-indigo-600 font-medium flex items-center justify-center mt-4 hover:underline"
        >
          View more success stories
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {successStories.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative h-48">
              {story.backgroundImage && (
                <Image
                  unoptimized
                  src={story.backgroundImage}
                  alt={story.company}
                  fill
                  objectFit="cover"
                />
              )}
            </div>

            <div className="p-5">
              <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-md mb-3">
                {story.type === "case-study" ? "Case study" : "Testimonial"}
              </div>

              <h3 className="text-lg font-bold mb-4 text-gray-800">
                {story.title}
              </h3>

              <span className="text-gray-400 font-medium flex items-center mt-2 cursor-not-allowed">
                Coming Soon...
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="hidden md:block">
          <LargeScreenView />
        </div>
        <SmallScreenView />
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
