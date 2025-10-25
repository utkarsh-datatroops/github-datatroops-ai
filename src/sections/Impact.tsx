// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Button } from "@/components/Button";
// import { Pointers } from "@/components/Pointers";

// export const Impact = () => {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [scrollRatio, setScrollRatio] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const validateEmail = (email: string) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email.toLowerCase());
//   };

//   useEffect(() => {
//     const visibilityObserver = new IntersectionObserver(
//       (entries) => {
//         setIsVisible(entries[0].isIntersecting);
//       },
//       { threshold: 0.05 },
//     );

//     if (sectionRef.current) {
//       visibilityObserver.observe(sectionRef.current);
//     }

//     const trackScroll = () => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const viewportHeight = window.innerHeight;

//       const startPoint = viewportHeight;
//       const endPoint = -rect.height;
//       const current = rect.top;

//       const rawProgress = (startPoint - current) / (startPoint - endPoint);
//       const clampedProgress = Math.max(0, Math.min(1, rawProgress));

//       setScrollRatio(clampedProgress);
//     };

//     const trackMouse = (e: MouseEvent) => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();

//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 2 - 1,
//         y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
//       });
//     };

//     trackScroll();
//     const initialTimer = setTimeout(trackScroll, 100);

//     window.addEventListener("scroll", trackScroll, { passive: true });
//     window.addEventListener("resize", trackScroll, { passive: true });
//     window.addEventListener("mousemove", trackMouse, { passive: true });

//     return () => {
//       clearTimeout(initialTimer);
//       visibilityObserver.disconnect();
//       window.removeEventListener("scroll", trackScroll);
//       window.removeEventListener("resize", trackScroll);
//       window.removeEventListener("mousemove", trackMouse);
//     };
//   }, []);

//   const normalizedScroll: number = scrollRatio;

//   const getDynamicGradient = () => {
//     return {
//       background: `
//         radial-gradient(circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%,
//           var(--color-10002B) 0%,
//         var(--color-240046) 50%,
//         var(--color-3C096C) 100%)
//       `,
//     };
//   };

//   const getOrbPosition = (
//     baseX: number,
//     baseY: number,
//     radiusX: number,
//     radiusY: number,
//     phase: number,
//   ) => {
//     const angle = normalizedScroll * Math.PI * 2 + phase;
//     return {
//       x: baseX + Math.cos(angle) * radiusX,
//       y: baseY + Math.sin(angle) * radiusY,
//     };
//   };

//   useEffect(() => {
//     function setVh() {
//       document.documentElement.style.setProperty(
//         "--vh",
//         `${window.innerHeight * 0.01}px`,
//       );
//     }
//     setVh();
//     window.addEventListener("resize", setVh);
//     return () => window.removeEventListener("resize", setVh);
//   }, []);

//   const handleEmailSubmit = async (event: React.FormEvent) => {
//     // Prevent the default form submission behavior
//     event.preventDefault();

//     if (!validateEmail(email)) {
//       setEmailError("Please enter a valid email address.");
//       return;
//     }

//     try {
//       await fetch("https://formsubmit.co/ajax/info@datatroops.io", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       setSubmitted(true);
//       setEmail("");
//       setTimeout(() => {
//         setSubmitted(false);
//       }, 4000);
//     } catch (error) {
//       console.error("Email submission failed:", error);
//       setEmailError("Something went wrong. Please try again.");
//     }
//   };

//   useEffect(() => {
//     function setVh() {
//       // Update the --vh custom property to the actual window height
//       document.documentElement.style.setProperty(
//         "--vh",
//         `${window.innerHeight * 0.01}px`,
//       );
//     }
//     setVh(); // Call once to set the initial value
//     window.addEventListener("resize", setVh); // Update on resize

//     return () => window.removeEventListener("resize", setVh); // Clean up on unmount
//   }, []);

//   return (
//     <section
//       ref={sectionRef as React.RefObject<HTMLElement>}
//       className="py-24 overflow-hidden relative min-h-screen"
//       style={{
//         perspective: "1000px",
//         minHeight: "calc(var(--vh, 1vh) * 90)", // Adjust the minimum height dynamically
//       }}
//     >
//       <div
//         className="absolute inset-0 -z-10"
//         style={{
//           ...getDynamicGradient(),
//           transition: "background 0.5s ease-out",
//         }}
//       >
//         <div className="absolute inset-0">
//           {[...Array(100)].map((_, i) => {
//             const size = Math.random() * 2 + 1;
//             const speed = Math.random() * 50 + 20;
//             const initialDelay = Math.random() * 5;
//             const initialX = Math.random() * 100;
//             const initialY = Math.random() * 100;

