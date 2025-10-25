"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faTimes,
  faPaperPlane,
  faRefresh,
  faPaperclip,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import DataTroopsLogoUrl from "./datatroopsLogo.svg?url";

interface ChatMessage {
  id: number;
  type: "user" | "bot";
  text: string;
  time: string;
}

const CustomerServiceChatSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [conversationStarted, setConversationStarted] = useState(false);
  const [demoRunning, setDemoRunning] = useState(false);

  // Use window resize listener to update isMobile dynamically
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [collectingUserInfo, setCollectingUserInfo] = useState(false);

  const [userDetails, setUserDetails] = useState({
    email: "",
    phone: "",
    query: "",
  });

  // Validation functions extracted out
  const validateEmail = useCallback((email: string) => {
    if (!email) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
  }, []);

  const validatePhone = useCallback((phone: string) => {
    if (!phone) return true;
    const cleaned = phone.replace(/[\s\-()+]/g, "");
    return /^[0-9]{7,15}$/.test(cleaned);
  }, []);

  // Use useMemo for validation error strings, recalculated only when input changes
  const emailError = useMemo(() => {
    if (userDetails.email && !validateEmail(userDetails.email)) {
      return "Please enter a valid email address.";
    }
    return "";
  }, [userDetails.email, validateEmail]);

  const phoneError = useMemo(() => {
    if (userDetails.phone && !validatePhone(userDetails.phone)) {
      return "Please enter a valid phone number.";
    }
    return "";
  }, [userDetails.phone, validatePhone]);

  // Memoized canSubmit based on validation
  const canSubmit = useMemo(() => {
    const hasContact =
      userDetails.email.trim() !== "" || userDetails.phone.trim() !== "";
    return hasContact && !emailError && !phoneError;
  }, [userDetails.email, userDetails.phone, emailError, phoneError]);

  const getFormattedDate = useCallback(() => {
    const now = new Date();
    return now.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }, []);

  // Helper to add messages with auto-incremented ID
  const addMessage = useCallback(
    (message: Omit<ChatMessage, "id">) => {
      setMessages((prev) => [
        ...prev,
        {
          ...message,
          id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1,
        },
      ]);
    },
    [setMessages],
  );

  // Demo conversation array
  const demoConversation: { type: "user" | "bot"; text: string }[] = useMemo(
    () => [
      { type: "user", text: "Hi!" },
      {
        type: "bot",
        text: `Hi there,
        I'm an AI assistant. How can I help you today?`,
      },
      { type: "user", text: "I want to book an appointment for myself." },
      {
        type: "bot",
        text: "Sure! What type of doctor do you need? (e.g., General Physician, Dermatologist, etc.)",
      },
      { type: "user", text: "I need a general physician." },
      {
        type: "bot",
        text: "Okay, do you have a preferred doctor or should I show you the available ones?",
      },
      { type: "user", text: "Show me the available ones." },
      {
        type: "bot",
        text: `Here are 3 options:
        1. Dr. Verma – Tomorrow at 10 AM
        2. Dr. Patel – Tomorrow at 2 PM
        3. Dr. Guleria – Friday at 9 AM
        Which one works for you?`,
      },
      { type: "user", text: "Dr. Patel at 2 PM." },
      {
        type: "bot",
        text: "Great! Booking you with Dr. Patel at 2 PM tomorrow. Please confirm.",
      },
      { type: "user", text: "Confirmed." },
      {
        type: "bot",
        text: "Your appointment is booked! You’ll receive a confirmation by SMS and email soon.",
      },
    ],
    [],
  );

  // Display demo messages sequentially with async/await
  // const startDemoConversation = useCallback(async () => {
  //   setMessages([]);
  //   setDemoRunning(true);

  //   for (const message of demoConversation) {
  //     if (message.type === "bot") {
  //       setIsTyping(true);
  //       await new Promise((r) => setTimeout(r, 1500));
  //       setIsTyping(false);
  //     }
  //     addMessage({
  //       type: message.type,
  //       text: message.text,
  //       time: getFormattedDate(),
  //     });
  //     await new Promise((r) => setTimeout(r, 1000));
  //   }

  //   setDemoRunning(false);
  // }, [addMessage, demoConversation, getFormattedDate]);

  // const isCancelledRef = useRef(false);
  const demoInstanceRef = useRef(0);

  const startDemoConversation = useCallback(async () => {
    demoInstanceRef.current += 1;
    const currentInstance = demoInstanceRef.current;

    setMessages([]);
    setDemoRunning(true);
    setIsTyping(false);

    for (const message of demoConversation) {
      if (demoInstanceRef.current !== currentInstance) {
        // A new demo started or cancelled — stop this one
        break;
      }

      if (message.type === "bot") {
        setIsTyping(true);
        await new Promise((r) => setTimeout(r, 1500));
        if (demoInstanceRef.current !== currentInstance) break;
        setIsTyping(false);
      }

      if (demoInstanceRef.current !== currentInstance) break;

      addMessage({
        type: message.type,
        text: message.text,
        time: getFormattedDate(),
      });

      await new Promise((r) => setTimeout(r, 1000));
    }

    if (demoInstanceRef.current === currentInstance) {
      setDemoRunning(false);
      setIsTyping(false);
    }
  }, [addMessage, demoConversation, getFormattedDate]);

  // Intersection observer to start conversation once visible
  useEffect(() => {
    if (conversationStarted || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setConversationStarted(true);
      },
      { root: null, rootMargin: "0px", threshold: 0.3 },
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [conversationStarted]);

  useEffect(() => {
    if (conversationStarted) {
      startDemoConversation();
    }
  }, [conversationStarted, startDemoConversation]);

  // Auto-scroll chat to bottom when messages or typing changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Format text with line breaks for display
  const formatTextWithLineBreaks = useCallback((text: string) => {
    return text.split("\n").map((line, idx) => (
      <span key={idx}>
        {line}
        {idx < text.split("\n").length - 1 && <br />}
      </span>
    ));
  }, []);

  // Handlers for user input changes and validations
  const onEmailChange = useCallback(
    (email: string) => setUserDetails((prev) => ({ ...prev, email })),
    [],
  );
  const onPhoneChange = useCallback(
    (phone: string) => setUserDetails((prev) => ({ ...prev, phone })),
    [],
  );

  // Sending user query input triggers info collection state
  const handleSendMessage = useCallback(() => {
    if (!inputValue.trim() || demoRunning || isTyping || collectingUserInfo)
      return;

    if (!collectingUserInfo && conversationStarted) {
      setUserDetails((prev) => ({ ...prev, query: inputValue.trim() }));
      setInputValue("");
      setCollectingUserInfo(true);
    }
  }, [
    inputValue,
    demoRunning,
    isTyping,
    collectingUserInfo,
    conversationStarted,
  ]);

  // Submit user info to backend and show confirmation
  const handleSubmitUserInfo = useCallback(async () => {
    if (!canSubmit) {
      alert("Please fix errors before submitting.");
      return;
    }

    if (!userDetails.query) {
      alert("No query found.");
      return;
    }

    const formData = {
      email: userDetails.email,
      phone: userDetails.phone,
      query: userDetails.query,
    };

    try {
      await fetch("https://formsubmit.co/ajax/info@datatroops.io", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      addMessage({
        type: "user",
        text: `Here are my details:
Email: ${userDetails.email || "N/A"}
Phone: ${userDetails.phone || "N/A"}
Query: ${userDetails.query}`,
        time: getFormattedDate(),
      });

      addMessage({
        type: "bot",
        text: "Thanks for your details! Our team will reach out to you soon to provide the resolution on your query.",
        time: getFormattedDate(),
      });

      setCollectingUserInfo(false);
      setUserDetails({ email: "", phone: "", query: "" });
    } catch (error) {
      console.error("Error sending user info:", error);
      alert(
        "There was an error submitting your information. Please try again.",
      );
    }
  }, [canSubmit, userDetails, addMessage, getFormattedDate]);

  // Keyboard enter to send message only if not collecting info
  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !collectingUserInfo) {
        handleSendMessage();
      }
    },
    [handleSendMessage, collectingUserInfo],
  );

  // Input change updates the inputValue state
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [],
  );

  const handleRefreshChat = useCallback(() => {
    // Increment instance ID to cancel any ongoing demo
    demoInstanceRef.current += 1;

    setMessages([]);
    setIsTyping(false);
    setDemoRunning(false);
    setCollectingUserInfo(false);
    setUserDetails({ email: "", phone: "", query: "" });
    setInputValue("");
    setConversationStarted(true);

    startDemoConversation();
  }, [startDemoConversation]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-[var(--color-7B2CBF)] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                  <Image
                    unoptimized
                    src={DataTroopsLogoUrl}
                    alt="DataTroops Logo"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="font-medium">DataTroops.ai Healthcare</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* <FontAwesomeIcon icon={faEllipsisVertical} className="h-4 w-4" /> */}
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                onClick={handleRefreshChat}
                icon={faRefresh}
                className="h-4 w-4"
              />
              <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
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
                                unoptimized
                                src={DataTroopsLogoUrl}
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
                      unoptimized
                      src={DataTroopsLogoUrl}
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
              <button
                className="md:flex lg:flex xl:flex bg-[var(--color-7B2CBF)] text-white px-4 mr-1 hidden items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                // onClick={handleSendMessage}
                disabled={true}
              >
                <FontAwesomeIcon icon={faPaperclip} className="h-5 w-5" />
              </button>
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
                className="md:flex lg:flex xl:flex bg-[var(--color-7B2CBF)] text-white px-4 mx-1  hidden items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={true}
              >
                <FontAwesomeIcon icon={faMicrophone} className="h-5 w-5" />
              </button>
              <button
                className="bg-[var(--color-7B2CBF)] text-white px-4 rounded-r-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleSendMessage}
                disabled={demoRunning || isTyping || collectingUserInfo}
              >
                <FontAwesomeIcon icon={faPaperPlane} className="h-5 w-5" />
              </button>
            </div>

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
                  disabled={!canSubmit}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerServiceChatSection;
