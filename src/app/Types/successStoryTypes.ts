import { SVGProps } from "react";
import { StaticImageData } from "next/image";

export interface SuccessStory {
  id: number;
  type: "case-study" | "testimonial";
  company: string;
  logo: React.FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
  description?: string;
  stats?: {
    label: string;
    value: string;
    description: string;
  }[];
  backgroundImage?: string | StaticImageData;
}
