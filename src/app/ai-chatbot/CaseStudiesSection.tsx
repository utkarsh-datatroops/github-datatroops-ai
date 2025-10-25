"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Tooltip from "@/components/ToolTip";
import { useRouter } from "next/navigation";

// --- Types --- //

interface SectionMeta {
  sectionTitle: string;
  sectionSubtitle: string;
  solutionTitle: string;
  buttonLabel: (industry: string) => string;
  buttonTooltip: string;
  imageLabel: string;
}

interface CaseStudy {
  id: number;
  title: string;
  client?: string;
  industry: string;
  challenge: string;
  solution: string;
  gradient: string;
  image: string;
  details: string[];
  href?: string;
}

interface CaseStudiesSectionProps {
  sectionMeta: SectionMeta;
  caseStudiesData: CaseStudy[];
}

const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  sectionMeta,
  caseStudiesData,
}) => {
  const [activeCase, setActiveCase] = useState(0);
  const router = useRouter();

  const handleButtonClick = (href: string) => router.push(href);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCase((prev) => (prev + 1) % caseStudiesData.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [caseStudiesData.length]);

  const active = caseStudiesData[activeCase];

  return (
    <section className="w-full text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            {sectionMeta.sectionTitle}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {sectionMeta.sectionSubtitle}
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudiesData.map(({ id, industry }, idx) => (
            <button
              key={id}
              onClick={() => setActiveCase(idx)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCase === idx
                  ? "bg-white text-gray-900 shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-lg bg-gradient-to-r ${active.gradient}`}
              ></div>
              <div>
                <h3 className="text-3xl font-bold">{active.title}</h3>
                {active.client && (
                  <p className="text-purple-300">{active.client}</p>
                )}
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold mb-3 text-blue-300">
                {sectionMeta.solutionTitle}
              </h4>
              <p className="text-white font-medium mb-3">{active.solution}</p>
              <ul className="space-y-2">
                {active.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            {active.href ? (
              <button
                onClick={() => handleButtonClick(active.href!)}
                className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg mt-3"
              >
                <span>{sectionMeta.buttonLabel(active.industry)}</span>
                <FaArrowRight />
              </button>
            ) : (
              <Tooltip message={sectionMeta.buttonTooltip}>
                <button className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg mt-3">
                  <span>{sectionMeta.buttonLabel(active.industry)}</span>
                  <FaArrowRight />
                </button>
              </Tooltip>
            )}
          </div>
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden h-64 mb-8">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${active.gradient} opacity-80`}
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-90">{sectionMeta.imageLabel}</p>
                <p className="text-xl font-bold">{active.industry}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
