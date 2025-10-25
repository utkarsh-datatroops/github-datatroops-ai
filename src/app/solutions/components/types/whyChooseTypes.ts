export interface WhyChooseItem {
  id: number;
  icon: keyof typeof import("../icons/whyChooseIcons").whyChooseIcons;
  title: string;
  description: string;
  highlight: string;
}

export interface WhyChooseSectionProps {
  heading: string;
  subheading: string;
  items: WhyChooseItem[];
}