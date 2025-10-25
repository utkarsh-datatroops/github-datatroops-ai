"use client";

import React from "react";

export default function CTAAction() {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-[#3C096C] to-[#9D4EDD] flex justify-center items-center">
      <div className="max-w-screen-2xl w-full mx-auto flex flex-col md:flex-row items-center md:justify-between text-center md:text-left px-8 md:px-16 gap-4">
        <h2 className="text-lg md:text-2xl font-bold text-white">
          Are you in need of our services? We&apos;re here to help! Reach out to
          us today and let us know how we can assist you.
        </h2>
        <button className="mt-3 md:mt-0 px-8 py-3 rounded-lg bg-white text-[#7B2CBF] font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-[#f3e8ff] whitespace-nowrap">
          {" "}
          Contact Us
        </button>
      </div>
    </section>
  );
}
