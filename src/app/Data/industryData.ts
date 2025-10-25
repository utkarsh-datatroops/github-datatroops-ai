import { Industry } from "@/app/Types/industryTypes";

export const industries: Industry[] = [
  {
    id: 1,
    title: "Financial Services",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-amber-500/20 to-black/80",
    points: [
      "Real-time fraud detection and prevention systems",
      "AI for credit scoring and risk assessment",
      "Automated financial advisory and robo-advisors",
      "Customer service automation with conversational AI",
      "Predictive analytics for loan default and churn",
    ],
  },
  {
    id: 2,
    title: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-purple-400/30 to-purple-900/80",
    points: [
      "AI-assisted diagnostics and medical imaging",
      "Patient triaging with intelligent chatbots",
      "Predictive analytics for disease outbreak & risk scoring",
      "NLP-powered documentation and medical records automation",
      "Drug discovery acceleration using machine learning",
    ],
  },
  {
    id: 3,
    title: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-black/100 to-orange-500/20",
    points: [
      "Automated quality control and defect detection",
      "Optimized production planning and scheduling",
      "Predictive maintenance for machinery",
      "Supply chain optimization",
      "Robotics integration for efficiency",
    ],
  },
  {
    id: 4,
    title: "Energy",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-blue-400/30 to-blue-900/80",
    points: [
      "AI-driven grid optimization and smart energy management",
      "Predictive analytics for energy demand and supply",
      "Automated fault detection and repair in energy infrastructure",
      "Renewable energy forecasting and integration",
      "Smart metering and consumption analysis",
    ],
  },
  {
    id: 5,
    title: "Retail & E-Commerce",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-black/80 to-amber-500/20 ",
    points: [
      "Personalized product recommendations to boost sales",
      "AI-driven demand forecasting and inventory management",
      "Intelligent chatbots for real-time customer support",
      "Visual search and image-based product discovery",
      "Sentiment analysis on customer reviews",
    ],
  },
  {
    id: 6,
    title: "Transportation",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-black/80 to-black/20",
    points: [
      "Autonomous vehicle navigation and safety systems",
      "Route optimization and traffic management",
      "Predictive maintenance for fleet management",
      "Smart logistics and supply chain automation",
      "Real-time monitoring and analytics",
    ],
  },
];
