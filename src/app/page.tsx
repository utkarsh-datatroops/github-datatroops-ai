import CTASection from "@/sections/CTA";
import { Impact } from "@/sections/Impact";
import BlogSection from "@/sections/Blogs";
import LLMSelector from "@/sections/LLM";
import CustomerServiceSection from "@/sections/CustomerService";
import SuccessStoriesSection from "@/sections/SuccessStoriesSection";
import WhatWeDo from "@/sections/WhatWeDo";
import { TestimonialSection } from "@/sections/testimonial-section";
import FAQSection from "@/common-sections/FAQSection";
import IndustrySection from "./solutions/components/IndustrySection";
import { faqItems } from "@/app/Data/faqs";
import { industries } from "@/app/Data/industryData";
import RobotIcon2 from "@/assets/images/test-30.png";
// import DataTroopsLogo from "@/sections/datatroopsLogo.svg?url";
import { defaultDemoConversation } from "@/app/Data/customerServiceData";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata = {
  title: "AI Development Company for Business Automation | DataTroops",
  description:
    "DataTroops specializes in Custom AI Development - Leverage our custom AI solutions to automate repetitive tasks and scale your business with confidence.",
};

export default function Home() {
  return (
    <>
      <Impact
        badge="Automation"
        title="Impactful solutions and AI agents created"
        description="Transform the way you work with our cutting-edge AI Development Services that are designed to streamline operations, automate repetitive tasks, and unlock deep insights for better decision-making."
        emailPlaceholder="Enter your email"
        submitEndpoint="https://formsubmit.co/ajax/info@datatroops.io"
        buttonText="Sign Up"
        submittedText="Submitted"
        successMessage="Thanks! We'll be in touch soon."
      />
      {/* <AgentTemplateGallery/> */}
      <WhatWeDo />

      <BlogSection />
      <CTASection
        title="Ready to Revolutionize Your Workflow?"
        description="Emphasize how your AI assistant can help users streamline their scheduling and tasks, improve efficiency, and transform their workflow."
        buttonText="Get Started"
        buttonLink="/contact-us"
        image={RobotIcon2}
      />
      <TestimonialSection />
      <LLMSelector />
      <CustomerServiceSection
        title="DataTroops.ai Healthcare Assistance"
        subtitle="Put your customer service on auto-pilot"
        description1="We design and develop AI-powered solutions that automate workflows, uncover insights, and supercharge decision-making. From Generative AI to NLP and Computer Vision, our solutions are tailored to your goals and industry needs."
        description2="Effortlessly resolve repetitive customer queries with our no-code generative AI-powered chatbot that can be fine-tuned on your existing content."
        description3="Enhance your self-service resolution rate, reduce average handling time and cut down on operational cost with human-like conversations, powered by generative AI."
        buttonText="Book a Demo →"
        buttonLink="/contact-us"
        botName="DataTroops.ai Healthcare"
        demoConversation={defaultDemoConversation}
      />
      <SuccessStoriesSection />
      <IndustrySection
        data={industries}
        title="AI solutions for the world’s most complex industries"
        backgroundColor="bg-white"
      />
      <FAQSection
        title="Frequently Asked Questions"
        description=" Find quick answers to common questions about our AI Scheduling
          Assistant."
        faqs={faqItems}
      />
      <ScrollToTopButton />
    </>
  );
}
