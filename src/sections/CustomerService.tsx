// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faEllipsisVertical,
//   faTimes,
//   faPaperPlane,
// } from "@fortawesome/free-solid-svg-icons";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import DataTroopsLogoUrl from "./datatroopsLogo.svg?url";
// import Tooltip from "@/components/ToolTip";

// interface ChatMessage {
//   id: number;
//   type: "user" | "bot";
//   text: string;
//   time: string;
// }

// const CustomerServiceSection: React.FC = () => {
//   const [messages, setMessages] = useState<ChatMessage[]>([]);
//   const [isTyping, setIsTyping] = useState(false);
//   const chatContainerRef = useRef<HTMLDivElement>(null);
//   const sectionRef = useRef<HTMLElement>(null);
//   const [conversationStarted, setConversationStarted] = useState(false);
//   const [demoRunning, setDemoRunning] = useState(false);

//   const [isMobile, setIsMobile] = useState<boolean | null>(null);
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setIsMobile(window.innerWidth <= 768);
//     }
//   }, []);

//   const [inputValue, setInputValue] = useState("");

//   const [collectingUserInfo, setCollectingUserInfo] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     email: "",
//     phone: "",
//     query: "",
//   });

//   const [emailError, setEmailError] = useState("");
//   const [phoneError, setPhoneError] = useState("");

//   const getFormattedDate = () => {
//     const now = new Date();
//     return now.toLocaleString("en-US", {
//       month: "short",
//       day: "numeric",
//       hour: "numeric",
//       minute: "2-digit",
//       hour12: true,
//     });
//   };

//   const addMessage = (message: Omit<ChatMessage, "id">) => {
//     setMessages((prevMessages) => {
//       const nextId =
//         prevMessages.length > 0
//           ? Math.max(...prevMessages.map((m) => m.id)) + 1
//           : 1;

//       return [...prevMessages, { ...message, id: nextId }];
//     });
//   };

//   const demoConversation = [
//     { type: "user", text: "Hi!" },
//     {
//       type: "bot",
//       text: `Hi,
//       I'm an AI assistant. How can I help you today?`,
//     },
//     { type: "user", text: "I want to book an appointment for myself." },
//     {
//       type: "bot",
//       text: "Sure! What type of doctor do you need? (e.g., General Physician, Dermatologist, etc.)",
//     },
//     { type: "user", text: "I need a general physician." },
//     {
//       type: "bot",
//       text: "Okay, do you have a preferred doctor or should I show you the available ones?",
//     },
//     { type: "user", text: "Show me the available ones." },
//     {
//       type: "bot",
//       text: `Here are 3 options:
//       1. Dr. Verma – Tomorrow at 10 AM
//       2. Dr. Patel – Tomorrow at 2 PM
//       3. Dr. Guleria – Friday at 9 AM
//       Which one works for you?`,
//     },
//     { type: "user", text: "Dr. Patel at 2 PM." },
//     {
//       type: "bot",
//       text: "Great! Booking you with Dr. Patel at 2 PM tomorrow. Please confirm.",
//     },
//     { type: "user", text: "Confirmed." },
//     {
//       type: "bot",
//       text: "Your appointment is booked! You’ll receive a confirmation by SMS and email soon.",
//     },
//   ] as const;

//   const startDemoConversation = async () => {
//     setMessages([]);
//     setDemoRunning(true);

//     const displayMessagesSequentially = async () => {
//       let messageIndex = 0;

//       while (messageIndex < demoConversation.length) {
//         const message = demoConversation[messageIndex];

//         if (message.type === "bot") {
//           setIsTyping(true);
//           await new Promise((resolve) => setTimeout(resolve, 1500));
//           setIsTyping(false);
//         }
//         addMessage({
//           type: message.type,
//           text: message.text,
//           time: getFormattedDate(),
//         });

//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         messageIndex++;
//       }
//     };

//     await displayMessagesSequentially();

//     setDemoRunning(false);
//   };

