import React from "react";
import HeroSection from "../../components/solutions/components/HeroSection";
import HealthCareVideoSection from "../../components/solutions/components/HealthCareVideoSection";
// import HealthCareScrollingLabel from "../../components/solutions/components/HealthCareScrollingLabel";
import HealthCarePricingSection from "../../components/solutions/components/HealthCarePricingSection";
import CoreFeaturesSection from "../../components/solutions/components/CoreFeaturesSection";
import SecuritySection from "../../components/solutions/components/SecuritySection";
import IntegrationWorkflow from "@/components/solutions/components/IntegrationWorkflow";
import WhyChooseUs from "@/sections/about-us/components/WhyChooseUs";
import HealthCareOfferingSection from "@/components/solutions/components/HealthCareOfferingSection";
import { whyChooseUsData } from "../about-us/Data/whyChooseData";

// import WhatHealthAssistAIDoSection from "@/components/solutions/components/WhatHealthAssistAIDoSection";



export const metadata = {
  title: "AI Chatbot for Healthcare | DataTroops",
  description:
    "Transform patient care with DataTroops AI chatbot for healthcare - bookings, symptom mapping, report access, and secure, multilingual support.",
};

export default function SolutionsPage() {
  return (
    <>
      <HeroSection />
      <HealthCareVideoSection />
      <HealthCarePricingSection />
      <CoreFeaturesSection />
      <HealthCareOfferingSection />
      <IntegrationWorkflow />
      <SecuritySection />
      {/* <HealthCareScrollingLabel /> */}
      <WhyChooseUs data={whyChooseUsData}/>

      {/* <WhatHealthAssistAIDoSection /> */}
      {/* <UseCasesSection /> */}
      {/* <WhatHealthAssistAIDoSection /> */}
      {/* <SolutionFaqSection /> */}



      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}




const baseUrl = 'https://datatroops.ai/';
const pageUrl = 'https://datatroops.ai/healthcare-solutions/';
const logoUrl = 'https://datatroops.ai/logo.png';
const pageTitle = 'Healthcare AI Chatbot Development | Custom Medical Chatbots by DataTroops';
const pageDescription = 'Boost patient satisfaction with our AI chatbots for hospitals. Automate support, bookings & more. Fast deployment & EHR integration.';


const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DataTroops",
  url: baseUrl,
  logo: `https://datatroops.io/images/dataTroops/logo.jpg`,
  description: pageDescription,
  address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
  },
  contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'datatroops.ai@gmail.com',
  },
  sameAs: [
      'https://in.linkedin.com/company/datatroops-ai/',
      'https://x.com/Datatroops_ai',
      'https://www.threads.com/@datatroops.ai',
      'https://www.facebook.com/datatroopsai/',
      'https://www.instagram.com/datatroops.ai/',
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageTitle,
  description: pageDescription,
  url: pageUrl,
  publisher: {
    "@type": "Organization",
    name: "DataTroops",
    logo: {
      "@type": "ImageObject",
      "url": logoUrl
    }
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": pageTitle,
    "item": pageUrl  
  }]
}