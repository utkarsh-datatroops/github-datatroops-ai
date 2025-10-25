// /types/llmSelectorTypes.ts
import type { StaticImageData } from "next/image";
export type StepKey = "build" | "train" | "deploy";

export interface LLMProvider {
  id: string;
  name: string;
  icon: StaticImageData;
  iconAlt: string;
}
export interface Step {
  id: StepKey;
  title: string;
  description: string;
}
