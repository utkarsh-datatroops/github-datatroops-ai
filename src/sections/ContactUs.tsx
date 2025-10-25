"use client";

import React, { useState } from "react";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"; // Importing the required FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  return (
    <section id="get-in-touch" className="w-full bg-gradient-to-r from-[#10002B] to-[#240046] py-8 md:py-12 lg:py-16 px-4">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#23235B]/80 to-[#7B2CBF]/60 rounded-2xl p-8 border border-white/10 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-white text-xl"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Our Location
                    </h4>
                    <a
                      href="https://www.google.com/maps?q=DataTroops+LLP+E-257+Sector-74+Phase-8B+Industrial+Area+Mohali+Punjab+140308"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 "
                    >
                      DataTroops LLP E-257, <br />
                      4th Floor, Sector-74, <br />
                      Phase-8B Industrial Area, <br />
                      Sahibzada Ajit Singh Nagar <br />
                      (Mohali Punjab 140308)
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-white text-xl"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Phone Numbers
                    </h4>
                    {/* <p className="text-gray-300">
                      Main Office: +91 783 700 3009<br />
                      
                    </p> */}
                    <a href="tel:+917837003009" className="text-gray-300 ">
                      Main Office: +91 783 700 3009
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-white text-xl"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Email Address
                    </h4>
                    <a
                      href="mailto:info@datatroops.io"
                      className="text-gray-300"
                    >
                      info@datatroops.io
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#23235B]/80 to-[#7B2CBF]/60 rounded-2xl p-8 border border-white/10 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Choose Us?
              </h3>
              <p className="text-gray-300">
                We&apos;re committed to providing exceptional service and
                support. Our team is always ready to help you with any questions
                or concerns you may have.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#23235B]/80 to-[#7B2CBF]/60 rounded-2xl p-8 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send us a Message
            </h3>
            <form
              // onSubmit={e => {
              //   e.preventDefault();
              //   setSubmitted(true);
              //   setTimeout(() => setSubmitted(false), 2000);
              // }}
              onSubmit={async (e) => {
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
                      body: JSON.stringify({
                        name,
                        email,
                        message,
                      }),
                    },
                  );

                  if (response.ok) {
                    setSubmitted(true);
                    setName("");
                    setEmail("");
                    setMessage("");
                    setTimeout(() => setSubmitted(false), 3000);
                  } else {
                    const result = await response.json();
                    setError(
                      result.message ||
                        "Something went wrong. Please try again.",
                    );
                  }
                } catch (err) {
                  setError(`Failed to send message. Please try later. ${err}`);
                }
              }}
              className="space-y-6"
            >
              <div>
                <label className="block text-white font-medium mb-2">
                  Full Name*
                </label>
                {/* <input
                  type="text"
                  required
                  className=""
                  placeholder="Enter your full name"
                /> */}
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#18183a]/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7B2CBF] transition-all duration-300" // same styling
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Email Address*
                </label>
                {/* <input
                  type="email"
                  required
                  className=""
                  placeholder="Enter your email address"
                /> */}
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#18183a]/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7B2CBF] transition-all duration-300" // same styling
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Your Message*
                </label>
                {/* <textarea
                  required
                  rows={5}
                  className=""
                  placeholder="Type your message"
                /> */}
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#18183a]/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7B2CBF] transition-all duration-300 resize-none" // same styling
                  placeholder="Type your message"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-lg rounded-lg bg-gradient-to-r from-[#5A189A] to-[#7B2CBF] text-white font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>{submitted ? "Message Sent!" : "Send Message"}</span>
                <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
              </button>
              {error && (
                <p className="text-red-400 text-center mt-2">{error}</p>
              )}
              {submitted && (
                <p className="text-green-400 text-center mt-2">
                  Your message has been sent!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
