// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { twMerge } from "tailwind-merge";
// import OpenAi from "@/assets/images/openai-logo.png";
// import Gemini from "@/assets/images/google-ai-gemini91216.logowik.com.webp";
// import Anthropic from "@/assets/images/anthropic-icon-logo-png_seeklogo-515014.png";
// import DialogCX from "@/assets/images/logos--dialogflow.svg?url";
// import Rasa from "@/assets/images/simple-icons--rasa.svg?url";
// import Watson from "@/assets/images/watpress.png";
// import AmazonLex from "@/assets/images/amazon-lex-hipaa-compliant.jpg";
// import Botpress from "@/assets/images/botpress.avif";
// import BotFramwork from "@/assets/images/Bot-Framework.png";
// import Twilio from "@/assets/images/devicon--twilio.svg?url";
// import Image from "next/image";

// // Define step LLM providers
// const stepLLMProviders = {
//   build: [
//     {
//       id: "openai",
//       name: "Open AI",
//       description:
//         "Powerful LLMs like GPT-4 and Claude for versatile chatbot creation",
//       features: [
//         "Zero-shot learning capabilities",
//         "Advanced contextual understanding",
//         "Multilingual support",
//         "Content classification",
//       ],
//       useCases: [
//         "Customer support",
//         "Sales assistance",
//         "Technical troubleshooting",
//       ],
//       pricing: "Starting at $0.01/1K tokens",
//       icon: OpenAi,
//       iconAlt: "OpenAI Logo",
//     },
//     {
//       id: "gemini",
//       name: "Gemini",
//       description: `Google's multimodal AI for advanced chatbot experiences`,
//       features: [
//         "Multimodal capabilities",
//         "Advanced reasoning",
//         "Knowledge cutoff: April 2023",
//         "Image understanding",
//       ],
//       useCases: [
//         "Product recommendations",
//         "Visual assistance",
//         "Interactive guides",
//       ],
//       pricing: "Starting at $0.0025/1K tokens",
//       icon: Gemini,
//       iconAlt: "Gemini Logo",
//     },
//     {
//       id: "anthropic",
//       name: "Anthropic",
//       description: "Claude models for safe, helpful, and honest AI assistants",
//       features: [
//         "Constitutional AI approach",
//         "Strong safety capabilities",
//         "Long context windows",
//         "Nuanced understanding",
//       ],
//       useCases: [
//         "Customer service",
//         "Content moderation",
//         "Complex query handling",
//       ],
//       pricing: "Starting at $0.008/1K tokens",
//       icon: Anthropic,
//       iconAlt: "Anthropic Logo",
//     },
//   ],
//   train: [
//     {
//       id: "dialogflow-cx",
//       name: "Dialogflow CX",
//       description:
//         "Enterprise conversation designer with advanced state handling",
//       features: [
//         "Sophisticated state tracking",
//         "Visual flow builder",
//         "Multi-turn conversations",
//         "Enterprise integrations",
//       ],
//       useCases: [
//         "Complex customer journeys",
//         "Omnichannel experiences",
//         "Enterprise support",
//       ],
//       pricing: "Pay-as-you-go, $0.007 per request",
//       icon: DialogCX,
//       iconAlt: "Dialogflow CX Logo",
//     },
//     {
//       id: "rasa",
//       name: "Rasa",
//       description: "Open-source framework for custom conversation experiences",
//       features: [
//         "Open-source core",
//         "Full customization",
//         "On-premise deployment",
//         "NLU training tools",
//       ],
//       useCases: [
//         "Highly customized solutions",
//         "Data-sensitive industries",
//         "On-premise needs",
//       ],
//       pricing: "Open-source (free), Enterprise licensing available",
//       icon: Rasa,
//       iconAlt: "Rasa Logo",
//     },
//     {
//       id: "botpress",
//       name: "Botpress",
//       description: "Developer-friendly conversational AI platform",
//       features: [
//         "Visual flow editor",
//         "Developer tools",
//         "Custom code integration",
//         "Natural language understanding",
//       ],
//       useCases: [
//         "Developer-led projects",
//         "Complex integrations",
//         "Custom business logic",
//       ],
//       pricing: "Free community edition, Pro from $99/month",
//       icon: Botpress,
//       iconAlt: "Botpress Logo",
//     },
//   ],
//   deploy: [
//     {
//       id: "ibm-watson",
//       name: "IBM Watson",
//       description: "Enterprise-grade AI assistant with strong business focus",
//       features: [
//         "Enterprise security",
//         "Industry compliance",
//         "Business process integration",
//         "Analytics dashboard",
//       ],
//       useCases: [
//         "Enterprise support",
//         "Regulated industries",
//         "Complex business processes",
//       ],
//       pricing: "Custom enterprise pricing",
//       icon: Watson,
//       iconAlt: "IBM Watson Logo",
//     },
//     {
//       id: "amazon-lex",
//       name: "Amazon Lex",
//       description:
//         "AWS-powered conversational interfaces with deep cloud integration",
//       features: [
//         "AWS ecosystem integration",
//         "Automatic scaling",
//         "Speech recognition",
//         "Lambda function support",
//       ],
//       useCases: [
//         "Voice assistants",
//         "AWS-based applications",
//         "Speech interfaces",
//       ],
//       pricing: "$0.00075 per request",
//       icon: AmazonLex,
//       iconAlt: "Amazon Lex Logo",
//     },
//     {
//       id: "microsoft-bot-framework",
//       name: "Microsoft Bot Framework",
//       description: "Complete bot development platform with Azure integration",
//       features: [
//         "Azure integration",
//         "Teams/Office 365 support",
//         "Enterprise identity",
//         "Multi-channel publishing",
//       ],
//       useCases: [
//         "Microsoft ecosystem",
//         "Teams bots",
//         "Enterprise collaboration",
//       ],
//       pricing: "Free tier, Standard from $0.50 per 1,000 messages",
//       icon: BotFramwork,
//       iconAlt: "Microsoft Bot Framework Logo",
//     },
//     {
//       id: "twilio",
//       name: "Twilio",
//       description: "Communication channels with programmable messaging",
//       features: [
//         "Omnichannel communication",
//         "SMS, WhatsApp, voice support",
//         "Developer-friendly APIs",
//         "Global reach",
//       ],
//       useCases: ["SMS bots", "WhatsApp business", "Voice assistants"],
//       pricing: "Pay-as-you-go, varies by channel",
//       icon: Twilio,
//       iconAlt: "Twilio Logo",
//     },
//   ],
// };

