// /data/llmSelectorData.ts
import OpenAi from "@/assets/images/openai-logo.png";
import Gemini from "@/assets/images/google-ai-gemini91216.logowik.com.webp";
import Anthropic from "@/assets/images/anthropic-icon-logo-png_seeklogo-515014.png";
import DialogCX from "@/assets/images/logos--dialogflow.svg?url";
import Rasa from "@/assets/images/simple-icons--rasa.svg?url";
import Botpress from "@/assets/images/botpress.avif";
import Watson from "@/assets/images/watpress.png";
import AmazonLex from "@/assets/images/amazon-lex-hipaa-compliant.jpg";
import BotFramwork from "@/assets/images/Bot-Framework.png";
import Twilio from "@/assets/images/devicon--twilio.svg?url";
import { StepKey, Step, LLMProvider } from "@/app/Types/llmTypes";

export const stepLLMProviders: Record<StepKey, LLMProvider[]> = {
  build: [
    {
      id: "openai",
      name: "Open AI",
      icon: OpenAi,
      iconAlt: "OpenAI Logo",
    },
    {
      id: "gemini",
      name: "Gemini",
      icon: Gemini,
      iconAlt: "Gemini Logo",
    },
    {
      id: "anthropic",
      name: "Anthropic",
      icon: Anthropic,
      iconAlt: "Anthropic Logo",
    },
  ],
  train: [
    {
      id: "dialogflow-cx",
      name: "Dialogflow CX",
      icon: DialogCX,
      iconAlt: "Dialogflow CX Logo",
    },
    {
      id: "rasa",
      name: "Rasa",
      icon: Rasa,
      iconAlt: "Rasa Logo",
    },
    {
      id: "botpress",
      name: "Botpress",
      icon: Botpress,
      iconAlt: "Botpress Logo",
    },
  ],
  deploy: [
    {
      id: "ibm-watson",
      name: "IBM Watson",
      icon: Watson,
      iconAlt: "Watson Logo",
    },
    {
      id: "amazon-lex",
      name: "Amazon Lex",
      icon: AmazonLex,
      iconAlt: "Amazon Lex Logo",
    },
    {
      id: "microsoft-bot-framework",
      name: "Microsoft Bot Framework",
      icon: BotFramwork,
      iconAlt: "MS Bot Framework Logo",
    },
    {
      id: "twilio",
      name: "Twilio",
      icon: Twilio,
      iconAlt: "Twilio Logo",
    },
  ],
};

export const steps: Step[] = [
  { id: "build", title: "Build", description: "No code chatbot builder" },
  {
    id: "train",
    title: "Train",
    description: "Effortless, accurate and instant",
  },
  { id: "deploy", title: "Deploy", description: "Plug-and-play integrations" },
];
