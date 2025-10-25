import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="w-full py-4"
      style={{
        background: "linear-gradient(90deg, #10002B 0%, #4B4582 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-8">
        {/* Logo (full SVG, no extra text) */}
        <div className="flex items-center">
          <Image
            src="src/assets/images/solutions/logo/logoWithWhiteText.svg"
            alt="Datatroops Logo"
            height={44}
            width={160}
            className="h-11 w-auto"
            priority
          />
        </div>
        {/* Nav Links */}
        <div className="hidden md:flex gap-8 items-center text-lg font-medium">
          <a
            href="#about"
            className="text-white hover:text-[#FFD600] transition-colors duration-150"
          >
            About Us
          </a>
          <a href="#solutions" className="text-[#FFD600] font-semibold">
            Solutions
          </a>
          <a
            href="#pricing"
            className="text-white hover:text-[#FFD600] transition-colors duration-150"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="text-white hover:text-[#FFD600] transition-colors duration-150"
          >
            Testimonials
          </a>
        </div>
        {/* Contact Us Button */}
        <div className="flex items-center">
          <a
            href="#contact"
            className="bg-[#FFD600] text-[#22223b] font-bold rounded-full px-7 py-2 text-lg shadow hover:bg-[#ffea80] transition-colors duration-150"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </nav>
  );
}
