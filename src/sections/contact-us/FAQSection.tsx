"use client";
import React, { useRef, useState, useEffect, useMemo } from "react";
import { ChevronDown, Search } from "lucide-react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  items: FAQItem[];
}

export interface FAQProps {
  title?: string;
  description?: string;
  categories?: FAQCategory[];
  items?: FAQItem[];
  className?: string;
}

// const faqItems: FAQItem[] = [
//   {
//     id: '1',
//     question: 'How do I get started with our service?',
//     answer:
//       "Getting started is easy! Simply create an account on our website, complete your profile, and you'll be guided through the onboarding process. If you need assistance, our support team is available 24/7 to help you.",
//     category: 'general',
//   },
//   {
//     id: '2',
//     question: 'What payment methods do you accept?',
//     answer:
//       'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Depending on your region, additional payment options may be available at checkout.',
//     category: 'billing',
//   },
//   {
//     id: '3',
//     question: 'How can I cancel my subscription?',
//     answer:
//       'You can cancel your subscription at any time by going to your account settings and selecting "Manage Subscription." Follow the prompts to cancel. Your subscription will remain active until the end of your current billing period.',
//     category: 'billing',
//   },
//   {
//     id: '4',
//     question: 'Is there a mobile app available?',
//     answer:
//       'Yes! We offer mobile apps for both iOS and Android devices. You can download them from the App Store or Google Play Store. Our mobile apps include all the core features of the web version, optimized for on-the-go use.',
//     category: 'general',
//   },
//   {
//     id: '5',
//     question: 'How do I reset my password?',
//     answer:
//       'To reset your password, click the "Forgot Password" link on the login page. Enter your email address, and we\'ll send you instructions on how to create a new password. For security reasons, password reset links expire after 24 hours.',
//     category: 'account',
//   },
//   {
//     id: '6',
//     question: 'Do you offer discounts for annual subscriptions?',
//     answer:
//       'Yes, we offer a 20% discount when you choose an annual subscription compared to the monthly plan. This discount is automatically applied at checkout when you select the annual billing option.',
//     category: 'billing',
//   },
//   {
//     id: '7',
//     question: 'How can I contact customer support?',
//     answer:
//       'Our customer support team is available 24/7 via live chat on our website, email at support@example.com, or by phone at +1-800-123-4567. We typically respond to all inquiries within 1 business day.',
//     category: 'support',
//   },
//   {
//     id: '8',
//     question: 'Is my data secure with your service?',
//     answer:
//       'Absolutely. We use industry-standard encryption and security practices to protect your data. All information is stored on secure servers, and we regularly conduct security audits. We never share your personal information with third parties without your explicit consent.',
//     category: 'privacy',
//   },
// ];

const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "How do I get in touch with your sales team?",
    answer:
      "You can reach our sales team by filling out the contact form on our website or emailing info@datatroops.io We typically respond within one business day to discuss your project needs and how our AI solutions can help.",
    category: "contact",
  },
  {
    id: "2",
    question: "What kind of AI services do you offer?",
    answer:
      "We provide tailored AI solutions including machine learning models, natural language processing, computer vision, and custom AI integrations to help automate and optimize your business workflows.",
    category: "services",
  },
  {
    id: "3",
    question: "How long does it take to get a project started?",
    answer:
      "Once we understand your requirements, we usually kick off the project within 1-2 weeks. Our onboarding process includes a discovery call and detailed proposal tailored to your needs.",
    category: "process",
  },
  {
    id: "4",
    question: "Can I schedule a demo of your AI products?",
    answer:
      "Absolutely! Contact us to schedule a live demo tailored to your use case. Our experts will walk you through the capabilities and how our solutions can integrate with your existing systems.",
    category: "contact",
  },
  {
    id: "5",
    question: "What support options are available after deployment?",
    answer:
      "We offer comprehensive post-deployment support including maintenance, updates, and training to ensure your AI solutions continue to deliver value.",
    category: "support",
  },
  {
    id: "6",
    question:
      "Do you provide custom AI development or only off-the-shelf products?",
    answer:
      "We specialize in custom AI development tailored specifically to your business challenges. While we leverage proven frameworks, every solution is crafted to meet your unique requirements.",
    category: "services",
  },
  {
    id: "7",
    question: "How do you ensure data privacy and security?",
    answer:
      "We follow industry best practices for data encryption, secure cloud hosting, and compliance with regulations like GDPR to protect your data throughout the project lifecycle.",
    category: "security",
  },
  {
    id: "8",
    question: "What is the best way to contact customer support?",
    answer:
      "For support inquiries, please email info@datatroops.io or use the live chat feature on our website. Our team is available Monday to Friday, 9 AM to 6 PM UTC.",
    category: "support",
  },
];

const faqCategories: FAQCategory[] = [
  {
    id: "contact",
    name: "Contact & Sales",
    items: faqItems.filter((item) => item.category === "contact"),
  },
  {
    id: "services",
    name: "Our Services",
    items: faqItems.filter((item) => item.category === "services"),
  },
  {
    id: "process",
    name: "Project Process",
    items: faqItems.filter((item) => item.category === "process"),
  },
  {
    id: "support",
    name: "Support & Maintenance",
    items: faqItems.filter((item) => item.category === "support"),
  },
  {
    id: "security",
    name: "Data Security",
    items: faqItems.filter((item) => item.category === "security"),
  },
];

