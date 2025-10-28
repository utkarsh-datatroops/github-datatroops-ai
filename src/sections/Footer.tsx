"use client";

import {
  faInstagram,
  faLinkedin,
  faThreads,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#10002B] to-[#240046] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">
              DataTroops.ai
            </h3>
            <p className="text-gray-300">
              Empowering businesses with cutting-edge AI solutions and
              innovative technology services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/Datatroops_ai"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/datatroops-ai"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/datatroops.ai"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              </a>

              <a
                href="https://www.threads.com/@datatroops.ai"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faThreads} className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@Datatroops_ai"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Technologies
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-chatbot"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  AI ChatBot
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/generative-ai"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Generative AI
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors cursor-default pointer-events-none select-none"
                >
                  Bespoke AI Systems
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors cursor-default pointer-events-none select-none"
                >
                  Advanced Data Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors cursor-default pointer-events-none select-none"
                >
                  Cloud AI Integration
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors cursor-default pointer-events-none select-none"
                >
                  Strategic AI Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-[#7B2CBF] mt-1"
                />
                <span className="text-gray-300">
                  DataTroops LLP E-257, 4th Floor, Sector-74, Phase-8B
                  Industrial Area, Sahibzada Ajit Singh Nagar (Mohali Punjab
                  140308)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#7B2CBF] mt-1"
                />
                <span className="text-gray-300">+91 783 700 3009</span>
              </li>
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-[#7B2CBF] mt-1"
                />
                <span className="text-gray-300">info@datatroops.io</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} DataTroops. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
