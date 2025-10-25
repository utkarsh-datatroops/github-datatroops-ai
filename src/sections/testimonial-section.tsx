// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { CheckCircle, Quote } from "lucide-react";
// import * as React from "react";
// import * as AvatarPrimitive from "@radix-ui/react-avatar";

// const cn = (...classes: (string | undefined)[]) =>
//   classes.filter(Boolean).join(" ");

// const Avatar = React.forwardRef<
//   React.ElementRef<typeof AvatarPrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
// >(({ className, ...props }, ref) => (
//   <AvatarPrimitive.Root
//     ref={ref}
//     className={cn(
//       "relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[var(--color-7B2CBF)] text-white",
//       className,
//     )}
//     {...props}
//   />
// ));
// Avatar.displayName = AvatarPrimitive.Root.displayName;

// const AvatarImage = React.forwardRef<
//   React.ElementRef<typeof AvatarPrimitive.Image>,
//   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
// >(({ src, className, ...props }, ref) => (
//   <AvatarPrimitive.Image
//     ref={ref}
//     src={src || "/images/default-avatar.jpg"}
//     className={cn("h-full w-full object-cover", className)}
//     {...props}
//   />
// ));
// AvatarImage.displayName = AvatarPrimitive.Image.displayName;

// const AvatarFallback = React.forwardRef<
//   React.ElementRef<typeof AvatarPrimitive.Fallback>,
//   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
// >(({ className, ...props }, ref) => (
//   <AvatarPrimitive.Fallback
//     ref={ref}
//     className={cn(
//       "flex h-full w-full items-center justify-center rounded-full bg-[var(--color-5A189A)] text-white",
//       className,
//     )}
//     {...props}
//   />
// ));
// AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// const Card = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn(
//       "rounded-xl border border-[var(--color-7B2CBF)] bg-[var(--color-10002B)] text-white shadow-lg",
//       className,
//     )}
//     {...props}
//   />
// ));
// Card.displayName = "Card";

// const testimonials = [
//   {
//     id: 1,
//     quote:
//       "Artificial intelligence will have a more profound impact on humanity than fire, electricity, and the internet.",
//     author: "Sundar Pichai",
//     title: "CEO",
//     company: "Alphabet (Google)",
//     avatar: "/images/sp-avatar.jpg",
//     initials: "SP",
//   },
//   {
//     id: 2,
//     quote: "AI will affect every product and every service that we have.",
//     author: "Tim Cook",
//     title: "CEO",
//     company: "Apple",
//     avatar: "/images/tc-avatar.jpg",
//     initials: "TC",
//   },
//   {
//     id: 3,
//     quote:
//       "AI agents will become deeply integrated into our daily routines, assisting us with a wide range of tasks.",
//     author: "Andrew Ng",
//     title: "Co-founder of Google Brain and Coursera",
//     company: "Google Brain and Coursera",
//     avatar: "/images/an-avatar.jpg",
//     initials: "AN",
//   },
//   {
//     id: 4,
//     quote:
//       "Generative AI is one of the most exciting and powerful technologies of our time, but it also presents new challenges and risks that we need to address thoughtfully and proactively.",
//     author: "Sam Altman",
//     title: "CEO",
//     company: "OpenAI",
//     avatar: "/images/sa-avatar.jpg",
//     initials: "SA",
//   },
//   {
//     id: 5,
//     quote:
//       "AI agents will transform the way we interact with technology, making it more natural and intuitive.",
//     author: "Fei-Fei Li",
//     title: "Professor of Computer Science",
//     company: "Stanford University",
//     avatar: "/images/ffl-avatar.jpg",
//     initials: "FFL",
//   },
//   {
//     id: 6,
//     quote:
//       "AI agents are not only going to change how everyone interacts with computers. They're also going to upend the software industry, bringing about the biggest revolution in computing since we went from typing commands to tapping on icons.",
//     author: "Bill Gates",
//     title: "Co-founder",
//     company: "Microsoft",
//     avatar: "/images/bg-avatar.jpg",
//     initials: "BG",
//   },
//   {
//     id: 7,
//     quote:
//       "AI and digital labor are multitrillion-dollar opportunities despite risks of job displacement and misuse.",
//     author: "Marc Benioff",
//     title: "CEO",
//     company: "Salesforce",
//     avatar: "/images/mb-avatar.jpg",
//     initials: "MB",
//   },
//   {
//     id: 8,
//     quote: "AI and AI agents act like coworkers, not like software.",
//     author: "Jack Clark",
//     title: "Co-founder",
//     company: "Anthropic",
//     avatar: "/images/jc-avatar.jpg",
//     initials: "JC",
//   },
//   {
//     id: 9,
//     quote:
//       "Manager nerds will orchestrate fleets of AI agents, making small teams extremely powerful.",
//     author: "Conor Grennan",
//     title: "Author and Tech Enthusiast",
//     company: "Decidr",
//     avatar: "/images/cg-avatar.jpg",
//     initials: "CG",
//   },
//   {
//     id: 10,
//     quote: "AI and AI agents act like coworkers, not like software.",
//     author: "Paul Chan",
//     title: "Founder and CEO",
//     company: "Decidr",
//     avatar: "/images/pc-avatar.jpg",
//     initials: "PC",
//   },
// ];

