"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Rocket, Heart, ArrowRight, Users, Star } from "lucide-react";

import Image from "next/image";

import PersonRobot from "@/assets/images/aiSolutions/solutions-section/portrait-person-ai-robot.jpg";
import Automation from "@/assets/images/aiSolutions/solutions-section/automation.jpg";
import MeaningfulImpact from "@/assets/images/aiSolutions/solutions-section/meaningful-impact.jpg";

import Link from "next/link";

const impactData = [
  {
    id: 1,
    title: "Human-Centered Intelligence",
    category: "Experience",
    challenge:
      "Technology that feels cold, robotic, and disconnected from human needs",
    solution:
      "AI that understands, adapts, and genuinely cares about user experience",
    icon: Brain,
    gradient: "from-purple-600 to-indigo-600",
    imageUrl: PersonRobot,
    benefits: [
      {
        title: "Intuitive Interactions",
        description: "Natural conversations that feel effortless",
      },
      {
        title: "Context Awareness",
        description: "Understanding what you need before you ask",
      },
      {
        title: "Emotional Intelligence",
        description: "Technology that responds with empathy",
      },
      {
        title: "Adaptive Learning",
        description: "Gets better with every interaction",
      },
    ],
    details: [
      "Conversational AI that understands nuance and context",
      "Interfaces that adapt to individual preferences and behaviors",
      "Predictive assistance that anticipates user needs",
    ],
  },
  {
    id: 2,
    title: "Effortless Automation",
    category: "Efficiency",
    challenge: "Repetitive tasks consuming valuable time and mental energy",
    solution:
      "Intelligent automation that handles complexity behind the scenes",
    icon: Rocket,
    gradient: "from-blue-600 to-cyan-600",
    imageUrl: Automation,
    benefits: [
      {
        title: "Seamless Workflows",
        description: "Complex processes simplified into single actions",
      },
      {
        title: "Smart Automation",
        description: "Handles routine tasks while you focus on what matters",
      },
      {
        title: "Instant Results",
        description: "Lightning-fast processing that keeps you in flow",
      },
      {
        title: "Reliable Performance",
        description: "Consistent excellence you can depend on",
      },
    ],
    details: [
      "Workflow orchestration that connects disparate systems seamlessly",
      "Intelligent task prioritization and resource allocation",
      "Self-healing systems that prevent issues before they occur",
    ],
  },
  {
    id: 3,
    title: "Meaningful Impact",
    category: "Purpose",
    challenge:
      "Technology that adds complexity instead of solving real problems",
    solution: "Solutions designed to create genuine value and positive change",
    icon: Heart,
    gradient: "from-pink-600 to-rose-600",
    imageUrl: MeaningfulImpact,
    benefits: [
      {
        title: "Real-World Solutions",
        description: "Addressing actual problems with tangible results",
      },
      {
        title: "Sustainable Growth",
        description: "Building for long-term success and stability",
      },
      {
        title: "Inclusive Design",
        description: "Technology that works for everyone",
      },
      {
        title: "Positive Change",
        description: "Creating ripple effects that benefit communities",
      },
    ],
    details: [
      "User research and empathy-driven design processes",
      "Accessibility-first development ensuring universal usability",
      "Environmental consideration in every technical decision",
    ],
  },
];

const WhyThisMatters = () => {
  const [activeImpact, setActiveImpact] = useState(0);

  return (
    <section className="w-full bg-gradient-to-br from-[#0A0118] via-[#1A0B3D] to-[#0A0118] text-white py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <Star className="w-5 h-5 text-purple-400 animate-pulse" />
            <span className="text-purple-200 font-medium">
              The Difference We Make
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-light mb-8 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent leading-tight">
            Why This{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
              Matters
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Every line of code we write, every feature we design, and every
            solution we create is driven by a simple belief: technology should
            make life better, not more complicated.
          </p>
        </motion.div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {impactData.map((impact, index) => (
            <motion.button
              key={impact.id}
              onClick={() => setActiveImpact(index)}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeImpact === index
                  ? "bg-white text-gray-900 shadow-xl"
                  : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {impact.category}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeImpact}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-r ${impactData[activeImpact].gradient} shadow-xl`}
                >
                  {React.createElement(impactData[activeImpact].icon, {
                    className: "w-8 h-8 text-white",
                  })}
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2">
                    {impactData[activeImpact].title}
                  </h3>
                  <p className="text-purple-300 text-lg">
                    {impactData[activeImpact].category} Focus
                  </p>
                </div>
              </div>
            </div>

            {/* Challenge */}
            <div className="bg-red-500/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
              <h4 className="text-xl font-semibold mb-4 text-red-300 flex items-center gap-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                The Challenge
              </h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                {impactData[activeImpact].challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20">
              <h4 className="text-xl font-semibold mb-4 text-emerald-300 flex items-center gap-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                Our Approach
              </h4>
              <p className="text-white font-medium mb-6 text-lg">
                {impactData[activeImpact].solution}
              </p>
              <ul className="space-y-3">
                {impactData[activeImpact].details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-3 mr-4 flex-shrink-0" />
                    <span className="text-lg">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            {/* <motion.button
              className="flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-10 py-5 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Experience the Difference</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button> */}
          </div>

          {/* Visual Side */}
          <div className="space-y-8">
            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden h-80 mb-8 group">
              {/* {impactData[activeImpact].image && (<img
                src={impactData[activeImpact].image}
                alt={impactData[activeImpact].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />)} */}
              {impactData[activeImpact].imageUrl && (
                <Image
                  src={impactData[activeImpact].imageUrl}
                  alt={impactData[activeImpact].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${impactData[activeImpact].gradient} opacity-70`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm opacity-90 mb-1">Focus Area</p>
                <p className="text-2xl font-bold">
                  {impactData[activeImpact].category}
                </p>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {impactData[activeImpact].benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <h5 className="font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                      {benefit.title}
                    </h5>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Section - Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-24 pt-16 border-t border-white/10"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join us in creating technology that doesn&#39;t just work—it
              inspires, empowers, and transforms. Because when technology truly
              serves humanity, amazing things happen.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact-us" passHref>
                <motion.button
                  className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg min-w-[240px] h-[72px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.button>
              </Link>

              <Link href="/about-us" passHref>
                <motion.button
                  className="inline-flex items-center justify-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-12 py-6 rounded-2xl border border-white/20 transition-all duration-300 text-lg min-w-[240px] h-[72px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users className="w-5 h-5" />
                  <span>Learn More</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyThisMatters;
