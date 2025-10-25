// 'use client';

// export default function ContactUsHeader() {
//   return (
//     <section className="bg-gradient-to-r from-[#10002B] to-[#240046] text-white py-16 px-4 text-center">
//       <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
//       <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
//         We&apos;re here to help and answer any questions you may have.
//       </p>
//     </section>
//   );
// }

// 'use client';

// // Contact Header Component
// export function ContactUsHeader() {
//   return (
//     <section className="bg-gradient-to-br from-[#10002B] via-[#240046] to-[#3C096C] text-white py-20 px-4 text-center relative overflow-hidden">
//       {/* Abstract background shapes */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-3xl"></div>
//         <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-300 blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto">
//         <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
//           Get in Touch
//         </h1>
//         <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
//           We&apos;re here to help and answer any questions you may have.
//         </p>
//         <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import React from "react";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#0A192F] to-[#112240] overflow-hidden px-4">
//       {/* Animated background grid dots */}
//       <div className="absolute inset-0 pointer-events-none z-0">
//         <svg width="100%" height="100%">
//           <defs>
//             <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
//               <circle cx="1" cy="1" r="1" fill="#64FFDA" fillOpacity="0.03" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#dots)" />
//         </svg>
//       </div>

//       {/* Placeholder images with modern geometric shapes instead of external URLs */}
//       <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-[#64FFDA] to-[#0A192F] rounded-xl shadow-2xl opacity-60 rotate-12 blur-sm z-20"></div>
//       <div className="absolute bottom-16 left-1/4 w-20 h-20 bg-gradient-to-br from-[#F06449] to-[#0A192F] rounded-full shadow-xl opacity-50 -rotate-6 blur-[2px] z-20"></div>
//       <div className="absolute top-20 right-16 w-28 h-16 bg-gradient-to-tl from-[#64FFDA] to-[#0A192F] rounded-2xl shadow-xl opacity-50 rotate-3 blur-[1px] z-20"></div>
//       <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-bl from-[#F06449] to-[#0A192F] rounded-lg shadow-xl opacity-40 -rotate-12 blur-[2px] z-20"></div>

//       {/* Animated gradient overlay */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="w-full h-full bg-gradient-to-tr from-[#64FFDA]/10 via-[#F06449]/5 to-transparent animate-gradient-move" />
//       </div>

//       {/* Tech-inspired animated orbs */}
//       <div className="absolute z-10 pointer-events-none">
//         <div className="absolute left-1/4 top-1/3 w-32 h-32 bg-gradient-to-br from-[#64FFDA] to-[#0A192F] opacity-20 rounded-full blur-2xl animate-orb1" />
//         <div className="absolute right-1/4 top-1/4 w-24 h-24 bg-gradient-to-br from-[#F06449] to-[#0A192F] opacity-15 rounded-full blur-2xl animate-orb2" />
//         <div className="absolute left-1/3 bottom-1/4 w-20 h-20 bg-gradient-to-br from-[#fff] to-[#64FFDA] opacity-10 rounded-full blur-2xl animate-orb3" />
//       </div>

//       {/* Updated multi-line animated waves */}
//       <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
//         <svg viewBox="0 0 1440 320" className="w-full h-48 md:h-64">
//           <g>
//             <path
//               d="M0,240 C360,320 1080,0 1440,160"
//               stroke="#64FFDA"
//               strokeWidth="1.5"
//               fill="none"
//               opacity="0.4"
//               className="animate-[waveMove1_12s_ease-in-out_infinite]"
//             />
//             <path
//               d="M0,280 C400,320 1040,40 1440,200"
//               stroke="#F06449"
//               strokeWidth="1"
//               fill="none"
//               opacity="0.2"
//               className="animate-[waveMove2_14s_ease-in-out_infinite]"
//             />
//             <path
//               d="M0,300 C500,320 900,80 1440,240"
//               stroke="#fff"
//               strokeWidth="0.7"
//               fill="none"
//               opacity="0.1"
//               className="animate-[waveMove3_16s_ease-in-out_infinite]"
//             />
//           </g>
//         </svg>
//       </div>

//       {/* Content */}
//       <div className="relative z-29 flex flex-col items-center text-center">
//         {/* Badge */}
//         <span className="inline-block mb-6 px-4 py-1 rounded-full bg-gradient-to-r from-[#64FFDA] to-[#0A192F] text-white text-sm font-semibold shadow-lg animate-fade-in-down">
//           🔮 Future Forward Technology
//         </span>
//         {/* Headline */}
//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-[#64FFDA] to-[#F06449] text-transparent bg-clip-text animate-fade-in-up">
//           Intelligent Solutions for a Connected World
//         </h1>
//         {/* Subheadline */}
//         <p className="max-w-2xl text-lg md:text-2xl text-gray-300 mb-10 animate-fade-in-up delay-200">
//           Discover how our cutting-edge AI technology can streamline your operations, enhance decision-making, and drive innovation across your entire organization.
//         </p>
//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
//           <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#64FFDA] to-[#0A192F] text-white font-bold text-lg shadow-lg hover:scale-105 active:scale-95 transition-all duration-200">
//             Explore
//           </button>
//           <button className="px-8 py-3 rounded-lg border-2 border-[#64FFDA] text-[#64FFDA] font-bold text-lg bg-transparent hover:bg-[#64FFDA]/10 transition-all duration-200 flex items-center gap-2">
//             Get Started
//           </button>
//         </div>
//       </div>