//   useEffect(() => {
//     if (!conversationStarted && sectionRef.current) {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           const [entry] = entries;
//           if (entry.isIntersecting) {
//             setConversationStarted(true);
//           }
//         },
//         {
//           root: null,
//           rootMargin: "0px",
//           threshold: 0.3,
//         },
//       );

//       observer.observe(sectionRef.current);

//       return () => {
//         if (sectionRef.current) {
//           observer.unobserve(sectionRef.current);
//         }
//       };
//     }
//   }, [conversationStarted]);

//   useEffect(() => {
//     if (conversationStarted) {
//       startDemoConversation();
//     }
//   }, [conversationStarted]);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop =
//         chatContainerRef.current.scrollHeight;
//     }
//   }, [messages, isTyping]);

//   const formatTextWithLineBreaks = (text: string) => {
//     return text.split("\n").map((line, index) => (
//       <span key={index}>
//         {line}
//         {index !== text.split("\n").length - 1 && <br />}
//       </span>
//     ));
//   };

//   // Validation helpers
//   const validateEmail = (email: string) => {
//     if (!email) return true; // optional field
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email.toLowerCase());
//   };

//   const validatePhone = (phone: string) => {
//     if (!phone) return true; // optional field
//     const cleaned = phone.replace(/[\s\-()+]/g, "");
//     const re = /^[0-9]{7,15}$/;
//     return re.test(cleaned);
//   };

//   const onEmailChange = (email: string) => {
//     setUserDetails((prev) => ({ ...prev, email }));
//     if (!validateEmail(email)) {
//       setEmailError("Please enter a valid email address.");
//     } else {
//       setEmailError("");
//     }
//   };

//   const onPhoneChange = (phone: string) => {
//     setUserDetails((prev) => ({ ...prev, phone }));
//     if (!validatePhone(phone)) {
//       setPhoneError("Please enter a valid phone number.");
//     } else {
//       setPhoneError("");
//     }
//   };

//   const canSubmit = () => {
//     const hasContact =
//       userDetails.email.trim() !== "" || userDetails.phone.trim() !== "";
//     return hasContact && !emailError && !phoneError;
//   };

//   const handleSendMessage = () => {
//     if (!inputValue.trim()) return;

//     if (demoRunning || isTyping) return;

//     if (!collectingUserInfo && conversationStarted) {
//       setUserDetails((prev) => ({ ...prev, query: inputValue }));
//       setInputValue("");
//       setCollectingUserInfo(true);
//       return;
//     }
//   };

//   const handleSubmitUserInfo = async () => {
//     if (!canSubmit()) {
//       alert("Please fix errors before submitting.");
//       return;
//     }

//     if (!userDetails.query) {
//       alert("No query found.");
//       return;
//     }

//     const formData = {
//       email: userDetails.email,
//       phone: userDetails.phone,
//       query: userDetails.query,
//     };

//     try {
//       await fetch("https://formsubmit.co/ajax/info@datatroops.io", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       // Add user's details as a message in the chat (format nicely)
//       const userMessageText = `Here are my details:
// Email: ${userDetails.email || "N/A"}
// Phone: ${userDetails.phone || "N/A"}
// Query: ${userDetails.query}`;

//       addMessage({
//         type: "user",
//         text: userMessageText,
//         time: getFormattedDate(),
//       });

//       // Add bot's thank you message
//       addMessage({
//         type: "bot",
//         text: "Thanks for your details! Our team will reach out to you soon to provide the resolution on your query.",
//         time: getFormattedDate(),
//       });

//       setCollectingUserInfo(false);
//       setUserDetails({ email: "", phone: "", query: "" });
//     } catch (error) {
//       console.error("Error sending user info:", error);
//       alert(
//         "There was an error submitting your information. Please try again.",
//       );
//     }
//   };