// const faqCategories: FAQCategory[] = [
//   {
//     id: 'general',
//     name: 'General Questions',
//     items: faqItems.filter((item) => item.category === 'general'),
//   },
//   {
//     id: 'account',
//     name: 'Account Management',
//     items: faqItems.filter((item) => item.category === 'account'),
//   },
//   {
//     id: 'billing',
//     name: 'Billing & Subscriptions',
//     items: faqItems.filter((item) => item.category === 'billing'),
//   },
//   {
//     id: 'support',
//     name: 'Support',
//     items: faqItems.filter((item) => item.category === 'support'),
//   },
//   {
//     id: 'privacy',
//     name: 'Privacy & Security',
//     items: faqItems.filter((item) => item.category === 'privacy'),
//   },
// ];

interface FAQItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [item.answer]);

  return (
    <div
      className="faq-item"
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      <button
        type="button"
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.25rem 0",
          background: "transparent",
          border: "none",
          fontSize: "1.125rem",
          fontWeight: 600,
          color: "var(--color-10002B)",
          cursor: "pointer",
        }}
      >
        <span>{item.question}</span>
        <ChevronDown
          className={`chevron ${isOpen ? "open" : ""}`}
          style={{
            height: "1.25rem",
            width: "1.25rem",
            color: "var(--color-5A189A)",
            transition: "transform 0.3s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      <div
        ref={contentRef}
        className="faq-answer-wrapper"
        style={{
          maxHeight: isOpen ? `${height}px` : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
          color: "var(--color-240046)",
        }}
        aria-hidden={!isOpen}
      >
        <div style={{ paddingBottom: "1.25rem", lineHeight: 1.6 }}>
          {item.answer}
        </div>
      </div>
    </div>
  );
};

interface FAQSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const FAQSearch: React.FC<FAQSearchProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div style={{ position: "relative", marginBottom: "2rem" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "0.75rem",
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
          height: "100%",
        }}
      >
        <Search
          style={{
            height: "1.25rem",
            width: "1.25rem",
            color: "var(--color-7B2CBF)",
          }}
        />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search for answers..."
        aria-label="Search FAQs"
        style={{
          width: "100%",
          padding: "0.75rem 1rem 0.75rem 2.5rem",
          borderRadius: "0.5rem",
          border: "1px solid var(--color-border)",
          fontSize: "1rem",
          color: "var(--color-3C096C)",
          outline: "none",
        }}
        onFocus={(e) => (e.target.style.borderColor = "var(--color-9D4EDD)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
      />
    </div>
  );
};

const FAQSection: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our products and services.",
  categories = faqCategories,
  items = faqItems,
  className = "",
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  const filteredItems = useMemo(() => {
    let filtered = items;

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.question.toLowerCase().includes(term) ||
          item.answer.toLowerCase().includes(term),
      );
    }

    if (activeCategory) {
      filtered = filtered.filter((item) => item.category === activeCategory);
    }

    return filtered;
  }, [items, searchTerm, activeCategory]);

  const displayedCategories =
    searchTerm.trim() === ""
      ? categories
      : categories
          .map((category) => ({
            ...category,
            items: category.items.filter((item) =>
              filteredItems.some((fi) => fi.id === item.id),
            ),
          }))
          .filter((category) => category.items.length > 0);

  const renderFAQItems = (itemsToRender: FAQItem[]) => {
    return itemsToRender.map((item) => (
      <FAQItem
        key={item.id}
        item={item}
        isOpen={openItems.includes(item.id)}
        onToggle={() => toggleItem(item.id)}
      />
    ));
  };

  return (
    <>
      {/* CSS Variables and styles */}
      <style>{`
        :root {
          --color-10002B: #10002B;
          --color-240046: #240046;
          --color-3C096C: #3C096C;
          --color-5A189A: #5A189A;
          --color-7B2CBF: #7B2CBF;
          --color-9D4EDD: #9D4EDD;
          --color-C77DFF: #C77DFF;
          --color-E0AAFF: #E0AAFF;
          --color-border: rgba(229, 231, 235, 0.2); /* Tailwind gray.200 at 20% */
        }
        .faq-item:last-child {
          border-bottom: none;
        }
        button.category-btn {
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s, color 0.2s;
          border: none;
        }
        button.category-btn.active {
          background-color: var(--color-7B2CBF);
          color: white;
        }
        button.category-btn:not(.active) {
          background-color: var(--color-E0AAFF);
          color: var(--color-3C096C);
        }
        button.category-btn:not(.active):hover {
          background-color: var(--color-C77DFF);
          color: white;
        }
      `}</style>

      <section className={`max-w-4xl mx-auto px-4 py-12 ${className}`}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "1rem",
              color: "white",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              color: "white",
              maxWidth: "40rem",
              margin: "0 auto",
              fontSize: "1rem",
              lineHeight: 1.5,
            }}
          >
            {description}
          </p>
        </div>

        <FAQSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {searchTerm.trim() === "" && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "2rem",
              justifyContent: "center",
            }}
          >
            <button
              className={`category-btn ${activeCategory === null ? "active" : ""}`}
              onClick={() => setActiveCategory(null)}
              aria-pressed={activeCategory === null}
              type="button"
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? "active" : ""}`}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
                type="button"
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {(searchTerm.trim() !== "" || activeCategory) && (
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "0.75rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                padding: "1.5rem",
              }}
            >
              {filteredItems.length > 0 ? (
                renderFAQItems(filteredItems)
              ) : (
                <p
                  style={{
                    textAlign: "center",
                    padding: "2rem 0",
                    color: "var(--color-240046)",
                    fontStyle: "italic",
                  }}
                >
                  No results found. Try a different search term.
                </p>
              )}
            </div>
          )}

          {searchTerm.trim() === "" &&
            !activeCategory &&
            displayedCategories.map((category) => (
              <div
                key={category.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "0.75rem",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: "1rem",
                    color: "var(--color-5A189A)",
                  }}
                >
                  {category.name}
                </h3>
                {renderFAQItems(category.items)}
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default FAQSection;