//             return (
//               <div
//                 key={i}
//                 className="absolute rounded-full bg-white"
//                 style={{
//                   width: `${size}px`,
//                   height: `${size}px`,
//                   left: `${initialX}%`,
//                   top: `${initialY}%`,
//                   opacity: Math.random() * 0.2 + 0.1 * normalizedScroll,
//                   filter: `blur(${Math.random() * 1}px)`,
//                   animation: `floatParticle ${speed}s infinite linear ${initialDelay}s`,
//                 }}
//               />
//             );
//           })}
//         </div>
//         {[...Array(5)].map((_, i) => {
//           const radius = 150 + i * 40;
//           const size = 100 + i * 30;
//           const phase = i * (Math.PI / 2.5);
//           const colorOpacity = 0.07 - i * 0.01 + normalizedScroll * 0.03;
//           const orb = getOrbPosition(50, 50, radius / 10, radius / 20, phase);

//           return (
//             <div
//               key={i}
//               className={`absolute rounded-full bg-[var(--color-${i % 2 === 0 ? "7B2CBF" : "9D4EDD"})] blur-3xl transition-all duration-700`}
//               style={{
//                 width: `${size}px`,
//                 height: `${size}px`,
//                 left: `${orb.x}%`,
//                 top: `${orb.y}%`,
//                 opacity: colorOpacity,
//                 transform: `translateZ(${-i * 50}px) scale(${1 + normalizedScroll * 0.3})`,
//                 transition: "all 0.2s ease-out",
//               }}
//             />
//           );
//         })}

//         <div
//           className="absolute inset-0 transition-all duration-700"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
//             backgroundSize: `${50 - normalizedScroll * 20}px ${50 - normalizedScroll * 20}px`,
//             opacity: 0.1 + normalizedScroll * 0.05,
//             transform: `perspective(1000px) rotateX(${5 * normalizedScroll}deg) scale(${1 + normalizedScroll * 0.3})`,
//             transformOrigin: "center center",
//           }}
//         />

//         <div
//           className="absolute inset-0 opacity-15"
//           style={{ opacity: 0.07 + normalizedScroll * 0.08 }}
//         >
//           <svg
//             width="100%"
//             height="100%"
//             className="transition-all duration-1000"
//             style={{
//               transform: `scale(${1 + normalizedScroll * 0.2}) rotate(${normalizedScroll * 3}deg)`,
//             }}
//           >
//             <defs>
//               <pattern
//                 id="circuit"
//                 x="0"
//                 y="0"
//                 width="200"
//                 height="200"
//                 patternUnits="userSpaceOnUse"
//               >
//                 <path
//                   d="M10 10 H 50 V 50 H 90 V 90 H 130 V 130 H 170 V 170 M 30 10 V 50 H 70 V 90 H 110 V 130 H 150 V 170 M 190 10 V 50 H 150 V 90 H 110 V 130 H 70 V 170 M 10 30 H 50 V 70 H 90 V 110 H 130 V 150 H 170 M 10 170 H 50 V 130 H 90 V 90 H 130 V 50 H 170"
//                   stroke="rgba(180, 180, 255, 0.3)"
//                   strokeWidth="1"
//                   fill="none"
//                 />
//                 <circle cx="10" cy="10" r="3" fill="rgba(180, 180, 255, 0.4)" />
//                 <circle cx="50" cy="50" r="3" fill="rgba(180, 180, 255, 0.4)" />
//                 <circle cx="90" cy="90" r="3" fill="rgba(180, 180, 255, 0.4)" />
//                 <circle
//                   cx="130"
//                   cy="130"
//                   r="3"
//                   fill="rgba(180, 180, 255, 0.4)"
//                 />
//                 <circle
//                   cx="170"
//                   cy="170"
//                   r="3"
//                   fill="rgba(180, 180, 255, 0.4)"
//                 />
//               </pattern>
//             </defs>
//             <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
//           </svg>
//         </div>
//       </div>