//   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && !collectingUserInfo) {
//       handleSendMessage();
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
//     >
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white mb-4">
//           {" "}
//           DataTroops.ai Healthcare Assistance
//         </h2>
//         <div className="mt-4 flex justify-center">
//           <div className="w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]" />
//         </div>
//         <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
//           We design and develop AI-powered solutions that automate workflows,
//           uncover insights, and supercharge decision-making. From Generative AI
//           to NLP and Computer Vision, our solutions are tailored to your goals
//           and industry needs.
//         </p>
//       </div>
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
// <div className="w-full lg:w-1/2">
//   <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//     <div className="bg-[var(--color-7B2CBF)] text-white p-4 flex items-center justify-between">
//       <div className="flex items-center gap-2">
//         <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
//         <div className="flex items-center gap-2">
//           <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
//             <Image
//               unoptimized={true}
//               src={DataTroopsLogoUrl}
//               alt="DataTroops Logo"
//               width={24}
//               height={24}
//             />
//           </div>
//           <span className="font-medium">DataTroops.ai Healthcare</span>
//         </div>
//       </div>
//       <div className="flex items-center gap-4">
//         <FontAwesomeIcon
//           icon={faEllipsisVertical}
//           className="h-4 w-4"
//         />
//         <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
//       </div>
//     </div>

//     <div
//       ref={chatContainerRef}
//       className="p-4 h-96 overflow-y-auto scroll-smooth"
//       style={{ scrollBehavior: "smooth" }}
//     >
//       {!conversationStarted ? (
//         <div className="flex items-center justify-center h-full">
//           {isMobile === null ? null : (
//             <p className="text-gray-500 text-center">
//               {isMobile
//                 ? "Tap to start conversation"
//                 : "Scroll down to view the conversation"}
//             </p>
//           )}
//         </div>
//       ) : (
//         <AnimatePresence>
//           {messages.map((message) => (
//             <motion.div
//               key={message.id}
//               className="flex flex-col mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 10 }}
//               transition={{ duration: 0.3 }}
//             >
//               {message.type === "user" ? (
//                 <>
//                   <div className="flex justify-end mb-1">
//                     <div className="bg-[var(--color-9D4EDD)] text-white rounded-3xl py-3 px-4 max-w-xs">
//                       {/* <p>{message.text}</p> */}
//                       <p>{formatTextWithLineBreaks(message.text)}</p>
//                     </div>
//                   </div>
//                   <div className="text-xs text-gray-500 text-right">
//                     {message.time}
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="flex mb-1">
//                     <div className="mr-2">
//                       <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
//                         <Image
//                           unoptimized={true}
//                           src={DataTroopsLogoUrl}
//                           alt="DataTroops Logo"
//                           width={24}
//                           height={24}
//                         />
//                       </div>
//                     </div>
//                     <div className="bg-gray-100 rounded-3xl py-3 px-4 max-w-xs">
//                       <p className="text-gray-800">
//                         {formatTextWithLineBreaks(message.text)}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="text-xs text-gray-500 ml-10">
//                     {message.time}
//                   </div>
//                 </>
//               )}
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       )}

//       {isTyping && (
//         <motion.div
//           className="flex mb-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 10 }}
//           transition={{ duration: 0.3 }}
//         >
//           <div className="mr-2">
//             <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
//               <Image
//                 unoptimized={true}
//                 src={DataTroopsLogoUrl}
//                 alt="DataTroops Logo"
//                 width={24}
//                 height={24}
//               />
//             </div>
//           </div>
//           <div className="bg-gray-100 rounded-3xl py-3 px-4 max-w-xs">
//             <div className="flex space-x-1">
//               <div
//                 className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
//                 style={{ animationDelay: "0ms" }}
//               ></div>
//               <div
//                 className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
//                 style={{ animationDelay: "200ms" }}
//               ></div>
//               <div
//                 className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
//                 style={{ animationDelay: "400ms" }}
//               ></div>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </div>