// // Define steps
// const steps: { id: StepKey; title: string; description: string }[] = [
//   {
//     id: "build",
//     title: "Build",
//     description: "No code chatbot builder",
//   },
//   {
//     id: "train",
//     title: "Train",
//     description: "Effortless, accurate and instant",
//   },
//   {
//     id: "deploy",
//     title: "Deploy",
//     description: "Plug-and-play integrations",
//   },
// ];

// type StepKey = keyof typeof stepLLMProviders;

// interface LLMSelectorProps {
//   className?: string;
// }

// const LLMSelector: React.FC<LLMSelectorProps> = ({ className }) => {
//   const [activeStep, setActiveStep] = useState<StepKey>("build");
//   const [selectedLLM, setSelectedLLM] = useState<string | null>(null);

//   const handleStepChange = (step: StepKey) => {
//     setActiveStep(step);
//     setSelectedLLM(null); // Reset LLM selection when changing steps
//   };

//   const currentLLMProviders = stepLLMProviders[activeStep];

//   return (
//     <section
//       className={twMerge("w-full py-10 px-4 md:px-8 lg:px-12", className)}
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">
//           Everything you need to automate your customer service
//         </h2>

//         <motion.div
//           className="border border-[var(--color-border)] rounded-2xl p-6 md:p-8 shadow-sm bg-[var(--color-card)]"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Steps */}
//           <div className="flex flex-wrap md:flex-nowrap gap-3 mb-8">
//             {steps.map((step) => (
//               <motion.button
//                 key={step.id}
//                 className={twMerge(
//                   "flex-1 rounded-xl p-4 border transition-all duration-300 text-center",
//                   activeStep === step.id
//                     ? "bg-[var(--color-primary)] text-white border-[var(--color-secondary)] shadow-sm"
//                     : "bg-[var(--color-card)] text-[var(--color-text-dark)] border-gray-200 hover:bg-gray-50",
//                 )}
//                 onClick={() => handleStepChange(step.id)}
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <h3 className="font-bold text-xl mb-1">{step.title}</h3>
//                 <p className="text-sm opacity-80 hidden sm:block">
//                   {step.description}
//                 </p>
//               </motion.button>
//             ))}
//           </div>

