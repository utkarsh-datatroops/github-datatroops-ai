"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Shield,
  Cpu,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  MessageSquare,
  Play,
} from "lucide-react";
import { BarChart3 } from "lucide-react";
import Tooltip from "@/components/ToolTip";
import CustomerServiceChatSection from "../CustomerServiceChatSection";
import Link from "next/link";
import CaseStudiesSection from "@/app/ai-chatbot/CaseStudiesSection";
import { FaChartLine, FaHeadset, FaRobot } from "react-icons/fa";

const ChatbotHero = () => {
  // const [currentIndustry, setCurrentIndustry] = useState(0);
  const featureTags = [
    "Appointment",
    "Customer Support",
    "Website Bot",
    "Tech Documentation",
    "Live Chat",
    "Order Tracking",
    "Lead Generation",
    "Knowledge Base",
  ];

  // const industries = [
  //   {
  //     icon: <Stethoscope className="w-6 h-6 md:w-8 md:h-8" />,
  //     name: "Healthcare",
  //     description:
  //       "Intelligent medical assistants for patient support, appointment scheduling, and health guidance",
  //     features: [
  //       "Symptom Assessment",
  //       "Appointment Booking",
  //       "Medication Reminders",
  //       "Health Monitoring",
  //     ],
  //     color: "from-[#5a189a] to-[#7b2cbf]",
  //   },
  //   {
  //     icon: <Building2 className="w-6 h-6 md:w-8 md:h-8" />,
  //     name: "Real Estate",
  //     description:
  //       "AI-powered property consultants that guide clients through buying, selling, and investing decisions",
  //     features: [
  //       "Property Recommendations",
  //       "Market Analysis",
  //       "Virtual Tours",
  //       "Investment Insights",
  //     ],
  //     color: "from-[#7b2cbf] to-[#9d4edd]",
  //   },
  //   {
  //     icon: <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />,
  //     name: "Education",
  //     description:
  //       "Personalized learning companions that adapt to each student's pace and learning style",
  //     features: [
  //       "Adaptive Learning",
  //       "Progress Tracking",
  //       "Assignment Help",
  //       "Study Planning",
  //     ],
  //     color: "from-[#9d4edd] to-[#c77dff]",
  //   },
  //   {
  //     icon: <ShoppingCart className="w-6 h-6 md:w-8 md:h-8" />,
  //     name: "E-commerce",
  //     description:
  //       "Smart shopping assistants that provide personalized product recommendations and support",
  //     features: [
  //       "Product Discovery",
  //       "Price Comparison",
  //       "Order Tracking",
  //       "Customer Support",
  //     ],
  //     color: "from-[#c77dff] to-[#e0aaff]",
  //   },
  //   {
  //     icon: <Briefcase className="w-6 h-6 md:w-8 md:h-8" />,
  //     name: "Finance",
  //     description:
  //       "Intelligent financial advisors for investment guidance, budgeting, and financial planning",
  //     features: [
  //       "Investment Advice",
  //       "Budget Planning",
  //       "Risk Assessment",
  //       "Market Updates",
  //     ],
  //     color: "from-[#5a189a] to-[#9d4edd]",
  //   },
  //   {
  //     icon: <Car className="w-6 h-6 md:w-8 md:h-8" />,
  //     name: "Automotive",
  //     description:
  //       "Smart automotive assistants for vehicle maintenance, purchasing decisions, and support",
  //     features: [
  //       "Maintenance Alerts",
  //       "Vehicle Comparison",
  //       "Service Booking",
  //       "Troubleshooting",
  //     ],
  //     color: "from-[#7b2cbf] to-[#c77dff]",
  //   },
  // ];

  const stats = [
    { number: "1M+", label: "Messages Processed" },
    // { number: "", label: "" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Global Support" },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 1,000 conversations/month",
        "2 channels (WhatsApp + Web)",
        "Basic analytics",
        "Email support",
        "Pre-built templates",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "All Starter Feature",
        "Up to 10,000 conversations/month",
        "All channels included",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "API access",
        "Live agent handoff",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited conversations",
        "All channels + custom channels",
        "Advanced AI & NLP",
        "Dedicated success manager",
        "Custom development",
        "SLA guarantee",
        "On-premise deployment",
      ],
      popular: false,
    },
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndustry((prev) => (prev + 1) % industries.length);
  //   }, 6000);
  //   return () => clearInterval(interval);
  // }, []);

  // const containerVariants = {
  //     hidden: { opacity: 0 },
  //     visible: {
  //         opacity: 1,
  //         transition: {
  //             staggerChildren: 0.1
  //         }
  //     }
  // };

  // const itemVariants = {
  //     hidden: { y: 20, opacity: 0 },
  //     visible: {
  //         y: 0,
  //         opacity: 1,
  //         transition: {
  //             duration: 0.6,
  //             ease: "easeOut"
  //         }
  //     }
  // };

  const industriesSolutions = [
    {
      name: "E-commerce",
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      colorBg: "bg-blue-100",
      tabs: [
        {
          title: "Orders",
          customer: 'Customer: "Where is my order #12345?"',
          bot: 'Bot: "Your order is out for delivery and will arrive today by 6 PM. Track it here: [link]"',
        },
        {
          title: "Support",
          customer: 'Customer: "I need help with a return"',
          bot: 'Bot: "I can help with that! What\'s the reason for return and which item?"',
        },
        {
          title: "Sales",
          customer: 'Customer: "Do you have any discounts?"',
          bot: 'Bot: "Yes! Use code SAVE20 for 20% off your first order. Valid until midnight!"',
        },
      ],
    },
    {
      name: "Healthcare",
      icon: <Shield className="w-6 h-6 text-green-600" />,
      colorBg: "bg-green-100",
      tabs: [
        {
          title: "Orders",
          customer: 'Patient: "When is my next appointment?"',
          bot: 'Bot: "Your appointment is scheduled for next Tuesday at 3 PM."',
        },
        {
          title: "Support",
          customer: 'Patient: "I need a prescription refill"',
          bot: 'Bot: "I\'ve sent your refill request to your pharmacy. Expect a notification soon."',
        },
        {
          title: "Sales",
          customer: 'Patient: "Are there any wellness packages available?"',
          bot: 'Bot: "Yes! We have discounted health checkup packages valid this month."',
        },
      ],
    },
    {
      name: "Financial Services",
      icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
      colorBg: "bg-purple-100",
      tabs: [
        {
          title: "Orders",
          customer: 'Client: "What\'s the status of my loan application?"',
          bot: 'Bot: "Your loan application is under review and will be approved within 3 days."',
        },
        {
          title: "Support",
          customer: 'Client: "I want to dispute a transaction"',
          bot: "Bot: \"I've opened a dispute for the transaction. We'll get back to you soon.\"",
        },
        {
          title: "Sales",
          customer: 'Client: "Are there any investment plans for beginners?"',
          bot: 'Bot: "Yes! We offer beginner-friendly investment portfolios with low risk."',
        },
      ],
    },
  ];

  interface SectionMeta {
    sectionTitle: string;
    sectionSubtitle: string;
    solutionTitle: string;
    buttonLabel: (industry: string) => string;
    buttonTooltip: string;
    imageLabel: string;
  }

  const sectionMeta: SectionMeta = {
    sectionTitle: "Industries We Serve",
    sectionSubtitle: "Specialized AI solutions tailored for different sectors",
    solutionTitle: "Solution",
    buttonLabel: (industry) => `View ${industry} Solutions`,
    buttonTooltip: "Coming Soon",
    imageLabel: "Industry",
  };

  const caseStudiesData = [
    {
      id: 1,
      title: "Global Healthcare Transformation",
      client: "",
      industry: "Healthcare",
      challenge:
        "Fragmented data across 15+ systems hindering real-time decision making",
      solution:
        "Intelligent medical assistants for patient support, appointment scheduling, and health guidance",
      icon: FaChartLine,
      gradient: "from-blue-600 to-purple-600",
      image:
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        "Symptom Assessment",
        "Appointment Booking",
        "Medication Reminders",
        "Health Monitoring",
      ],
      href: "/healthcare-solutions",
    },
    {
      id: 2,
      title: "Real Estate Operations Optimization",
      client: "",
      industry: "Real Estate",
      challenge: "Unplanned equipment downtime costing $50K per hour",
      solution:
        "AI-powered property consultants that guide clients through buying, selling, and investing decisions",
      icon: FaRobot,
      gradient: "from-orange-500 to-red-600",
      image:
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: [
        "Property Recommendations",
        "Market Analysis",
        "Virtual Tours",
        "Investment Insights",
      ],
    },
    {
      id: 3,
      title: "Education Experience Reimagined",
      client: "",
      industry: "Education",
      challenge:
        "Lack of personalized learning pathways leading to lower student engagement",
      solution:
        "Personalized learning companions that adapt to each student's pace and learning style",

      icon: FaHeadset,
      gradient: "from-green-500 to-teal-600",
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",
      details: [
        "Adaptive Learning",
        "Progress Tracking",
        "Assignment Help",
        "Study Planning",
      ],
    },
    {
      id: 4,
      title: "E-commerce Sales Acceleration",
      client: "",
      industry: "E-commerce",
      challenge: "Low conversion rates due to generic shopping experiences",
      solution:
        "Smart shopping assistants that provide personalized product recommendations and support",
      gradient: "from-[#c77dff] to-[#e0aaff]",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "Product Discovery",
        "Price Comparison",
        "Order Tracking",
        "Customer Support",
      ],
    },
    {
      id: 5,
      title: "Finance Digital Advisory",
      client: "",
      industry: "Finance",
      challenge:
        "Customers lack access to real-time, personalized investment guidance",
      solution:
        "Intelligent financial advisors for investment guidance, budgeting, and financial planning",
      gradient: "from-[#5a189a] to-[#9d4edd]",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: [
        "Investment Advice",
        "Budget Planning",
        "Risk Assessment",
        "Market Updates",
      ],
    },
    {
      id: 6,
      title: "Automotive Customer Experience",
      client: "",
      industry: "Automotive",
      challenge:
        "High customer churn due to lack of proactive service engagement",
      solution:
        "Smart automotive assistants for vehicle maintenance, purchasing decisions, and support",
      gradient: "from-[#7b2cbf] to-[#c77dff]",
      image:
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
      details: [
        "Maintenance Alerts",
        "Vehicle Comparison",
        "Service Booking",
        "Troubleshooting",
      ],
    },
  ];

  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#10002b] via-[#240046] to-[#3c096c] text-white overflow-hidden">
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5a189a]/20 via-[#7b2cbf]/20 to-[#9d4edd]/20 animate-pulse pointer-events-none"></div>
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#c77dff] rounded-full pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Secondary Hero Section */}
      <section className="pt-6 sm:pt-16 pb-0 sm:pb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-1"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight mb-6">
                Custom AI Chatbot Development
                <span className="bg-gradient-to-r from-[#9d4edd] to-[#c77dff] bg-clip-text text-transparent">
                  {" "}
                  Company
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Build intelligent chatbots that engage customers across multiple
                channels, reduce support costs, and drive business growth with
                our no-code platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 mr-4 sm:mr-0">
                {/* <Tooltip message="Coming Soon"> */}
                <Link href="/contact-us" passHref>
                  <button className="w-full sm:w-auto bg-[#7b2cbf] hover:bg-[#9d4edd] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </Link>
                {/* </Tooltip> */}
                <Tooltip message="Coming Soon">
                  <button className="w-full sm:w-auto border border-[#7b2cbf] hover:border-[#9d4edd] text-gray-200 hover:text-[#c77dff] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center">
                    <Play className="mr-2 w-5 h-5" />
                    Watch Demo
                  </button>
                </Tooltip>
              </div>

              <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {featureTags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#7b2cbf] to-[#9d4edd] text-white shadow-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-xl sm:text-2xl font-bold text-[#9d4edd]">{stat.number}</div>
                                        <div className="text-xs sm:text-sm text-gray-300 mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div> */}
              <div className="mt-6 sm:mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-[#9d4edd]">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-1 lg:order-2 mb-8 lg:mb-0"
            >
              {/* <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 relative z-10 mx-4 sm:mx-0">
                                <div className="flex items-center mb-6">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full mr-2"></div>
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full mr-2"></div>
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-end">
                                        <div className="bg-[#7b2cbf] text-white px-3 sm:px-4 py-2 rounded-2xl rounded-br-sm max-w-xs text-sm sm:text-base">
                                            Hi! I need help with my order status
                                        </div>
                                    </div>
                                    <div className="flex justify-start">
                                        <div className="bg-gray-100 text-gray-800 px-3 sm:px-4 py-2 rounded-2xl rounded-bl-sm max-w-xs text-sm sm:text-base">
                                            I'd be happy to help! Could you please provide your order number?
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="bg-[#7b2cbf] text-white px-3 sm:px-4 py-2 rounded-2xl rounded-br-sm max-w-xs text-sm sm:text-base">
                                            It's #ORD-12345
                                        </div>
                                    </div>
                                    <div className="flex justify-start">
                                        <div className="bg-gray-100 text-gray-800 px-3 sm:px-4 py-2 rounded-2xl rounded-bl-sm max-w-xs text-sm sm:text-base">
                                            Perfect! Your order is being prepared and will ship tomorrow. Tracking info will be sent via email.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-[#9d4edd] to-[#c77dff] rounded-full opacity-20"></div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-[#7b2cbf] to-[#9d4edd] rounded-full opacity-20"></div>
                       */}
              <CustomerServiceChatSection />
            </motion.div>
          </div>
        </div>
      </section>

      <CaseStudiesSection
        sectionMeta={sectionMeta}
        caseStudiesData={caseStudiesData}
      />

      {/* <section
        id="industries"
        className="relative z-10 px-6 py-12"
        style={{ paddingTop: "0rem" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#c77dff] to-[#9d4edd] bg-clip-text text-transparent">
              Industries We Serve
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Specialized AI solutions tailored for different sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  onClick={() => setCurrentIndustry(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    currentIndustry === index
                      ? "bg-gradient-to-r from-slate-800 to-slate-700 border border-cyan-500/50"
                      : "bg-slate-800/50 hover:bg-slate-800"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${industry.color}`}
                    >
                      {industry.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {industry.name}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        Click to explore
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndustry}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700"
              >
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${industries[currentIndustry].color} mb-6`}
                >
                  {industries[currentIndustry].icon}
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {industries[currentIndustry].name}
                </h3>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {industries[currentIndustry].description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-cyan-400 font-semibold">Key Features:</h4>
                  {industries[currentIndustry].features.map(
                    (feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-cyan-400" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ),
                  )}
                </div>
                {industries[currentIndustry].name === "Healthcare" && (
                  <div className="mt-4">
                    <Link href="/solutions" passHref>
                      <button className="inline-flex items-center px-6 py-3 bg-[#7b2cbf] hover:bg-[#9d4edd] text-white rounded-lg text-lg font-semibold transition-colors">
                        Explore Healthcare Solutions
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section> */}

      {/* <CustomerServiceSection /> */}

      {/* Features Section */}
      <section
        id="features"
        className="relative z-10 px-4 sm:px-6 py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#9d4edd] to-[#c77dff] bg-clip-text text-transparent">
              Why Choose DataTroops AI?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Lightning Fast",
                description:
                  "Sub-second response times with advanced caching and optimization",
                color: "from-[#7b2cbf] to-[#9d4edd]",
              },
              {
                icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Enterprise Security",
                description:
                  "Bank-level encryption and compliance with industry standards",
                color: "from-[#5a189a] to-[#7b2cbf]",
              },
              {
                icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Advanced AI",
                description:
                  "Powered by cutting-edge machine learning and natural language processing",
                color: "from-[#9d4edd] to-[#c77dff]",
              },
              {
                icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Multi-Language",
                description:
                  "Support for 50+ languages with cultural context understanding",
                color: "from-[#7b2cbf] to-[#c77dff]",
              },
              {
                icon: <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Conversational AI",
                description:
                  "Natural, human-like conversations that feel authentic",
                color: "from-[#5a189a] to-[#9d4edd]",
              },
              {
                icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "24/7 Support",
                description:
                  "Round-the-clock assistance and monitoring for optimal performance",
                color: "from-[#9d4edd] to-[#e0aaff]",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-[#3c096c] to-[#240046] p-6 sm:p-8 rounded-3xl border border-[#5a189a]/30 hover:border-[#7b2cbf]/50 transition-all duration-300"
              >
                <div
                  className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-4 sm:mb-6`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="py-20 bg-gradient-to-br from-[#3c096c] via-[#240046] to-[#10002b] text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-white">
              Simple, transparent pricing
            </h2>
            <p className="text-lg sm:text-xl text-[#e0aaff] max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a
              14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
            rounded-2xl p-6 sm:p-8 relative
            ${
              plan.popular
                ? "border-2 border-[#9d4edd] shadow-xl scale-105 bg-gradient-to-br from-[#c77dff] to-[#7b2cbf] text-white"
                : "border border-[#5a189a]/30 shadow-lg bg-[#240046] text-gray-100"
            }
          `}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    {/* <span className="bg-[#9d4edd] text-white px-4 py-2 rounded-full text-sm font-medium">
                Most Popular
              </span> */}
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl sm:text-4xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-base text-[#e0aaff]">
                      {plan.period}
                    </span>
                  </div>
                  {/* <p className="text-[#e0aaff]">{plan.description}</p> */}
                  <p className="text-gray-100">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-base"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? "bg-[#5a189a] hover:bg-[#7b2cbf] text-white"
                      : "bg-[#3c096c] hover:bg-[#5a189a] text-white"
                  }`}
                >
                  <Tooltip message="Coming Soon">
                    {plan.name === "Enterprise"
                      ? "Contact Sales"
                      : "Start Free Trial"}
                  </Tooltip>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="solutions"
        className="py-20"
        style={{ paddingBottom: "0rem" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
              Chatbots for every industry
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              From e-commerce to healthcare, our AI-powered platform adapts to
              your specific industry needs and customer requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Industry list with icons and descriptions */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                {industriesSolutions.map((industry, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setSelectedIndustry(i);
                      setActiveTab(0); // reset tab when industry changes
                    }}
                    className={`cursor-pointer flex items-start space-x-4 p-4 rounded-lg transition-colors ${
                      selectedIndustry === i
                        ? "bg-gray-700" // dark gray highlight on selection
                        : "hover:bg-gray-800"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${industry.colorBg}`}
                    >
                      {industry.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-semibold ${
                          selectedIndustry === i
                            ? "text-white"
                            : "text-gray-300"
                        } mb-2`}
                      >
                        {industry.name}
                      </h3>
                      <p className="text-gray-400">
                        {`Explore AI-powered solutions tailored for the ${industry.name.toLowerCase()} sector.`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right side: Tabs and chat example for selected industry */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              {/* Tabs */}
              <div className="flex space-x-2 mb-6 flex-wrap justify-center sm:justify-start">
                {industriesSolutions[selectedIndustry].tabs.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors focus:outline-none ${
                      activeTab === idx
                        ? "bg-gradient-to-r from-[#7b2cbf] to-[#9d4edd] text-white shadow-lg"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Chat content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedIndustry}-${activeTab}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="space-y-3">
                    <div
                      className={`${industriesSolutions[selectedIndustry].colorBg} text-gray-800 p-4 rounded-lg`}
                    >
                      <p className="text-sm font-medium text-gray-800">
                        {
                          industriesSolutions[selectedIndustry].tabs[activeTab]
                            .customer
                        }
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-sm text-gray-900">
                        {
                          industriesSolutions[selectedIndustry].tabs[activeTab]
                            .bot
                        }
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#3c096c] to-[#240046] p-8 sm:p-12 rounded-3xl border border-[#7b2cbf]/30"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#c77dff] to-[#9d4edd] bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4">
              Join thousands of businesses already using DataTroops AI to
              revolutionize their customer interactions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Tooltip message="Coming Soon">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(199, 125, 255, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#7b2cbf] to-[#9d4edd] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 hover:from-[#9d4edd] hover:to-[#c77dff] transition-all"
                >
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Tooltip>
              <Tooltip message="Coming Soon">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto border border-[#7b2cbf] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg font-semibold hover:bg-[#7b2cbf]/10 transition-all"
                >
                  Schedule Demo
                </motion.button>
              </Tooltip>
            </div>
          </motion.div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default ChatbotHero;
