// 'use client';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// export default function ContactInfo() {
//   return (
//     <section className="bg-gradient-to-r from-[#10002B] to-[#240046] py-12 text-white px-4">
//       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="text-center p-6 bg-[#18183A]/80 rounded-lg shadow-lg">
//           <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl mb-4" />
//           <h3 className="text-xl font-semibold mb-2">Our Location</h3>
//           <p>DataTroops LLP, E-257, Sector-74, Phase-8B, Mohali, Punjab 140308</p>
//         </div>

//         <div className="text-center p-6 bg-[#18183A]/80 rounded-lg shadow-lg">
//           <FontAwesomeIcon icon={faPhone} className="text-3xl mb-4" />
//           <h3 className="text-xl font-semibold mb-2">Call Us</h3>
//           <p>+91 783 700 3009</p>
//         </div>

//         <div className="text-center p-6 bg-[#18183A]/80 rounded-lg shadow-lg">
//           <FontAwesomeIcon icon={faEnvelope} className="text-3xl mb-4" />
//           <h3 className="text-xl font-semibold mb-2">Email Us</h3>
//           <p>info@datatroops.io</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// Contact Info Component
"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export function ContactInfo() {
  const [hoveredCard, setHoveredCard] = useState<string>("");

  const contactData = [
    {
      id: "location",
      icon: faMapMarkerAlt,
      title: "Our Location",
      content:
        "DataTroops LLP, E-257, Sector-74, Phase-8B, Mohali, Punjab 140308",
      action: "Open in Maps",
      url: "https://maps.google.com/?q=DataTroops+LLP+E-257+Sector-74+Phase-8B+Mohali+Punjab",
    },
    {
      id: "phone",
      icon: faPhone,
      title: "Call Us",
      content: "+91 783 700 3009",
      action: "Call Now",
      url: "tel:+917837003009",
    },
    {
      id: "email",
      icon: faEnvelope,
      title: "Email Us",
      content: "info@datatroops.io",
      action: "Send Email",
      url: "mailto:info@datatroops.io",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#10002B] to-[#0E0020]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactData.map((item) => (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard("")}
            >
              <div
                className={`
                h-full text-center p-8 rounded-xl transition-all duration-300 
                border border-purple-800/30
                ${
                  hoveredCard === item.id
                    ? "bg-gradient-to-br from-[#3C096C]/90 to-[#10002B]/90 shadow-lg shadow-purple-900/20 transform -translate-y-1"
                    : "bg-[#18183A]/60"
                }
              `}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`
                    w-16 h-16 rounded-full flex items-center justify-center mb-4
                    ${
                      hoveredCard === item.id
                        ? "bg-gradient-to-br from-purple-500 to-pink-600"
                        : "bg-[#240046]"
                    }
                  `}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`text-2xl transition-all duration-300 ${hoveredCard === item.id ? "text-white scale-110" : "text-purple-300"}`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/80 mb-6">{item.content}</p>

                  <a
                    href={item.url}
                    className={`
                      mt-auto inline-flex items-center justify-center 
                      py-2 px-4 rounded-full font-medium text-sm
                      transition-all duration-300
                      ${
                        hoveredCard === item.id
                          ? "bg-white text-[#3C096C] shadow-lg shadow-purple-800/20"
                          : "bg-purple-900/40 text-white/90 hover:bg-purple-800/60"
                      }
                    `}
                  >
                    {item.action}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
