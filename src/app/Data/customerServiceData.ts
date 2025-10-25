import { DemoMessage } from "@/app/Types/customerServiceTypes";
import DataTroopsLogo from "@/sections/datatroopsLogo.svg?url";

export const defaultBotName = "DataTroops.ai Healthcare";
export const defaultLogoUrl = DataTroopsLogo;
export const defaultTitle = "DataTroops.ai Healthcare Assistance";
export const defaultSubtitle = "Put your customer service on auto-pilot";
export const defaultDescription1 = `We design and develop AI-powered solutions that automate workflows, uncover insights, and supercharge decision-making. From Generative AI to NLP and Computer Vision, our solutions are tailored to your goals and industry needs.`;
export const defaultDescription2 = `Effortlessly resolve repetitive customer queries with our no-code generative AI-powered chatbot that can be fine-tuned on your existing content.`;
export const defaultDescription3 = `Enhance your self-service resolution rate, reduce average handling time and cut down on operational cost with human-like conversations, powered by generative AI.`;
export const defaultButtonText = "Book a Demo →";
export const defaultButtonLink = "/contact-us";

export const defaultDemoConversation: DemoMessage[] = [
  { type: "user", text: "Hi!" },
  {
    type: "bot",
    text: `Hi,\nI'm an AI assistant. How can I help you today?`,
  },
  { type: "user", text: "I want to book an appointment for myself." },
  {
    type: "bot",
    text: "Sure! What type of doctor do you need? (e.g., General Physician, Dermatologist, etc.)",
  },
  { type: "user", text: "I need a general physician." },
  {
    type: "bot",
    text: "Okay, do you have a preferred doctor or should I show you the available ones?",
  },
  { type: "user", text: "Show me the available ones." },
  {
    type: "bot",
    text: `Here are 3 options:\n1. Dr. Verma – Tomorrow at 10 AM\n2. Dr. Patel – Tomorrow at 2 PM\n3. Dr. Guleria – Friday at 9 AM\nWhich one works for you?`,
  },
  { type: "user", text: "Dr. Patel at 2 PM." },
  {
    type: "bot",
    text: "Great! Booking you with Dr. Patel at 2 PM tomorrow. Please confirm.",
  },
  { type: "user", text: "Confirmed." },
  {
    type: "bot",
    text: "Your appointment is booked! You’ll receive a confirmation by SMS and email soon.",
  },
];
