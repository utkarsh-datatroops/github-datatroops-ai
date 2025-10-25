"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <motion.div
      initial={false}
      animate={{ backgroundColor: isOpen ? "#3F0071" : "#240046" }}
      className={twMerge(
        "rounded-md overflow-hidden cursor-pointer",
        isOpen ? "shadow-md" : "",
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between p-3 md:p-4 !pb-2">
        <h3 className="text-md md:text-lg font-semibold text-white">
          {question}
        </h3>
        <motion.div initial={false} animate={{ rotate: isOpen ? 180 : 0 }}>
          {isOpen ? (
            <FaChevronUp className="text-purple-400 text-base" />
          ) : (
            <FaChevronDown className="text-gray-400 text-base" />
          )}
        </motion.div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0, ease: "easeInOut" }}
        className="px-3 md:px-4 pb-2"
      >
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

// FAQSection Component (Reusable)
interface FAQSectionProps {
  title: string;
  description: string;
  faqs: { question: string; answer: string }[];
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title,
  description,
  faqs,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full text-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-white leading-tight">
            {title}
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