//    <div className="p-4 border-t border-gray-200">
//        <div className="flex">
//          <input
//            type="text"
//            placeholder="Type your message..."
//           className="flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[var(--color-7B2CBF)] text-black"
//           value={inputValue}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//           disabled={demoRunning || isTyping || collectingUserInfo}
//         />
//         <button
//           className="bg-[var(--color-7B2CBF)] text-white px-4 rounded-r-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
//           onClick={handleSendMessage}
//           disabled={demoRunning || isTyping || collectingUserInfo}
//         >
//           <FontAwesomeIcon icon={faPaperPlane} className="h-5 w-5" />
//         </button>
//       </div>

//       {/* User info collection form */}
//       {collectingUserInfo && (
//         <div className="mt-4 p-4 bg-gray-50 rounded-md text-black">
//           <h3 className="text-lg font-semibold mb-2">
//             Almost done! Please provide your contact info.
//           </h3>
//           <input
//             type="email"
//             placeholder="Your email"
//             className={`w-full p-2 mb-1 border rounded ${
//               emailError ? "border-red-500" : "border-gray-300"
//             }`}
//             value={userDetails.email}
//             onChange={(e) => onEmailChange(e.target.value)}
//           />
//           {emailError && (
//             <p className="text-red-500 text-sm mb-2">{emailError}</p>
//           )}

//           <input
//             type="tel"
//             placeholder="Your phone number"
//             className={`w-full p-2 mb-1 border rounded ${
//               phoneError ? "border-red-500" : "border-gray-300"
//             }`}
//             value={userDetails.phone}
//             onChange={(e) => onPhoneChange(e.target.value)}
//           />
//           {phoneError && (
//             <p className="text-red-500 text-sm mb-2">{phoneError}</p>
//           )}

//           <button
//             className="bg-[var(--color-7B2CBF)] text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
//             onClick={handleSubmitUserInfo}
//             disabled={!canSubmit()}
//           >
//             Submit
//           </button>
//         </div>
//       )}
//     </div>
//   </div>
// </div>

//         <div className="w-full lg:w-1/2 space-y-6">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-gray-100"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Put your customer service on auto-pilot
//           </motion.h2>

//           <motion.p
//             className="text-gray-100"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             Effortlessly resolve repetitive customer queries with our no-code
//             generative AI-powered chatbot that can be fine-tuned on your
//             existing content.
//           </motion.p>

//           <motion.p
//             className="text-gray-100"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Enhance your self-service resolution rate, reduce average handling
//             time and cut down on operational cost with human-like conversations,
//             powered by generative AI.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <Tooltip message="Coming Soon">
//               <button
//                 className="bg-[var(--color-5A189A)] hover:bg-[var(--color-7B2CBF)] text-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
//                 onClick={() =>
//                   !conversationStarted && setConversationStarted(true)
//                 }
//               >
//                 Book a Demo →
//               </button>
//             </Tooltip>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomerServiceSection;

"use client";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faEllipsisVertical,
  faTimes,
  faPaperPlane,
  faBan
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import {
  ChatMessage,
  // DemoMessage,
  CustomerServiceSectionProps,
} from "@/app/Types/customerServiceTypes";

import {
  defaultButtonLink,
  // defaultBotName,
  defaultButtonText,
  defaultDemoConversation,
  defaultDescription1,
  defaultDescription2,
  defaultDescription3,
  defaultLogoUrl,
  defaultSubtitle,
  defaultTitle,
} from "@/app/Data/customerServiceData";
import Link from "next/link";

