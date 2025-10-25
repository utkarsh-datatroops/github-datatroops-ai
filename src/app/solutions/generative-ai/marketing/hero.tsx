// import { ArrowRightIcon } from "lucide-react";
// import Link from "next/link";
// import { BlurText } from "../ui/blur-text";
// import { Button } from "../ui/button";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Container from "../global/container";
// import dashboardImage from "../Dashboard.png"; // Adjust the path as necessary
// const Hero = () => {
//     return (
//         <div className="flex flex-col items-center text-center w-full max-w-5xl my-24 mx-auto z-20 relative">
//             <Container delay={0.0}>
//                 <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
//                     <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
//                         <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping">
//                             <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping"></div>
//                         </div>
//                         <div className="w-1.5 h-1.5 rounded-full bg-primary flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                         </div>
//                     </div>
//                     <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-sm text-transparent">
//                         Build for the future {" "}

//                         <span className="text-xs text-secondary-foreground px-1.5 py-0.5 rounded-full bg-gradient-to-b from-red-200 to-red-100 text-black flex items-center justify-center">
//                             What
//                             <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-foreground/50" />
//                         </span>
//                     </span>
//                 </div>
//             </Container>
//             <BlurText
//                 word={"Your ultimate social media\n marketing tool"}
//                 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium racking-[-0.0125em] mt-6 font-heading text-white"
//             />
//             <Container delay={0.1}>
//                 <p className=" text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-2xl mx-auto">
//                     Elevate your social media presense with AI-powered content creation and scheduling. <span className="hidden sm:inline">Luro is the all-in-one solution for your social media marketing needs.</span>
//                 </p>
//             </Container>
//             <Container delay={0.2}>
//                 <div className="flex items-center justify-center md:gap-x-6 mt-8">
//                     <Button asChild size="lg">
//                         <Link href="/app">
//                             Start for free
//                         </Link>
//                     </Button>
//                     <Button asChild size="lg" variant="outline" className="hidden md:flex">
//                         <Link href="#">
//                             How it works
//                         </Link>
//                     </Button>
//                 </div>
//             </Container>
//             <Container delay={0.3}>
//                 <div className="relative mx-auto max-w-7xl rounded-xl lg:rounded-[32px] border border-neutral-200/50 p-2 backdrop-blur-lg border-neutral-700 bg-neutral-800/50 md:p-4 mt-12">
//                     <div className="absolute top-1/4 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

//                     <div className="rounded-lg lg:rounded-[24px] border p-2 border-neutral-700 bg-black">
//                         <Image
//                             src={dashboardImage}
//                             alt="dashboard"
//                             width={1920}
//                             height={1080}
//                             className="rounded-lg lg:rounded-[20px]"
//                         />
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     )
// };

// export default Hero

// import { ArrowRightIcon } from "lucide-react";
// import Link from "next/link";
// import { BlurText } from "../ui/blur-text";
// import { Button } from "../ui/button";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Container from "../global/container";
// import dashboardImage from "../Dashboard.png";
// import RetroGrid from "../ui/retro-grid";
// import { Particles } from "../ui/particles";
// import { cn } from "@/utils/cn";

// const Hero = () => {
//     return (
//         <div className="w-full relative py-12 md:py-16 lg:py-16 overflow-hidden">
//             {/* Background components */}
//            <div
//                        className={cn(
//                            "pointer-events-none absolute size-full overflow-hidden opacity-50 [perspective:200px]"
//                        )}
//                        style={{ "--grid-angle": `${45}deg` } as React.CSSProperties}
//                    >
//                        {/* Grid */}
//                        <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
//                            <div
//                                className={cn(
//                                    "animate-grid",

//                                    "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",

//                                    // Light Styles
//                                    // "[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]",

//                                    // Dark styles
//                                    "[background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_0)]",
//                                )}
//                            />
//                        </div>

//                        {/* Background Gradient */}
//                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent to-90%" />
//                    </div>
//             <Particles
//                 refresh
//                 ease={80}
//                 color="#d4d4d8"
//                 quantity={100}
//                 className="absolute inset-0 w-full h-full"
//             />
//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-violet-500 blur-[10rem]"></div>

//             {/* Foreground Hero content */}
//             <div className="flex flex-col items-center text-center w-full max-w-5xl my-24 mx-auto z-20 relative">
//                 <Container delay={0.0}>
//                     <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
//                         <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
//                             <div className="w-2.5 h-2.5 rounded-full bg-primary/60 animate-ping" />
//                             <div className="w-1.5 h-1.5 rounded-full bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
//                         </div>
//                         <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-sm text-transparent">
//                             Build for the future{" "}
//                             <span className="text-xs text-secondary-foreground px-1.5 py-0.5 rounded-full bg-gradient-to-b from-red-200 to-red-100 text-black flex items-center justify-center">
//                                 What
//                                 <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-foreground/50" />
//                             </span>
//                         </span>
//                     </div>
//                 </Container>

