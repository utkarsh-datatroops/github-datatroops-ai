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
import DataTroopsLogoUrl from "@/sections/datatroopsLogo.svg?url";
// import { barlowSemiCondensed, inter } from "@/improved-fonts";

// Define message type interface
interface ChatMessage {
  id: number;
  type: "user" | "bot";
  text: string;
  time: string;
}


const WhatHealthAssistAIDoSection: React.FC = () => {
  // Chat messages state with proper typing
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [conversationStarted, setConversationStarted] = useState(false);

  // User input handling
  const [inputValue, setInputValue] = useState("");

  // Function to format current time
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
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  // Function to add a message with proper ID
  const addMessage = (message: Omit<ChatMessage, "id">) => {
    setMessages((prevMessages) => {
      const nextId =
        prevMessages.length > 0
          ? Math.max(...prevMessages.map((m) => m.id)) + 1
          : 1;

      return [...prevMessages, { ...message, id: nextId }];
    });
  };

  // Handle sending a new message
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    addMessage({
      type: "user",
      text: inputValue,
      time: getFormattedDate(),
    });

    // Clear input
    setInputValue("");

    // Show bot typing indicator
    setTimeout(() => {
      setIsTyping(true);

      // Show bot response after delay
      setTimeout(() => {
        setIsTyping(false);
        addMessage({
          type: "bot",
          text: "I've received your message and will process it right away.",
          time: getFormattedDate(),
        });
      }, 2000);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Define demo conversation
  const demoConversation = [
    { type: "user", text: "I want to book an appointment." },
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
      1. Dr. Smith – Tomorrow at 10 AM
      2. Dr. Patel – Tomorrow at 2 PM
      3. Dr. Rao – Friday at 9 AM
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
      text: "Your appointment is booked! You’ll receive a confirmation by email and SMS.",
    },
  ] as const;

  // Start demo conversation
  const startDemoConversation = async () => {
    // Reset messages
    setMessages([]);

    // Function to display messages with delays
    const displayMessagesSequentially = async () => {
      let messageIndex = 0;

      while (messageIndex < demoConversation.length) {
        const message = demoConversation[messageIndex];

        // If message is from bot, show typing indicator first
        if (message.type === "bot") {
          setIsTyping(true);
          // Wait before showing the bot message
          await new Promise((resolve) => setTimeout(resolve, 1500));
          setIsTyping(false);
        }

        // Add the message
        addMessage({
          type: message.type,
          text: message.text,
          time: getFormattedDate(),
        });

        // Wait before showing the next message
        await new Promise((resolve) => setTimeout(resolve, 1000));
        messageIndex++;
      }
    };

    // Start the demo conversation sequence
    displayMessagesSequentially();
  };

  // Set up intersection observer to detect when section is visible
  useEffect(() => {
    if (!conversationStarted && sectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setConversationStarted(true);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.3, // Section needs to be 30% visible to trigger
        },
      );

      observer.observe(sectionRef.current);

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }
  }, [conversationStarted]);

  // Start demo conversation when section becomes visible
  useEffect(() => {
    if (conversationStarted) {
      startDemoConversation();
    }
  }, [conversationStarted]);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const formatTextWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index !== text.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className=""
    >
        {/* Chatbot UI Display */}
        <div className="w-full mx-auto lg:pr-16">
          <div className=" mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Chat Header */}
            <div className="bg-[var(--color-7B2CBF)] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                    <Image
                      unoptimized={true}
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
                {/* <span>FAQ</span> */}
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

            {/* Chat Messages */}
            <div
              ref={chatContainerRef}
              className="p-4 h-96 overflow-y-auto scroll-smooth"
              style={{ scrollBehavior: "smooth" }}
            >
              {!conversationStarted ? (
                <div className="flex items-center justify-center h-full">
                  {/* <p className="text-gray-500 text-center">
                    {window && window.innerWidth <= 768 ? 
                      "Tap to start conversation" : 
                      "Scroll down to view the conversation"}
                  </p> */}
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
                      transition={{ duration: 0.3 }}
                    >
                      {message.type === "user" ? (
                        <>
                          <div className="flex justify-end mb-1">
                            <div className="bg-[var(--color-9D4EDD)] text-white rounded-3xl py-3 px-4 max-w-xs">
                              <p>{message.text}</p>
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
                                {/* <span className="text-xs text-gray-800">Bot</span> */}
                                <Image
                                  unoptimized={true}
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

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  className="flex mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mr-2">
                    <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
                      <Image
                        unoptimized={true}
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

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[var(--color-7B2CBF)] text-black"
                  value={inputValue}
                  disabled={true}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <button
                  className="bg-[var(--color-7B2CBF)] text-white px-4 rounded-r-md flex items-center justify-center"
                  onClick={handleSendMessage}
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
};

export default WhatHealthAssistAIDoSection;
