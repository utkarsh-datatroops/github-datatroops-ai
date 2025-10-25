"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Layers,
  Zap,
  Shield,
  BarChart2,
  Database,
  Cpu,
} from "lucide-react";

interface IndustryData {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  solutions: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  caseStudy?: {
    title: string;
    description: string;
    results: string[];
  };
}

const IndustrySolutionsSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("finance");
  const [activeTab, setActiveTab] = useState<string>("solutions");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const carouselRef = useRef<HTMLDivElement>(null);

  // Industry data
  const industries: IndustryData[] = [
    {
      id: "finance",
      title: "Financial Services",
      description:
        "Transform financial operations with AI-powered solutions that enhance security, improve customer experiences, and optimize decision-making processes.",
      icon: BarChart2,
      color: "from-amber-500 to-orange-600",
      solutions: [
        {
          title: "Fraud Detection",
          description:
            "Real-time anomaly detection system that identifies suspicious transactions with 99.7% accuracy",
          icon: Shield,
        },
        {
          title: "Automated Credit Scoring",
          description:
            "ML-powered risk assessment that evaluates creditworthiness using 200+ data points",
          icon: BarChart2,
        },
        {
          title: "Conversational Banking",
          description:
            "AI assistant that handles customer inquiries, account management, and financial advice",
          icon: Zap,
        },
      ],
      stats: [
        { value: "87%", label: "Reduction in fraud" },
        { value: "3.5x", label: "Faster approvals" },
        { value: "$4.2M", label: "Annual savings" },
      ],
      caseStudy: {
        title: "Global Bank Transformation",
        description:
          "We helped a leading financial institution implement an AI-driven fraud detection system that processes over 10 million transactions daily.",
        results: [
          "Reduced false positives by 62%",
          "Improved detection rate by 41%",
          "Saved $3.8M in annual fraud losses",
        ],
      },
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description:
        "Revolutionize patient care with intelligent systems that enhance diagnostics, streamline operations, and improve treatment outcomes.",
      icon: Layers,
      color: "from-blue-500 to-indigo-600",
      solutions: [
        {
          title: "Diagnostic Assistance",
          description:
            "AI-powered image analysis that helps identify patterns in medical imaging with 94% accuracy",
          icon: Layers,
        },
        {
          title: "Patient Triage",
          description:
            "Intelligent system that prioritizes cases based on severity, symptoms, and medical history",
          icon: Zap,
        },
        {
          title: "Medical Records NLP",
          description:
            "Natural language processing that extracts insights from unstructured medical data",
          icon: Database,
        },
      ],
      stats: [
        { value: "32%", label: "Faster diagnoses" },
        { value: "28%", label: "Reduced readmissions" },
        { value: "4.8/5", label: "Provider satisfaction" },
      ],
      caseStudy: {
        title: "Regional Hospital Network",
        description:
          "Our AI diagnostic assistant helped a network of 12 hospitals improve their radiology workflow and patient outcomes.",
        results: [
          "Reduced diagnostic time by 37%",
          "Improved accuracy by 22%",
          "Saved 15,000+ physician hours annually",
        ],
      },
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      description:
        "Optimize production processes, predict maintenance needs, and ensure quality control with advanced AI solutions for modern manufacturing.",
      icon: Cpu,
      color: "from-emerald-500 to-teal-600",
      solutions: [
        {
          title: "Predictive Maintenance",
          description:
            "ML algorithms that forecast equipment failures before they occur, reducing downtime",
          icon: Zap,
        },
        {
          title: "Quality Control Vision",
          description:
            "Computer vision system that inspects products at 10x the speed of manual inspection",
          icon: Layers,
        },
        {
          title: "Supply Chain Optimization",
          description:
            "Intelligent forecasting that improves inventory management and reduces costs",
          icon: BarChart2,
        },
      ],
      stats: [
        { value: "76%", label: "Less downtime" },
        { value: "35%", label: "Defect reduction" },
        { value: "22%", label: "Lower inventory costs" },
      ],
      caseStudy: {
        title: "Automotive Parts Manufacturer",
        description:
          "We implemented a predictive maintenance system for a global automotive parts manufacturer with 8 production facilities.",
        results: [
          "Reduced unplanned downtime by 73%",
          "Extended equipment lifespan by 31%",
          "Achieved ROI within 7 months",
        ],
      },
    },
    {
      id: "retail",
      title: "Retail & E-Commerce",
      description:
        "Enhance customer experiences, optimize inventory, and personalize marketing with AI solutions designed for modern retail challenges.",
      icon: Database,
      color: "from-purple-500 to-pink-600",
      solutions: [
        {
          title: "Personalized Recommendations",
          description:
            "AI engine that suggests products based on browsing history, purchases, and preferences",
          icon: Zap,
        },
        {
          title: "Demand Forecasting",
          description:
            "Predictive analytics that optimize inventory levels and reduce stockouts",
          icon: BarChart2,
        },
        {
          title: "Visual Search",
          description:
            "Computer vision technology that allows customers to search using images",
          icon: Layers,
        },
      ],
      stats: [
        { value: "24%", label: "Higher conversion" },
        { value: "18%", label: "Larger basket size" },
        { value: "42%", label: "Better inventory turnover" },
      ],
      caseStudy: {
        title: "Multi-Channel Retailer",
        description:
          "Our recommendation engine helped a fashion retailer with 200+ stores and an e-commerce platform increase sales and customer satisfaction.",
        results: [
          "Increased online conversion by 32%",
          "Boosted average order value by 27%",
          "Reduced returns by 18%",
        ],
      },
    },
  ];

  // Get current industry
  const currentIndustry =
    industries.find((industry) => industry.id === selectedIndustry) ||
    industries[0];

  // Scroll to selected industry in carousel
  useEffect(() => {
    if (carouselRef.current) {
      const selectedElement = document.getElementById(
        `industry-${selectedIndustry}`,
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [selectedIndustry]);

  // Navigation functions
  const goToPrevious = () => {
    const currentIndex = industries.findIndex(
      (industry) => industry.id === selectedIndustry,
    );
    const prevIndex =
      (currentIndex - 1 + industries.length) % industries.length;
    setSelectedIndustry(industries[prevIndex].id);
  };

  const goToNext = () => {
    const currentIndex = industries.findIndex(
      (industry) => industry.id === selectedIndustry,
    );
    const nextIndex = (currentIndex + 1) % industries.length;
    setSelectedIndustry(industries[nextIndex].id);
  };

  return (
    <section
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black overflow-hidden relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-300/10 to-blue-300/10 dark:from-purple-900/20 dark:to-blue-900/20 blur-3xl"></div>
        <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-300/10 to-pink-300/10 dark:from-amber-900/20 dark:to-pink-900/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="inline-block">Industry-Specific</span>{" "}
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
              AI Solutions
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Discover how our tailored AI technologies are transforming
            operations and driving innovation across diverse industries.
          </p>
        </motion.div>

        {/* Industry selection carousel */}
        <div className="relative mb-12">
          <motion.button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto py-4 px-12 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent snap-x"
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  id={`industry-${industry.id}`}
                  key={industry.id}
                  className={`flex-shrink-0 w-[280px] p-6 rounded-xl snap-center cursor-pointer transition-all duration-300 ${selectedIndustry === industry.id ? "bg-white dark:bg-gray-800 shadow-xl border-2 border-purple-500/50 dark:border-purple-500/50" : "bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-purple-400/50 dark:hover:border-purple-400/30"}`}
                  onClick={() => setSelectedIndustry(industry.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${industry.color} bg-opacity-10`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {selectedIndustry === industry.id && (
                      <motion.div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${industry.color}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {industry.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {industry.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      {industry.solutions.length} Solutions
                    </div>
                    <div className="flex space-x-1">
                      {industry.solutions.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${selectedIndustry === industry.id ? `bg-gradient-to-r ${industry.color}` : "bg-gray-300 dark:bg-gray-600"}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Industry details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndustry}
            className="bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab("solutions")}
                className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === "solutions" ? "text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400" : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"}`}
              >
                Solutions
              </button>
              <button
                onClick={() => setActiveTab("case-study")}
                className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === "case-study" ? "text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400" : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"}`}
              >
                Case Study
              </button>
            </div>

            {/* Tab content */}
            <div className="p-8">
              {activeTab === "solutions" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {currentIndustry.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div
                          className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${currentIndustry.color} mb-2`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {currentIndustry.solutions.map((solution, index) => {
                      const SolutionIcon = solution.icon;
                      return (
                        <motion.div
                          key={index}
                          className="bg-white dark:bg-gray-900/30 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + index * 0.1,
                          }}
                          whileHover={{ y: -5 }}
                        >
                          <div
                            className={`p-3 rounded-lg bg-gradient-to-br ${currentIndustry.color} w-fit mb-4`}
                          >
                            <SolutionIcon className="w-5 h-5 text-white" />
                          </div>

                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {solution.title}
                          </h4>

                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {solution.description}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {activeTab === "case-study" && currentIndustry.caseStudy && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-3xl mx-auto"
                >
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {currentIndustry.caseStudy.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {currentIndustry.caseStudy.description}
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <BarChart2 className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                      Key Results
                    </h4>

                    <div className="space-y-4">
                      {currentIndustry.caseStudy.results.map(
                        (result, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                          >
                            <div
                              className={`w-6 h-6 rounded-full bg-gradient-to-r ${currentIndustry.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                            >
                              <span className="text-white text-xs font-bold">
                                {index + 1}
                              </span>
                            </div>
                            <div className="text-gray-800 dark:text-gray-200">
                              {result}
                            </div>
                          </motion.div>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <motion.button
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 text-white font-medium shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Full Case Study</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IndustrySolutionsSection;
