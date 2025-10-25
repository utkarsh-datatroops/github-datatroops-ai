import Image from "next/image";
import Container from "../global/container";
import { Particles } from "../ui/particles";
import { SectionBadge } from "../ui/section-bade";
import data from "./Untitled design (8).png";

const Connect = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <SectionBadge title="Generative AI tools" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Unlock the Power of Creativity with Generative AI
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
            Harness the potential of generative AI to drive innovation,
            streamline processes, and enhance creativity across industries.
          </p>
        </div>
      </Container>
      <Container>
        <div className="w-full relative mt-12">
          <Image alt="" src={data} className=" w-full h-auto" />
          <Particles
            className="absolute inset-0"
            quantity={150}
            ease={80}
            color="#e4e4e7"
            refresh
          />
        </div>
      </Container>
    </div>
  );
};

export default Connect;
