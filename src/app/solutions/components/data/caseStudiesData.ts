import { FaChartLine, FaRobot, FaHeadset } from "react-icons/fa";
import { CaseStudy } from "@/app/solutions/components/types/caseStudiesTypes";

// Map icon string to actual icon component for use in client components
export const iconMap = {
  FaChartLine,
  FaRobot,
  FaHeadset,
};

export const caseStudiesData: (Omit<CaseStudy, "icon"> & {
  icon: keyof typeof iconMap;
})[] = [
  {
    id: 1,
    title: "Global Fintech Transformation",
    client: "Leading Digital Banking Platform",
    industry: "Financial Services",
    challenge:
      "Fragmented data across 15+ systems hindering real-time decision making",
    solution: "Intelligent Data Integration & Analytics (ML)",
    icon: "FaChartLine",
    gradient: "from-blue-600 to-purple-600",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    results: [
      {
        metric: "Data Processing Time",
        value: "85%",
        description: "reduction (6hrs → 54min)",
      },
      {
        metric: "Annual Savings",
        value: "$2.3M",
        description: "through automation",
      },
      {
        metric: "Fraud Detection",
        value: "40%",
        description: "accuracy improvement",
      },
      {
        metric: "Decision Speed",
        value: "Real-time",
        description: "instant credit decisions",
      },
    ],
    details: [
      "Real-time data harmonization from CRM, transaction systems, and external APIs",
      "ML-powered anomaly detection and pattern recognition",
      "Automated data reconciliation and validation processes",
    ],
  },
  {
    id: 2,
    title: "Manufacturing Excellence",
    client: "Fortune 500 Automotive Manufacturer",
    industry: "Manufacturing",
    challenge: "Unplanned equipment downtime costing $50K per hour",
    solution: "Predictive Analytics & Workflow Automation",
    icon: "FaRobot",
    gradient: "from-orange-500 to-red-600",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    results: [
      {
        metric: "Downtime Reduction",
        value: "72%",
        description: "unplanned maintenance",
      },
      {
        metric: "Annual Savings",
        value: "$8.5M",
        description: "predictive maintenance",
      },
      {
        metric: "Workflow Speed",
        value: "45%",
        description: "faster execution",
      },
      {
        metric: "Prediction Accuracy",
        value: "94%",
        description: "48hr advance warning",
      },
    ],
    details: [
      "IoT sensor integration with predictive maintenance algorithms",
      "Automated workflow orchestration for maintenance scheduling",
      "Real-time equipment health monitoring and alerts",
    ],
  },
  {
    id: 3,
    title: "E-Commerce Support Revolution",
    client: "Top 10 Global E-Commerce Platform",
    industry: "E-Commerce",
    challenge: "2M+ monthly support tickets overwhelming human agents",
    solution: "AI-Powered Customer Support & Chatbots",
    icon: "FaHeadset",
    gradient: "from-green-500 to-teal-600",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    results: [
      {
        metric: "Query Resolution",
        value: "89%",
        description: "autonomous handling",
      },
      {
        metric: "Response Time",
        value: "65%",
        description: "faster (4hrs → 1.4hrs)",
      },
      {
        metric: "Cost Savings",
        value: "$4.2M",
        description: "annual operations",
      },
      {
        metric: "Satisfaction",
        value: "38%",
        description: "increase in scores",
      },
    ],
    details: [
      "Multi-language conversational AI with sentiment analysis",
      "Seamless human handoff for complex queries",
      "24/7 automated support with contextual understanding",
    ],
  },
];
