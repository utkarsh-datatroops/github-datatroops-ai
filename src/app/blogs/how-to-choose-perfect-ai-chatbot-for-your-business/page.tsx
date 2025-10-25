"use client";

import React, { useState, useEffect, ReactNode } from "react";
import {
  Clock,
  Calendar,
  Twitter,
  Linkedin,
  Share2,
  ArrowUp,
  BookOpen,
  Instagram,
} from "lucide-react";
import blogImage from "./How to choose the perfect AI for your business .png";
import Image from "next/image";
import Link from "next/link";

// Fixed type definitions
interface TableContent {
  headers: { id: number; type: string; content: string }[];
  rows: { id: number; type: string; content: string }[][];
}

interface LinkContent {
  text: string;
  url: string;
}

export interface BlogContentSection {
  id: number;
  type:
    | "h2"
    | "h3"
    | "paragraph"
    | "unordered-list"
    | "image"
    | "table"
    | "link"
    | "bold"
    | "text"
    | string;
  content: string | any[] | ReactNode | TableContent | LinkContent;
  src?: string;
  alt?: string;
  caption?: string;
}

interface TableOfContentItem {
  id: string;
  title: string;
  level: number;
}

interface Author {
  name: string;
  avatar?: string;
  bio?: string;
  role?: string;
}

interface BlogProps {
  category: string;
  readTime: string;
  title: string;
  publishedDate: string;
  heroImage: string;
  heroImageAlt: string;
  content: (BlogContentSection | JSX.Element)[];
  tableOfContents: TableOfContentItem[];
  author?: Author;
  handleShare?: (platform: "twitter" | "facebook" | "linkedin") => void;
  copyToClipboard?: () => void;
  viewCount?: number;
  likeCount?: number;
  commentCount?: number;
}

