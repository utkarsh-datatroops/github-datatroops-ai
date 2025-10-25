import { StaticImageData } from "next/image";

// types.ts
export interface Feature {
    number: string;
    title: string;
    description: string;
  }
  
  export interface CTAButton {
    label: string;
    href: string;
  }
  
  export interface WhyChooseUsProps {
    title: string;
    image: StaticImageData | string; 
    features: Feature[];
    mobileCTA: CTAButton;
    desktopCTA: CTAButton;
  }
  