// const FeaturePoint = ({ text }: { text: string }) => (
//   <div className="flex items-center">
//     <CheckCircle className="text-[var(--color-E0AAFF)] h-5 w-5 mr-2" />
//     <span className="text-gray-100">{text}</span>
//   </div>
// );

// export function TestimonialSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative py-4 overflow-hidden bg-[var(--color-10002B)]">
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">
//             The Importance of{" "}
//             <span className="text-[var(--color-7B2CBF)]">AI Agents</span>
//           </h2>
//           <div className="mt-4 flex justify-center">
//             <div className="w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]" />
//           </div>
//         </div>

//         <div className="max-w-4xl mx-auto relative">
//           <div className="overflow-hidden relative h-[350px] md:h-[300px]">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.id}
//                 className="absolute inset-0 transition-opacity duration-500"
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{
//                   opacity: activeIndex === index ? 1 : 0,
//                   scale: activeIndex === index ? 1 : 0.95,
//                 }}
//               >
//                 <Card className="h-full flex flex-col justify-between p-8 md:p-10">
//                   <Quote className="text-[var(--color-E0AAFF)] h-12 w-12 mb-6" />
//                   <p className="text-lg md:text-xl italic mb-6 leading-relaxed text-gray-100">
//                     &ldquo;{testimonial.quote}&rdquo;
//                   </p>
//                   <div className="flex items-center mt-auto">
//                     <Avatar className="mr-4">
//                       <AvatarImage
//                         src={testimonial.avatar}
//                         alt={testimonial.author}
//                       />
//                       <AvatarFallback>{testimonial.initials}</AvatarFallback>
//                     </Avatar>
//                     <div>
//                       <h4 className="font-semibold text-gray-100">
//                         {testimonial.author}
//                       </h4>
//                       <p className="text-sm text-gray-400">
//                         {testimonial.title}, {testimonial.company}
//                       </p>
//                     </div>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>

//           <div className="flex justify-center mt-8">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-3 h-3 rounded-full mx-1 transition-all ${
//                   activeIndex === index
//                     ? "bg-[var(--color-7B2CBF)] scale-125"
//                     : "bg-[var(--color-3C096C)]"
//                 }`}
//                 onClick={() => setActiveIndex(index)}
//                 aria-label={`View testimonial ${index + 1}`}
//               />
//             ))}
//           </div>

//           <div className="mt-16 flex flex-wrap justify-center gap-4 text-[var(--color-C77DFF)]">
//             <FeaturePoint text="99.9% Uptime" />
//             <FeaturePoint text="End-to-end encryption" />
//             <FeaturePoint text="24/7 Support" />
//             <FeaturePoint text="Cost Effective" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/sections/TestimonialCard";
import { FeaturePoint } from "@/sections/FeaturePoint";
import { testimonialsData } from "@/app/Data/testimonialsData";

export const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-4 overflow-hidden bg-[var(--color-10002B)]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            The Importance of{" "}
            <span className="text-[var(--color-7B2CBF)]">AI Agents</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden relative h-[350px] md:h-[300px]">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0 transition-opacity duration-500"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.95,
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${
                  activeIndex === index
                    ? "bg-[var(--color-7B2CBF)] scale-125"
                    : "bg-[var(--color-3C096C)]"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4 text-[var(--color-C77DFF)]">
            <FeaturePoint text="99.9% Uptime" />
            <FeaturePoint text="End-to-end encryption" />
            <FeaturePoint text="24/7 Support" />
            <FeaturePoint text="Cost Effective" />
          </div>
        </div>
      </div>
    </section>
  );
};