//       <div className="container relative z-10 lg:mt-16 md:mt-16">
//         <div
//           className="absolute left-56 top-96 hidden lg:block pointer-events-none transition-all duration-700"
//           style={{
//             opacity: 0.7 + normalizedScroll * 0.3,
//             transform: `rotate(${normalizedScroll * -15}deg) scale(${1 + normalizedScroll * 0.2})`,
//             filter: `hue-rotate(${normalizedScroll * 30}deg)`,
//           }}
//         >
//           <Pointers name="AI-Agent" />
//         </div>

//         <div
//           className="absolute right-80 -top-4 hidden lg:block pointer-events-none transition-all duration-700"
//           style={{
//             opacity: 0.7 + normalizedScroll * 0.3,
//             transform: `rotate(${normalizedScroll * 15}deg) scale(${1 + normalizedScroll * 0.2})`,
//             filter: `hue-rotate(${normalizedScroll * -30}deg)`,
//           }}
//         >
//           <Pointers name="AI-Agent" color="red" />
//         </div>

//         <div
//           className="relative transition-all duration-1000"
//           style={{
//             transform: `perspective(1000px)
//                        translateZ(${normalizedScroll * 100}px)
//                        scale(${1 - normalizedScroll * 0.05})`,
//             opacity: isVisible ? 1 : 0,
//           }}
//         >
//           <div
//             className="flex justify-center mb-6 transition-all duration-700"
//             style={{
//               transform: `translateY(${isVisible ? 0 : 20}px)`,
//               opacity: isVisible ? 1 : 0,
//               transitionDelay: "100ms",
//             }}
//           >
//             <span className="inline-flex py-1 px-3 bg-gradient-to-r from-[var(--color-7B2CBF)] to-[var(--color-9D4EDD)] rounded-full font-semibold text-white shadow-lg shadow-[var(--color-7B2CBF)]/20 hover:scale-105 transition-transform">
//               Automation
//             </span>
//           </div>

//           <h1
//             className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 transition-all duration-700"
//             style={{
//               transform: `translateY(${isVisible ? 0 : 30}px)`,
//               opacity: isVisible ? 1 : 0,
//               transitionDelay: "200ms",
//               WebkitBackgroundClip: "text",
//               textShadow:
//                 normalizedScroll > 0.3
//                   ? "none"
//                   : "0 4px 20px rgba(123, 31, 162, 0.2)",
//             }}
//           >
//             Impactful solutions and AI agents created
//           </h1>

//           <p
//             className="text-center text-xl text-white/80 mt-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700"
//             style={{
//               transform: `translateY(${isVisible ? 0 : 40}px)`,
//               opacity: isVisible ? 1 : 0,
//               transitionDelay: "300ms",
//               textShadow: `0 2px 10px rgba(0, 0, 0, ${0.2 + normalizedScroll * 0.3})`,
//             }}
//           >
//             Transform the way you work with our cutting-edge AI Development
//             Services that are designed to streamline operations, automate
//             repetitive tasks, and unlock deep insights for better
//             decision-making.
//           </p>

//           <form
//             className="flex border border-white/15 rounded-full p-2 mt-20 max-w-lg mx-auto backdrop-blur-lg bg-white/5 transition-all duration-700 hover:border-white/30"
//             style={{
//               transform: `translateY(${isVisible ? 0 : 50}px)`,
//               opacity: isVisible ? 1 : 0,
//               transitionDelay: "400ms",
//               boxShadow: `0 4px ${12 + normalizedScroll * 15}px rgba(139, 92, 246, ${0.1 + normalizedScroll * 0.3})`,
//               background: `linear-gradient(135deg, var(--color-10002B)/${0.03 + normalizedScroll * 0.05}, var(--color-240046)/${0.08 + normalizedScroll * 0.05})`,
//             }}
//             onSubmit={handleEmailSubmit} // Use form submission event
//           >
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 bg-transparent px-4 text-white placeholder-white/50 focus:outline-none"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//                 if (emailError) setEmailError("");
//               }}
//             />
//             <Button
//               variant="tertiary"
//               className="font-medium border bg-white border-[var(--color-E0AAFF)]/15 h-10 px-6 whitespace-nowrap text-black transition-all duration-300 hover:bg-[var(--color-E0AAFF)]/10 hover:shadow-lg hover:shadow-[var(--color-7B2CBF)]/20 pr-4"
//               style={{ borderRadius: "50px" }}
//               type="submit" // This triggers the form's onSubmit
//             >
//               {submitted ? "Submitted" : "Sign Up"}
//             </Button>
//             {submitted && (
//               <p className="text-green-400 text-center mt-2">
//                 Thanks! We&apos;ll be in touch soon.
//               </p>
//             )}

