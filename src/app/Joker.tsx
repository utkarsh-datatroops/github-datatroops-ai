// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { ChevronRight, Sparkles, Grid3X3, Users, Shield, BarChart3, MessageSquare, Bot } from 'lucide-react';

// // const AgentTemplateGallery = () => {
// //   const [selectedOption, setSelectedOption] = useState('templates');
// //   const [customAgentText, setCustomAgentText] = useState('');

// //   const agentTemplates = [
// //     {
// //       id: 'apla',
// //       name: 'Apla, the Prospect Researcher',
// //       description: 'Prepare detailed and nuanced research for every account.',
// //       icon: '🔍',
// //       color: 'bg-blue-500',
// //       recommended: true
// //     },
// //     {
// //       id: 'lima',
// //       name: 'Lima, the Lifecycle Marketer',
// //       description: 'Send sign ups hyper-personalized emails, to boost activation rates',
// //       icon: '📧',
// //       color: 'bg-green-500',
// //       recommended: false
// //     }
// //   ];

// //   const suggestionChips = [
// //     'Identify stalled deals for re-engagement',
// //     'Automate onboarding tasks',
// //     'Identify common ticket trends',
// //     'Automate security incident response'
// //   ];

// //   const containerVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.6,
// //         staggerChildren: 0.1
// //       }
// //     }
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.4 }
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
// //       <motion.div
// //         className="mx-auto max-w-6xl"
// //         variants={containerVariants}
// //         initial="hidden"
// //         animate="visible"
// //       >
// //         {/* Header */}
// //         <motion.div className="mb-8 text-center" variants={itemVariants}>
// //           <div className="mb-4 flex items-center justify-center gap-2">
// //             <Grid3X3 className="h-6 w-6 text-gray-600" />
// //             <h1 className="text-xl font-semibold text-gray-800">Template Gallery</h1>
// //           </div>
// //         </motion.div>

// //         {/* Main Content */}
// //         <motion.div className="space-y-8" variants={itemVariants}>
// //           {/* Title Section */}
// //           <div className="text-center">
// //             <div className="mb-6 flex items-center justify-center gap-2">
// //               <Sparkles className="h-6 w-6 text-yellow-500" />
// //               <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
// //                 Supercharge your operations with AI Agents
// //               </h2>
// //             </div>
// //           </div>

// //           {/* Option Selection */}
// //           <div className="flex flex-col gap-4">
// //             {/* Templates Option */}
// //             <motion.div
// //               className={`rounded-xl border-2 p-6 transition-all duration-300 ${
// //                 selectedOption === 'templates'
// //                   ? 'border-blue-500 bg-blue-50'
// //                   : 'border-gray-200 bg-white hover:border-gray-300'
// //               }`}
// //               variants={itemVariants}
// //               whileHover={{ scale: 1.02 }}
// //               whileTap={{ scale: 0.98 }}
// //             >
// //               <div className="flex items-start gap-4">
// //                 <div className="flex-shrink-0">
// //                   <div className={`h-4 w-4 rounded-full border-2 ${
// //                     selectedOption === 'templates'
// //                       ? 'border-blue-500 bg-blue-500'
// //                       : 'border-gray-300'
// //                   }`}>
// //                     {selectedOption === 'templates' && (
// //                       <div className="h-full w-full rounded-full bg-white scale-50"></div>
// //                     )}
// //                   </div>
// //                 </div>
// //                 <div className="flex-1">
// //                   <div className="grid gap-6 md:grid-cols-2">
// //                     {agentTemplates.map((agent) => (
// //                       <motion.div
// //                         key={agent.id}
// //                         className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
// //                         whileHover={{ y: -2 }}
// //                       >
// //                         {agent.recommended && (
// //                           <div className="absolute -top-2 right-4">
// //                             <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
// //                               Recommended
// //                             </span>
// //                           </div>
// //                         )}

// //                         <div className="mb-4 flex items-center gap-3">
// //                           <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${agent.color} text-white`}>
// //                             <Bot className="h-6 w-6" />
// //                           </div>
// //                           <div>
// //                             <h3 className="font-semibold text-gray-900">{agent.name}</h3>
// //                           </div>
// //                         </div>

// //                         <p className="mb-4 text-sm text-gray-600">{agent.description}</p>

