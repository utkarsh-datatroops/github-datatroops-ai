import ContactForm from "@/sections/contact-us/ContactForm";
import GoogleMap from "@/sections/contact-us/GoogleMap";
import FAQSection from "@/sections/contact-us/FAQSection";
import SocialMediaLinks from "@/sections/contact-us/SocialMediaLinks";
import { ContactInfo } from "@/sections/contact-us/ContactInfo";
import HeroSection from "@/sections/contact-us/ContactUsHeader";

export const metadata = {
  title: "Contact AI Solution provider | Get in Touch With DataTroops",
  description:
    "Reach out to DataTroops – your trusted AI solutions provider for automation, enterprise AI tools, and intelligent system integration. Let’s build together.",
};

export default function AboutUs() {
  return (
    <>
      <HeroSection />
      <ContactInfo />
      <ContactForm />
      <GoogleMap />
      <FAQSection />
      <SocialMediaLinks />
    </>
  );
}