//           {/* LLM Selection */}
//           <div>
//             <h3 className="text-xl font-bold mb-6 text-[var(--color-text-dark)]">
//               Choose Your LLM or NLP for{" "}
//               {steps.find((s) => s.id === activeStep)?.title}
//             </h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//               {currentLLMProviders.map((provider) => (
//                 <motion.div
//                   key={provider.id}
//                   className={twMerge(
//                     "flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer transition-all",
//                     selectedLLM === provider.id
//                       ? "border-gray-200"
//                       : "border-gray-200",
//                   )}
//                   onClick={() => setSelectedLLM(provider.id)}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <div className="w-12 h-12 flex items-center justify-center mb-2">
//                     <Image
//                       unoptimized={true}
//                       src={provider.icon}
//                       alt={provider.iconAlt}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                   <span className="text-center text-sm font-medium text-[var(--color-text-dark)]">
//                     {provider.name}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default LLMSelector;

// LLMSelector.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { steps, stepLLMProviders } from "@/app/Data/llmData";
import { StepKey } from "@/app/Types/llmTypes";
import { LLMProvider } from "@/app/Types/llmTypes";
import Image from "next/image";

interface LLMSelectorProps {
  className?: string;
}

const LLMSelector: React.FC<LLMSelectorProps> = ({ className }) => {
  const [activeStep, setActiveStep] = useState<StepKey>("build");
  const [selectedLLM, setSelectedLLM] = useState<string | null>(null);

  const handleStepChange = (step: StepKey) => {
    setActiveStep(step);
    setSelectedLLM(null);
  };

  const currentLLMProviders: LLMProvider[] = stepLLMProviders[activeStep];

  return (
    <section
      className={twMerge("w-full py-10 px-4 md:px-8 lg:px-12", className)}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">
          Everything you need to automate your customer service
        </h2>

        <motion.div
          className="border border-[var(--color-border)] rounded-2xl p-6 md:p-8 shadow-sm bg-[var(--color-card)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap md:flex-nowrap gap-3 mb-8">
            {steps.map((step) => (
              <motion.button
                key={step.id}
                className={twMerge(
                  "flex-1 rounded-xl p-4 border transition-all duration-300 text-center",
                  activeStep === step.id
                    ? "bg-[var(--color-primary)] text-white border-[var(--color-secondary)] shadow-sm"
                    : "bg-[var(--color-card)] text-[var(--color-text-dark)] border-gray-200 hover:bg-gray-50",
                )}
                onClick={() => handleStepChange(step.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="font-bold text-xl mb-1">{step.title}</h3>
                <p className="text-sm opacity-80 hidden sm:block">
                  {step.description}
                </p>
              </motion.button>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[var(--color-text-dark)]">
              Choose Your LLM or NLP for{" "}
              {steps.find((s) => s.id === activeStep)?.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {currentLLMProviders.map((provider) => (
                <motion.div
                  key={provider.id}
                  className={twMerge(
                    "flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer transition-all",
                    selectedLLM === provider.id
                      ? "border-gray-200"
                      : "border-gray-200",
                  )}
                  onClick={() => setSelectedLLM(provider.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <Image
                      unoptimized
                      src={provider.icon}
                      alt={provider.iconAlt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-center text-sm font-medium text-[var(--color-text-dark)]">
                    {provider.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LLMSelector;
