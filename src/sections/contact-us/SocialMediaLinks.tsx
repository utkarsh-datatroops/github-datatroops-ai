"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
  faThreads,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  { name: "Twitter", icon: faTwitter, href: "https://x.com/Datatroops_ai" },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    href: "https://www.linkedin.com/company/datatroops-ai",
  },
  {
    name: "Youtube",
    icon: faYoutube,
    href: "https://www.youtube.com/@Datatroops_ai",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    href: "https://www.instagram.com/datatroops.ai",
  },
  {
    name: "Threads",
    icon: faThreads,
    href: "https://www.threads.com/@datatroops.ai",
  },
];

export default function SocialMediaLinks() {
  return (
    <section className="max-w-md mx-auto py-12 px-4 text-center">
      <h3 className="text-2xl font-semibold mb-6 text-white">
        Connect with Us
      </h3>
      <div className="flex justify-center space-x-6">
        {socials.map(({ name, icon, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#7B2CBF] to-[#9D4EDD] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
            aria-label={name}
          >
            <FontAwesomeIcon icon={icon} size="lg" />
          </a>
        ))}
      </div>
    </section>
  );
}