//                 <BlurText
//                     word={"Your ultimate social media\n marketing tool"}
//                     className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium tracking-[-0.0125em] mt-6 font-heading text-white"
//                 />

//                 <Container delay={0.1}>
//                     <p className="text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-2xl mx-auto">
//                         Elevate your social media presense with AI-powered content creation and scheduling.{" "}
//                         <span className="hidden sm:inline">
//                             Luro is the all-in-one solution for your social media marketing needs.
//                         </span>
//                     </p>
//                 </Container>

//                 <Container delay={0.2}>
//                     <div className="flex items-center justify-center md:gap-x-6 mt-8">
//                         <Button asChild size="lg">
//                             <Link href="/app">
//                                 Start for free
//                             </Link>
//                         </Button>
//                         <Button asChild size="lg" variant="outline" className="hidden md:flex">
//                             <Link href="#">
//                                 How it works
//                             </Link>
//                         </Button>
//                     </div>
//                 </Container>

//                 <Container delay={0.3}>
//                     <div className="relative mx-auto max-w-7xl rounded-xl lg:rounded-[32px] border border-neutral-200/50 p-2 backdrop-blur-lg border-neutral-700 bg-neutral-800/50 md:p-4 mt-12">
//                         <div className="absolute top-1/4 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
//                         <div className="rounded-lg lg:rounded-[24px] border p-2 border-neutral-700 bg-black">
//                             <Image
//                                 src={dashboardImage}
//                                 alt="dashboard"
//                                 width={1920}
//                                 height={1080}
//                                 className="rounded-lg lg:rounded-[20px]"
//                             />
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         </div>
//     );
// };

// export default Hero;

"use client";

import { motion } from "framer-motion";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";
import Container from "../global/container";
import RetroGrid from "../ui/retro-grid";
import { Particles } from "../ui/particles";
import dynamic from "next/dynamic";

const ReactPlayerr = dynamic(() => import("react-player/youtube"), {
  ssr: false, // Disable server-side rendering for ReactPlayer
});

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <RetroGrid />
        <Particles
          refresh
          ease={80}
          color="#d4d4d8"
          quantity={50}
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-violet-500 blur-[10rem]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl px-4 sm:px-6 md:px-8 lg:py-24 md:pt-16 sm:pt-0">
        <Container delay={0.0}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center cursor-pointer"
          >
            <a href="/contact-us">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white mb-6">
                <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative mr-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/60 animate-ping" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-[#8f80ff] via-[#9f92ff] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-sm text-transparent">
                  Generative AI Solutions{" "}
                  <span className="text-xs text-secondary-foreground px-1.5 py-0.5 rounded-full bg-gradient-to-r from-[#a497ff] via-[#c6bdff] to-[#c7d2fe] text-gray-900 flex items-center justify-center">
                    Explore
                    <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-foreground/50" />
                  </span>
                </span>
              </div>
            </a>
          </motion.div>
        </Container>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <BlurText
            word={"Custom Generative AI Solutions"}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium tracking-[-0.0125em] mt-6 font-heading text-white"
          />
        </motion.h1>

        <Container delay={0.1}>
          <p className="text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-2xl mx-auto">
            Transform how you create, communicate, and operate using our
            cutting-edge Generative AI solutions.{" "}
            <span className="hidden sm:inline">
              From content automation to intelligent chat experiences,
              DataTroops enables you to harness AI for measurable business
              impact.
            </span>
          </p>
        </Container>

        <Container delay={0.2}>
          <div className="flex items-center justify-center md:gap-x-6 mt-8">
            <Button asChild size="lg">
              <Link href="/contact-us">Try a Demo</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hidden md:flex"
            >
              <Link href="#">See Use Cases</Link>
            </Button>
          </div>
        </Container>
        <Container delay={0.3}>
          <div className="relative mx-auto max-w-7xl rounded-xl lg:rounded-[32px] border border-neutral-200/50 p-2 backdrop-blur-lg border-neutral-700 bg-neutral-800/50 md:p-4 mt-12">
            <div className="absolute top-1/4 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem]" />
            <div className="relative rounded-lg lg:rounded-[24px] border p-2 border-neutral-700 bg-black pb-[56.25%] h-0 overflow-hidden">
              <ReactPlayerr
                url="https://youtube.com/watch?v=r6Da3VVms3c"
                controls={true}
                width="100%"
                height="100%"
                playing={false}
                config={{}}
                className="absolute top-0 left-0 w-full h-full rounded-lg lg:rounded-[20px]"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
