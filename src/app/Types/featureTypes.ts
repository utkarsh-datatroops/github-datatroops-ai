// types/features.ts
import { ComponentType } from "react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: ComponentType;
  href?: string;
}
