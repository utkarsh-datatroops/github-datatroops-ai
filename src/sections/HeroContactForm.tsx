"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [buttonState, setButtonState] = useState<"idle" | "animating" | "done">("idle");
  const [arrowAnimated, setArrowAnimated] = useState(false);

  return (
    <div className="bg-[#3A2A5A]/55 backdrop-blur-sm rounded-3xl p-12 shadow-2xl w-full max-w-xl mx-auto border-2 border-white/20">
      <h3 className="text-white font-bold text-2xl mb-6">
        CONTACT FORM
      </h3>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setSubmitted(false);
          setError(null);
          setButtonState("animating");
          setArrowAnimated(true);

          // Wait for arrow animation before showing check
          setTimeout(async () => {
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
                }
              );

              if (response.ok) {
                setSubmitted(true);
                setName("");
                setEmail("");
                setMessage("");
                setButtonState("done");
                setTimeout(() => {
                  setSubmitted(false);
                  setButtonState("idle");
                  setArrowAnimated(false);
                }, 2000);
              } else {
                const result = await response.json();
                setError(result.message || "Something went wrong.");
                setButtonState("idle");
                setArrowAnimated(false);
              }
            } catch (err) {
              setError(`Failed to send. Please try later. ${err}`);
              setButtonState("idle");
              setArrowAnimated(false);
            }
          }, 400); 
        }}
        className="space-y-5"
      >
        <div>
          <label className="text-white font-medium block mb-2">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Sample Name"
            className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="text-white font-medium block mb-2">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="sample@gmail.com"
            className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="text-white font-medium block mb-2">Description</label>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="(optional)"
            className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={buttonState === "animating" || buttonState === "done"}
          className={`flex items-center gap-3 bg-[#1E90FF] hover:bg-blue-600 text-white font-semibold px-6 py-4 rounded-[32px] text-sm transition-all relative overflow-hidden ${
            buttonState === "animating" || buttonState === "done" ? "cursor-not-allowed opacity-80" : ""
          }`}
          style={{ minWidth: 180 }}
        >
          {/* Arrow icon slides right */}
          <div
            className={`w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-500 absolute left-4 transition-transform duration-1000 ease-in-out
              ${arrowAnimated && buttonState === "animating" ? "translate-x-32" : ""}
              ${buttonState === "done" ? "opacity-0" : "opacity-100"}
            `}
            style={{ zIndex: 2 }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          {/* Checkmark icon appears after arrow slides */}
          <div
            className={`w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-500 absolute left-4 transition-all duration-300
              ${buttonState === "done" ? "opacity-100 scale-100" : "opacity-0 scale-75"}
            `}
            style={{ zIndex: 2 }}
          >
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <span className="ml-12">
            {buttonState === "done" ? "Submitted!" : "Submit Form"}
          </span>
        </button>

        {error && <p className="text-red-300 text-sm mt-2 text-center">{error}</p>}
        {submitted && <p className="text-green-300 text-sm mt-2 text-center">Message sent!</p>}
      </form>
    </div>
  );
}