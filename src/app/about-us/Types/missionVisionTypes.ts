import { StaticImageData } from "next/image";

export type IconType = "rocket" | "eye";

export interface MissionVisionItem {
  icon: IconType;
  heading: string;
  description: string;
}

export interface MissionVisionData {
  title: string;
  image: StaticImageData;
  mission: MissionVisionItem;
  vision: MissionVisionItem;
}
