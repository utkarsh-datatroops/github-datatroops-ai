"use client";
import React from "react";
import Link from "next/link";
import { barlowSemiCondensed } from "@/improved-fonts";

const CtaSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#1D1144] to-[#2D2A5C] text-white relative overflow-hidden">
      {/* Background overlay with medical icons */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/medical-icons-pattern.png')",
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2
          className={`${barlowSemiCondensed.className} text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-6`}
        >
          Ready to Upgrade Your Hospital&apos;s Digital Front Door?
        </h2>

        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          Partner with HealthAssist AI - where healthcare meets innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/request-demo">
            <button className="bg-[#2F80ED] hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300">
              Request a Demo
            </button>
          </Link>

          <Link href="/contact-sales">
            <button className="bg-[#2F80ED] hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300">
              Talk to Sales
            </button>
          </Link>

          <Link href="/learn-more">
            <button className="bg-[#2F80ED] hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 48"
          fill="white"
        >
          <path d="M0,0 C480,48 960,48 1440,0 L1440,48 L0,48 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CtaSection;
