// "use client";

// import Link from "next/link";
// import React from "react";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#0F0521] to-[#1A0B2E] overflow-hidden px-4">
//       {/* Animated background grid dots */}
//       <div className="absolute inset-0 pointer-events-none z-0">
//         <svg width="100%" height="100%">
//           <defs>
//             <pattern
//               id="dots"
//               x="0"
//               y="0"
//               width="24"
//               height="24"
//               patternUnits="userSpaceOnUse"
//             >
//               <circle cx="1" cy="1" r="1" fill="#fff" fillOpacity="0.04" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#dots)" />
//         </svg>
//       </div>

//       {/* Decorative online images */}
//       <img
//         src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80"
//         alt="AI 1"
//         className="absolute top-10 left-10 w-24 h-24 object-cover rounded-xl shadow-2xl opacity-60 rotate-12 blur-sm z-20"
//       />
//       <img
//         src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80"
//         alt="AI 2"
//         className="absolute bottom-16 left-1/4 w-20 h-20 object-cover rounded-full shadow-xl opacity-50 -rotate-6 blur-[2px] z-20"
//       />
//       <img
        // src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80"
        // alt="AI 3"
        // className="absolute top-20 right-16 w-28 h-16 object-cover rounded-2xl shadow-xl opacity-50 rotate-3 blur-[1px] z-20"
//       />
//       <img
        // src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=80"
        // alt="AI 4"
        // className="absolute bottom-10 right-10 w-16 h-16 object-cover rounded-lg shadow-xl opacity-40 -rotate-12 blur-[2px] z-20"
//       />

//       {/* Animated gradient overlay */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="w-full h-full bg-gradient-to-tr from-[#7B2CBF]/10 via-[#5A189A]/10 to-transparent animate-gradient-move" />
//       </div>

//       {/* AI-inspired animated orbs */}
//       <div className="absolute z-10 pointer-events-none">
//         <div className="absolute left-1/4 top-1/3 w-32 h-32 bg-gradient-to-br from-[#a78bfa] to-[#7B2CBF] opacity-30 rounded-full blur-2xl animate-orb1" />
//         <div className="absolute right-1/4 top-1/4 w-24 h-24 bg-gradient-to-br from-[#5A189A] to-[#7B2CBF] opacity-20 rounded-full blur-2xl animate-orb2" />
//         <div className="absolute left-1/3 bottom-1/4 w-20 h-20 bg-gradient-to-br from-[#fff] to-[#a78bfa] opacity-10 rounded-full blur-2xl animate-orb3" />
//       </div>

//       {/* Multi-line animated waves */}
//       <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
//         <svg viewBox="0 0 1440 320" className="w-full h-48 md:h-64">
//           <g>
//             <path
//               d="M0,240 C360,320 1080,0 1440,160"
//               stroke="#a78bfa"
//               strokeWidth="1.5"
//               fill="none"
//               opacity="0.5"
//               className="animate-[waveMove1_12s_ease-in-out_infinite]"
//             />
//             <path
//               d="M0,280 C400,320 1040,40 1440,200"
//               stroke="#c4a7fa"
//               strokeWidth="1"
//               fill="none"
//               opacity="0.3"
//               className="animate-[waveMove2_14s_ease-in-out_infinite]"
//             />
//             <path
//               d="M0,300 C500,320 900,80 1440,240"
//               stroke="#fff"
//               strokeWidth="0.7"
//               fill="none"
//               opacity="0.15"
//               className="animate-[waveMove3_16s_ease-in-out_infinite]"
//             />
//           </g>
//         </svg>
//       </div>

//       {/* Content */}
//       <div className="relative z-29 flex flex-col items-center text-center">
//         {/* Badge */}
//         <span className="inline-block mb-6 px-4 py-1 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] text-white text-sm font-semibold shadow-lg animate-fade-in-down">
//           🚀 AI for the Future
//         </span>
//         {/* Headline */}
//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-[#c4a7fa] to-[#a78bfa] text-transparent bg-clip-text animate-fade-in-up">
//           About us: AI Solutions Company
//         </h1>
//         {/* Subheadline */}
//         <p className="max-w-2xl text-lg md:text-2xl text-gray-200 mb-10 animate-fade-in-up delay-200">
//           We build smart, scalable AI solutions that transform businesses
//           automating operations, elevating insights, and unlocking new
//           possibilities across every industry.
//         </p>
//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
//           <Link href="/">
//             <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] text-white font-bold text-lg shadow-lg hover:scale-105 active:scale-95 transition-all duration-200">
//               Home
//             </button>
//           </Link>
//           <Link href={"/contact-us"}>
//             <button className="px-8 py-3 rounded-lg border-2 border-[#a78bfa] text-[#a78bfa] font-bold text-lg bg-transparent hover:bg-[#a78bfa]/10 transition-all duration-200 flex items-center gap-2">
//               Contact-us
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Animations */}
      // <style>{`
      //   .animate-fade-in-down {
      //     animation: fadeInDown 1s cubic-bezier(.4,0,.2,1) both;
      //   }
      //   .animate-fade-in-up {
      //     animation: fadeInUp 1.2s cubic-bezier(.4,0,.2,1) both;
      //   }
      //   .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
      //   .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
      //   @keyframes fadeInDown {
      //     from { opacity: 0; transform: translateY(-40px);}
      //     to { opacity: 1; transform: translateY(0);}
      //   }
      //   @keyframes fadeInUp {
      //     from { opacity: 0; transform: translateY(40px);}
      //     to { opacity: 1; transform: translateY(0);}
      //   }
      //   @keyframes waveMove1 {
      //     0%, 100% { transform: translateX(0); }
      //     50% { transform: translateX(-30px) scaleY(1.04);}
      //   }
      //   @keyframes waveMove2 {
      //     0%, 100% { transform: translateX(0); }
      //     50% { transform: translateX(30px) scaleY(1.02);}
      //   }
      //   @keyframes waveMove3 {
      //     0%, 100% { transform: translateX(0); }
      //     50% { transform: translateX(-20px) scaleY(1.01);}
      //   }
      //   .animate-orb1 {
      //     animation: orb1move 10s ease-in-out infinite alternate;
      //   }
      //   .animate-orb2 {
      //     animation: orb2move 12s ease-in-out infinite alternate;
      //   }
      //   .animate-orb3 {
      //     animation: orb3move 14s ease-in-out infinite alternate;
      //   }
      //   @keyframes orb1move {
      //     0% { transform: translateY(0) scale(1);}
      //     100% { transform: translateY(-30px) scale(1.1);}
      //   }
      //   @keyframes orb2move {
      //     0% { transform: translateY(0) scale(1);}
      //     100% { transform: translateY(20px) scale(1.05);}
      //   }
      //   @keyframes orb3move {
      //     0% { transform: translateY(0) scale(1);}
      //     100% { transform: translateY(-15px) scale(1.08);}
      //   }
      //   .animate-gradient-move {
      //     animation: gradientMove 16s ease-in-out infinite alternate;
      //   }
      //   @keyframes gradientMove {
      //     0% { background-position: 0% 50%;}
      //     100% { background-position: 100% 50%;}
      //   }
      // `}</style>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import React from "react";