const Banner = ({
  link,
  title,
  description,
}: {
  link: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="my-12 p-6 sm:p-10 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-lg transform transition-all hover:scale-105">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-12">
        {/* Text Content */}
        <div className="space-y-4 sm:max-w-xl text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-white">
            {title}
          </h2>
          <p className="text-sm sm:text-xl opacity-90">{description}</p>
        </div>

        {/* Button */}
        <Link
          href={link}
          className="mt-6 sm:mt-0 bg-blue-800 hover:bg-white text-white hover:text-blue-800 border-2 border-white py-3 px-8 sm:px-12 rounded-full text-lg font-semibold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

const insertBanners = (
  content: BlogContentSection[],
): (BlogContentSection | JSX.Element)[] => {
  const newContent: (BlogContentSection | JSX.Element)[] = [];
  content.forEach((section, index) => {
    newContent.push(section); // Push the current section

    // Insert the first banner after the second "h2" (for example)
    if (section.type === "h2" && index === 2) {
      newContent.push(
        <Banner
          key="ai-chatbot-banner"
          link="/ai-chatbot"
          title="Discover AI Chatbot Solutions"
          description="Looking to integrate an AI-powered chatbot into your business? Explore our cutting-edge chatbot technology designed to optimize your customer interactions."
        />,
      );
    }

    // Insert the second banner before the FAQ section (for example)
    if (section.type === "h2" && section.content === "FAQs") {
      newContent.push(
        <Banner
          key="technologies-banner"
          link="/technologies"
          title="Explore Our Technologies"
          description="Dive deep into the technologies that power our innovative solutions. Learn more about the tech stack we use to drive results."
        />,
      );
    }
  });
  return newContent;
};

const BlogComponent: React.FC<BlogProps> = ({
  category,
  readTime,
  title,
  publishedDate,
  heroImage,
  heroImageAlt,
  content,
  tableOfContents,
  author,
  handleShare,
  copyToClipboard,
  viewCount = 1247,
  commentCount = 23,
}) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copied, setCopied] = useState(false);

  console.log(author);
  console.log(viewCount);
  console.log(commentCount);

  // Handle scroll to show/hide scroll-to-top button and update active section
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      // Update active section based on scroll position
      const sections = document.querySelectorAll("h2[id], h3[id]");
      let current = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCopyLink = () => {
    if (copyToClipboard) {
      copyToClipboard();
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Render content with proper IDs for navigation
  const renderContent = (section: BlogContentSection | any) => {
    if (React.isValidElement(section)) {
      return section;
    }

    const sectionId = `section-${section.id}`;

    switch (section.type) {
      case "h2":
        return (
          <h2
            key={section.id}
            id={sectionId}
            className="text-3xl font-bold mt-12 mb-6 text-gray-900 scroll-mt-24 border-l-4 border-blue-500 pl-6 bg-gradient-to-r from-blue-50 to-transparent py-4 rounded-r-lg"
          >
            {section.content as string}
          </h2>
        );

      case "h3":
        return (
          <h3
            key={section.id}
            id={sectionId}
            className="text-2xl font-semibold mt-8 mb-4 text-gray-800 scroll-mt-24"
          >
            {section.content as string}
          </h3>
        );

      case "paragraph":
        return (
          <p
            key={section.id}
            className="text-lg text-gray-700 leading-relaxed mb-6 font-light"
          >
            {section.content as string}
          </p>
        );

      case "bold":
        return (
          <span key={section.id} className="font-semibold text-gray-900">
            {section.content as string}
          </span>
        );

      case "text":
        return (
          <span key={section.id} className="text-gray-700">
            {section.content as string}
          </span>
        );

      case "link":
        const linkContent = section.content as LinkContent;
        return (
          <Link
            key={section.id}
            href={linkContent.url}
            className="group inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all duration-300"
            // target="_blank"
            rel="noopener noreferrer"
            aria-label={`Go to ${linkContent.text}`} // Add accessible label
          >
            <span>{linkContent.text}</span>
            <span
              className="ml-1 inline-block transform transition-all duration-300 opacity-70 group-hover:opacity-100"
              aria-hidden="true"
            >
              →{" "}
              {/* You can replace this with an icon like an arrow if preferred */}
            </span>
          </Link>
        );

      case "unordered-list":
        return (
          <ul key={section.id} className="list-none space-y-3 mb-6">
            {Array.isArray(section.content) &&
              section.content.map((item: any, index: number) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    {Array.isArray(item) &&
                      item.map((subItem: any) => (
                        <span key={subItem.id}>
                          {subItem.type === "bold" ? (
                            <strong className="font-semibold text-gray-900">
                              {subItem.content}
                            </strong>
                          ) : (
                            subItem.content
                          )}
                        </span>
                      ))}
                  </span>
                </li>
              ))}
          </ul>
        );

      case "table":
        const tableContent = section.content as TableContent;
        return (
          <div key={section.id} className="my-8 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-50">
                  {tableContent.headers.map((header) => (
                    <th
                      key={header.id}
                      className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900"
                    >
                      {header.content}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableContent.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50">
                    {row.map((cell) => (
                      <td
                        key={cell.id}
                        className={`border border-gray-300 px-4 py-3 ${
                          cell.type === "bold"
                            ? "font-semibold text-gray-900"
                            : "text-gray-700"
                        }`}
                      >
                        {cell.content}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "image":
        return (
          <figure key={section.id} className="my-10">
            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-100">
              <img
                src={section.src || "/api/placeholder/800/400"}
                alt={section.alt || ""}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            {section.caption && (
              <figcaption className="text-sm text-gray-600 mt-4 text-center italic bg-gray-50 p-3 rounded-lg">
                {section.caption}
              </figcaption>
            )}
          </figure>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Enhanced Header Section */}
      <header className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
          <div className="absolute inset-0 bg-black/20"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 lg:px-8">
          {/* Category and Meta Info */}
          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm">
            <span className="rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 font-semibold text-white uppercase tracking-wider border border-white/30">
              {category}
            </span>
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={publishedDate}>
                  {formatDate(publishedDate)}
                </time>
              </div>
            </div>
          </div>

          {/* Enhanced Title */}
          <h1 className="mb-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl max-w-4xl">
            {title}
          </h1>

          {/* Enhanced Social Share and Engagement */}
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {/* Placeholder for like/comment buttons */}
            </div>

            {/* Enhanced Social Share Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleShare && handleShare("twitter")}
                className="group rounded-full bg-white/20 backdrop-blur-sm p-3 text-white transition-all hover:bg-blue-500 hover:scale-110 border border-white/30"
                aria-label="Share on Twitter"
              >
                <Twitter className="h-5 w-5 group-hover:text-white" />
              </button>
              <button
                onClick={() => handleShare && handleShare("facebook")}
                className="group rounded-full bg-white/20 backdrop-blur-sm p-3 text-white transition-all hover:bg-blue-600 hover:scale-110 border border-white/30"
                aria-label="Share on Facebook"
              >
                <Instagram className="h-5 w-5 group-hover:text-white" />
              </button>
              <button
                onClick={() => handleShare && handleShare("linkedin")}
                className="group rounded-full bg-white/20 backdrop-blur-sm p-3 text-white transition-all hover:bg-blue-700 hover:scale-110 border border-white/30"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:text-white" />
              </button>
              <button
                onClick={handleCopyLink}
                className={`group rounded-full p-3 transition-all hover:scale-110 border ${
                  copied
                    ? "bg-green-500 text-white border-green-400"
                    : "bg-white/20 backdrop-blur-sm text-white hover:bg-gray-600 border-white/30"
                }`}
                aria-label="Copy link"
              >
                <Share2 className="h-5 w-5" />
              </button>
              {copied && (
                <span className="text-sm text-green-300 font-medium">
                  Copied!
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 -mt-10 relative z-10 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src={heroImage || "/api/placeholder/1200/600"}
            alt={heroImageAlt}
            layout="responsive"
            width={1200}
            height={600}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>

      {/* Enhanced Main Content */}
      <div className="mx-auto max-w-7xl px-4 mt-16 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Enhanced Table of Contents - Desktop Sidebar */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-8">
              <div className="rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="h-5 w-5" />
                    <h2 className="text-lg font-semibold">Table of Contents</h2>
                  </div>
                </div>
                <nav className="p-6">
                  <ul className="space-y-3">
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`block text-sm transition-all duration-200 hover:text-blue-600 hover:translate-x-2 ${
                            item.level === 1
                              ? "font-semibold text-gray-900"
                              : "ml-4 text-gray-600 font-medium"
                          } ${
                            activeSection === item.id
                              ? "text-blue-600 translate-x-2 font-semibold"
                              : ""
                          }`}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </aside>

          {/* Enhanced Article Content */}
          <main className="lg:col-span-9">
            {/* Mobile Table of Contents */}
            <div className="mb-12 rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden lg:hidden">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5" />
                  <h2 className="text-lg font-semibold">Table of Contents</h2>
                </div>
              </div>
              <nav className="p-6">
                <ul className="space-y-3">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`block text-sm transition-colors hover:text-blue-600 ${
                          item.level === 1
                            ? "font-semibold text-gray-900"
                            : "ml-4 text-gray-600"
                        }`}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Enhanced Content */}
            <article className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  {content.map((section) => renderContent(section))}
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 rounded-full bg-blue-600 p-4 text-white shadow-2xl transition-all hover:bg-blue-700 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

const blogData = {
  blog: {
    content: [
      {
        id: 1,
        type: "h2",
        content: "How To Choose The Perfect AI Chatbot For Your Business",
      },
      {
        id: 2,
        type: "paragraph",
        content: `In the age of digital transformation, AI chatbots are no longer a luxury — they’re a competitive necessity. Whether you're running a startup, an e-commerce store, or a large enterprise, AI chatbots can revolutionize customer service, automate sales, and enhance operational efficiency. But with hundreds of options in the market, how do you choose the perfect AI chatbot for your business? In this blog, we’ll walk you through the essential criteria, use cases, and actionable steps to help you find the AI chatbot that aligns perfectly with your business goals.`,
      },
      {
        id: 3,
        type: "h2",
        content: "Why AI Chatbots Are Game-Changers",
      },
      {
        id: 4,
        type: "paragraph",
        content:
          "Before diving into the selection process, let’s quickly understand why AI chatbots matter:",
      },
      {
        id: 5,
        type: "unordered-list",
        content: [
          [
            { id: 1, type: "bold", content: "24/7 Customer Support" },
            {
              id: 2,
              type: "text",
              content: ": Never miss a customer query again.",
            },
          ],
          [
            { id: 3, type: "bold", content: "Instant Response Time" },
            {
              id: 4,
              type: "text",
              content: ": Boost engagement by eliminating wait times.",
            },
          ],
          [
            { id: 5, type: "bold", content: "Cost-Effective" },
            {
              id: 6,
              type: "text",
              content: ": Reduce the need for large customer service teams.",
            },
          ],
          [
            { id: 7, type: "bold", content: "Data-Driven Insights" },
            {
              id: 8,
              type: "text",
              content: ": Learn about user behavior in real-time.",
            },
          ],
          [
            { id: 9, type: "bold", content: "Scalability" },
            {
              id: 10,
              type: "text",
              content: ": Easily handle thousands of interactions at once.",
            },
          ],
        ],
      },
      {
        id: 6,
        type: "h2",
        content: "1. Define Your Use Case",
      },
      {
        id: 7,
        type: "paragraph",
        content:
          "The first step to choosing an AI chatbot is understanding your business needs. Ask yourself:",
      },
      {
        id: 71,
        type: "unordered-list",
        content: [
          [
            { id: 1, type: "text", content: "Do you want to offer " },
            { id: 2, type: "bold", content: "customer support" },
            { id: 3, type: "text", content: " or handle " },
            { id: 4, type: "bold", content: "sales inquiries" },
            { id: 5, type: "text", content: "?" },
          ],
          [
            {
              id: 6,
              type: "text",
              content: "Will the chatbot be used on your ",
            },
            {
              id: 7,
              type: "bold",
              content: "website, mobile app, or social media",
            },
            { id: 8, type: "text", content: "?" },
          ],
          [
            { id: 9, type: "text", content: "Are you looking for " },
            { id: 10, type: "bold", content: "lead generation" },
            { id: 11, type: "text", content: ", " },
            { id: 12, type: "bold", content: "feedback collection" },
            { id: 13, type: "text", content: ", or " },
            { id: 14, type: "bold", content: "internal automation" },
            { id: 15, type: "text", content: "?" },
          ],
        ],
      },
      {
        id: 8,
        type: "paragraph",
        content: "Examples:",
      },
      {
        id: 81,
        type: "unordered-list",
        content: [
          [
            { id: 1, type: "text", content: "For e-commerce: " },
            {
              id: 2,
              type: "bold",
              content:
                "Cart recovery, product recommendations, order tracking.",
            },
          ],
          [
            { id: 3, type: "text", content: "For SaaS: " },
            {
              id: 4,
              type: "bold",
              content: "Onboarding, FAQ automation, subscription management.",
            },
          ],
          [
            { id: 5, type: "text", content: "For service-based businesses: " },
            {
              id: 6,
              type: "bold",
              content: "Appointment scheduling, consultation booking.",
            },
          ],
        ],
      },
      //       {
      //   id: 9,
      //   type: "paragraph",
      //   content:
      //     "🎯 ",
      // },
      {
        id: 91,
        type: "bold",
        content: "Pro tip",
      },
      {
        id: 92,
        type: "text",
        content:
          ": Write down 3–5 specific goals you want the chatbot to achieve. This will guide your vendor selection process.",
      },
      {
        id: 10,
        type: "h2",
        content: "2. Look for Natural Language Processing (NLP) Capabilities",
      },
      {
        id: 11,
        type: "paragraph",
        content:
          "At the core of a great AI chatbot lies its NLP engine — the technology that understands and processes human language.",
      },
      {
        id: 12,
        type: "unordered-list",
        content: [
          [{ id: 1, type: "bold", content: "Multilingual support" }],
          [{ id: 2, type: "bold", content: "Contextual understanding" }],
          [{ id: 3, type: "bold", content: "Sentiment analysis" }],
          [{ id: 4, type: "bold", content: "Intent recognition" }],
        ],
      },
      {
        id: 13,
        type: "paragraph",
        content:
          "Modern NLP models like OpenAI’s GPT, Google’s Dialogflow, or Rasa NLU offer highly accurate and dynamic conversational experiences.",
      },
      {
        id: 14,
        type: "paragraph",
        content:
          "If your chatbot fails to understand slang, typos, or complex queries — users will leave.",
      },
      {
        id: 15,
        type: "h2",
        content: "3. Prioritize Integration with Your Existing Tools",
      },
      {
        id: 16,
        type: "paragraph",
        content:
          "Your chatbot shouldn’t exist in a silo. Look for a chatbot platform that can integrate easily with your CRM (e.g., HubSpot, Salesforce), email marketing tools (e.g., Mailchimp), and support systems (e.g., Zendesk, Freshdesk).",
      },

      {
        id: 17,
        type: "unordered-list",
        content: [
          [
            { id: 1, type: "bold", content: "Payment gateways" },
            { id: 2, type: "text", content: " (Stripe, Razorpay)" },
          ],
          [
            { id: 3, type: "bold", content: "Google Calendar" },
            { id: 4, type: "text", content: " for appointment scheduling" },
          ],
          [
            { id: 5, type: "bold", content: "Shopify or WooCommerce" },
            { id: 6, type: "text", content: " (for e-commerce businesses)" },
          ],
        ],
      },
      {
        id: 18,
        type: "paragraph",
        content:
          "The more integrations, the more your chatbot becomes a central part of your automation stack.",
      },
      {
        id: 19,
        type: "h2",
        content: "4. Choose Between Rule-Based vs. AI-Powered Chatbots",
      },
      {
        id: 20,
        type: "table",
        content: {
          headers: [
            { id: 1, type: "bold", content: "Type" },
            { id: 2, type: "bold", content: "Description" },
            { id: 3, type: "bold", content: "Best For" },
          ],
          rows: [
            [
              { id: 1, type: "bold", content: "Rule-Based" },
              {
                id: 2,
                type: "text",
                content: "Works on predefined flows and keywords",
              },
              { id: 3, type: "text", content: "Simple FAQs, onboarding" },
            ],
            [
              { id: 4, type: "bold", content: "AI-Powered" },
              {
                id: 5,
                type: "text",
                content: "Learns and adapts based on user input",
              },
              {
                id: 6,
                type: "text",
                content: "Complex queries, dynamic conversations",
              },
            ],
          ],
        },
      },
      {
        id: 21,
        type: "unordered-list",
        content: [
          [
            { id: 1, type: "text", content: "A " },
            { id: 2, type: "bold", content: "restaurant" },
            {
              id: 3,
              type: "text",
              content: " might only need a rule-based bot for bookings.",
            },
          ],
          [
            { id: 4, type: "text", content: "A " },
            { id: 5, type: "bold", content: "fintech startup" },
            {
              id: 6,
              type: "text",
              content:
                " would benefit more from an AI chatbot that handles support tickets or guides users through onboarding flows.",
            },
          ],
        ],
      },
      // {
      //   id: 22,
      //   type: "paragraph",
      //   content: "⚖️ ",
      // },
      {
        id: 221,
        type: "bold",
        content: "Hybrid chatbots",
      },
      {
        id: 222,
        type: "text",
        content: " offer the best of both worlds — rules + AI.",
      },
      {
        id: 23,
        type: "h2",
        content: "5. Evaluate the Bot’s Learning and Training Features",
      },
      {
        id: 24,
        type: "unordered-list",
        content: [
          [
            {
              id: 1,
              type: "bold",
              content: "Easy-to-update intents and entities",
            },
          ],
          [
            {
              id: 2,
              type: "bold",
              content: "Ability to import historical chat data",
            },
          ],
          [
            {
              id: 3,
              type: "bold",
              content: "Learning from failed interactions",
            },
          ],
          [
            {
              id: 4,
              type: "bold",
              content: "Dashboard to track common queries",
            },
          ],
        ],
      },
      {
        id: 25,
        type: "paragraph",
        content:
          "A good AI chatbot should get smarter with every conversation.",
      },
      {
        id: 251,
        type: "bold",
        content: "",
      },
      {
        id: 26,
        type: "h2",
        content: "6. Ensure Multi-Channel Deployment",
      },
      {
        id: 27,
        type: "unordered-list",
        content: [
          [
            { id: 1, type: "text", content: "Your " },
            { id: 2, type: "bold", content: "website" },
          ],
          [{ id: 3, type: "bold", content: "WhatsApp" }],
          [{ id: 4, type: "bold", content: "Facebook Messenger" }],
          [{ id: 5, type: "bold", content: "Instagram" }],
          [{ id: 6, type: "bold", content: "Slack or Microsoft Teams" }],
        ],
      },
      {
        id: 28,
        type: "paragraph",
        content:
          "Choose a chatbot platform that supports omnichannel presence to maintain consistency across all touchpoints.",
      },
      {
        id: 281,
        type: "bold",
        content: "",
      },
      {
        id: 282,
        type: "text",
        content: " ",
      },
      {
        id: 29,
        type: "h2",
        content: "7. Check Scalability and Security",
      },
      {
        id: 30,
        type: "unordered-list",
        content: [
          [
            {
              id: 1,
              type: "text",
              content:
                "How many conversations the platform can handle concurrently",
            },
          ],
          [{ id: 2, type: "text", content: "Uptime guarantees (SLA)" }],
          [
            {
              id: 3,
              type: "text",
              content: "GDPR, CCPA, and HIPAA compliance",
            },
          ],
          [{ id: 4, type: "text", content: "Role-based access controls" }],
        ],
      },
      // {
      //   id: 31,
      //   type: "paragraph",
      //   content: "🔒 ",
      // },
      {
        id: 311,
        type: "bold",
        content: "Security is non-negotiable",
      },
      {
        id: 312,
        type: "text",
        content:
          ", especially if your chatbot handles sensitive customer data.",
      },
      {
        id: 32,
        type: "h2",
        content: "8. Compare Pricing Models",
      },
      {
        id: 33,
        type: "unordered-list",
        content: [
          [{ id: 1, type: "bold", content: "Per chat/session" }],
          [{ id: 2, type: "bold", content: "Per user" }],
          [{ id: 3, type: "bold", content: "Monthly subscription" }],
          [{ id: 4, type: "bold", content: "Enterprise/custom quotes" }],
        ],
      },
      {
        id: 34,
        type: "paragraph",
        content: "Avoid platforms with hidden costs. Check for:",
      },
      {
        id: 341,
        type: "unordered-list",
        content: [
          [
            { id: 1, type: "bold", content: "Free trials" },
            { id: 2, type: "text", content: " or freemium models" },
          ],
          [{ id: 3, type: "bold", content: "Chat history limits" }],
          [
            { id: 4, type: "text", content: "Additional charges for " },
            { id: 5, type: "bold", content: "integrations" },
            { id: 6, type: "text", content: " or " },
            { id: 7, type: "bold", content: "APIs" },
          ],
        ],
      },
      {
        id: 35,
        type: "h2",
        content: "9. Read Reviews & Test Demos",
      },
      {
        id: 36,
        type: "unordered-list",
        content: [
          [
            { id: 1, type: "text", content: "Request a " },
            { id: 2, type: "bold", content: "live demo" },
          ],
          [
            { id: 3, type: "text", content: "Try a " },
            { id: 4, type: "bold", content: "free version or trial" },
          ],
          [
            { id: 5, type: "text", content: "Read " },
            { id: 6, type: "bold", content: "real customer reviews" },
            {
              id: 7,
              type: "text",
              content: " on sites like G2, Capterra, or Trustpilot",
            },
          ],
        ],
      },
      {
        id: 37,
        type: "paragraph",
        content:
          "🙌 Choose platforms with responsive support and strong documentation.",
      },
      // {
      //     id: 38,
      //     type: "h2",
      //     content: "10. Top AI Chatbots to Consider in 2025",
      // },
      // {
      //     id: 39,
      //     type: "unordered-list",
      //     content: [
      //         [
      //             { id: 1, type: "bold", content: "Intercom" },
      //             { id: 2, type: "text", content: " – Best for SaaS startups" },
      //         ],
      //         [
      //             { id: 3, type: "bold", content: "Drift" },
      //             { id: 4, type: "text", content: " – Excellent for sales and lead gen" },
      //         ],
      //         [
      //             { id: 5, type: "bold", content: "Tidio" },
      //             { id: 6, type: "text", content: " – Affordable and easy to integrate" },
      //         ],
      //         [
      //             { id: 7, type: "bold", content: "Freshchat by Freshworks" },
      //             { id: 8, type: "text", content: " – Great for support teams" },
      //         ],
      //         [
      //             { id: 9, type: "bold", content: "ManyChat" },
      //             { id: 10, type: "text", content: " – Ideal for Messenger and Instagram marketing" },
      //         ],
      //         [
      //             { id: 11, type: "bold", content: "Botpress" },
      //             { id: 12, type: "text", content: " – Open-source and developer-friendly" },
      //         ],
      //         [
      //             { id: 13, type: "bold", content: "Yellow.ai" },
      //             { id: 14, type: "text", content: " – Enterprise-grade AI with multilingual NLP" },
      //         ],
      //     ],
      // },
      {
        id: 40,
        type: "h2",
        content: "Final Thoughts",
      },
      {
        id: 41,
        type: "paragraph",
        content:
          "The perfect AI chatbot isn’t the most expensive or the most popular — it’s the one that fits your business needs, scales with you, and improves your customer experience.",
      },
      {
        id: 411,
        type: "bold",
        content: "",
      },
      {
        id: 412,
        type: "paragraph",
        content:
          "Start small, test thoroughly, and invest in a chatbot that aligns with your long-term vision.",
      },
      {
        id: 42,
        type: "paragraph",
        content:
          "💡 Still unsure? At DataTroops.ai, we help businesses implement AI chatbots tailored to their exact needs. ",
      },
      {
        id: 421,
        type: "text",
        content: "",
      },
      {
        id: 422,
        type: "text",
        content: "",
      },
      {
        id: 423,
        type: "link",
        content: {
          text: "Book a free consultation",
          url: "/contact-us",
        },
      },
      {
        id: 43,
        type: "h2",
        content: "FAQs",
      },
      {
        id: 44,
        type: "h3",
        content: "1. How long does it take to implement an AI chatbot?",
      },
      {
        id: 45,
        type: "paragraph",
        content:
          "Usually between a few hours to a few weeks, depending on complexity.",
      },
      {
        id: 46,
        type: "h3",
        content: "2. Can AI chatbots replace human agents completely?",
      },
      {
        id: 47,
        type: "paragraph",
        content:
          "No. The best approach is a hybrid — use AI for repetitive tasks, and human agents for complex queries.",
      },
      {
        id: 48,
        type: "h3",
        content: "3. Do I need coding skills to set up a chatbot?",
      },
      {
        id: 49,
        type: "paragraph",
        content:
          "Not necessarily. Many platforms offer drag-and-drop builders with zero-code options.",
      },
    ],
  },
};

export default function BlogPage() {
  const generateTableOfContents = (
    content: BlogContentSection[],
  ): TableOfContentItem[] => {
    const toc: TableOfContentItem[] = [];

    content.forEach((section) => {
      if (section.type === "h2" || section.type === "h3") {
        const id = `section-${section.id}`;
        toc.push({
          id,
          title: (section.content || "").toString(),
          level: section.type === "h2" ? 1 : 2,
        });
      }
    });

    return toc;
  };

  const handleShare = (platform: "twitter" | "facebook" | "linkedin") => {
    // const url = encodeURIComponent(window.location.href);
    // const title = encodeURIComponent(
    //     "How Voice AI Chatbots Are Revolutionizing Customer Experience",
    // );

    const shareUrls = {
      twitter: `https://x.com/Datatroops_ai`,
      facebook: `https://www.instagram.com/datatroops.ai`,
      linkedin: `https://www.linkedin.com/company/datatroops-ai`,
    };

    window.open(shareUrls[platform], "_blank", "noopener,noreferrer");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <>
      {/* <Navbar/> */}
      <main className="min-h-screen">
        <BlogComponent
          category="Technology"
          readTime="8 min read"
          title="How To Choose The Perfect AI Chatbot For Your Business"
          publishedDate="2025-06-16"
          heroImage={blogImage.src}
          heroImageAlt="How To Choose The Perfect AI Chatbot For Your Business"
          content={insertBanners(blogData.blog.content)}
          tableOfContents={generateTableOfContents(blogData.blog.content)}
          author={{
            name: "Sarah Johnson",
            avatar: "https://randomuser.me/api/portraits/women/66.jpg",
            role: "AI Technology Specialist",
            bio: "Sarah is a leading expert in conversational AI with over 8 years of experience helping businesses implement voice technology solutions. She specializes in natural language processing and customer experience optimization.",
          }}
          handleShare={handleShare}
          copyToClipboard={copyToClipboard}
          viewCount={2847}
          likeCount={156}
          commentCount={42}
        />
      </main>
    </>
  );
}
