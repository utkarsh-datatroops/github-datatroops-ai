import integrationData from "@/assets/images/aiSolutions/solutions-section/integration-data.png";
import workflowAutomation from "@/assets/images/aiSolutions/solutions-section/workflow-automation.png";
import prediction from "@/assets/images/aiSolutions/solutions-section/prediction.png";
import chatbots from "@/assets/images/aiSolutions/solutions-section/chatbots.png";
import aiops from "@/assets/images/aiSolutions/solutions-section/AI-it-ops.png";
import voicebots from "@/assets/images/aiSolutions/solutions-section/voicebots.png";

import { SolutionCard } from "../types/solutionTypes";

export const defaultSolutionsData: SolutionCard[] = [
  {
    id: 1,
    title: "Data Integration & Analytics",
    description: "Unifies and analyzes data from multiple sources for actionable insights.",
    image: integrationData,
    points: [
      "Breaks down data silos and enables smarter, data-driven decisions.",
      "Empowers cross-functional teams with a single source of truth.",
    ],
  },
  {
    id: 2,
    title: "AI-Powered Customer Support & Chatbots",
    description: "24/7, personalized customer support using advanced NLP.",
    image: chatbots,
    points: [
      "Handles queries, onboarding, and internal support autonomously.",
      "Boosts satisfaction and reduces response times.",
    ],
    href: "/ai-chatbot",
  },
  {
    id: 3,
    title: "Predictive Analytics & Forecasting",
    description: "Forecasts market trends, customer behavior, and demand.",
    image: prediction,
    points: [
      "Drives proactive decision-making and resource optimization.",
      "Reduces waste and enhances business agility.",
    ],
  },
  {
    id: 4,
    title: "Workflow Automation",
    description: "Orchestrates multi-departmental processes from approvals to data sync.",
    image: workflowAutomation,
    points: [
      "Eliminates bottlenecks and manual intervention.",
      "Speeds up execution and ensures compliance.",
    ],
    href: "/solutions/workflow-automation",
  },
  {
    id: 5,
    title: "AIOps (AI for IT Operations)",
    description: "Automates IT incident management and root cause analysis.",
    image: aiops,
    points: [
      "Reduces downtime, accelerates issue resolution, and improves IT efficiency.",
      "Ensures business continuity and operational resilience.",
    ],
  },
  {
    id: 6,
    title: "Voice Assistants & Conversational AI",
    description: "Enables touch-free, conversational interactions across devices.",
    image: voicebots,
    points: [
      "Understands multiple languages and intents for seamless user experience.",
      "Ideal for virtual reception, support, and smart office automation.",
    ],
  },
];
