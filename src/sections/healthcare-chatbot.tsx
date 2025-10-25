"use client";
import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import { X, Send, RefreshCw, RotateCcw } from "lucide-react";
import DataTroopsLogoUrl from "./datatroopsLogo.svg?url";
import ChatbotAvatar from "./chatbot-avatar.svg?url";
import Image from "next/image";

type MessageOption = {
  id: string;
  text: string;
};

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  options?: MessageOption[];
  hideOptions?: boolean;
  timestamp: string;
};

type ChatState = "normal" | "waiting_email" | "waiting_phone";

type ChatSession = {
  sessionId: string;
  messages: Message[];
  chatState: ChatState;
  createdAt: string;
  lastActivity: string;
};

const DataTroopsHealthcareBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isOnline, setIsOnline] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [chatState, setChatState] = useState<ChatState>("normal");
  const [isConnecting, setIsConnecting] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");

  const API_BASE_URL = "https://datatrooops-ai-chatbot.onrender.com";
  // const API_BASE_URL = "http://localhost:5001";

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const generateSessionId = (): string => {
    return `dt_session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const saveSessionToStorage = (session: ChatSession) => {
    try {
      localStorage.setItem("datatroops_chat_session", JSON.stringify(session));
      localStorage.setItem("datatroops_session_id", session.sessionId);
    } catch (error) {
      console.error("Error saving session to localStorage:", error);
    }
  };

  const loadSessionFromStorage = (): ChatSession | null => {
    try {
      const sessionData = localStorage.getItem("datatroops_chat_session");
      if (sessionData) {
        const session = JSON.parse(sessionData);
        const sessionAge = Date.now() - new Date(session.createdAt).getTime();
        const maxAge = 24 * 60 * 60 * 1000;

        if (sessionAge < maxAge) {
          return session;
        } else {
          clearSessionStorage();
        }
      }
    } catch (error) {
      console.error("Error loading session from localStorage:", error);
    }
    return null;
  };

  const clearSessionStorage = () => {
    try {
      localStorage.removeItem("datatroops_chat_session");
      localStorage.removeItem("datatroops_session_id");
    } catch (error) {
      console.error("Error clearing session storage:", error);
    }
  };

  const updateSessionActivity = () => {
    const existingSession = loadSessionFromStorage();
    if (existingSession) {
      existingSession.lastActivity = new Date().toISOString();
      existingSession.messages = messages;
      existingSession.chatState = chatState;
      saveSessionToStorage(existingSession);
    }
  };

  const initializeSession = () => {
    const existingSession = loadSessionFromStorage();

    if (existingSession) {
      setSessionId(existingSession.sessionId);
      setMessages(existingSession.messages);
      setChatState(existingSession.chatState);
    } else {
      const newSessionId = generateSessionId();
      setSessionId(newSessionId);

      const newSession: ChatSession = {
        sessionId: newSessionId,
        messages: [],
        chatState: "normal",
        createdAt: new Date().toISOString(),
        lastActivity: new Date().toISOString(),
      };

      saveSessionToStorage(newSession);
    }
  };

  const resetChatSession = () => {
    clearSessionStorage();

    setMessages([]);
    setChatState("normal");
    setInputValue("");
    setIsTyping(false);

    const newSessionId = generateSessionId();
    setSessionId(newSessionId);

    const newSession: ChatSession = {
      sessionId: newSessionId,
      messages: [],
      chatState: "normal",
      createdAt: new Date().toISOString(),
      lastActivity: new Date().toISOString(),
    };

    saveSessionToStorage(newSession);

    sendResetToBackend(newSessionId);
  };

  const sendResetToBackend = async (newSessionId: string) => {
    try {
      await fetch(`${API_BASE_URL}/reset`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionId: newSessionId }),
      });
    } catch (error) {
      console.error("Error sending reset to backend:", error);
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const linkifyText = (text: string) => {
    const urlPattern = /(https?:\/\/[^\s<>"{}|\\^`[\]]+)/gi;
    const emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;

    return text
      .replace(
        urlPattern,
        '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: #7c3aed; text-decoration: underline; font-weight: 500;" onmouseover="this.style.color=\'#5b21b6\'" onmouseout="this.style.color=\'#7c3aed\'">$1</a>',
      )
      .replace(
        emailPattern,
        '<a href="mailto:$1" style="color: #7c3aed; text-decoration: underline; font-weight: 500;" onmouseover="this.style.color=\'#5b21b6\'" onmouseout="this.style.color=\'#7c3aed\'">$1</a>',
      );
  };

  useEffect(() => {
    initializeSession();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomePopup(true);
      const hideTimer = setTimeout(() => {
        setShowWelcomePopup(false);
      }, 4000);

      return () => clearTimeout(hideTimer);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (messages.length === 0 && sessionId) {
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          const welcomeMessage: Message = {
            id: Date.now(),
            text: "Hi there! Nice to see you 😊 I'm DataTroops AI assistant. How can I help you today?",
            sender: "bot",
            timestamp: getCurrentTime(),
            options: [
              { id: "connect", text: "Connect with team!" },
              { id: "about", text: "Learn about our services." },
            ],
            hideOptions: false,
          };

          setMessages([welcomeMessage]);
          setIsTyping(false);

          // Save to session
          const session: ChatSession = {
            sessionId,
            messages: [welcomeMessage],
            chatState: "normal",
            createdAt: new Date().toISOString(),
            lastActivity: new Date().toISOString(),
          };
          saveSessionToStorage(session);
        }, 1500);
      }, 1000);
    }
  }, [sessionId, messages.length]);

  // Update session when messages or state change
  useEffect(() => {
    if (sessionId && messages.length > 0) {
      updateSessionActivity();
    }
  }, [messages, chatState, sessionId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Check backend status on component mount
  useEffect(() => {
    checkBackendStatus();
  }, []);
  const checkBackendStatus = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/status`);
      if (response.ok) {
        const data = await response.json();
        setIsOnline(data.knowledge_loaded);
      } else {
        setIsOnline(false);
      }
    } catch (error) {
      console.error("Backend connection failed:", error);
      setIsOnline(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const closeWelcomePopup = () => {
    setShowWelcomePopup(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isConnecting) {
      sendMessage();
    }
  };

  const sendMessageToBackend = async (message: string) => {
    try {
      setIsConnecting(true);
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          sessionId: sessionId,
          chatHistory: messages.slice(-10), // Send last 10 messages for context
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error sending message to backend:", error);
      return {
        response:
          "I'm sorry, right now we're offline. Please try again in a moment.",
        state: "normal",
        status: "error",
      };
    } finally {
      setIsConnecting(false);
    }
  };

  const sendMessage = async (text = inputValue) => {
    if (!text.trim() || isConnecting) return;

    const messagesWithHiddenOptions = messages.map((msg) => ({
      ...msg,
      hideOptions: true,
    }));

    const newUserMessage: Message = {
      id: Date.now(),
      text,
      sender: "user",
      timestamp: getCurrentTime(),
    };

    const updatedMessages = [...messagesWithHiddenOptions, newUserMessage];
    setMessages(updatedMessages);
    setInputValue("");
    setIsTyping(true);

    // Hide options from previous messages
    // setMessages((prev) =>
    //   prev.map((msg) => ({ ...msg, hideOptions: true }))
    // );

    // Send message to backend
    const backendResponse = await sendMessageToBackend(text);

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now(),
        text: backendResponse.response,
        sender: "bot",
        timestamp: getCurrentTime(),
        options: backendResponse.options,
        hideOptions: false,
      };

      const finalMessages = [...updatedMessages, botMessage];
      setMessages(finalMessages);
      setChatState(backendResponse.state || "normal");
      setIsTyping(false);
    }, 1000);
  };

  const handleOptionClick = (optionText: string) => {
    // Hide options for the message that was clicked
    // setMessages((prev) =>
    //   prev.map((msg) =>
    //     msg.options && msg.options.some((opt) => opt.text === optionText)
    //       ? { ...msg, hideOptions: true }
    //       : msg
    //   )
    // );

    sendMessage(optionText);
  };

  const formatDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return new Date().toLocaleDateString("en-US", options);
  };

  const getStatusMessage = () => {
    if (!isOnline) {
      return "We're Online";
    }
    if (chatState === "waiting_email") {
      return "Waiting for email address...";
    }
    if (chatState === "waiting_phone") {
      return "Waiting for phone number...";
    }
    return "We're online ...";
  };

  return (
    <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 sm:bottom-4 sm:right-4 z-50 flex flex-col items-end max-h-[calc(100vh-2rem)]">
      {/* Welcome Popup */}
      {showWelcomePopup && !isOpen && (
        <div
          className="mb-4 bg-white rounded-lg shadow-xl border border-gray-200 p-3 sm:p-4 w-72 sm:w-80 relative animate-bounce"
          style={{ animationDuration: "1s", animationIterationCount: "3" }}
        >
          <button
            onClick={closeWelcomePopup}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Close popup"
          >
            <X size={16} />
          </button>
          <div className="flex items-center mb-2">
            <Image
              src={ChatbotAvatar}
              alt="DataTroops AI"
              width={48}
              height={48}
              className="mr-2"
            />
            <span className="font-semibold text-gray-800 text-sm sm:text-base">
              DataTroops AI
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">
            Hi, I&apos;m the DataTroops AI Agent — here to assist you with
            anything related to our services. How can I help you today?
          </p>
        </div>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-[calc(100vw-2rem)] sm:w-96 md:w-[400px] lg:w-[420px] xl:w-[24vw] mb-4 flex flex-col h-[calc(100vh-14rem)] sm:h-[calc(100vh-10rem)] md:h-[75vh] lg:h-[70vh] overflow-hidden max-w-[500px]">
          {/* Chat header */}

          <div className="bg-purple-600 p-3 sm:p-4 border-b flex items-center justify-between">
            <div className="flex items-center min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                <Image
                  unoptimized={true}
                  src={DataTroopsLogoUrl}
                  alt="DataTroops Logo"
                  width={24}
                  height={24}
                  className="sm:w-7 sm:h-7"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-white font-semibold text-sm sm:text-base truncate">
                  DataTroops AI Assistant
                </div>
                <div className="text-xs sm:text-sm text-purple-200">
                  {formatDate()}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={resetChatSession}
                className="text-white mr-2"
                aria-label="Reset chat"
                title="Reset conversation"
              >
                <RotateCcw size={22} />
              </button>
              <button
                onClick={toggleChat}
                className="text-white"
                aria-label="Close chat"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Status bar */}
          <div className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-green-50 text-green-600 border-b flex justify-between items-center">
            <span>{getStatusMessage()}</span>
            {/* <span className="text-xs text-gray-500">Session: {sessionId.slice(-8)}</span> */}
          </div>

          {/* Messages container */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-gray-50 chat-container">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`w-fit max-w-[90%] sm:max-w-[85%] md:max-w-[80%] mb-3 sm:mb-4 ${
                  message.sender === "user" ? "ml-auto" : "mr-auto"
                }`}
              >
                <div
                  className={`p-2 sm:p-3 rounded-lg whitespace-pre-line text-sm sm:text-base break-words ${
                    message.sender === "user"
                      ? "bg-purple-600 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html:
                      message.sender === "bot"
                        ? linkifyText(message.text)
                        : message.text,
                  }}
                />

                {/* Timestamp */}
                <div
                  className={`text-xs mt-1 ${
                    message.sender === "user"
                      ? "text-gray-500 text-right"
                      : "text-gray-500 text-left"
                  }`}
                >
                  {message.timestamp}
                </div>

                {/* Quick reply options */}
                {message.options &&
                  message.options.length > 0 &&
                  !message.hideOptions && (
                    <div className="mt-2 flex flex-wrap gap-1 sm:gap-2">
                      {message.options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleOptionClick(option.text)}
                          disabled={isConnecting}
                          className="bg-white border border-purple-300 text-purple-600 rounded-full px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm hover:bg-purple-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed break-words"
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] mr-auto">
                <div className="bg-gray-200 text-gray-800 p-2 sm:p-3 rounded-lg rounded-bl-none inline-block">
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: "200ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: "400ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="border-t p-1 sm:p-2 bg-white border-gray-200">
            <div className="flex items-center rounded-lg bg-gray-100 px-3 py-2 sm:py-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder={
                  chatState === "waiting_email"
                    ? "Enter your email address..."
                    : chatState === "waiting_phone"
                      ? "Enter your phone number..."
                      : "Type your message..."
                }
                className="flex-1 bg-transparent outline-none text-gray-700 text-sm sm:text-base placeholder:text-xs sm:placeholder:text-sm"
                disabled={isConnecting}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!inputValue.trim() || isConnecting}
                className={`ml-2 p-1 transition-colors ${
                  !inputValue.trim() || isConnecting
                    ? "text-gray-300"
                    : "text-purple-600 hover:text-purple-700"
                }`}
                aria-label="Send message"
              >
                {isConnecting ? (
                  <RefreshCw size={18} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-purple-600 text-center py-2 sm:py-3 border-t">
            <p className="text-white text-xs sm:text-sm">
              Powered by{" "}
              <span className="font-bold">
                <a href="https://datatroops.ai"> DataTroops.ai</a>
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Chat button - Shows avatar only when chat is closed */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className={`flex items-center justify-center w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 rounded-full text-white ${
            isOnline ? "bg-white shadow-lg" : "bg-gray-100 shadow-md"
          } transition-all duration-300 hover:scale-110 relative`}
          aria-label="Open chat"
        >
          <Image
            src={ChatbotAvatar}
            alt="DataTroops Logo"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
          {/* {messages.length > 1 && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          )} */}
        </button>
      )}
    </div>
  );
};

export default DataTroopsHealthcareBot;