//             {emailError && (
//               <p className="text-red-400 text-center mt-2">{emailError}</p>
//             )}
//           </form>
//         </div>
//       </div>
//       {/* Updated Scroll Down Indicator - Properly Centered */}
//       {/* <motion.div
//         style={{ gap: "0.5rem" }}
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.5, duration: 0.5 }}
//         className=" absolute bottom-2 lg:bottom-12 left-0 right-0 mx-auto w-full flex flex-col items-center justify-center mt-10 hidden lg:flex"
//       >
//         <span className="text-sm text-white/70 mb-2 font-medium pt-2">
//           Scroll Down
//         </span>
//         <motion.div
//           className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center p-1"
//           animate={{ y: [0, 5, 0] }}
//           transition={{ repeat: Infinity, duration: 1.5 }}
//         >
//           <motion.div
//             className="w-1.5 h-1.5 bg-[var(--color-9D4EDD)] rounded-full"
//             animate={{ y: [0, 6, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//           />
//         </motion.div>
//       </motion.div> */}
//       {/*
//        <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.5, duration: 0.5 }}
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
//         >
//           <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
//           <motion.div
//             className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center p-1"
//             animate={{ y: [0, 5, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//           >
//             <motion.div
//               className="w-1.5 h-1.5 bg-primary rounded-full"
//               animate={{ y: [0, 6, 0] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//             />
//           </motion.div>
//         </motion.div> */}

//       <style jsx>{`
//         @keyframes floatParticle {
//           0% {
//             transform: translateY(0) translateX(0);
//             opacity: 0;
//           }
//           10% {
//             opacity: 0.5;
//           }
//           90% {
//             opacity: 0.3;
//           }
//           100% {
//             transform: translateY(-100vh)
//               translateX(${Math.random() * 100 - 50}px);
//             opacity: 0;
//           }
//         }

//         @keyframes pulse {
//           0%,
//           100% {
//             transform: scale(1);
//             opacity: 0.5;
//           }
//           50% {
//             transform: scale(1.05);
//             opacity: 0.7;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { Pointers } from "@/components/Pointers";

interface ImpactProps {
  badge?: string;
  title?: string;
  description?: string;
  emailPlaceholder?: string;
  submitEndpoint?: string;
  buttonText?: string;
  submittedText?: string;
  successMessage?: string;
  showPointers?: boolean;
}

