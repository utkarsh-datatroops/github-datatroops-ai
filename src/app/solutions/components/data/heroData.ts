import { HeroHeading, FloaterItem, HeroCTA } from "../types/heroTypes";
import digitalMarketingHeroBg from "@/assets/images/aiSolutions/hero-section-bg.jpg";

export const defaultHeroHeading: HeroHeading = {
  heading: "Custom AI Solutions for Business Growth"
};

export const defaultSubheading =
  "Smarter Automation. Faster Decisions. Measurable Impact.";

export const defaultCTA: HeroCTA = {
  label: "Get In Touch",
  href: "/contact-us",
};

export const defaultFloaters: FloaterItem[] = [
  {
    id: 1,
    text: "Intelligent Data Integration & Analytics",
    icon: "purpleStar",
    top: "15%",
    left: "10%",
    responsive: true,
  },
  {
    id: 2,
    text: "Workflow Automation",
    icon: "purpleStar",
    top: "30%",
    right: "8%",
    responsive: false,
  },
  {
    id: 3,
    text: "Predictive Analytics & Forecasting",
    icon: "purpleStar",
    bottom: "20%",
    left: "5%",
    responsive: true,
  },
  {
    id: 4,
    text: "AI-Powered Customer Support & Chatbots",
    icon: "purpleStar",
    bottom: "10%",
    right: "15%",
    responsive: false,
  },
  {
    id: 5,
    text: "AIOps (AI for IT Operations)",
    icon: "purpleStar",
    top: "5%",
    left: "35%",
    responsive: true,
  },
  {
    id: 6,
    text: "Voice Assistants & Conversational AI",
    icon: "purpleStar",
    bottom: "30%",
    right: "10%",
    responsive: false,
  },
];

export const defaultHeroImage = digitalMarketingHeroBg;
