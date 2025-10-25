import IndustrySection from "@/app/solutions/components/IndustrySection";
import HeroSection from "@/app/solutions/components/HeroSection";
import SolutionsSection from "@/app/solutions/components/SolutionsSection";
import CaseStudiesSection from "@/app/solutions/components/CaseStudiesSection";
import WhyChooseSection from "@/app/solutions/components/WhyChooseSection";
import CTASection from "@/app/solutions/components/CTASection";
import IntegrationWorkflowSection from "@/app/solutions/components/IntegrationWorkflowSection";
import FAQSection from "@/common-sections/FAQSection";
import { industries } from "@/app/Data/industryData";
import { faqs } from "@/app/solutions/components/data/faqsData";
import { caseStudiesData } from "@/app/solutions/components/data/caseStudiesData";
import {
  defaultHeroHeading,
  defaultSubheading,
  defaultCTA,
  defaultFloaters,
  defaultHeroImage,
} from "@/app/solutions/components/data/heroData";
import { defaultSolutionsData } from "@/app/solutions/components/data/solutionData";
import { defaultWhyChooseData } from "@/app/solutions/components/data/whyChooseData";
import { defaultIntegrationSteps } from "@/app/solutions/components/data/integrationData";

export const metadata = {
  title: "Custom AI Solution for Business Growth | DataTroops",
  description:
    "Unlock growth with a custom AI solution tailored to your business. Automate workflows, predict outcomes, and scale faster with DataTroops’ AI expertise.",
};

export default function AboutUs() {
  return (
    <>
      <HeroSection 
        backgroundImage={defaultHeroImage}
        heading={defaultHeroHeading}
        subheading={defaultSubheading}
        cta={defaultCTA}
        floaters={defaultFloaters}
      />
      <SolutionsSection 
        title="Solutions We Deliver"
        description="Explore how DataTroops.ai empowers your business with cutting-edge AI solutions that drive real impact."
        solutions={defaultSolutionsData}
      />
      <IndustrySection
        data={industries}
        title="AI solutions for the world’s most complex industries"
        backgroundColor="bg-white"
      />
      <WhyChooseSection 
        heading="Why Choose DataTroops?"
        subheading="We don't just implement AI—we engineer intelligent ecosystems that deliver measurable business impact. Our solutions tackle the most critical challenges of modern enterprises, driving automation, security, and innovation at scale."
        items={defaultWhyChooseData}
      />
      <IntegrationWorkflowSection 
        steps={defaultIntegrationSteps}
        title="Seamless AI Integration"
        subtitle="Step by step — here's how we bring AI into your business"
      />
      <CaseStudiesSection
        data={caseStudiesData}
        sectionTitle="Real-World Results"
        sectionDescription="Discover how leading organizations transformed their operations with our AI solutions, achieving measurable impact and sustainable growth."
      />
      <FAQSection
        title="Got Questions? We've Got Answers."
        description="Find quick answers to common questions about our AI solutions."
        faqs={faqs}
      />
      <CTASection 
        title="Ready to Transform Your Business?"
        description="Experience the DataTroops difference. Let's discuss how our AI solutions can drive measurable impact for your organization."
        buttonText="Schedule a Strategy Session"
        buttonLink="/contact-us"
      />
    </>
  );
}
