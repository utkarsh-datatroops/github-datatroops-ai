"use client";
import React, { useState } from "react";

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isSubmitDisabled = !name || !email || !message;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@datatroops.io",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        },
      );

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        if (onSuccess) onSuccess();
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError(`Failed to send message. Please try later. ${err}`);
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#10002B] to-[#240046] py-12 px-4 text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-[#18183A]/80 text-white focus:outline-none"
            required
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-[#18183A]/80 text-white focus:outline-none"
            required
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-[#18183A]/80 text-white focus:outline-none h-40"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-[#7B2CBF] hover:bg-[#9D4EDD] rounded-md font-semibold transition-all duration-300"
            disabled={isSubmitDisabled}
            style={{
              opacity: isSubmitDisabled ? 0.5 : 1,
              cursor: isSubmitDisabled ? "not-allowed" : "pointer",
            }}
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </form>
      </div>
    </section>
  );
}
