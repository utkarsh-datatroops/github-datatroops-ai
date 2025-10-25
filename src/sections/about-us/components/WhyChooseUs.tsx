// import React from "react";
// import Image from "next/image";
// import { barlowSemiCondensed } from "@/improved-fonts";
// import impactImage from "@/assets/images/solutions/impact-section.png";

// const features = [
//   {
//     number: "1",
//     title: "Conversational AI with Empathy",
//     description:
//       "Our AI chatbots for hospitals understand patient emotions and respond with human-like warmth and care.",
//   },
//   {
//     number: "2",
//     title: "Healthcare-Specific NLP Engines",
//     description:
//       "Built for medical chatbot development, ensuring accuracy in terminology, diagnosis flow, and patient conversations",
//   },
//   {
//     number: "3",
//     title: "Rapid Deployment, Faster ROI, Faster Deployment, Quicker Results",
//     description:
//       "Experience healthcare chatbot solutions that go live in weeks—delivering ROI and productivity from day one.",
//   },
//   {
//     number: "4",
//     title: "Seamless Integration with Hospital Systems",
//     description:
//       " Our healthcare AI chatbot development supports EHR/HIS integration, automating workflows and reducing admin load.",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="relative w-full bg-white overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20">
//       <div className="relative z-10 w-full max-w-screen-2xl mx-auto py-10 md:py-14">
//         <div className="bg-violet-50 rounded-2xl shadow-xl flex flex-col lg:flex-row items-center p-6 lg:p-6 space-y-8 lg:space-y-0 lg:space-x-8">
//           {/* Left Title Section */}
//           <div className="w-full lg:w-1/3">
//             <h2
//               className={`${barlowSemiCondensed.className} text-3xl md:text-4xl lg:text-5xl font-bold  text-gray-900`}
//             >
//               Build Smarter AI Chatbots with DataTroops
//             </h2>
//           </div>

//           {/* Center Image - Desktop only */}
//           <div className="hidden lg:flex w-full lg:w-1/3 justify-center">
//             <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-xl overflow-hidden">
//               <Image
//                 src={impactImage}
//                 alt="Doctor with tablet"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Right Feature List */}
//           <div className="w-full lg:w-1/3 space-y-6">
//             {features.map((feature, index) => (
//               <div key={index} className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0 relative">
//                 <div className="flex-shrink-0 lg:block">
//                   <span className="text-3xl text-indigo-400 opacity-30 font-bold">{feature.number}</span>
//                 </div>
//                 <div className="flex-1 space-y-2">
//                   <h3 className="text-indigo-950 text-xl font-bold">
//                     {feature.title}
//                   </h3>
//                   <p className="text-slate-600 text-sm leading-relaxed">
//                     {feature.description}
//                   </p>
//                   {index !== features.length - 1 && (
//                     <hr className="border-t border-slate-200 mt-3" />
//                   )}
//                 </div>
//               </div>
//             ))}

//             {/* Mobile Image with overlaid button */}
//             <div className="lg:hidden relative mt-8">
//               <div className="relative w-full h-64 rounded-xl overflow-hidden">
//                 <Image
//                   src={impactImage}
//                   alt="Doctor using AI healthcare chatbot on tablet"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//                 {/* Overlay button on mobile */}
//                 <div className="absolute inset-0 flex place-items-end justify-center p-4">
//                   <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm bg-opacity-90">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
//                       />
//                       </svg>
//                     <span className="text-center leading-tight">Get Your 6 months free trial</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Button - Desktop only */}
//         <div className="hidden lg:flex justify-center mt-10">
//               <a
//                 href={"/contact-us"}
//                 className={` inline-flex items-center justify-center gap-3 px-6 py-4 lg:px-8 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg text-white text-sm lg:text-lg font-medium w-full sm:w-fit`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
//                   />
//                   </svg>
//                 <span>Get your custom chatbot for absolutely free</span>
//               </a>
//             </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { barlowSemiCondensed } from "@/improved-fonts";
import { WhyChooseUsProps } from "@/app/about-us/Types/whyChooseTypes";

interface Props {
  data: WhyChooseUsProps;
}

export default function WhyChooseUs({ data }: Props) {
  const { title, image, features, mobileCTA, desktopCTA } = data;

  return (
    <section className="relative w-full bg-white overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto py-10 md:py-14">
        <div className="bg-violet-50 rounded-2xl shadow-xl flex flex-col lg:flex-row items-center p-6 lg:p-6 space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Left Title Section */}
          <div className="w-full lg:w-1/3">
            <h2
              className={`${barlowSemiCondensed.className} text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900`}
            >
              {title}
            </h2>
          </div>

          {/* Center Image - Desktop only */}
          <div className="hidden lg:flex w-full lg:w-1/3 justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-xl overflow-hidden">
              <Image
                src={image as string | StaticImageData}
                alt="Why Choose Us Illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Feature List */}
          <div className="w-full lg:w-1/3 space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0 relative"
              >
                <div className="flex-shrink-0 lg:block">
                  <span className="text-3xl text-indigo-400 opacity-30 font-bold">
                    {feature.number}
                  </span>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-indigo-950 text-xl font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  {index !== features.length - 1 && (
                    <hr className="border-t border-slate-200 mt-3" />
                  )}
                </div>
              </div>
            ))}

            {/* Mobile Image with CTA */}
            <div className="lg:hidden relative mt-8">
              <div className="relative w-full h-64 rounded-xl overflow-hidden">
                <Image
                  src={image as string | StaticImageData}
                  alt="Mobile view illustration"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 flex place-items-end justify-center p-4">
                  <a
                    href={mobileCTA.href}
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm bg-opacity-90"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                      />
                    </svg>
                    <span>{mobileCTA.label}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex justify-center mt-10">
          <a
            href={desktopCTA.href}
            className="inline-flex items-center justify-center gap-3 px-6 py-4 lg:px-8 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg text-white text-sm lg:text-lg font-medium w-full sm:w-fit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
              />
            </svg>
            <span>{desktopCTA.label}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