// //                         <button className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
// //                           Get started
// //                           <ChevronRight className="h-4 w-4" />
// //                         </button>
// //                       </motion.div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             {/* Custom Agent Option */}
// //             <motion.div
// //               className={`rounded-xl border-2 p-6 transition-all duration-300 ${
// //                 selectedOption === 'custom'
// //                   ? 'border-blue-500 bg-blue-50'
// //                   : 'border-gray-200 bg-white hover:border-gray-300'
// //               }`}
// //               variants={itemVariants}
// //               whileHover={{ scale: 1.02 }}
// //               whileTap={{ scale: 0.98 }}
// //               onClick={() => setSelectedOption('custom')}
// //             >
// //               <div className="flex items-start gap-4">
// //                 <div className="flex-shrink-0">
// //                   <div className={`h-4 w-4 rounded-full border-2 ${
// //                     selectedOption === 'custom'
// //                       ? 'border-blue-500 bg-blue-500'
// //                       : 'border-gray-300'
// //                   }`}>
// //                     {selectedOption === 'custom' && (
// //                       <div className="h-full w-full rounded-full bg-white scale-50"></div>
// //                     )}
// //                   </div>
// //                 </div>
// //                 <div className="flex-1">
// //                   <div className="flex items-center gap-2 mb-4">
// //                     <Sparkles className="h-5 w-5 text-blue-500" />
// //                     <span className="font-medium text-gray-900">I want an agent that...</span>
// //                   </div>

// //                   <div className="space-y-4">
// //                     <div>
// //                       <input
// //                         type="text"
// //                         placeholder="Describe what you want your agent to do"
// //                         value={customAgentText}
// //                         onChange={(e) => setCustomAgentText(e.target.value)}
// //                         className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
// //                         onClick={() => setSelectedOption('custom')}
// //                       />
// //                     </div>

// //                     <div>
// //                       <p className="mb-3 text-sm text-gray-600">Some ideas for you</p>
// //                       <div className="flex flex-wrap gap-2">
// //                         {suggestionChips.map((suggestion, index) => (
// //                           <motion.button
// //                             key={index}
// //                             className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition-all duration-200 hover:border-blue-500 hover:bg-blue-50"
// //                             whileHover={{ scale: 1.05 }}
// //                             whileTap={{ scale: 0.95 }}
// //                             onClick={() => {
// //                               setCustomAgentText(suggestion);
// //                               setSelectedOption('custom');
// //                             }}
// //                           >
// //                             {suggestion}
// //                           </motion.button>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>

// //           {/* Tooltip for Custom Agent */}
// //           {selectedOption === 'custom' && (
// //             <motion.div
// //               className="mx-auto max-w-md rounded-lg bg-gray-800 p-4 text-center text-white shadow-lg"
// //               initial={{ opacity: 0, y: 10 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.3 }}
// //             >
// //               <p className="text-sm">
// //                 {customAgentText
// //                   ? "You can also describe what you want your agent to do, and instantly get a personalized template."
// //                   : "Start with one of our pre-made agent templates for an easy, personalized setup."
// //                 }
// //               </p>
// //             </motion.div>
// //           )}

// //           {/* Bottom Section */}
// //           <motion.div
// //             className="rounded-xl bg-white p-6 shadow-sm"
// //             variants={itemVariants}
// //           >
// //             <div className="grid gap-6 md:grid-cols-3">
// //               <div className="flex items-center gap-3">
// //                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
// //                   <Users className="h-6 w-6 text-blue-600" />
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-gray-900">Easy Setup</h3>
// //                   <p className="text-sm text-gray-600">Get started in minutes</p>
// //                 </div>
// //               </div>

// //               <div className="flex items-center gap-3">
// //                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
// //                   <BarChart3 className="h-6 w-6 text-green-600" />
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-gray-900">Smart Analytics</h3>
// //                   <p className="text-sm text-gray-600">Track performance metrics</p>
// //                 </div>
// //               </div>

// //               <div className="flex items-center gap-3">
// //                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
// //                   <Shield className="h-6 w-6 text-purple-600" />
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-gray-900">Secure & Reliable</h3>
// //                   <p className="text-sm text-gray-600">Enterprise-grade security</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </motion.div>

// //           {/* Footer */}
// //           <motion.div
// //             className="text-center text-sm text-gray-500"
// //             variants={itemVariants}
// //           >
// //             <div className="flex items-center justify-center gap-2">
// //               <span>Free plan</span>
// //               <span>✦</span>
// //               <span>No card required</span>
// //             </div>
// //           </motion.div>
// //         </motion.div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default AgentTemplateGallery;
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronRight, Sparkles, Grid3X3, Users, Shield, BarChart3, Bot } from 'lucide-react';

