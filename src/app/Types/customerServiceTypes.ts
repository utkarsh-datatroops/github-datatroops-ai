export interface UserDetails {
  email: string;
  phone: string;
  query: string;
}

export interface ChatMessage {
  id: number;
  type: "user" | "bot";
  text: string;
  time: string;
}

export interface DemoMessage {
  type: "user" | "bot";
  text: string;
}

export interface CustomerServiceSectionProps {
  title?: string;
  subtitle?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  buttonText?: string;
  buttonLink?: string;
  botName?: string;
  logoUrl?: string;
  demoConversation?: DemoMessage[];
}
