"use client";

import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Brain, Monitor, CheckCircle } from "lucide-react";
import Image from "next/image";
import WebsiteImageLoading from "@/assets/images/aiSolutions/solutions-section/websiteLoading.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stepsData = [
  {
    id: 1,
    icon: MessageSquare,
    title: "User Types a Prompt",
    description:
      'E.g., "Book a flight from Delhi to Bengaluru for 2 people next Monday"',
    gradient: "from-purple-500/30 to-purple-900/80",
    imageURL:
      "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=400",
    points: [
      "Natural language input processing",
      "Context understanding and intent recognition",
      "Multi-language support capabilities",
      "Voice-to-text integration available",
      "Smart suggestion and auto-completion",
    ],
  },
  {
    id: 2,
    icon: Brain,
    title: "AI Understands Intent & Extracts Details",
    description:
      "Extracts city, dates, passenger count, and infers missing information.",
    gradient: "from-violet-500/30 to-violet-900/80",
    imageURL:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
    points: [
      "Advanced NLP for context extraction",
      "Entity recognition and classification",
      "Intent mapping and validation",
      "Missing information inference",
      "Real-time processing and analysis",
    ],
  },
  {
    id: 3,
    icon: Monitor,
    title: "Website Updates Dynamically",
    description:
      "Background forms auto-fill, date pickers open, focus shifts to incomplete fields.",
    gradient: "from-indigo-500/30 to-indigo-900/80",
    imageURL:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
    points: [
      "Real-time UI synchronization",
      "Smart form auto-completion",
      "Dynamic field highlighting",
      "Seamless user experience flow",
      "Cross-platform compatibility",
    ],
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "User Completes Remaining Gaps",
    description:
      "Minimal effort required—AI highlights only what's missing for completion.",
    gradient: "from-purple-600/30 to-pink-600/80",
    image: WebsiteImageLoading,
    points: [
      "Guided completion workflow",
      "Smart field prioritization",
      "Error prevention and validation",
      "One-click completion options",
      "Progress tracking and feedback",
    ],
  },
];