const CustomerServiceSection: React.FC<CustomerServiceSectionProps> = ({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  description1 = defaultDescription1,
  description2 = defaultDescription2,
  description3 = defaultDescription3,
  buttonText = defaultButtonText,
  buttonLink = defaultButtonLink,
  // logoUrl = defaultLogoUrl,
  // botName = defaultBotName,
  demoConversation = defaultDemoConversation,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [conversationStarted, setConversationStarted] = useState(false);
  const [demoRunning, setDemoRunning] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [collectingUserInfo, setCollectingUserInfo] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    phone: "",
    query: "",
  });
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  const getFormattedDate = () => {
    const now = new Date();
    return now.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const addMessage = (message: Omit<ChatMessage, "id">) => {
    setMessages((prevMessages) => {
      const nextId =
        prevMessages.length > 0
          ? Math.max(...prevMessages.map((m) => m.id)) + 1
          : 1;
      return [...prevMessages, { ...message, id: nextId }];
    });
  };

  const startDemoConversation = async () => {
    setMessages([]);
    setDemoRunning(true);
    for (const message of demoConversation) {
      if (message.type === "bot") {
        setIsTyping(true);
        await new Promise((r) => setTimeout(r, 1500));
        setIsTyping(false);
      }
      addMessage({
        type: message.type,
        text: message.text,
        time: getFormattedDate(),
      });
      await new Promise((r) => setTimeout(r, 1000));
    }
    setDemoRunning(false);
  };

  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  useEffect(() => {
    if (!conversationStarted && sectionRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setConversationStarted(true);
        },
        { threshold: 0.3 },
      );
      observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }
  }, [conversationStarted]);

  useEffect(() => {
    if (conversationStarted) startDemoConversation();
  }, [conversationStarted]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const formatTextWithLineBreaks = (text: string) =>
    text.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        {i !== text.split("\n").length - 1 && <br />}
      </span>
    ));

  const validateEmail = (email: string) =>
    !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) =>
    !phone || /^[0-9]{7,15}$/.test(phone.replace(/[\s\-()+]/g, ""));

  const onEmailChange = (email: string) => {
    setUserDetails((prev) => ({ ...prev, email }));
    setEmailError(
      validateEmail(email) ? "" : "Please enter a valid email address.",
    );
  };
  const onPhoneChange = (phone: string) => {
    setUserDetails((prev) => ({ ...prev, phone }));
    setPhoneError(
      validatePhone(phone) ? "" : "Please enter a valid phone number.",
    );
  };
  const canSubmit = () =>
    (userDetails.email.trim() || userDetails.phone.trim()) &&
    !emailError &&
    !phoneError;

  const handleSendMessage = () => {
    if (!inputValue.trim() || demoRunning || isTyping) return;
    if (!collectingUserInfo && conversationStarted) {
      setUserDetails((prev) => ({ ...prev, query: inputValue }));
      setInputValue("");
      setCollectingUserInfo(true);
    }
  };

  const handleSubmitUserInfo = async () => {
    if (!canSubmit() || !userDetails.query)
      return alert("Please fill valid contact details and query.");

    try {
      await fetch("https://formsubmit.co/ajax/info@datatroops.io", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetails),
      });

      addMessage({
        type: "user",
        text: `Here are my details:\nEmail: ${userDetails.email || "N/A"}\nPhone: ${userDetails.phone || "N/A"}\nQuery: ${userDetails.query}`,
        time: getFormattedDate(),
      });

      addMessage({
        type: "bot",
        text: "Thanks for your details! Our team will reach out to you soon to provide the resolution on your query.",
        time: getFormattedDate(),
      });

      setCollectingUserInfo(false);
      setUserDetails({ email: "", phone: "", query: "" });
    } catch (e) {
      console.error("Error submitting info:", e);
      alert(
        "There was an error submitting your information. Please try again.",
      );
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !collectingUserInfo) {
      handleSendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <section
      ref={sectionRef}
      className="w-full py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <div className="mt-4 flex justify-center">
          <div className="w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]" />
        </div>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">{description1}</p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Chat interface with dynamic props: logoUrl, botName */}
        <div className="w-full lg:w-1/2">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[var(--color-7B2CBF)] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                    <Image
                      unoptimized={true}
                      src={defaultLogoUrl}
                      alt="DataTroops Logo"
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="font-medium">DataTroops.ai Healthcare</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={hoveredIcon === "ellipsis" ? faBan : faEllipsisVertical}
                  className="h-4 w-4 cursor-pointer"
                  onMouseEnter={() => setHoveredIcon("ellipsis")}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
                <FontAwesomeIcon 
                  icon={hoveredIcon === "times" ? faBan : faTimes}
                  className="h-4 w-4 cursor-pointer"
                  onMouseEnter={() => setHoveredIcon("times")}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </div>
            </div>

            <div
              ref={chatContainerRef}
              className="p-4 h-96 overflow-y-auto scroll-smooth"
              style={{ scrollBehavior: "smooth" }}
            >
              {!conversationStarted ? (
                <div className="flex items-center justify-center h-full">
                  {isMobile === null ? null : (
                    <p className="text-gray-500 text-center">
                      {isMobile
                        ? "Tap to start conversation"
                        : "Scroll down to view the conversation"}
                    </p>
                  )}
                </div>
              ) : (
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className="flex flex-col mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {message.type === "user" ? (
                        <>
                          <div className="flex justify-end mb-1">
                            <div className="bg-[var(--color-9D4EDD)] text-white rounded-3xl py-3 px-4 max-w-xs">
                              {/* <p>{message.text}</p> */}
                              <p>{formatTextWithLineBreaks(message.text)}</p>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500 text-right">
                            {message.time}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex mb-1">
                            <div className="mr-2">
                              <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
                                <Image
                                  unoptimized={true}
                                  src={defaultLogoUrl}
                                  alt="DataTroops Logo"
                                  width={24}
                                  height={24}
                                />
                              </div>
                            </div>
                            <div className="bg-gray-100 rounded-3xl py-3 px-4 max-w-xs">
                              <p className="text-gray-800">
                                {formatTextWithLineBreaks(message.text)}
                              </p>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500 ml-10">
                            {message.time}
                          </div>
                        </>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}

              {isTyping && (
                <motion.div
                  className="flex mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mr-2">
                    <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
                      <Image
                        unoptimized={true}
                        src={defaultLogoUrl}
                        alt="DataTroops Logo"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-3xl py-3 px-4 max-w-xs">
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "200ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "400ms" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[var(--color-7B2CBF)] text-black"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  disabled={demoRunning || isTyping || collectingUserInfo}
                />
                <button
                  className="bg-[var(--color-7B2CBF)] text-white px-4 rounded-r-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleSendMessage}
                  disabled={demoRunning || isTyping || collectingUserInfo}
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="h-5 w-5" />
                </button>
              </div>

              {/* User info collection form */}
              {collectingUserInfo && (
                <div className="mt-4 p-4 bg-gray-50 rounded-md text-black">
                  <h3 className="text-lg font-semibold mb-2">
                    Almost done! Please provide your contact info.
                  </h3>
                  <input
                    type="email"
                    placeholder="Your email"
                    className={`w-full p-2 mb-1 border rounded ${
                      emailError ? "border-red-500" : "border-gray-300"
                    }`}
                    value={userDetails.email}
                    onChange={(e) => onEmailChange(e.target.value)}
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mb-2">{emailError}</p>
                  )}

                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className={`w-full p-2 mb-1 border rounded ${
                      phoneError ? "border-red-500" : "border-gray-300"
                    }`}
                    value={userDetails.phone}
                    onChange={(e) => onPhoneChange(e.target.value)}
                  />
                  {phoneError && (
                    <p className="text-red-500 text-sm mb-2">{phoneError}</p>
                  )}

                  <button
                    className="bg-[var(--color-7B2CBF)] text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleSubmitUserInfo}
                    disabled={!canSubmit()}
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {subtitle}
          </motion.h2>
          <motion.p
            className="text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {description2}
          </motion.p>
          <motion.p
            className="text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {description3}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href={buttonLink}>
              <button 
                className="bg-[var(--color-5A189A)] hover:bg-[var(--color-7B2CBF)] text-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
                onClick={() =>
                  !conversationStarted && setConversationStarted(true)
                }
              >
                {buttonText}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomerServiceSection;
