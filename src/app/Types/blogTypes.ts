import { StaticImageData } from "next/image";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageSrc: string | StaticImageData;
  category: string;
  categoryColor?: string;
  isHighlighted?: boolean;
  url?: string;
}

export interface BlogSectionConfig {
  title: string;
  subtitle?: string;
  posts: BlogPost[];
  showGradientLine?: boolean;
  maxWidth?: string;
  gridCols?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}