const HowItWorks = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [cardStepWidth, setCardStepWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const animationFrameId = useRef<number | null>(null);

  const getCardStepWidth = (ref: HTMLDivElement | null) => {
    if (ref && ref.children.length > 0) {
      const firstCard = ref.children[0] as HTMLElement;
      const gap = window.innerWidth < 768 ? 16 : 24; // Responsive gap
      return firstCard.offsetWidth + gap;
    }
    return window.innerWidth < 768 ? 280 : 344; // Responsive default width
  };

  const handleScroll = () => {
    if (scrollRef.current && numPages > 0) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const maxScrollLeft =
        scrollRef.current.scrollWidth - scrollRef.current.offsetWidth;

      if (maxScrollLeft > 0 && numPages > 1) {
        setCurrentIndex(
          Math.min(
            numPages - 1,
            Math.round((scrollPosition / maxScrollLeft) * (numPages - 1)),
          ),
        );
      } else {
        setCurrentIndex(0);
      }
    }
  };

  useLayoutEffect(() => {
    const updateScrollMetrics = () => {
      if (scrollRef.current) {
        const currentCardStepWidth = getCardStepWidth(scrollRef.current);
        setCardStepWidth(currentCardStepWidth);

        // Calculate number of pages based on screen size
        const containerWidth = scrollRef.current.offsetWidth;
        const cardWidth = window.innerWidth < 768 ? 264 : 320; // Account for responsive card width
        const cardsPerView = Math.floor(containerWidth / cardWidth);
        const calculatedPages = Math.max(
          1,
          stepsData.length - cardsPerView + 1,
        );

        setNumPages(calculatedPages);
        setIsMobile(window.innerWidth < 768);
        handleScroll();
      }
    };

    updateScrollMetrics();
    window.addEventListener("resize", updateScrollMetrics);
    return () => window.removeEventListener("resize", updateScrollMetrics);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current && cardStepWidth > 0) {
      const newScrollLeft = scrollRef.current.scrollLeft - cardStepWidth;
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && cardStepWidth > 0) {
      const newScrollLeft = scrollRef.current.scrollLeft + cardStepWidth;
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeftStart(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = "grabbing";
    scrollRef.current.style.userSelect = "none";
    e.preventDefault();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeftStart(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();

    if (animationFrameId.current)
      cancelAnimationFrame(animationFrameId.current);

    animationFrameId.current = requestAnimationFrame(() => {
      if (scrollRef.current) {
        const walk = e.pageX - startX;
        scrollRef.current.scrollLeft = scrollLeftStart - walk;
      }
    });
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();

    if (animationFrameId.current)
      cancelAnimationFrame(animationFrameId.current);

    animationFrameId.current = requestAnimationFrame(() => {
      if (scrollRef.current) {
        const walk = e.touches[0].pageX - startX;
        scrollRef.current.scrollLeft = scrollLeftStart - walk;
      }
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
      scrollRef.current.style.userSelect = "auto";
    }
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <section
      id="how-it-works"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-6">
        {/* Animated Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 space-y-4 sm:space-y-0"
        >
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-white-900 leading-tight max-w-3xl">
            How It{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Works
            </span>
          </motion.h2>

          {/* Arrows - Hidden on mobile, shown on larger screens */}
          <div className="hidden sm:flex space-x-3 mt-4 sm:mt-0">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className={`p-2 md:p-3 rounded-full border transition-all duration-200 ${
                currentIndex === 0
                  ? "text-transparent border-gray-200 cursor-not-allowed"
                  : "text-gray-600 border-gray-300 hover:text-gray-900 hover:border-gray-400"
              }`}
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex >= numPages - 1}
              className={`p-2 md:p-3 rounded-full border transition-all duration-200 ${
                currentIndex >= numPages - 1
                  ? "text-transparent border-gray-200 cursor-not-allowed"
                  : "text-gray-600 border-gray-300 hover:text-gray-900 hover:border-gray-400"
              }`}
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide py-2 md:py-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              cursor: "grab",
              // Snap scrolling for better mobile experience
              scrollSnapType: "x mandatory",
            }}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {stepsData.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-84 rounded-2xl md:rounded-3xl relative overflow-hidden group cursor-pointer"
                  style={{ scrollSnapAlign: "start" }}
                >
                  {step.imageURL && (
                    <img
                      src={step.imageURL}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  {step.image && (
                    <Image
                      src={step.image}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50 z-10" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${step.gradient} opacity-90 z-20`}
                  />

                  <div className="absolute top-3 right-3 md:top-4 md:right-4 z-30">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 lg:p-8 z-30">
                    <h3 className="text-white text-center text-lg md:text-xl lg:text-2xl font-semibold mb-2 drop-shadow-md">
                      {step.title}
                    </h3>
                    <p className="text-white/80 text-center text-xs md:text-sm mb-3 md:mb-4 drop-shadow-sm leading-relaxed">
                      {step.description}
                    </p>

                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <ul className="text-white text-xs md:text-sm space-y-1 mt-2 md:mt-3">
                        {step.points
                          .slice(0, isMobile ? 2 : 3)
                          .map((point, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-1 h-1 bg-white rounded-full mt-1.5 md:mt-2 mr-2 flex-shrink-0" />
                              <span className="leading-tight">{point}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-1.5 md:space-x-2 mt-6 md:mt-8">
          {Array.from({ length: numPages }).map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-md transition-all duration-300 ${
                currentIndex === index
                  ? "w-6 md:w-8 bg-purple-600"
                  : "w-3 md:w-4 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex sm:hidden justify-center space-x-4 mt-4">
          <button
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              currentIndex === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            Previous
          </button>
          <button
            onClick={scrollRight}
            disabled={currentIndex >= numPages - 1}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              currentIndex >= numPages - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