// const AgentTemplateGallery = () => {
//   const [selectedOption, setSelectedOption] = useState('templates');
//   const [customAgentText, setCustomAgentText] = useState('');
//   const [hoveredSection, setHoveredSection] = useState(null);

//   const agentTemplates = [
//     {
//       id: 'apla',
//       name: 'Apla, the Prospect Researcher',
//       description: 'Prepare detailed and nuanced research for every account.',
//       icon: '🔍',
//       color: 'bg-blue-500',
//       recommended: true
//     },
//     {
//       id: 'lima',
//       name: 'Lima, the Lifecycle Marketer',
//       description: 'Send sign ups hyper-personalized emails, to boost activation rates',
//       icon: '📧',
//       color: 'bg-green-500',
//       recommended: false
//     }
//   ];

//   const suggestionChips = [
//     'Identify stalled deals for re-engagement',
//     'Automate onboarding tasks',
//     'Identify common ticket trends',
//     'Automate security incident response'
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.4 }
//     }
//   };

//   // Animated dots component
//   const AnimatedDots = () => (
//     <div className="flex space-x-1">
//       {[0, 1, 2].map((index) => (
//         <motion.div
//           key={index}
//           className="h-2 w-2 bg-gray-400 rounded-full"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.5, 1, 0.5],
//           }}
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//             delay: index * 0.2,
//           }}
//         />
//       ))}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
//       <motion.div
//         className="mx-auto max-w-6xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Header */}
//         <motion.div className="mb-8 text-center" variants={itemVariants}>
//           <div className="mb-4 flex items-center justify-center gap-2">
//             <Grid3X3 className="h-6 w-6 text-gray-600" />
//             <h1 className="text-xl font-semibold text-gray-800">Template Gallery</h1>
//           </div>
//         </motion.div>

//         {/* Main Content */}
//         <motion.div className="space-y-8" variants={itemVariants}>
//           {/* Title Section */}
//           <div className="text-center">
//             <div className="mb-6 flex items-center justify-center gap-2">
//               <Sparkles className="h-6 w-6 text-yellow-500" />
//               <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
//                 Supercharge your operations with AI Agents
//               </h2>
//             </div>
//           </div>

//           {/* Option Selection */}
//           <div className="flex flex-col gap-4">
//             {/* Templates Option */}
//             <motion.div
//               className={`relative rounded-xl border-2 p-6 transition-all duration-300 cursor-pointer ${
//                 selectedOption === 'templates'
//                   ? 'border-blue-500 bg-blue-50'
//                   : 'border-gray-200 bg-white hover:border-gray-300'
//               }`}
//               variants={itemVariants}
//               whileHover={{ scale: 1.01 }}
//               whileTap={{ scale: 0.99 }}
//               onClick={() => setSelectedOption('templates')}
//               onMouseEnter={() => setHoveredSection('templates')}
//               onMouseLeave={() => setHoveredSection(null)}
//               style={{ cursor: hoveredSection === 'templates' ? 'pointer' : 'default' }}
//             >
//               <div className="flex items-start gap-4">
//                 <div className="flex-shrink-0 mt-2">
//                   <AnimatePresence mode="wait">
//                     {hoveredSection === 'templates' ? (
//                       <motion.div
//                         key="radio-templates"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.8 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <div className={`h-4 w-4 rounded-full border-2 ${
//                           selectedOption === 'templates'
//                             ? 'border-blue-500 bg-blue-500'
//                             : 'border-gray-300'
//                         }`}>
//                           {selectedOption === 'templates' && (
//                             <div className="h-full w-full rounded-full bg-white scale-50"></div>
//                           )}
//                         </div>
//                       </motion.div>
//                     ) : (
//                       <motion.div
//                         key="dots-templates"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <AnimatedDots />
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//                 <div className="flex-1">
//                   <div className="grid gap-6 md:grid-cols-2">
//                     {agentTemplates.map((agent) => (
//                       <motion.div
//                         key={agent.id}
//                         className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
//                         whileHover={{ y: -2 }}
//                       >
//                         {agent.recommended && (
//                           <div className="absolute -top-2 right-4">
//                             <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
//                               Recommended
//                             </span>
//                           </div>
//                         )}

