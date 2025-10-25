"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Puzzle,
  Brain,
  RotateCcw,
  MessageCircle,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

const features = [
  {
    id: 1,
    number: "01",
    title: "Intent-Based Navigation",
    subtitle: "Smart Navigation",
    description:
      "Jump users to the right page instantly based on their request. No more clicking through menus or searching for the right section.",
    icon: Search,
    image:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "from-emerald-400 to-teal-500",
    keyFeatures: [
      "Instant page navigation from natural language",
      "Context-aware routing system",
      "Reduce user clicks by 70%",
      "Works across all device types",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Intelligent Autofill",
    subtitle: "Smart Form Completion",
    description:
      "Extracts values from natural language and fills form fields automatically. Turn conversations into completed forms effortlessly.",
    icon: Puzzle,
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "from-blue-400 to-cyan-500",
    keyFeatures: [
      "Natural language to form data extraction",
      "Multi-field intelligent completion",
      "Reduces form abandonment rates",
      "Supports complex form structures",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "AI-Powered Slot Completion",
    subtitle: "Smart Data Collection",
    description:
      "Identifies missing information like dates and passenger counts, then prompts users for only what's needed. No overwhelming forms.",
    icon: Brain,
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "from-purple-400 to-violet-500",
    keyFeatures: [
      "Dynamic missing data identification",
      "Contextual prompt generation",
      "Streamlined user experience",
      "Intelligent data validation",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Dynamic Website Updates",
    subtitle: "Real-Time Interface",
    description:
      "Pages, dropdowns, forms, and UIs update in real-time without page reloads. Instant feedback for seamless interactions.",
    icon: RotateCcw,
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "from-orange-400 to-red-500",
    keyFeatures: [
      "Real-time UI updates without reloads",
      "Dynamic content personalization",
      "Instant visual feedback",
      "Seamless state management",
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Multilingual Support",
    subtitle: "Global Communication",
    description:
      "Understands user prompts in multiple languages and responds appropriately. Break down language barriers for global users.",
    icon: MessageCircle,
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "from-pink-400 to-rose-500",
    keyFeatures: [
      "Multi-language natural language processing",
      "Cultural context understanding",
      "Real-time translation capabilities",
      "Global user accessibility",
    ],
  },
  {
    id: 6,
    number: "06",
    title: "Works on Mobile Too",
    subtitle: "Cross-Platform Experience",
    description:
      "Seamless experience across desktop and mobile devices. Your users get the same powerful AI assistance anywhere.",
    icon: Smartphone,
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "from-indigo-400 to-purple-500",
    keyFeatures: [
      "Responsive design optimization",
      "Touch-friendly interactions",
      "Consistent cross-device experience",
      "Progressive web app capabilities",
    ],
  },
];

export default function KeyFeatures() {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const handleFeatureClick = (featureIndex: number) => {
    setSelectedFeature(featureIndex);
  };

  const CurrentFeatureIcon = features[selectedFeature].icon;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Animated Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 1,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 lg:mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <Sparkles className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-light mb-4 text-white leading-tight px-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              background:
                "linear-gradient(90deg, #ffffff, #60a5fa, #3b82f6, #ffffff)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Key Features
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Powerful capabilities that transform user interactions with
            intelligent automation
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-6 lg:gap-12">
          {/* Feature Navigation - Mobile First */}
          <div className="xl:col-span-1 xl:order-last">
            <motion.h3
              className="text-lg sm:text-xl font-semibold mb-4 lg:mb-6 text-white text-center xl:text-left flex items-center gap-2 justify-center xl:justify-start"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              </motion.div>
              All Features
            </motion.h3>

            {/* Mobile: Horizontal Scroll, Desktop: Vertical Stack */}
            <div className="xl:space-y-3">
              <div className="flex xl:flex-col gap-3 overflow-x-auto xl:overflow-x-visible pb-4 xl:pb-0">
                {features.map((feature, index) => (
                  <motion.button
                    key={feature.id}
                    onClick={() => handleFeatureClick(index)}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-shrink-0 w-64 xl:w-full text-left flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-400 relative overflow-hidden ${
                      selectedFeature === index
                        ? "bg-gradient-to-r from-slate-700/50 to-slate-800/50 shadow-lg border border-blue-500/30 backdrop-blur-sm"
                        : hoveredFeature === index
                          ? "bg-gradient-to-r from-slate-600/50 to-slate-700/50 shadow-lg border border-purple-500/30 backdrop-blur-sm"
                          : "bg-slate-800/30 border border-slate-700/30 hover:bg-slate-700/40 hover:border-slate-600/40 backdrop-blur-sm"
                    }`}
                  >
                    {/* Animated background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"
                      initial={{ x: "-100%" }}
                      animate={{
                        x:
                          selectedFeature === index || hoveredFeature === index
                            ? "0%"
                            : "-100%",
                        opacity:
                          selectedFeature === index || hoveredFeature === index
                            ? 1
                            : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    />

                    <motion.div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 relative z-10 flex-shrink-0 ${
                        selectedFeature === index
                          ? `bg-gradient-to-r ${feature.color} shadow-md`
                          : hoveredFeature === index
                            ? `bg-gradient-to-r ${feature.color} shadow-md`
                            : "bg-slate-700/50 group-hover:bg-slate-600/50"
                      }`}
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      animate={{
                        boxShadow:
                          selectedFeature === index || hoveredFeature === index
                            ? [
                                "0 0 0 rgba(59, 130, 246, 0)",
                                "0 0 15px rgba(59, 130, 246, 0.4)",
                                "0 0 0 rgba(59, 130, 246, 0)",
                              ]
                            : "0 0 0 rgba(59, 130, 246, 0)",
                      }}
                      transition={{
                        boxShadow: { duration: 2, repeat: Infinity },
                        rotate: { duration: 0.2 },
                        scale: { duration: 0.2 },
                      }}
                    >
                      <feature.icon
                        className={`text-xs sm:text-sm transition-colors duration-300 ${
                          selectedFeature === index || hoveredFeature === index
                            ? "text-white"
                            : "text-slate-300 group-hover:text-white"
                        }`}
                      />
                    </motion.div>

                    <div className="flex-1 relative z-10 min-w-0">
                      <div className="flex items-center gap-2 mb-1 sm:mb-2">
                        <motion.span
                          className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                            selectedFeature === index ||
                            hoveredFeature === index
                              ? "text-blue-300"
                              : "text-slate-400 group-hover:text-slate-300"
                          }`}
                          animate={{
                            scale:
                              selectedFeature === index ||
                              hoveredFeature === index
                                ? [1, 1.1, 1]
                                : 1,
                          }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          {feature.number}
                        </motion.span>
                        <span
                          className={`text-xs sm:text-sm font-medium transition-colors duration-300 truncate ${
                            selectedFeature === index ||
                            hoveredFeature === index
                              ? "text-white"
                              : "text-slate-300 group-hover:text-white"
                          }`}
                        >
                          {feature.title}
                        </span>
                      </div>
                      <motion.div
                        className={`w-full h-1.5 sm:h-2 rounded-full transition-all duration-400 relative overflow-hidden ${
                          selectedFeature === index
                            ? "bg-blue-500/30"
                            : "bg-slate-700/40"
                        }`}
                      >
                        <motion.div
                          className={`h-full rounded-full ${
                            selectedFeature === index
                              ? `bg-gradient-to-r ${feature.color}`
                              : "bg-slate-600"
                          }`}
                          initial={{ width: "0%" }}
                          animate={{
                            width: selectedFeature === index ? "100%" : "0%",
                          }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                        {selectedFeature === index && (
                          <motion.div
                            className="absolute inset-0 bg-white/20 rounded-full"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                              duration: 1.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        )}
                      </motion.div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Feature Display */}
          <div className="xl:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFeature}
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 30, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="space-y-4 sm:space-y-6"
              >
                {/* Feature Header */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6">
                  {/* Feature Image */}
                  <motion.div
                    className="w-full sm:w-80 lg:w-48 h-32 sm:h-40 lg:h-36 rounded-2xl overflow-hidden flex-shrink-0 relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={features[selectedFeature].image}
                      alt={features[selectedFeature].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Zap className="w-4 h-4 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Feature Info */}
                  <div className="flex-1 space-y-3 sm:space-y-4 text-center lg:text-left">
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                      <motion.div
                        className={`flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${features[selectedFeature].color} rounded-2xl flex-shrink-0 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        animate={{
                          boxShadow: [
                            "0 0 15px rgba(59, 130, 246, 0.3)",
                            "0 0 25px rgba(59, 130, 246, 0.5)",
                            "0 0 15px rgba(59, 130, 246, 0.3)",
                          ],
                        }}
                        transition={{
                          boxShadow: { duration: 2, repeat: Infinity },
                          scale: { duration: 0.2 },
                          rotate: { duration: 0.2 },
                        }}
                      >
                        <CurrentFeatureIcon className="text-xl sm:text-2xl text-white drop-shadow-sm" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-2 justify-center lg:justify-start">
                          <motion.div
                            className="text-2xl sm:text-4xl font-light text-blue-400"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {features[selectedFeature].number}
                          </motion.div>
                          <motion.h3
                            className="text-xl sm:text-3xl font-light text-white text-center sm:text-left"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {features[selectedFeature].title}
                          </motion.h3>
                        </div>
                        <motion.p
                          className="text-xs sm:text-sm text-blue-300"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {features[selectedFeature].subtitle}
                        </motion.p>
                      </div>
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-base sm:text-lg text-slate-300 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {features[selectedFeature].description}
                    </motion.p>
                  </div>
                </div>

                {/* Key Capabilities */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-slate-700/50 shadow-xl"
                >
                  <motion.h4
                    className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-white flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                    Key Capabilities
                  </motion.h4>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {features[selectedFeature].keyFeatures.map(
                      (feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                          whileHover={{ x: 3, scale: 1.01 }}
                          className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl hover:bg-slate-700/30 transition-all duration-300 cursor-pointer group"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: idx * 0.2,
                            }}
                          >
                            <CheckCircle className="text-blue-400 mt-0.5 flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 group-hover:text-blue-300 transition-colors" />
                          </motion.div>
                          <span className="text-slate-300 text-xs sm:text-sm group-hover:text-white transition-colors">
                            {feature}
                          </span>
                        </motion.div>
                      ),
                    )}
                  </div>
                </motion.div>

                {/* CTA Button */}
                {selectedFeature === features.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="pt-4 text-center lg:text-left"
                  >
                    <motion.button
                      className="inline-flex bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 items-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl group"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm sm:text-lg">
                        Explore All Features
                      </span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
