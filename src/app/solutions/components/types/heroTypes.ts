import { StaticImageData } from "next/image";

export interface FloaterItem {
  id: number;
  text: string;
  icon: keyof typeof import("../icons/heroIcons").heroIcons;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  responsive?: boolean; // hidden on mobile if false
}

export interface HeroHeading {
  heading: string;
}

export interface HeroCTA {
  label: string;
  href: string;
}

export interface HeroProps {
  backgroundImage: StaticImageData;
  heading: HeroHeading;
  subheading?: string;
  cta?: HeroCTA;
  floaters?: FloaterItem[];
  showFloaters?: boolean;
}