//       {/* Animations */}
//       <style>{`
//         .animate-fade-in-down {
//           animation: fadeInDown 1s cubic-bezier(.4,0,.2,1) both;
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 1.2s cubic-bezier(.4,0,.2,1) both;
//         }
//         .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
//         .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
//         @keyframes fadeInDown {
//           from { opacity: 0; transform: translateY(-40px);}
//           to { opacity: 1; transform: translateY(0);}
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(40px);}
//           to { opacity: 1; transform: translateY(0);}
//         }
//         @keyframes waveMove1 {
//           0%, 100% { transform: translateX(0); }
//           50% { transform: translateX(-30px) scaleY(1.04);}
//         }
//         @keyframes waveMove2 {
//           0%, 100% { transform: translateX(0); }
//           50% { transform: translateX(30px) scaleY(1.02);}
//         }
//         @keyframes waveMove3 {
//           0%, 100% { transform: translateX(0); }
//           50% { transform: translateX(-20px) scaleY(1.01);}
//         }
//         .animate-orb1 {
//           animation: orb1move 10s ease-in-out infinite alternate;
//         }
//         .animate-orb2 {
//           animation: orb2move 12s ease-in-out infinite alternate;
//         }
//         .animate-orb3 {
//           animation: orb3move 14s ease-in-out infinite alternate;
//         }
//         @keyframes orb1move {
//           0% { transform: translateY(0) scale(1);}
//           100% { transform: translateY(-30px) scale(1.1);}
//         }
//         @keyframes orb2move {
//           0% { transform: translateY(0) scale(1);}
//           100% { transform: translateY(20px) scale(1.05);}
//         }
//         @keyframes orb3move {
//           0% { transform: translateY(0) scale(1);}
//           100% { transform: translateY(-15px) scale(1.08);}
//         }
//         .animate-gradient-move {
//           animation: gradientMove 16s ease-in-out infinite alternate;
//         }
//         @keyframes gradientMove {
//           0% { background-position: 0% 50%;}
//           100% { background-position: 100% 50%;}
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center overflow-hidden px-4 bg-[#10002B]">
      {/* Abstract layered gradient blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#3C096C] via-[#7B2CBF] to-[#E0AAFF] opacity-60 filter blur-3xl animate-blobSlow z-0"></div>
      <div className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#5A189A] via-[#9D4EDD] to-[#C77DFF] opacity-50 filter blur-2xl animate-blobFast z-0"></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-[#240046] via-[#10002B] to-[#5A189A] opacity-40 filter blur-3xl animate-blobSlow z-0"></div>

      {/* Soft neon grid lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="neonGrid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="#7B2CBF"
              strokeWidth="0.6"
              strokeOpacity="0.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neonGrid)" />
      </svg>

      {/* Floating glowing particles */}
      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          className="absolute bg-[#C77DFF] opacity-20 rounded-full"
          style={{
            width: `${10 + Math.random() * 15}px`,
            height: `${10 + Math.random() * 15}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: "blur(4px)",
            animation: `float${i % 3} ${10 + Math.random() * 10}s ease-in-out infinite alternate`,
            animationDelay: `${Math.random() * 10}s`,
            zIndex: 5,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center text-gray-200 max-w-3xl">
        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-gradient-to-r from-[#C77DFF] to-[#5A189A] text-white text-sm font-semibold shadow-lg animate-fade-in-down">
          🔮 Future Forward Technology
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#E0AAFF] via-[#7B2CBF] to-[#5A189A] text-transparent bg-clip-text animate-fade-in-up">
          Contact us – Leading AI Solutions Provider
        </h1>
        <p className="text-lg md:text-2xl mb-10 animate-fade-in-up delay-200">
          Discover how our cutting-edge AI technology can streamline your
          operations, enhance decision-making, and drive innovation across your
          entire organization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
          <Link href="/solutions">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#C77DFF] to-[#5A189A] text-white font-bold text-lg shadow-lg hover:scale-105 active:scale-95 transition-all duration-200">
              Explore
            </button>
          </Link>
          <Link href="#get-in-touch">
          <button className="px-8 py-3 rounded-lg border-2 border-[#C77DFF] text-[#C77DFF] font-bold text-lg bg-transparent hover:bg-[#C77DFF]/10 transition-all duration-200 flex items-center gap-2">
            Get Started
          </button>
          </Link>
          
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }

        @keyframes blobSlow {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(20px, -10px) scale(1.1);
          }
        }
        @keyframes blobFast {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(-15px, 15px) scale(1.05);
          }
        }
        .animate-blobSlow {
          animation: blobSlow 18s ease-in-out infinite;
        }
        .animate-blobFast {
          animation: blobFast 14s ease-in-out infinite;
        }

        @keyframes float0 {
          0% { transform: translateY(0); opacity: 0.2;}
          100% { transform: translateY(-15px); opacity: 0.5;}
        }
        @keyframes float1 {
          0% { transform: translateY(0); opacity: 0.2;}
          100% { transform: translateY(20px); opacity: 0.4;}
        }
        @keyframes float2 {
          0% { transform: translateY(0); opacity: 0.3;}
          100% { transform: translateY(-10px); opacity: 0.6;}
        }
      `}</style>
    </section>
  );
}