export const Impact = ({
  badge = "Automation",
  title = "Impactful solutions and AI agents created",
  description = "Transform the way you work with our cutting-edge AI Development Services that are designed to streamline operations, automate repetitive tasks, and unlock deep insights for better decision-making.",
  emailPlaceholder = "Enter your email",
  submitEndpoint = "https://formsubmit.co/ajax/info@datatroops.io",
  buttonText = "Sign Up",
  submittedText = "Submitted",
  successMessage = "Thanks! We'll be in touch soon.",
  showPointers = true,
}: ImpactProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollRatio, setScrollRatio] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  useEffect(() => {
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.05 },
    );

    if (sectionRef.current) {
      visibilityObserver.observe(sectionRef.current);
    }

    const trackScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const startPoint = viewportHeight;
      const endPoint = -rect.height;
      const current = rect.top;

      const rawProgress = (startPoint - current) / (startPoint - endPoint);
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setScrollRatio(clampedProgress);
    };

    const trackMouse = (e: MouseEvent) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
      });
    };

    trackScroll();
    const initialTimer = setTimeout(trackScroll, 100);

    window.addEventListener("scroll", trackScroll, { passive: true });
    window.addEventListener("resize", trackScroll, { passive: true });
    window.addEventListener("mousemove", trackMouse, { passive: true });

    return () => {
      clearTimeout(initialTimer);
      visibilityObserver.disconnect();
      window.removeEventListener("scroll", trackScroll);
      window.removeEventListener("resize", trackScroll);
      window.removeEventListener("mousemove", trackMouse);
    };
  }, []);

  const normalizedScroll: number = scrollRatio;

  const getDynamicGradient = () => {
    return {
      background: `
        radial-gradient(circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, 
          var(--color-10002B) 0%, 
        var(--color-240046) 50%,
        var(--color-3C096C) 100%)
      `,
    };
  };

  const getOrbPosition = (
    baseX: number,
    baseY: number,
    radiusX: number,
    radiusY: number,
    phase: number,
  ) => {
    const angle = normalizedScroll * Math.PI * 2 + phase;
    return {
      x: baseX + Math.cos(angle) * radiusX,
      y: baseY + Math.sin(angle) * radiusY,
    };
  };

  useEffect(() => {
    function setVh() {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`,
      );
    }
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  const handleEmailSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    try {
      await fetch(submitEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setSubmitted(true);
      setEmail("");
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("Email submission failed:", error);
      setEmailError("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 overflow-hidden relative min-h-screen"
      style={{
        perspective: "1000px",
        minHeight: "calc(var(--vh, 1vh) * 90)",
      }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          ...getDynamicGradient(),
          transition: "background 0.5s ease-out",
        }}
      >
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => {
            const size = Math.random() * 2 + 1;
            const speed = Math.random() * 50 + 20;
            const initialDelay = Math.random() * 5;
            const initialX = Math.random() * 100;
            const initialY = Math.random() * 100;

            return (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${initialX}%`,
                  top: `${initialY}%`,
                  opacity: Math.random() * 0.2 + 0.1 * normalizedScroll,
                  filter: `blur(${Math.random() * 1}px)`,
                  animation: `floatParticle ${speed}s infinite linear ${initialDelay}s`,
                }}
              />
            );
          })}
        </div>
        {[...Array(5)].map((_, i) => {
          const radius = 150 + i * 40;
          const size = 100 + i * 30;
          const phase = i * (Math.PI / 2.5);
          const colorOpacity = 0.07 - i * 0.01 + normalizedScroll * 0.03;
          const orb = getOrbPosition(50, 50, radius / 10, radius / 20, phase);

          return (
            <div
              key={i}
              className={`absolute rounded-full bg-[var(--color-${i % 2 === 0 ? "7B2CBF" : "9D4EDD"})] blur-3xl transition-all duration-700`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${orb.x}%`,
                top: `${orb.y}%`,
                opacity: colorOpacity,
                transform: `translateZ(${-i * 50}px) scale(${1 + normalizedScroll * 0.3})`,
                transition: "all 0.2s ease-out",
              }}
            />
          );
        })}

        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: `${50 - normalizedScroll * 20}px ${50 - normalizedScroll * 20}px`,
            opacity: 0.1 + normalizedScroll * 0.05,
            transform: `perspective(1000px) rotateX(${5 * normalizedScroll}deg) scale(${1 + normalizedScroll * 0.3})`,
            transformOrigin: "center center",
          }}
        />

        <div
          className="absolute inset-0 opacity-15"
          style={{ opacity: 0.07 + normalizedScroll * 0.08 }}
        >
          <svg
            width="100%"
            height="100%"
            className="transition-all duration-1000"
            style={{
              transform: `scale(${1 + normalizedScroll * 0.2}) rotate(${normalizedScroll * 3}deg)`,
            }}
          >
            <defs>
              <pattern
                id="circuit"
                x="0"
                y="0"
                width="200"
                height="200"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M10 10 H 50 V 50 H 90 V 90 H 130 V 130 H 170 V 170 M 30 10 V 50 H 70 V 90 H 110 V 130 H 150 V 170 M 190 10 V 50 H 150 V 90 H 110 V 130 H 70 V 170 M 10 30 H 50 V 70 H 90 V 110 H 130 V 150 H 170 M 10 170 H 50 V 130 H 90 V 90 H 130 V 50 H 170"
                  stroke="rgba(180, 180, 255, 0.3)"
                  strokeWidth="1"
                  fill="none"
                />
                <circle cx="10" cy="10" r="3" fill="rgba(180, 180, 255, 0.4)" />
                <circle cx="50" cy="50" r="3" fill="rgba(180, 180, 255, 0.4)" />
                <circle cx="90" cy="90" r="3" fill="rgba(180, 180, 255, 0.4)" />
                <circle
                  cx="130"
                  cy="130"
                  r="3"
                  fill="rgba(180, 180, 255, 0.4)"
                />
                <circle
                  cx="170"
                  cy="170"
                  r="3"
                  fill="rgba(180, 180, 255, 0.4)"
                />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
      </div>

      <div className="container relative z-10 lg:mt-16 md:mt-16">
        {showPointers && (
          <>
            <div
              className="absolute left-56 top-96 hidden lg:block pointer-events-none transition-all duration-700"
              style={{
                opacity: 0.7 + normalizedScroll * 0.3,
                transform: `rotate(${normalizedScroll * -15}deg) scale(${1 + normalizedScroll * 0.2})`,
                filter: `hue-rotate(${normalizedScroll * 30}deg)`,
              }}
            >
              <Pointers name="AI-Agent" />
            </div>

            <div
              className="absolute right-80 -top-4 hidden lg:block pointer-events-none transition-all duration-700"
              style={{
                opacity: 0.7 + normalizedScroll * 0.3,
                transform: `rotate(${normalizedScroll * 15}deg) scale(${1 + normalizedScroll * 0.2})`,
                filter: `hue-rotate(${normalizedScroll * -30}deg)`,
              }}
            >
              <Pointers name="AI-Agent" color="red" />
            </div>
          </>
        )}

        <div
          className="relative transition-all duration-1000"
          style={{
            transform: `perspective(1000px) 
                       translateZ(${normalizedScroll * 100}px) 
                       scale(${1 - normalizedScroll * 0.05})`,
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div
            className="flex justify-center mb-6 transition-all duration-700"
            style={{
              transform: `translateY(${isVisible ? 0 : 20}px)`,
              opacity: isVisible ? 1 : 0,
              transitionDelay: "100ms",
            }}
          >
            <span className="inline-flex py-1 px-3 bg-gradient-to-r from-[var(--color-7B2CBF)] to-[var(--color-9D4EDD)] rounded-full font-semibold text-white shadow-lg shadow-[var(--color-7B2CBF)]/20 hover:scale-105 transition-transform">
              {badge}
            </span>
          </div>

          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 transition-all duration-700"
            style={{
              transform: `translateY(${isVisible ? 0 : 30}px)`,
              opacity: isVisible ? 1 : 0,
              transitionDelay: "200ms",
              WebkitBackgroundClip: "text",
              textShadow:
                normalizedScroll > 0.3
                  ? "none"
                  : "0 4px 20px rgba(123, 31, 162, 0.2)",
            }}
          >
            {title}
          </h1>

          <p
            className="text-center text-xl text-white/80 mt-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700"
            style={{
              transform: `translateY(${isVisible ? 0 : 40}px)`,
              opacity: isVisible ? 1 : 0,
              transitionDelay: "300ms",
              textShadow: `0 2px 10px rgba(0, 0, 0, ${0.2 + normalizedScroll * 0.3})`,
            }}
          >
            {description}
          </p>

          <form
            className="flex border border-white/15 rounded-full p-2 mt-20 max-w-lg mx-auto backdrop-blur-lg bg-white/5 transition-all duration-700 hover:border-white/30"
            style={{
              transform: `translateY(${isVisible ? 0 : 50}px)`,
              opacity: isVisible ? 1 : 0,
              transitionDelay: "400ms",
              boxShadow: `0 4px ${12 + normalizedScroll * 15}px rgba(139, 92, 246, ${0.1 + normalizedScroll * 0.3})`,
              background: `linear-gradient(135deg, var(--color-10002B)/${0.03 + normalizedScroll * 0.05}, var(--color-240046)/${0.08 + normalizedScroll * 0.05})`,
            }}
            onSubmit={handleEmailSubmit}
          >
            <input
              type="email"
              placeholder={emailPlaceholder}
              className="flex-1 bg-transparent px-4 text-white placeholder-white/50 focus:outline-none"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
            />
            <Button
              variant="tertiary"
              className="font-medium border bg-white border-[var(--color-E0AAFF)]/15 h-10 px-6 whitespace-nowrap text-black transition-all duration-300 hover:bg-[var(--color-E0AAFF)]/10 hover:shadow-lg hover:shadow-[var(--color-7B2CBF)]/20 pr-4"
              style={{ borderRadius: "50px" }}
              type="submit"
            >
              {submitted ? submittedText : buttonText}
            </Button>
            {submitted && (
              <p className="text-green-400 text-center mt-2">
                {successMessage}
              </p>
            )}

            {emailError && (
              <p className="text-red-400 text-center mt-2">{emailError}</p>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh)
              translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
};
