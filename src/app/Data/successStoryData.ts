import blogsImage from "@/assets/images/blogs.avif";
import DataTroopsLogo from "@/sections/datatroopsLogo.svg";
import { SuccessStory } from "@/app/Types/successStoryTypes";

export const successStories: SuccessStory[] = [
  {
    id: 1,
    type: "case-study",
    company: "FinNova Bank",
    logo: DataTroopsLogo,
    title:
      "FinNova slashes support wait time with our AI-driven chat assistant",
    description:
      "FinNova, a digital-first banking platform, implemented our AI chat assistant to handle thousands of customer queries in real-time, reducing dependency on human agents and improving customer satisfaction.",
    stats: [
      {
        label: "SUPPORT EFFICIENCY",
        value: "95%",
        description: "queries resolved without human involvement",
      },
      {
        label: "CUSTOMER SATISFACTION",
        value: "4.8/5",
        description: "average user rating post-deployment",
      },
    ],
    backgroundImage: blogsImage,
  },
  {
    id: 2,
    type: "testimonial",
    company: "HealthMate",
    logo: DataTroopsLogo,
    title:
      "HealthMate scaled multilingual patient support using conversational AI",
    backgroundImage: blogsImage,
  },
  {
    id: 3,
    type: "case-study",
    company: "LogiChain",
    logo: DataTroopsLogo,
    title:
      "LogiChain boosts operational efficiency with AI-led ticket automation",
    description:
      "LogiChain, a global logistics firm, reduced internal support load by introducing an AI system to handle ticketing, FAQs, and workflows — saving hundreds of hours monthly.",
    stats: [
      {
        label: "TICKET RESOLUTION TIME",
        value: "↓ 60%",
        description: "average time reduced for internal queries",
      },
      {
        label: "RESOURCE SAVINGS",
        value: "300+ hrs",
        description: "engineering hours saved each month",
      },
    ],
    backgroundImage: blogsImage,
  },
  {
    id: 4,
    type: "testimonial",
    company: "SkillForge",
    logo: DataTroopsLogo,
    title: "SkillForge delivers 24/7 course assistance with our AI tutor",
    backgroundImage: blogsImage,
  },
  {
    id: 5,
    type: "case-study",
    company: "RetailX",
    logo: DataTroopsLogo,
    title: "RetailX increases conversion rates with real-time product advisors",
    description:
      "RetailX deployed our AI-powered product advisor to assist shoppers in real time, leading to a measurable increase in cart completions and customer engagement.",
    stats: [
      {
        label: "CONVERSION LIFT",
        value: "22%",
        description: "increase in purchases after AI deployment",
      },
      {
        label: "ENGAGEMENT BOOST",
        value: "3.5x",
        description: "longer average session times with AI chat",
      },
    ],
    backgroundImage: blogsImage,
  },
];
