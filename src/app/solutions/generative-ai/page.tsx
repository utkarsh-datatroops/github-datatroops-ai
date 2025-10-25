import Wrapper from "./global/wrapper";
import Container from "./global/container";
import Background from "./global/background";
import Hero from "./marketing/hero";
import Companies from "./marketing/companies";
import Connect from "./marketing/connect";
import Perks from "./marketing/perks";
import Pricing from "./marketing/pricing";
import Reviews from "./marketing/reviews";
import CTA from "./marketing/cta";
import { Particles } from "./ui/particles";
import HeroSectionGenerativeAI from "./SectionTemp";
import BlogPreview from "@/sections/NewBlogsSection";

export const metadata = {
  title: "Generative AI Solutions for Business | DataTroops",
  description:
    "Boost efficiency, automate workflows, and scale smarter with DataTroops enterprise - grade generative AI solutions for business. Custom models. Fast results.",
};

const AIGenerative = () => {
  return (
    <>
      <Background>
        <Particles
          refresh
          ease={80}
          color="#d4d4d8"
          quantity={100}
          className="absolute inset-0 w-full h-full"
        />
        <Wrapper className="py-20 relative pt-6">
          <Container className="relative">
            <Hero />
          </Container>
          <Container className="py-8 lg:py-20">
            <Companies />
          </Container>
          <Connect />
          <BlogPreview />
          <Perks />
          <HeroSectionGenerativeAI />

          <Pricing />
          <Reviews />
          <CTA />
        </Wrapper>
      </Background>
    </>
  );
};

export default AIGenerative;
