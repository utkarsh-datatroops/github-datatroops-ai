import { StaticImageData } from "next/image";

export interface SolutionCard {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  points: string[];
  href?: string;
}

export interface SolutionsSectionProps {
  title: string;
  description: string;
  solutions: SolutionCard[];
  showScrollButtons?: boolean;
}
