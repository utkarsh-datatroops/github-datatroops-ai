import Container from "../global/container";
import Marquee from "../ui/marquee";
import { SectionBadge } from "../ui/section-bade";
import Image from "next/image";

type REVIEW = {
  name: string;
  username: string;
  review: string;
  img: string;
};

export const REVIEWS: REVIEW[] = [
  {
    name: "Dr. Aravind Rao",
    username: "Founder, AI Nexus",
    review:
      "Generative AI isn't just a breakthrough—it's a new paradigm for how humans and machines collaborate to create.",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Meera Thomas",
    username: "CTO, Cognition Labs",
    review:
      "In my 20 years in AI, I’ve never seen innovation move this fast. Generative models are reshaping industries.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Karan Bajaj",
    username: "CEO, Synthmind",
    review:
      "We’re now able to prototype, test, and deploy ideas 10x faster—all thanks to generative AI.",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Dr. Laila Sinha",
    username: "Researcher, DeepThink Institute",
    review:
      "What fascinates me is not just what generative AI can do—but how it pushes us to rethink creativity itself.",
    img: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    name: "Anuj Deshmukh",
    username: "AI Lead, AlphaOne",
    review:
      "This isn’t automation. This is augmentation. Generative AI elevates teams and ideas in unprecedented ways.",
    img: "https://randomuser.me/api/portraits/men/62.jpg",
  },
  {
    name: "Nandita Verma",
    username: "Director of AI, Novus Labs",
    review:
      "The best generative AI platforms don’t just generate—they understand. That’s the leap we’ve all been waiting for.",
    img: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    name: "Vikram Goyal",
    username: "Principal Architect, Omnidata",
    review:
      "When used right, generative AI is not a tool—it’s a multiplier. Teams with vision can outpace giants with it.",
    img: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Sara Iqbal",
    username: "Head of ML, Zenware",
    review:
      "Seeing designers, marketers, and devs all leverage the same AI system is where the magic truly happens.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Prof. Dev Mehta",
    username: "Chair, AI Ethics Council",
    review:
      "The future of generative AI must balance power with responsibility. But its potential is undeniably historic.",
    img: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    name: "Ritika Sharma",
    username: "Product Head, NeuroLayer",
    review:
      "From ideation to launch, our team now co-builds with AI. It’s like having an infinite creative partner.",
    img: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    name: "Siddharth Anand",
    username: "Co-Founder, GenAI Collective",
    review:
      "The next unicorns will be built not on code, but on prompts—and the platforms that power them.",
    img: "https://randomuser.me/api/portraits/men/81.jpg",
  },
  {
    name: "Dr. Amrita Das",
    username: "Advisor, World AI Forum",
    review:
      "We’re watching the birth of an intelligence layer across industries. Generative AI is that foundational.",
    img: "https://randomuser.me/api/portraits/women/66.jpg",
  },
];

const firstRow = REVIEWS.slice(0, REVIEWS.length / 2);
const secondRow = REVIEWS.slice(REVIEWS.length / 2);

const Reviews = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
      <Container>
        <div className="flex flex-col items-center text-center max-w-xl mx-auto">
          <SectionBadge title="Our Customers" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Insights from the Pioneers of Generative AI
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
            From researchers to founders, here&apos;s what global AI leaders
            think about the power and promise of generative AI.
          </p>
        </div>
      </Container>
      <Container>
        <div className="mt-16 w-full relative overflow-hidden">
          <div
            className="relative flex flex-col items-center justify-center overflow-hidden group"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          >
            <Marquee
              pauseOnHover={true}
              className="[--duration:30s] group-hover:[animation-play-state:paused]"
            >
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee
              pauseOnHover={true}
              reverse
              className="[--duration:30s] group-hover:[animation-play-state:paused]"
            >
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background via-background/80 to-transparent z-10"></div>

            {/* Blur effects on the sides */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 backdrop-blur-sm z-20"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 backdrop-blur-sm z-20"></div>
            <div className="absolute hidden lg:block top-1/4 left-1/4 w-28 h-28 rounded-full bg-primary/80 -z-10 blur-[6rem]"></div>
            <div className="absolute hidden lg:block top-1/4 right-1/4 w-28 h-28 rounded-full bg-primary/80 -z-10 blur-[6rem]"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const ReviewCard = ({
  img,
  name,
  username,
  review,
}: {
  img: string;
  name: string;
  username: string;
  review: string;
}) => {
  return (
    <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border border-foreground/5 bg-neutral-50/[.05] hover:bg-neutral-50/[0.2] p-4 transition-all duration-300 ease-in-out">
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-foreground">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-foreground/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{review}</blockquote>
    </figure>
  );
};

export default Reviews;
