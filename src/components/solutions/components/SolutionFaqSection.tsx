"use client";
import React, { useState } from "react";
import Image from "next/image";
import { barlowSemiCondensed, inter } from "@/improved-fonts";
import SolutionFAQSectionImage from "@/assets/images/solutions/SolutionFAQsImage.svg?url";

// FAQ data
const faqItems = [
  {
    question: "What is HealthAssist AI?",
    answer:
      "HealthAssist AI is a smart, secure, and scalable chatbot solution designed specifically for medical websites and hospital networks.\n\nIt transforms how patients interact with your healthcare system - making booking appointments, finding medical information, and accessing reports effortlessly, 24/7.",
  },
  {
    question: "How can patients book an appointment using the chatbot?",
    answer:
      "Patients can simply type their request in natural language, such as 'I need to see a cardiologist' or describe their symptoms. The chatbot will guide them through available time slots, doctor selection, and confirmation, all within the same conversation.",
  },
  {
    question: "What types of medical questions can the chatbot answer?",
    answer:
      "The chatbot can answer common questions about symptoms, conditions, medications, hospital services, and general health information. All information is sourced from verified medical databases and can be customized to include your hospital's specific protocols.",
  },
  {
    question: "Can users access their medical reports through the chatbot?",
    answer:
      "Yes, patients can securely access their medical reports after identity verification through phone number and OTP. The chatbot can retrieve and display reports based on date ranges or specific test types.",
  },
  {
    question: "Is the chatbot available at all times?",
    answer:
      "Yes, HealthAssist AI is available 24/7, providing round-the-clock support for patients even outside regular business hours. This ensures patients can get assistance whenever they need it.",
  },
  {
    question:
      "Can the chatbot answer questions about insurance, billing, or hospital services?",
    answer:
      "Absolutely. The chatbot can be configured to provide information about accepted insurance plans, billing procedures, and available hospital services. It can also direct users to relevant departments for complex queries.",
  },
  {
    question: "What if the chatbot cannot answer my question?",
    answer:
      "If the chatbot encounters a question it cannot answer, it will gracefully acknowledge its limitations and offer to connect the patient with appropriate human staff. It can also create support tickets or schedule callbacks.",
  },
  {
    question:
      "How does the chatbot improve the hospital or clinic's operations?",
    answer:
      "The chatbot reduces the administrative burden on staff by handling routine inquiries, appointment scheduling, and report access. This allows your team to focus on providing care rather than answering repetitive questions, ultimately improving efficiency and patient satisfaction.",
  },
  {
    question:
      "Can the chatbot be customized for different hospitals or clinics?",
    answer:
      "Yes, HealthAssist AI is fully customizable to match your hospital's branding, services, and specific workflows. We work closely with your team to ensure the chatbot reflects your unique healthcare offerings and protocols.",
  },
];

const SolutionFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      className={`w-full bg-white py-16 px-4 ${barlowSemiCondensed.variable} ${inter.variable}`}
    >
      <div className="max-w-[500px] mx-auto sm:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1400px]">
        <h2
          className={`${barlowSemiCondensed.className} font-medium text-black text-[36px] leading-[48px] sm:text-[48px] sm:leading-[48px] text-center mb-12`}
        >
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 sm:mx-4">
          {/* FAQ Accordion */}
          <div className="w-full lg:w-3/5">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-2">
                <button
                  className={`w-full text-left p-4 flex justify-between items-center border rounded-t-lg ${
                    openIndex === index
                      ? "bg-[#4B4582] text-white"
                      : "bg-[#E6FAF3] text-[#1D1144]"
                  } transition-colors duration-200`}
                  onClick={() => toggleFaq(index)}
                >
                  <span
                    className={`${inter.className} font-semibold text-md leading-sm`}
                  >
                    {item.question}
                  </span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="bg-white p-4 rounded-b-lg shadow-md -mt-1 border-4 border-[#4B4582]">
                    {item.answer.split("\n\n").map((paragraph, i) => (
                      <p
                        key={i}
                        className={`${inter.className} text-md leading-sm text-gray-700 mb-2 last:mb-0`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Phone Image */}
          <div className="w-full lg:w-2/5 flex justify-center items-start">
            <div className="relative w-full max-w-[300px]">
              <Image
                src={SolutionFAQSectionImage}
                alt="HealthAssist AI Chatbot Interface"
                width={400}
                height={800}
                className="w-full shadow-[0_8px_32px_0_rgba(44,41,84,0.18)] rounded-[60px] h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionFaqSection;
