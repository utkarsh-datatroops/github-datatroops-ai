// import React from "react";

// const groups = [
//   {
//     name: "Team Celebration",
//     img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     name: "Office Fun",
//     img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     name: "Teamwork",
//     img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     name: "Strategy Session",
//     img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     name: "Annual Meetup",
//     img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     name: "Hackathon",
//     img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
//   },
// ];

// export default function EmployeeCollage() {
//   return (
//     <section className="w-full py-12 bg-gradient-to-r from-[#10002B] to-[#240046] px-4 flex flex-col items-center justify-center">
//       {/* Text on top, images below */}
//       <div className="w-full flex flex-col items-center">
//         <div className="w-full flex flex-col justify-center text-white mb-10 max-w-5xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 text-center">
//             Meet Our Team
//           </h2>
//           <div className="w-24 h-1 rounded bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] mb-4 mx-auto"></div>
//           <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto text-center">
//             At DataTroops, our team is our greatest strength. We believe in
//             collaboration, creativity, and celebrating every milestone together.
//             Here are some of our favorite moments!
//           </p>
//           {/* <ul className="space-y-4 text-base mx-auto">
//             <li className="flex items-start gap-3 justify-center">
//               <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] mt-2"></span>
//               <span>Supportive, diverse, and passionate professionals</span>
//             </li>
//             <li className="flex items-start gap-3 justify-center">
//               <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] mt-2"></span>
//               <span>Celebrating achievements and building memories</span>
//             </li>
//             <li className="flex items-start gap-3 justify-center">
//               <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] mt-2"></span>
//               <span>Encouraging growth, fun, and innovation</span>
//             </li>
//           </ul> */}
//         </div>
//         <div className="flex items-center justify-center w-full max-w-none overflow-x-auto py-8 pr-8">
//           {groups.map((group, idx) => (
//             <div
//               key={group.name}
//               style={{}}
//               className={`relative transition-transform duration-300 ${idx !== 0 ? "md:-ml-6" : ""} ${idx % 2 === 0 ? "translate-y-4" : "-translate-y-4"} min-w-[180px] max-w-[220px]`}
//             >
//               <img
//                 src={group.img}
//                 alt={group.name}
//                 className="w-full h-48 object-cover object-center rounded-3xl shadow-xl border-4 border-[#1A0B2E]"
//                 draggable={false}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#7B2CBF]/60 to-[#5A189A]/20 opacity-60 rounded-3xl"></div>
//               <div className="absolute bottom-2 left-2 right-2 text-center opacity-100 transition-opacity duration-300">
//                 <span className="inline-block bg-[#240046]/80 text-white text-base font-semibold px-3 py-1 rounded-lg shadow">
//                   {group.name}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React from "react";
import { EmployeeCollageData } from "@/app/about-us/Types/employeeCollageTypes";

interface Props {
  data: EmployeeCollageData;
}

export default function EmployeeCollage({ data }: Props) {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-[#10002B] to-[#240046] px-4 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center">
        {/* Text */}
        <div className="w-full flex flex-col justify-center text-white mb-10 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 text-center">
            {data.title}
          </h2>
          <div className="w-24 h-1 rounded bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] mb-4 mx-auto"></div>
          <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto text-center">
            {data.description}
          </p>
        </div>

        {/* Images */}
        <div className="flex items-center justify-center w-full max-w-none overflow-x-auto py-8 pr-8">
          {data.groups.map((group, idx) => (
            <div
              key={group.name}
              className={`relative transition-transform duration-300 ${
                idx !== 0 ? "md:-ml-6" : ""
              } ${
                idx % 2 === 0 ? "translate-y-4" : "-translate-y-4"
              } min-w-[180px] max-w-[220px]`}
            >
              <img
                src={group.img}
                alt={group.name}
                className="w-full h-48 object-cover object-center rounded-3xl shadow-xl border-4 border-[#1A0B2E]"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7B2CBF]/60 to-[#5A189A]/20 opacity-60 rounded-3xl"></div>
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <span className="inline-block bg-[#240046]/80 text-white text-base font-semibold px-3 py-1 rounded-lg shadow">
                  {group.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
