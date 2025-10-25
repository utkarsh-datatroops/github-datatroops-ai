import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import { Testimonial } from "@/app/Types/testimonialsTypes";

interface Props {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<Props> = ({ testimonial }) => (
  <div className="rounded-xl border border-[var(--color-7B2CBF)] bg-[var(--color-10002B)] text-white shadow-lg h-full flex flex-col justify-between p-8 md:p-10">
    <Quote className="text-[var(--color-E0AAFF)] h-12 w-12 mb-6" />
    <p className="text-lg md:text-xl italic mb-6 leading-relaxed text-gray-100">
      &ldquo;{testimonial.quote}&rdquo;
    </p>
    <div className="flex items-center mt-auto">
      <Avatar className="mr-4">
        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
        <AvatarFallback>{testimonial.initials}</AvatarFallback>
      </Avatar>
      <div>
        <h4 className="font-semibold text-gray-100">{testimonial.author}</h4>
        <p className="text-sm text-gray-400">
          {testimonial.title}, {testimonial.company}
        </p>
      </div>
    </div>
  </div>
);
