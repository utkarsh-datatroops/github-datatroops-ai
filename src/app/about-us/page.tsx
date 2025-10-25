import HeroSection from "@/sections/about-us/components/Hero";
import WhyChooseUs from "@/sections/about-us/components/WhyChooseUs";
import MissionVisionSection from "@/sections/about-us/components/MissionVisionSection";
import EmployeeCollage from "@/sections/about-us/components/EmployeeCollage";
import CompanyEthics from "@/sections/about-us/components/CompanyEthics";
import CTASection from "@/sections/CTA";
import FAQSection from "@/common-sections/FAQSection";
import { heroData } from "./Data/heroData";
import { whyChooseUsData } from "./Data/whyChooseData";
import { missionVisionData } from "./Data/missionVisionData";
import { employeeCollageData } from "./Data/employeeCollageData";
import { companyEthicsData } from "./Data/companyEthicsData";

export const metadata = {
  title: "About us: AI Solutions Company | DataTroops",
  description:
    "Discover About Us: We are a leading AI solutions company, builds powerful AI systems for automation, analytics, and enterprise transformation.",
};

const faqItems = [
  {
    question: "What is DataTroops.ai's mission?",
    answer:
      "Our mission is to democratize AI by making intelligent, scalable, and tailor-made solutions accessible to every business, regardless of size, industry, or technical expertise. We aim to empower organizations to work smarter, move faster, and grow fearlessly through AI that adapts to their needs.",
  },
  {
    question: "What industries does DataTroops.ai serve?",
    answer:
      "We serve a diverse range of industries, including gaming, e-commerce, healthcare, and enterprise sectors, providing customized AI solutions that drive innovation and efficiency.",
  },
  {
    question: "What technologies does DataTroops.ai specialize in?",
    answer:
      "We specialize in a wide array of technologies, such as Scala, Akka, JavaScript, Rust, Kafka, Spark, and cloud platforms like AWS and Google Cloud. Our expertise spans backend development, AI & machine learning, data analytics, augmented reality, and more.",
  },
  {
    question: "How does DataTroops.ai ensure data security?",
    answer:
      "We prioritize enterprise-grade security protocols, including end-to-end encryption, role-based access control, and compliance with data protection regulations like GDPR and HIPAA (where applicable), ensuring robust data protection and compliance you can trust.",
  },
  {
    question: "What is DataTroops.ai's approach to AI implementation?",
    answer:
      "We offer end-to-end delivery, handling everything from strategy to deployment. Our solutions are custom-built around your specific needs, ensuring that your AI gets smarter and more efficient over time through continuous optimization.",
  },
  {
    question: "What sets DataTroops.ai apart from other AI solution providers?",
    answer:
      "Our collaborative process emphasizes clear communication and full transparency at every step. We combine domain expertise with a commitment to excellence, delivering tailored AI solutions that transform businesses by automating operations and unlocking new possibilities.",
  },
];

export default function AboutUs() {
  return (
    <>
      <HeroSection data={heroData}/>
      <WhyChooseUs data={whyChooseUsData}/>
      <MissionVisionSection data={missionVisionData}/>
      <EmployeeCollage data={employeeCollageData}/>
      <CompanyEthics data ={companyEthicsData}/>
      <CTASection />
      <FAQSection
        title="Frequently Asked Questions"
        description=" Find quick answers to common questions about our AI Scheduling
          Assistant."
        faqs={faqItems}
      />
    </>
  );
}