import { HeroProps } from "@/app/about-us/Types/heroTypes";

interface HeroSectionProps {
  data: HeroProps;
}

export default function Hero({ data }: HeroSectionProps) {
  const { badge, title, subtitle, images = [], buttons = [] } = data;

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#0F0521] to-[#1A0B2E] overflow-hidden px-4">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="dots"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="#fff" fillOpacity="0.04" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Dynamic floating images */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          className={`absolute object-cover shadow-xl opacity-50 z-20 ${img.className}`}
        />
      ))}

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-tr from-[#7B2CBF]/10 via-[#5A189A]/10 to-transparent animate-gradient-move" />
      </div>

      {/* Orbs */}
      <div className="absolute z-10 pointer-events-none">
        <div className="absolute left-1/4 top-1/3 w-32 h-32 bg-gradient-to-br from-[#a78bfa] to-[#7B2CBF] opacity-30 rounded-full blur-2xl animate-orb1" />
        <div className="absolute right-1/4 top-1/4 w-24 h-24 bg-gradient-to-br from-[#5A189A] to-[#7B2CBF] opacity-20 rounded-full blur-2xl animate-orb2" />
        <div className="absolute left-1/3 bottom-1/4 w-20 h-20 bg-gradient-to-br from-[#fff] to-[#a78bfa] opacity-10 rounded-full blur-2xl animate-orb3" />
      </div>

      {/* Waves */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-48 md:h-64">
          <g>
            <path
              d="M0,240 C360,320 1080,0 1440,160"
              stroke="#a78bfa"
              strokeWidth="1.5"
              fill="none"
              opacity="0.5"
              className="animate-[waveMove1_12s_ease-in-out_infinite]"
            />
            <path
              d="M0,280 C400,320 1040,40 1440,200"
              stroke="#c4a7fa"
              strokeWidth="1"
              fill="none"
              opacity="0.3"
              className="animate-[waveMove2_14s_ease-in-out_infinite]"
            />
            <path
              d="M0,300 C500,320 900,80 1440,240"
              stroke="#fff"
              strokeWidth="0.7"
              fill="none"
              opacity="0.15"
              className="animate-[waveMove3_16s_ease-in-out_infinite]"
            />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center text-center">
        {badge && (
          <span className="inline-block mb-6 px-4 py-1 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] text-white text-sm font-semibold shadow-lg animate-fade-in-down">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-[#c4a7fa] to-[#a78bfa] text-transparent bg-clip-text animate-fade-in-up">
          {title}
        </h1>
        <p className="max-w-2xl text-lg md:text-2xl text-gray-200 mb-10 animate-fade-in-up delay-200">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
          {buttons.map((btn, i) => (
            <Link key={i} href={btn.href}>
              <button
                className={`px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg ${
                  btn.variant === "secondary"
                    ? "border-2 border-[#a78bfa] text-[#a78bfa] bg-transparent hover:bg-[#a78bfa]/10"
                    : "bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] text-white hover:scale-105 active:scale-95"
                }`}
              >
                {btn.label}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Animations (same CSS as before) */}
      <style>{`
        .animate-fade-in-down {
          animation: fadeInDown 1s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes waveMove1 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-30px) scaleY(1.04);}
        }
        @keyframes waveMove2 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(30px) scaleY(1.02);}
        }
        @keyframes waveMove3 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-20px) scaleY(1.01);}
        }
        .animate-orb1 {
          animation: orb1move 10s ease-in-out infinite alternate;
        }
        .animate-orb2 {
          animation: orb2move 12s ease-in-out infinite alternate;
        }
        .animate-orb3 {
          animation: orb3move 14s ease-in-out infinite alternate;
        }
        @keyframes orb1move {
          0% { transform: translateY(0) scale(1);}
          100% { transform: translateY(-30px) scale(1.1);}
        }
        @keyframes orb2move {
          0% { transform: translateY(0) scale(1);}
          100% { transform: translateY(20px) scale(1.05);}
        }
        @keyframes orb3move {
          0% { transform: translateY(0) scale(1);}
          100% { transform: translateY(-15px) scale(1.08);}
        }
        .animate-gradient-move {
          animation: gradientMove 16s ease-in-out infinite alternate;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%;}
          100% { background-position: 100% 50%;}
        }
      `}</style>
    </section>
  );
}
