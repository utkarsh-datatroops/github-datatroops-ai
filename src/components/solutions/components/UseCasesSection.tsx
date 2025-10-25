"use client";
import React, { useState, useEffect, TouchEvent } from "react";
import { barlowSemiCondensed, inter } from "@/improved-fonts";

// Tab categories
const tabs = [
  { id: "core", label: "Core Scenarios for a Healthcare Chatbot" },
  { id: "expanded", label: "Expanded & Edge" },
  { id: "security", label: "Security & Verification" },
  { id: "analytics", label: "Analytics & Feedback" },
];

// Use case content
const useCases = {
  core: [
    {
      title: "Appointment Booking Based on Symptoms",
      items: [
        'Users describe their symptoms in natural language (e.g., "I have a sore throat and fever").',
        "The chatbot intelligently maps symptoms to the right specialty and suggests available doctors and time slots.",
        "Users select and confirm appointments, receiving instant confirmation via chat or SMS.",
      ],
    },
    {
      title: "Instant Medical FAQs",
      items: [
        "The chatbot provides reliable, up-to-date answers to common health questions, symptoms, medications, and conditions.",
        "Information is sourced from trusted medical databases and APIs for accuracy.",
      ],
    },
    {
      title: "Secure Medical Report Retrieval",
      items: [
        "Users verify their identity (e.g., phone number and OTP).",
        "The chatbot fetches and displays/downloads the latest medical reports, with options to specify dates or report types.",
      ],
    },
  ],
  expanded: [
    {
      title: "Symptom Triage & Recommendations",
      items: [
        "The chatbot assesses risk levels (mild/moderate/severe) and offers next steps: self-care, booking a visit, or emergency advice.",
      ],
    },
    {
      title: "Doctor Search by Specialty or Name",
      items: [
        "Users can search for specific doctors or specialties and see real-time availability.",
      ],
    },
    {
      title: "Follow-Up Appointments",
      items: [
        "The chatbot recognizes returning users and proactively suggests follow-up visits based on previous interactions.",
      ],
    },
    {
      title: "Prescription & Medication Queries",
      items: [
        "Patients can ask about medication uses, side effects, and compatibility, with instant answers and refill support.",
      ],
    },
    {
      title: "Reminders & Cancellations",
      items: [
        "Automated reminders for upcoming appointments, with easy rescheduling or cancellation via chat.",
      ],
    },
    {
      title: "Report Notifications",
      items: [
        "Users receive alerts when new reports are available, with instant access to view or download.",
      ],
    },
    {
      title: "Multi-language Support",
      items: [
        "The chatbot communicates in multiple languages, making healthcare accessible to diverse populations.",
      ],
    },
    {
      title: "Context Memory",
      items: [
        'The bot remembers recent interactions, enabling seamless follow-ups and repeat bookings ("Book with the same doctor as last time").',
      ],
    },
  ],
  security: [
    {
      title: "Phone Number Authentication",
      items: ["Secure access to sensitive info via OTP or SMS verification."],
    },
    {
      title: "Session Privacy",
      items: [
        "Session-based privacy controls, with options to log out or clear sensitive data after use.",
      ],
    },
  ],
  analytics: [
    {
      title: "Patient Feedback Collection",
      items: [
        "After each interaction, the chatbot gathers feedback on answers and booking experiences to improve service quality.",
      ],
    },
  ],
};

const UseCasesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("core");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Check screen size and set cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setIsMobile(false);
        setCardsPerView(2);
      } else {
        setIsMobile(false);
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset slide when tab changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeTab]);

  const activeUseCases = useCases[activeTab as keyof typeof useCases];
  const totalPages = Math.ceil(activeUseCases.length / cardsPerView);
  const needsCarousel = activeUseCases.length > cardsPerView;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Get current cards to display
  const getCurrentCards = () => {
    if (isMobile) {
      return [activeUseCases[currentSlide]];
    }

    if (needsCarousel) {
      const startIdx = currentSlide * cardsPerView;
      return activeUseCases.slice(startIdx, startIdx + cardsPerView);
    }

    return activeUseCases;
  };

  const currentCards = getCurrentCards();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };
  // Swipe handlers
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-r from-[#1D1144] to-[#2D2A5C] text-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <h2
          className={`text-[36px] leading-[48px] sm:text-[48px] sm:leading-[48px] font-bold ${barlowSemiCondensed.className} text-center mb-6`}
        >
          Use cases
        </h2>

        {/* Description */}
        {/* <p className="text-center max-w-4xl mx-auto mb-12 text-lg">
          Lorem ipsum dolor sit amet consectetur. Amet ut at ac purus quis sagittis duis. Et eu sit sagittis erat vulputate. Vel enim ut interdum molestie orci quam nascetur elementum. Ultricies aliquet amet scelerisque morbi.
        </p> */}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-6 rounded-lg text-lg font-medium transition-colors ${barlowSemiCondensed.className} ${
                activeTab === tab.id
                  ? "bg-[#2F80ED] text-white"
                  : "bg-white text-[#1D1144]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Display - Grid for desktop, Carousel for mobile or when cards exceed grid columns */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
          >
            {currentCards.map((useCase, index) => (
              <div
                key={`${activeTab}-${index}`}
                className="bg-[#E6FAF3] rounded-lg overflow-hidden"
              >
                <div className="bg-[#E6FAF3] h-[80px] p-6 text-center">
                  <h3
                    className={`text-xl font-bold ${inter.className} text-[#1D1144]`}
                  >
                    {useCase.title}
                  </h3>
                </div>
                <div className="bg-white h-full p-6">
                  <ul className="space-y-4">
                    {useCase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <circle cx="10" cy="10" r="10" fill="#10002B" />
                            <path
                              d="M6 10.5l2.5 2.5 5-5"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className={`text-gray-700 ${inter.className}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Navigation - Only shown when needed */}
          {needsCarousel && (
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={handlePrev}
                className="bg-white text-[#1D1144] rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100"
                aria-label="Previous page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Page Indicators */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="bg-white text-[#1D1144] rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100"
                aria-label="Next page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
          )}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
