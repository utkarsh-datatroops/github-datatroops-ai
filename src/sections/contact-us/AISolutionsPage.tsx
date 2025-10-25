// // pages/ai-solutions.tsx
// import { NextPage } from "next";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import {
//   FaHeartbeat,
//   FaIndustry,
//   FaRobot,
//   FaStethoscope,
//   FaWarehouse,
//   FaShoppingCart,
//   FaArrowRight,
//   FaQuoteLeft,
//   FaQuoteRight,
// } from "react-icons/fa";

// const useCases = [
//   {
//     icon: <FaStethoscope size={28} />,
//     title: "Healthcare",
//     description:
//       "Enhance patient engagement, automate appointment scheduling, and provide instant health advice.",
//   },
//   {
//     icon: <FaShoppingCart size={28} />,
//     title: "Retail",
//     description:
//       "Offer personalized shopping assistance, product recommendations, and streamline customer support.",
//   },
//   {
//     icon: <FaWarehouse size={28} />,
//     title: "Supply Chain",
//     description:
//       "Automate order tracking, inventory management, and supplier communication.",
//   },
//   {
//     icon: <FaIndustry size={28} />,
//     title: "Manufacturing",
//     description:
//       "Support maintenance scheduling, real-time production monitoring, and safety protocol guidance.",
//   },
//   {
//     icon: <FaRobot size={28} />,
//     title: "Tech & Customer Support",
//     description:
//       "Resolve technical queries instantly and provide 24/7 automated customer support.",
//   },
// ];

// const benefits = [
//   {
//     title: "Customizable AI Models",
//     desc: "Tailored solutions to fit your unique business requirements.",
//   },
//   {
//     title: "Seamless Integration",
//     desc: "Plug and play with your existing infrastructure effortlessly.",
//   },
//   {
//     title: "Scalable & Reliable",
//     desc: "Grow confidently with infrastructure built to scale with you.",
//   },
//   {
//     title: "Data Security",
//     desc: "Built-in compliance with HIPAA and industry regulations.",
//   },
//   {
//     title: "24/7 Support",
//     desc: "Always-on expert help to keep your AI running smoothly.",
//   },
// ];

// const testimonials = [
//   {
//     quote:
//       "The healthcare AI chatbot drastically improved our patient interaction and saved countless hours for our staff.",
//     author: "Dr. Susan Lee, Clinic Director",
//   },
//   {
//     quote:
//       "Implementing Datatroops AI solutions transformed our customer service experience overnight.",
//     author: "Michael Chen, Retail Manager",
//   },
//   {
//     quote:
//       "Their AI products are robust and easy to integrate. Highly recommended!",
//     author: "Anita Sharma, CTO",
//   },
// ];

// const AiSolutionsPage: NextPage = () => {
//   const [testiIndex, setTestiIndex] = useState(0);

//   const nextTestimonial = () => {
//     setTestiIndex((prev) => (prev + 1) % testimonials.length);
//   };
//   const prevTestimonial = () => {
//     setTestiIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100 px-6 py-16 sm:py-24 flex flex-col items-center space-y-28 max-w-7xl mx-auto">
//       {/* Hero */}
//       <section className="relative w-full max-w-6xl flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
//         {/* Background shapes */}
//         <motion.div
//           className="absolute -top-40 -left-40 w-[300px] h-[300px] bg-indigo-300 rounded-full opacity-30 blur-3xl pointer-events-none"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-indigo-400 rounded-full opacity-20 blur-3xl pointer-events-none"
//           animate={{ rotate: -360 }}
//           transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
//         />

//         {/* Text */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="flex-1 max-w-xl"
//         >
//           <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-indigo-900 mb-6 tracking-tight">
//             Next-Gen AI Solutions <br /> That Transform Industries
//           </h1>
//           <p className="text-indigo-700 text-lg sm:text-xl mb-8 leading-relaxed">
//             Unlock your business potential with our innovative AI products built
//             to automate, assist, and scale intelligently across domains.
//           </p>
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 text-white font-semibold shadow-lg hover:from-indigo-700 hover:to-indigo-500 transition"
//           >
//             Get Started <FaArrowRight />
//           </a>
//         </motion.div>

