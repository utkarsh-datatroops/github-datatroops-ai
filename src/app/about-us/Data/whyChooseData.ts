import impactImage from "@/assets/images/solutions/impact-section.png";
import { WhyChooseUsProps } from "../Types/whyChooseTypes";

export const whyChooseUsData: WhyChooseUsProps = {
  title: "Build Smarter AI Chatbots with DataTroops",
  image: impactImage,
  features: [
    {
      number: "1",
      title: "Conversational AI with Empathy",
      description:
        "Our AI chatbots for hospitals understand patient emotions and respond with human-like warmth and care.",
    },
    {
      number: "2",
      title: "Healthcare-Specific NLP Engines",
      description:
        "Built for medical chatbot development, ensuring accuracy in terminology, diagnosis flow, and patient conversations.",
    },
    {
      number: "3",
      title: "Rapid Deployment, Faster ROI, Faster Deployment, Quicker Results",
      description:
        "Experience healthcare chatbot solutions that go live in weeks—delivering ROI and productivity from day one.",
    },
    {
      number: "4",
      title: "Seamless Integration with Hospital Systems",
      description:
        "Our healthcare AI chatbot development supports EHR/HIS integration, automating workflows and reducing admin load.",
    },
  ],
  mobileCTA: {
    label: "Get Your 6 months free trial",
    href: "/contact-us",
  },
  desktopCTA: {
    label: "Get your custom chatbot for absolutely free",
    href: "/contact-us",
  },
};