//                         <div className="mb-4 flex items-center gap-3">
//                           <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${agent.color} text-white`}>
//                             <Bot className="h-6 w-6" />
//                           </div>
//                           <div>
//                             <h3 className="font-semibold text-gray-900">{agent.name}</h3>
//                           </div>
//                         </div>

//                         <p className="mb-4 text-sm text-gray-600">{agent.description}</p>

//                         <button className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
//                           Get started
//                           <ChevronRight className="h-4 w-4" />
//                         </button>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Hover Tooltip for Templates */}
//               <AnimatePresence>
//                 {hoveredSection === 'templates' && (
//                   <motion.div
//                     className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap z-10 shadow-lg"
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     Start with one of our pre-made agent templates for an easy, personalized setup.
//                     <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>

//             {/* Custom Agent Option */}
//             <motion.div
//               className={`relative rounded-xl border-2 p-6 transition-all duration-300 cursor-pointer ${
//                 selectedOption === 'custom'
//                   ? 'border-blue-500 bg-blue-50'
//                   : 'border-gray-200 bg-white hover:border-gray-300'
//               }`}
//               variants={itemVariants}
//               whileHover={{ scale: 1.01 }}
//               whileTap={{ scale: 0.99 }}
//               onClick={() => setSelectedOption('custom')}
//               onMouseEnter={() => setHoveredSection('custom')}
//               onMouseLeave={() => setHoveredSection(null)}
//               style={{ cursor: hoveredSection === 'custom' ? 'pointer' : 'default' }}
//             >
//               <div className="flex items-start gap-4">
//                 <div className="flex-shrink-0 mt-2">
//                   <AnimatePresence mode="wait">
//                     {hoveredSection === 'custom' ? (
//                       <motion.div
//                         key="radio-custom"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.8 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <div className={`h-4 w-4 rounded-full border-2 ${
//                           selectedOption === 'custom'
//                             ? 'border-blue-500 bg-blue-500'
//                             : 'border-gray-300'
//                         }`}>
//                           {selectedOption === 'custom' && (
//                             <div className="h-full w-full rounded-full bg-white scale-50"></div>
//                           )}
//                         </div>
//                       </motion.div>
//                     ) : (
//                       <motion.div
//                         key="dots-custom"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <AnimatedDots />
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2 mb-4">
//                     <Sparkles className="h-5 w-5 text-blue-500" />
//                     <span className="font-medium text-gray-900">I want an agent that...</span>
//                   </div>

//                   <div className="space-y-4">
//                     <div>
//                       <input
//                         type="text"
//                         placeholder="Describe what you want your agent to do"
//                         value={customAgentText}
//                         onChange={(e) => setCustomAgentText(e.target.value)}
//                         className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
//                         onClick={() => setSelectedOption('custom')}
//                       />
//                     </div>

//                     <div>
//                       <p className="mb-3 text-sm text-gray-600">Some ideas for you</p>
//                       <div className="flex flex-wrap gap-2">
//                         {suggestionChips.map((suggestion, index) => (
//                           <motion.button
//                             key={index}
//                             className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition-all duration-200 hover:border-blue-500 hover:bg-blue-50"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               setCustomAgentText(suggestion);
//                               setSelectedOption('custom');
//                             }}
//                           >
//                             {suggestion}
//                           </motion.button>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Hover Tooltip for Custom */}
//               <AnimatePresence>
//                 {hoveredSection === 'custom' && (
//                   <motion.div
//                     className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap z-10 shadow-lg"
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     You can also describe what you want your agent to do, and instantly get a personalized template.
//                     <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           </div>

//           {/* Bottom Section */}
//           <motion.div
//             className="rounded-xl bg-white p-6 shadow-sm"
//             variants={itemVariants}
//           >
//             <div className="grid gap-6 md:grid-cols-3">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
//                   <Users className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900">Easy Setup</h3>
//                   <p className="text-sm text-gray-600">Get started in minutes</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
//                   <BarChart3 className="h-6 w-6 text-green-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900">Smart Analytics</h3>
//                   <p className="text-sm text-gray-600">Track performance metrics</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
//                   <Shield className="h-6 w-6 text-purple-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-gray-900">Secure & Reliable</h3>
//                   <p className="text-sm text-gray-600">Enterprise-grade security</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Footer */}
//           <motion.div
//             className="text-center text-sm text-gray-500"
//             variants={itemVariants}
//           >
//             <div className="flex items-center justify-center gap-2">
//               <span>Free plan</span>
//               <span>✦</span>
//               <span>No card required</span>
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default AgentTemplateGallery;
