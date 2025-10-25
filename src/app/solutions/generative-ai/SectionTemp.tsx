"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Users,
  Zap,
  Shield,
  BarChart3,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

const aiServices = [
  {
    id: 1,
    title: "AI Chatbots",
    description:
      "Deliver 24/7 intelligent support across your website, app, or WhatsApp with AI chatbots that understand your customers and respond in natural language.",
    useCases:
      "Customer support, lead qualification, product discovery, onboarding",
    icon: Zap,
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/20",
    gradientFrom: "from-blue-500/10",
    gradientTo: "to-blue-600/5",
  },
  {
    id: 2,
    title: "Voice AI Assistants",
    description:
      "Deploy voice-enabled bots that engage users via phone or smart devices. Automate appointment bookings, reminders, or support over calls.",
    useCases: "Healthcare, retail, telecom, travel",
    icon: BarChart3,
    iconColor: "text-green-400",
    bgColor: "bg-green-500/20",
    gradientFrom: "from-green-500/10",
    gradientTo: "to-green-600/5",
  },
  {
    id: 3,
    title: "Meeting AI Assistant",
    description:
      "Capture the essence of every meeting — transcriptions, action items, decisions — and turn them into shareable summaries.",
    useCases: "Sales calls, internal standups, client meetings",
    icon: Shield,
    iconColor: "text-purple-400",
    bgColor: "bg-purple-500/20",
    gradientFrom: "from-purple-500/10",
    gradientTo: "to-purple-600/5",
  },
  {
    id: 4,
    title: "AI FAQ & Knowledgebase Bot",
    description:
      "Enable your users or employees to ask natural-language questions and get instant, accurate answers directly from your documentation or internal wiki.",
    useCases:
      "Customer self-service, internal IT support, HR policy Q&A, SaaS onboarding",
    icon: MessageSquare,
    iconColor: "text-orange-400",
    bgColor: "bg-orange-500/20",
    gradientFrom: "from-orange-500/10",
    gradientTo: "to-orange-600/5",
  },
  {
    id: 5,
    title: "AI Interview Assistant",
    description:
      "Simulate real-world interview conversations, auto-assess candidate answers, and generate detailed feedback or scoring reports.",
    useCases: "HR automation, campus hiring, tech interview prep",
    icon: Users,
    iconColor: "text-cyan-400",
    bgColor: "bg-cyan-500/20",
    gradientFrom: "from-cyan-500/10",
    gradientTo: "to-cyan-600/5",
  },
  {
    id: 6,
    title: "Multilingual Support Bot",
    description:
      "Offer seamless, localized customer support in over 100 languages with a single AI model trained on your base content.",
    useCases: "Global SaaS, ecommerce, travel, government portals",
    icon: Calendar,
    iconColor: "text-pink-400",
    bgColor: "bg-pink-500/20",
    gradientFrom: "from-pink-500/10",
    gradientTo: "to-pink-600/5",
  },
];

export default function HeroSectionGenerativeAI() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-gray-300">
              Next-Generation AI Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
            Conversational AI &
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Assistants
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your business with intelligent AI assistants that
            understand, engage, and deliver exceptional experiences across every
            touchpoint.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {aiServices.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <Card
                  className={`
                bg-gradient-to-b from-violet-950/25 to-transparent
                hover:bg-transparent
                  border border-gray-800/50 
                  hover:border-gray-700/70 
                  transition-all duration-500 
                  hover:shadow-2xl hover:shadow-blue-500/10
                  backdrop-blur-sm
                  h-full
                `}
                >
                  <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div
                      className={`
                      h-14 w-14 rounded-xl ${service.bgColor} 
                      flex items-center justify-center mb-6
                      group-hover:scale-110 transition-transform duration-300
                      shadow-lg
                    `}
                    >
                      <IconComponent
                        className={`h-7 w-7 ${service.iconColor}`}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                        {service.description}
                      </p>

                      <div className="mt-auto">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-700/50 mb-4">
                          <span className="text-xs font-medium text-gray-300">
                            USE CASES
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 font-medium">
                          {service.useCases}
                        </p>
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <div className="flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-blue-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 sm:mt-20 lg:mt-24"
        >
          <div className="bg-gradient-to-r from-[#0a1020] to-[#0f1419] rounded-2xl border border-gray-800/50 p-8 sm:p-12 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our AI solutions to
              enhance customer experience and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"/contact-us"}>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
