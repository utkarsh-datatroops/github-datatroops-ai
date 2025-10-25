// "use client";
// import React from "react";
// import robotSvgUrl from "@/assets/images/robot.svg?url";
// import Image from "next/image";

// const EyeIcon = () => (
//   <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#5A189A] to-[#7B2CBF] shadow-lg">
//     <svg
//       width="32"
//       height="32"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="white"
//       strokeWidth="2.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
//       <circle cx="12" cy="12" r="3"></circle>
//     </svg>
//   </span>
// );

// const RocketIcon = () => (
//   <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-[#7B2CBF] shadow-lg">
//     <svg
//       width="32"
//       height="32"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="white"
//       strokeWidth="2.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4.5 16.5L3 21l4.5-1.5M15 9l6-6m-6 6l-2.5 7.5M15 9l-7.5 7.5M9 15l-4.5 1.5M9 15l7.5-7.5" />
//       <circle cx="18" cy="6" r="2" fill="white" />
//     </svg>
//   </span>
// );

// export default function MissionVisionSection() {
//   return (
//     <section className="bg-gradient-to-r from-[#10002B] to-[#240046] py-12 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12 text-white">
//           <span className="text-white">Our </span>
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-[#7B2CBF]">
//             Mission
//           </span>
//           <span className="text-white"> & </span>
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5A189A] to-blue-400">
//             Vision
//           </span>
//         </h2>
//         {/* Responsive grid: 1col on mobile, 3col on md+ */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//           {/* Mission Card */}
//           <div className="flex flex-col items-center">
//             <div className="z-10 mb-4">
//               <RocketIcon />
//             </div>
//             <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 shadow-lg w-full">
//               <h3 className="text-2xl font-bold text-pink-400 mb-2 text-center">
//                 Our Mission
//               </h3>
//               <p className="text-gray-100 text-lg text-center">
//                 To democratise AI by making intelligent, scalable, and
//                 tailor-made solutions accessible to every business, regardless
//                 of size, industry, or technical expertise.
//                 <br />
//                 We strive to empower organisations to work smarter, move faster,
//                 and grow fearlessly through AI that adapts to their needs.
//               </p>
//             </div>
//           </div>
//           {/* Robot Image */}
//           <div className="flex justify-center">
//             <Image
//               src={robotSvgUrl}
//               alt="Artificial Intelligence Illustration"
//               className="rounded-2xl object-contain max-h-[400px] w-full max-w-xs mx-auto"
//               width={300}
//               height={400}
//               priority={true}
//             />
//             {/* <img
//               src="/robot.svg"
//               alt="Artificial Intelligence Illustration"
//               className="rounded-2xl object-contain max-h-[400px] w-full max-w-xs mx-auto"
//             /> */}
//           </div>
//           {/* Vision Card */}
//           <div className="flex flex-col items-center">
//             <div className="z-10 mb-4">
//               <EyeIcon />
//             </div>
//             <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 shadow-lg w-full">
//               <h3 className="text-2xl font-bold text-blue-400 mb-2 text-center">
//                 Our Vision
//               </h3>
//               <p className="text-gray-100 text-lg text-center">
//                 A future where every business, big or small, can thrive with the
//                 power of artificial intelligence.
//                 <br />
//                 We envision a world where AI simplifies the complex, accelerates
//                 progress, and fuels limitless innovation.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React from "react";
import Image from "next/image";
import { MissionVisionData } from "@/app/about-us/Types/missionVisionTypes";

const IconMap: Record<string, React.ReactNode> = {
  rocket: (
    <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-[#7B2CBF] shadow-lg">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5L3 21l4.5-1.5M15 9l6-6m-6 6l-2.5 7.5M15 9l-7.5 7.5M9 15l-4.5 1.5M9 15l7.5-7.5" />
        <circle cx="18" cy="6" r="2" fill="white" />
      </svg>
    </span>
  ),
  eye: (
    <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#5A189A] to-[#7B2CBF] shadow-lg">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    </span>
  ),
};

interface Props {
  data: MissionVisionData;
}

export default function MissionVisionSection({ data }: Props) {
  return (
    <section className="bg-gradient-to-r from-[#10002B] to-[#240046] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12 text-white">
          <span className="text-white">Our </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-[#7B2CBF]">
            Mission
          </span>
          <span className="text-white"> & </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5A189A] to-blue-400">
            Vision
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Mission */}
          <div className="flex flex-col items-center">
            <div className="z-10 mb-4">{IconMap[data.mission.icon]}</div>
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 shadow-lg w-full">
              <h3 className="text-2xl font-bold text-pink-400 mb-2 text-center">
                {data.mission.heading}
              </h3>
              <p className="text-gray-100 text-lg text-center">
                {data.mission.description}
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={data.image}
              alt="Artificial Intelligence Illustration"
              className="rounded-2xl object-contain max-h-[400px] w-full max-w-xs mx-auto"
              width={300}
              height={400}
              priority
            />
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center">
            <div className="z-10 mb-4">{IconMap[data.vision.icon]}</div>
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 shadow-lg w-full">
              <h3 className="text-2xl font-bold text-blue-400 mb-2 text-center">
                {data.vision.heading}
              </h3>
              <p className="text-gray-100 text-lg text-center">
                {data.vision.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
