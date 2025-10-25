"use client";
import React, { useEffect, useState } from "react";
// import PhoneScreen from './PhoneScreen.svg'; // Adjust the path as needed
import Image from "next/image";

const rotatingTexts = [
  "Book Appointments?",
  "Medical FAQs?",
  "Lab Reports?",
  "Appointment Notification?",
] as const;

const HeroSection1: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % rotatingTexts.length);
        setIsTransitioning(false);
      }, 200);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-[#e7f2ff] flex items-center overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 max-w-full lg:max-w-[600px] text-center lg:text-left">
          <div
            className="h-8 mb-4 sm:mb-6"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transition: "opacity 0.2s ease-in-out",
            }}
          >
            <span className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-[#003153] leading-[1.1] tracking-[-0.02em] mb-6 block">
              {rotatingTexts[current]}
            </span>
          </div>

          <h1 className="text-[40px] sm:text-[48px] lg:text-[64px] font-semibold text-[#22223b] leading-[1.1] tracking-[-0.02em] mb-6 sm:mb-8">
            Get help when you
            <br className="hidden sm:block" />
            need it, instantly
          </h1>

          <p className="text-[16px] sm:text-[18px] leading-[1.8] text-[#4a4e69] max-w-[520px] mx-auto lg:mx-0 mb-8 sm:mb-12 opacity-80">
            Deliver reliable, on-demand healthcare support—from booking
            appointments to accessing prescriptions. Stay ahead with fast
            deployment and effortless scalability.
          </p>

          {/* Feature row: left-aligned, single line, white icons/text, even spacing */}
          <div className="flex flex-row items-center gap-10 mt-2 justify-start">
            <div className="flex flex-row items-center gap-2">
              <Image
                src="/solutions/icon/clock-icon.svg"
                alt="Zero waiting time"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
              <span className="text-base font-normal text-[#22223b]">
                Zero waiting time
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Image
                src="/solutions/icon/profile-icon.svg"
                alt="Personalized Support"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
              <span className="text-base font-normal text-[#22223b]">
                Personalized Support
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Image
                src="/solutions/icon/24-7-icon.svg"
                alt="24×7 AI support"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
              <span className="text-base font-normal text-[#22223b]">
                24×7 AI support
              </span>
            </div>
          </div>
        </div>

        {/* Right Content - Interactive Phone Section */}
        <div className="flex-1 relative h-[600px] sm:h-[700px] lg:h-[800px]">
          {/* Floating Elements Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Background Floating Elements */}
            <div className="absolute w-full h-full">
              {/* Top Left - Lab Reports */}
              <div className="absolute top-[10%] -left-[5%] lg:-left-[15%] transform hover:scale-105 transition-transform duration-300 z-0">
                <div className="relative w-[240px] sm:w-[280px] lg:w-[420px] aspect-[4/1] bg-white rounded-xl shadow-lg p-4">
                  <Image
                    src="/solutions/lab-reports.svg"
                    alt="Lab Reports"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Bottom Left - FAQ Alternative */}
              <div className="absolute bottom-[15%] -left-[5%] lg:-left-[15%] transform hover:scale-105 transition-transform duration-300 z-0">
                <div className="relative w-[240px] sm:w-[280px] lg:w-[420px] aspect-[4/1] bg-white rounded-xl shadow-lg p-4">
                  <Image
                    src="/solutions/faq.svg"
                    alt="Additional FAQs"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Bottom Right - Prescription Summary */}
              <div className="absolute bottom-[20%] -right-[5%] lg:-right-[30%] transform hover:scale-105 transition-transform duration-300 z-0">
                <div className="relative w-[510px] sm:w-[420px] lg:w-[450px] aspect-[1/1] bg-white rounded-xl shadow-lg p-4">
                  <Image
                    src="/solutions/summarise-prescription.svg"
                    alt="Prescription Summary"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Center Phone - On top of other elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative w-[300px] sm:w-[400px] lg:w-[480px] aspect-[1/2]">
                  <Image
                    src="/solutions/sample-chatbot-interaction-phone.svg"
                    alt="Healthcare chatbot interface"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;
