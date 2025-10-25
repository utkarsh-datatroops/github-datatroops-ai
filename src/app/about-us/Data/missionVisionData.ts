import robotSvgUrl from "@/assets/images/robot.svg?url";
import { MissionVisionData } from "../Types/missionVisionTypes";

export const missionVisionData: MissionVisionData = {
  title: "Our Mission & Vision",
  image: robotSvgUrl,
  mission: {
    icon: "rocket",
    heading: "Our Mission",
    description:
      "To democratise AI by making intelligent, scalable, and tailor-made solutions accessible to every business, regardless of size, industry, or technical expertise. We strive to empower organisations to work smarter, move faster, and grow fearlessly through AI that adapts to their needs.",
  },
  vision: {
    icon: "eye",
    heading: "Our Vision",
    description:
      "A future where every business, big or small, can thrive with the power of artificial intelligence. We envision a world where AI simplifies the complex, accelerates progress, and fuels limitless innovation.",
  },
};
