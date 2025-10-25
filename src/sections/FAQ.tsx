// "use client";

// import { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useInView,
//   useAnimation,
// } from "framer-motion";

// type FAQItemProps = {
//   question: string;
//   answer: string;
// };

// type FAQItemData = {
//   question: string;
//   answer: string;
// };

// export default function FAQ() {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.1 });

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [isInView, controls]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut",
//       },
//     },
//   };

//   const headingVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const faqItems: FAQItemData[] = [
//     {
//       question: "What types of AI solutions do you offer?",
//       answer:
//         "We specialize in building conversational AI assistants, AI-powered automation tools, and intelligent data processing systems tailored for industries such as finance, healthcare, e-commerce, and education.",
//     },
//     {
//       question: "Can your AI integrate with our existing tools?",
//       answer:
//         "Absolutely. Our solutions are designed to integrate seamlessly with popular platforms like CRMs (e.g., Salesforce, HubSpot), ticketing systems, and custom APIs to ensure smooth workflows across your existing tech stack.",
//     },
//     {
//       question: "How long does it take to deploy a custom AI assistant?",
//       answer:
//         "Deployment time varies based on complexity, but most clients go live within 2–4 weeks. We handle everything from data ingestion to training and testing, ensuring minimal effort from your team.",
//     },
//     {
//       question: "Is our data secure with your AI systems?",
//       answer:
//         "Yes. We follow enterprise-grade security protocols, including end-to-end encryption, role-based access control, and full compliance with data protection regulations such as GDPR and HIPAA (where applicable).",
//     },
//     {
//       question: "Do you provide ongoing support and training?",
//       answer:
//         "We offer continuous support, performance monitoring, and training to your internal teams to maximize adoption. Our success team is always ready to help you optimize and scale your AI solutions.",
//     },
//     {
//       question: "Can the AI handle multilingual conversations?",
//       answer:
//         "Yes, our AI assistants support multiple languages out of the box and can be customized for regional dialects or industry-specific terminology to ensure natural and effective communication.",
//     },
//   ];

//   return (
//     <section ref={ref} className="py-16 overflow-hidden">
//       <motion.div
//         className="container mx-auto px-4"
//         initial="hidden"
//         animate={controls}
//         variants={containerVariants}
//       >
//         <motion.div
//           className="flex justify-center mb-6"
//           variants={itemVariants}
//         >
//           <motion.div
//             className="bg-[var(--color-7B2CBF)] rounded-full px-6 py-2 inline-flex items-center"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300, damping: 15 }}
//           >
//             <svg
//               className="w-6 h-6 text-white mr-2"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <span className="text-gray-100 font-medium">FAQ</span>
//           </motion.div>
//         </motion.div>

//         <motion.h2
//           className="text-4xl md:text-6xl font-bold text-white text-center mb-8"
//           variants={headingVariants}
//         >
//           Frequently Asked Questions
//         </motion.h2>

//         <motion.p
//           className="text-xl text-white text-center mb-12 max-w-3xl mx-auto"
//           variants={itemVariants}
//         >
//           Find quick answers to common questions about our AI Scheduling
//           Assistant.
//         </motion.p>

//         <motion.div className="max-w-3xl mx-auto">
//           {faqItems.map((item, index) => (
//             <motion.div key={index} variants={itemVariants}>
//               <FAQItem question={item.question} answer={item.answer} />
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// function FAQItem({ question, answer }: FAQItemProps) {
//   const [isOpen, setIsOpen] = useState(false);

//   const contentVariants = {
//     hidden: {
//       height: 0,
//       opacity: 0,
//       transition: { duration: 0.3, ease: "easeInOut" },
//     },
//     visible: {
//       height: "auto",
//       opacity: 1,
//       transition: { duration: 0.4, ease: "easeInOut" },
//     },
//   };

//   const iconVariants = {
//     closed: { rotate: 0 },
//     open: { rotate: 180, transition: { duration: 0.3, ease: "easeInOut" } },
//   };

//   return (
//     <div className="mb-4 w-full">
//       <motion.button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`flex justify-between items-center w-full p-6 text-left rounded-lg
//           ${isOpen ? "rounded-b-none bg-[var(--color-5A189A)]" : "bg-[var(--color-240046)] bg-opacity-50"}
//           text-white hover:bg-opacity-80 transition-all
//           focus:outline-none focus:ring-2 focus:ring-[var(--color-7B2CBF)]`}
//         whileHover={{ scale: 1.01 }}
//         whileTap={{ scale: 0.99 }}
//         transition={{ type: "spring", stiffness: 300, damping: 17 }}
//       >
//         <h3 className="text-xl md:text-2xl font-medium">{question}</h3>
//         <motion.div
//           className="text-white text-xl flex-shrink-0 ml-4 bg-purple-800 rounded-full w-8 h-8 flex items-center justify-center"
//           animate={isOpen ? "open" : "closed"}
//           variants={iconVariants}
//         >
//           {isOpen ? <MinusIcon /> : <PlusIcon />}
//         </motion.div>
//       </motion.button>

//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.div
//             className="p-6 text-white bg-[var(--color-240046)] bg-opacity-30 rounded-b-lg overflow-hidden"
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             variants={contentVariants}
//           >
//             <p className="text-lg">{answer}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// function PlusIcon() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//       <path
//         d="M10 4V16M4 10H16"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function MinusIcon() {
//   return (
//     <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//       <path
//         d="M4 10H16"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }
