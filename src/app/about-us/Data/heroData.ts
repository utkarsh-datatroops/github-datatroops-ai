import { HeroProps } from "../Types/heroTypes";

export const heroData: HeroProps = {
  badge: "🚀 AI for the Future",
  title: "About us: AI Solutions Company",
  subtitle:
    "We build smart, scalable AI solutions that transform businesses — automating operations, elevating insights, and unlocking new possibilities across every industry.",
  images: [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80",
      alt: "AI 1",
      className:
        "top-10 left-10 w-24 h-24 rounded-xl shadow-2xl opacity-60 rotate-12 blur-sm",
    },
    {
      src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80",
      alt: "AI 2",
      className:
        "bottom-16 left-1/4 w-20 h-20 rounded-full shadow-xl opacity-50 -rotate-6 blur-[2px]",
    },
    {
        src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80",
        alt: "AI 3",
        className: 
            "top-20 right-16 w-28 h-16 object-cover rounded-2xl shadow-xl opacity-50 rotate-3 blur-[1px] z-20"
    },
    {
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=80",
        alt: "AI 4",
        className: 
            "bottom-10 right-10 w-16 h-16 object-cover rounded-lg shadow-xl opacity-40 -rotate-12 blur-[2px] z-20"
    },
  ],
  buttons: [
    { label: "Home", href: "/", variant: "primary" },
    { label: "Contact-us", href: "/contact-us", variant: "secondary" },
  ],
};
