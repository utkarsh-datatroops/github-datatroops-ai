import { FeatureItem } from "@/app/Types/featureTypes";
import {
  MessageSquareIcon,
  BrainIcon,
  BotIcon,
  ZapIcon,
  EyeIcon,
  LineChartIcon,
} from "@/app/icons/whatWeDo";

// Default features data for AI/ML services
export const AIFeatures: FeatureItem[] = [
  {
    title: "Generative AI",
    description:
      "Unlock the creative potential of AI with generative models that can craft unique content, designs, and strategies specifically for your business needs. Harness the power of AI to generate innovative solutions across multiple domains.",
    icon: MessageSquareIcon,
    href: "/solutions/generative-ai",
  },
  {
    title: "Machine Learning",
    description:
      "Empower your data with machine learning algorithms that enable predictive analytics, smart pattern recognition, and decision-making based on actionable insights. Optimize performance and discover new opportunities.",
    icon: BrainIcon,
    href: "/solutions/machine-learning"
  },
  {
    title: "NLP & Chatbots",
    description:
      "Enhance user engagement through intelligent chatbots and NLP-powered systems that understand natural language, context, and user intent, delivering personalized experiences in real-time.",
    icon: BotIcon,
  },
  {
    title: "AI Agents",
    description:
      "Automate your operations with autonomous AI agents capable of performing complex tasks, making decisions, and handling critical processes efficiently. Streamline workflows and boost productivity across your entire business.",
    icon: ZapIcon,
  },
  {
    title: "Computer Vision",
    description:
      "Implement AI-driven image and video analysis systems that can detect, recognize, and interpret visual data. Improve accuracy, automation, and decision-making in fields like security, manufacturing, and healthcare.",
    icon: EyeIcon,
  },
  {
    title: "Deep Learning",
    description:
      "Leverage the power of neural networks to tackle highly complex problems. From image recognition to predictive modeling, our deep learning solutions uncover hidden patterns and drive insights from large datasets.",
    icon: LineChartIcon,
  },
];
