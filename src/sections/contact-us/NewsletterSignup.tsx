"use client";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="max-w-xl mx-auto py-12 px-6 bg-[#18183A]/80 rounded-3xl shadow-lg text-white text-center">
      <h3 className="text-2xl font-semibold mb-4">
        Subscribe to Our Newsletter
      </h3>
      <p className="mb-6 text-white/80">
        Get updates on AI, automation, and exclusive offers.
      </p>
      <form onSubmit={handleSubmit} className="flex max-w-md mx-auto space-x-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow p-3 rounded-full bg-transparent border border-white/40 placeholder-white/70 text-white focus:outline-none focus:border-[#7B2CBF] transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] font-semibold hover:brightness-110 transition"
        >
          {submitted ? "Subscribed!" : "Subscribe"}
        </button>
      </form>
    </section>
  );
}
