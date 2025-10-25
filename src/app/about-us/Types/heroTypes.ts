export interface HeroImage {
    src: string;
    alt: string;
    className: string;
  }
  
  export interface HeroButton {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  }
  
  export interface HeroProps {
    badge?: string;
    title: string;
    subtitle: string;
    images?: HeroImage[];
    buttons?: HeroButton[];
  }
  