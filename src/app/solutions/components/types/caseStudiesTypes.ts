// import { IconType } from "react-icons";

export interface CaseStudyResult {
  metric: string;
  value: string;
  description: string;
}

export interface CaseStudy {
  id: number;
  title?: string;
  client?: string;
  industry?: string;
  challenge?: string;
  solution?: string;
  icon: "FaChartLine" | "FaRobot" | "FaHeadset";
  gradient?: string;
  image?: string;
  results?: CaseStudyResult[];
  details?: string[];
}