//         {/* Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="flex-1 max-w-lg w-full relative"
//         >
//           <img
//             src="/ai-healthcare-chatbot.svg"
//             alt="Healthcare AI Chatbot Illustration"
//             className="w-full rounded-3xl shadow-2xl hover:scale-105 transition-transform"
//             loading="lazy"
//           />
//           <motion.div
//             animate={{ y: [0, -20, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute -bottom-8 left-10 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold select-none cursor-default"
//           >
//             Healthcare AI Chatbot
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Featured Product */}
//       <section className="w-full max-w-6xl">
//         <h2 className="text-4xl font-extrabold text-indigo-900 text-center mb-12">
//           Featured Product
//         </h2>
//         <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 grid md:grid-cols-2 gap-12">
//           <motion.div
//             initial={{ x: -50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="flex flex-col justify-center"
//           >
//             <h3 className="text-3xl font-bold mb-6 text-indigo-700 flex items-center gap-3">
//               <FaHeartbeat size={36} /> Healthcare AI Chatbot
//             </h3>
//             <p className="text-gray-700 mb-6 leading-relaxed">
//               Our AI-powered chatbot is tailored for healthcare providers to
//               automate patient interactions, provide real-time symptom checking,
//               schedule appointments, and ensure secure HIPAA-compliant
//               communications.
//             </p>
//             <ul className="list-disc pl-5 space-y-2 text-gray-600">
//               <li>24/7 patient engagement & support</li>
//               <li>Preliminary diagnosis assistance</li>
//               <li>Automated appointment scheduling & reminders</li>
//               <li>HIPAA-compliant secure communication</li>
//             </ul>
//           </motion.div>
//           <motion.div
//             initial={{ x: 50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <img
//               src="/ai-healthcare-chatbot-2.svg"
//               alt="Chatbot product illustration"
//               className="rounded-3xl shadow-2xl w-full"
//               loading="lazy"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Use Cases */}
//       <section className="w-full max-w-7xl px-4 sm:px-0">
//         <h2 className="text-4xl font-extrabold text-indigo-900 text-center mb-12">
//           Use Cases Across Industries
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {useCases.map(({ icon, title, description }) => (
//             <motion.div
//               key={title}
//               whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(99,102,241,0.3)" }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center cursor-pointer select-none"
//             >
//               <div className="text-indigo-600 mb-4">{icon}</div>
//               <h4 className="text-xl font-semibold mb-2">{title}</h4>
//               <p className="text-gray-600">{description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Benefits Timeline */}
//       <section className="w-full max-w-4xl">
//         <h2 className="text-4xl font-extrabold text-indigo-900 text-center mb-12">
//           Why Choose Us?
//         </h2>
//         <div className="relative before:absolute before:left-1/2 before:top-10 before:-translate-x-1/2 before:h-[calc(100%-80px)] before:w-1 before:bg-indigo-300">
//           <ul className="flex flex-col space-y-14">
//             {benefits.map(({ title, desc }, i) => (
//               <motion.li
//                 key={title}
//                 initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: i * 0.15 }}
//                 className="relative flex flex-col md:flex-row items-center md:items-start md:justify-between gap-4"
//               >
//                 <div
//                   className={`flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-bold absolute md:static top-0 md:top-auto left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 shadow-lg`}
//                 >
//                   {i + 1}
//                 </div>
//                 <div
//                   className={`bg-white p-6 rounded-xl shadow-md max-w-md ${
//                     i % 2 === 0 ? "md:ml-auto text-right" : "md:mr-auto text-left"
//                   }`}
//                 >
//                   <h4 className="text-xl font-semibold text-indigo-700 mb-2">
//                     {title}
//                   </h4>
//                   <p className="text-gray-600">{desc}</p>
//                 </div>
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-12 flex flex-col items-center relative select-none">
//         <h2 className="text-4xl font-extrabold text-indigo-900 mb-10 text-center">
//           What Our Clients Say
//         </h2>
//         <motion.div
//           key={testiIndex}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center px-8"
//         >
//           <FaQuoteLeft className="mx-auto mb-6 text-indigo-400" size={32} />
//           <p className="italic text-lg text-gray-700 mb-6">
//             "{testimonials[testiIndex].quote}"
//           </p>
//           <p className="font-semibold text-indigo-700">
//             - {testimonials[testiIndex].author}
//           </p>
//           <FaQuoteRight className="mx-auto mt-6 text-indigo-400" size={32} />
//         </motion.div>
//         <div className="mt-12 flex justify-center gap-6">
//           <button
//             aria-label="Previous testimonial"
//             onClick={prevTestimonial}
//             className="rounded-full bg-indigo-100 p-3 hover:bg-indigo-200 transition"
//           >
//             &#8592;
//           </button>
//           <button
//             aria-label="Next testimonial"
//             onClick={nextTestimonial}
//             className="rounded-full bg-indigo-100 p-3 hover:bg-indigo-200 transition"
//           >
//             &#8594;
//           </button>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section
//         id="contact"
//         className="w-full max-w-4xl text-center py-16 px-6 bg-indigo-600 rounded-3xl shadow-lg"
//       >
//         <h3 className="text-4xl font-extrabold text-white mb-6">
//           Ready to revolutionize your business with AI?
//         </h3>
//         <p className="text-indigo-200 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
//           Contact us today and let’s build the future together.
//         </p>
//         <a
//           href="/contact"
//           className="inline-block bg-white text-indigo-700 font-bold px-12 py-4 rounded-full shadow-lg hover:bg-indigo-50 transition"
//         >
//           Get In Touch
//         </a>
//       </section>
//     </main>
//   );
// };

// export default AiSolutionsPage;
