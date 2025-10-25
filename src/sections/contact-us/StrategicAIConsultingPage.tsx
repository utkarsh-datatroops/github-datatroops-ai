// "use client";

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLightbulb, faChartLine, faUsers, faRoad, faBullseye, faHandshake } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";

// const StrategicAIConsultingPage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-[#10002B] to-[#240046] text-white">
//         <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//                 Strategic AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Consulting</span> Services
//               </h1>
//               <p className="text-lg text-gray-300">
//                 Navigate your AI transformation journey with expert guidance, strategic planning, and executive-level insights that drive sustainable competitive advantage.
//               </p>
//               <div className="pt-4">
//                 <a
//                   href="/contact-us"
//                   className="inline-block px-8 py-3 bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
//                 >
//                   Transform Your Business Strategy
//                 </a>
//               </div>
//             </div>
//             <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl">
//               <div className="absolute inset-0 flex items-center justify-center bg-[#10002B]/20">
//                 <Image
//                   src="/images/strategic-consulting-hero.jpg"
//                   alt="Strategic AI Consulting"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Overview Section */}
//       <div className="py-16 md:py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
//               Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Strategic</span> AI Consulting?
//             </h2>
//             <p className="max-w-3xl mx-auto text-lg text-gray-600">
//               AI isn't just about technology—it's about transforming how you do business. Our strategic consulting ensures your AI initiatives align with business objectives and deliver measurable ROI.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <FontAwesomeIcon icon={faLightbulb} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-xl font-semibold mb-3 text-gray-900">Strategic Vision</h3>
//               <p className="text-gray-600">
//                 Develop a comprehensive AI strategy that aligns with your business goals and market positioning.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <FontAwesomeIcon icon={faBullseye} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-xl font-semibold mb-3 text-gray-900">ROI-Focused Approach</h3>
//               <p className="text-gray-600">
//                 Prioritize AI initiatives based on potential business impact and return on investment.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <FontAwesomeIcon icon={faUsers} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-xl font-semibold mb-3 text-gray-900">Change Management</h3>
//               <p className="text-gray-600">
//                 Navigate organizational transformation with expert guidance on culture, processes, and talent.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Consulting Services Section */}
//       <div className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Consulting</span> Services
//           </h2>

//           <div className="space-y-20">
//             {/* Service 1 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//               <div className="order-2 md:order-1">
//                 <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Strategy & Roadmap Development</h3>
//                 <p className="text-gray-600 mb-6">
//                   Create a comprehensive AI strategy that defines your vision, identifies opportunities, and establishes a clear roadmap for implementation and growth.
//                 </p>
//                 <ul className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>AI maturity assessment and gap analysis</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Strategic vision and goal setting</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Multi-year roadmap with clear milestones</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Resource allocation and budget planning</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="order-1 md:order-2 bg-gray-100 rounded-xl p-8 shadow-inner">
//                 <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
//                   <Image
//                     src="/images/ai-strategy.jpg"
//                     alt="AI Strategy Development"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Service 2 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//               <div className="bg-gray-100 rounded-xl p-8 shadow-inner">
//                 <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
//                   <Image
//                     src="/images/business-case.jpg"
//                     alt="Business Case Development"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold mb-4 text-gray-900">Business Case Development</h3>
//                 <p className="text-gray-600 mb-6">
//                   Build compelling business cases for AI investments with detailed ROI analysis, risk assessment, and implementation timelines.
//                 </p>
//                 <ul className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>ROI modeling and financial projections</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Cost-benefit analysis and risk evaluation</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Competitive analysis and market positioning</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Executive presentation and stakeholder alignment</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Service 3 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//               <div className="order-2 md:order-1">
//                 <h3 className="text-2xl font-bold mb-4 text-gray-900">Organizational Change Management</h3>
//                 <p className="text-gray-600 mb-6">
//                   Navigate the human side of AI transformation with comprehensive change management strategies that ensure successful adoption and minimal resistance.
//                 </p>
//                 <ul className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Change readiness assessment and planning</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Stakeholder engagement and communication strategies</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Training and capability development programs</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Culture transformation and adoption metrics</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="order-1 md:order-2 bg-gray-100 rounded-xl p-8 shadow-inner">
//                 <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
//                   <Image
//                     src="/images/change-management.jpg"
//                     alt="Change Management"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Service 4 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//               <div className="bg-gray-100 rounded-xl p-8 shadow-inner">
//                 <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
//                   <Image
//                     src="/images/ai-governance.jpg"
//                     alt="AI Governance"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Governance & Ethics Framework</h3>
//                 <p className="text-gray-600 mb-6">
//                   Establish robust governance frameworks that ensure responsible AI development, deployment, and operation while maintaining compliance and ethical standards.
//                 </p>
//                 <ul className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>AI ethics and responsible AI guidelines</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Risk management and compliance frameworks</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Data governance and privacy protection</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>AI audit and monitoring processes</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Executive Advisory Section */}
//       <div className="py-16 md:py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
//             Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Advisory</span> Services
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <FontAwesomeIcon icon={faHandshake} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-xl font-bold mb-4 text-gray-900">C-Suite AI Advisory</h3>
//               <p className="text-gray-600 mb-4">
//                 Direct advisory services for CEOs, CTOs, and other C-level executives navigating AI transformation and strategic decision-making.
//               </p>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>One-on-one executive coaching and mentoring</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Board-level AI strategy presentations</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Investment decision support and due diligence</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Market intelligence and competitive positioning</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <FontAwesomeIcon icon={faRoad} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Digital Transformation Leadership</h3>
//               <p className="text-gray-600 mb-4">
//                 Guide your organization through comprehensive digital transformation with AI at the core of your modernization strategy.
//               </p>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Technology architecture and platform selection</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Operating model transformation</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Talent acquisition and capability building</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Partnership and vendor ecosystem strategy</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Industry Expertise Section */}
//       <div className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
//             Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Expertise</span>
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Financial Services</h3>
//               <p className="text-gray-600 mb-4">
//                 Navigate regulatory complexities while leveraging AI for risk management, customer experience, and operational efficiency.
//               </p>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Regulatory compliance and risk frameworks</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Customer experience transformation</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Fraud detection and prevention strategies</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Healthcare & Life Sciences</h3>
//               <p className="text-gray-600 mb-4">
//                 Transform patient care and accelerate research while ensuring HIPAA compliance and ethical AI deployment.
//               </p>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Clinical decision support systems</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Drug discovery and development acceleration</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Population health management strategies</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Manufacturing & Supply Chain</h3>
//               <p className="text-gray-600 mb-4">
//                 Optimize operations, predict maintenance needs, and create intelligent supply chains with AI-driven insights.
//               </p>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Smart factory and Industry 4.0 strategies</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Predictive maintenance frameworks</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Supply chain optimization and resilience</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Retail & Consumer Goods</h3>
//               <p className="text-gray-600 mb-4">
//                 Enhance customer experiences, optimize inventory, and personalize marketing through strategic AI implementation.
//               </p>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Personalization and recommendation strategies</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Inventory optimization and demand forecasting</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Omnichannel customer experience design</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Energy & Utilities</h3>
//               <p className="text-gray-600 mb-4">
//                 Drive sustainability and efficiency through AI-powered grid management, predictive maintenance, and demand optimization.
//               </p>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Smart grid and energy management systems</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Renewable energy optimization</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Asset performance and maintenance strategies</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Technology & Telecommunications</h3>
//               <p className="text-gray-600 mb-4">
//                 Enhance network performance, improve customer service, and create new AI-powered products and services.
//               </p>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Network optimization and performance management</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Customer churn prevention strategies</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>AI-powered product innovation</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Methodology Section */}
//       <div className="py-16 md:py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Methodology</span>
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="bg-gradient-to-r from-[#10002B] to-[#240046] rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
//                 <span className="text-white font-bold text-xl">01</span>
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">Assess</h3>
//               <p className="text-gray-600">
//                 Comprehensive evaluation of your current state, capabilities, and strategic objectives.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="bg-gradient-to-r from-[#10002B] to-[#240046] rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
//                 <span className="text-white font-bold text-xl">02</span>
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">Strategize</h3>
//               <p className="text-gray-600">
//                 Develop a tailored AI strategy that aligns with your business goals and market position.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="bg-gradient-to-r from-[#10002B] to-[#240046] rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
//                 <span className="text-white font-bold text-xl">03</span>
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">Plan</h3>
//               <p className="text-gray-600">
//                 Create detailed implementation roadmaps with clear milestones and success metrics.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="bg-gradient-to-r from-[#10002B] to-[#240046] rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
//                 <span className="text-white font-bold text-xl">04</span>
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">Execute</h3>
//               <p className="text-gray-600">
//                 Guide implementation with ongoing support, monitoring, and strategic adjustments.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Success Stories Section */}
//       <div className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
//             Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Success Stories</span>
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Fortune 500 Financial Institution</h3>
//               <p className="text-gray-600 mb-6">
//                 Developed a comprehensive AI strategy that resulted in $50M annual savings through automated risk assessment and fraud detection improvements.
//               </p>
//               <div className="grid grid-cols-3 gap-4 text-center">
//                 <div>
//                   <div className="text-2xl font-bold text-[#7B2CBF]">$50M</div>
//                   <div className="text-sm text-gray-600">Annual Savings</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-[#7B2CBF]">75%</div>
//                   <div className="text-sm text-gray-600">Fraud Reduction</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-[#7B2CBF]">18 Mo</div>
//                   <div className="text-sm text-gray-600">Implementation</div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Global Manufacturing Leader</h3>
//               <p className="text-gray-600 mb-6">
//                 Strategic AI roadmap implementation that improved operational efficiency by 40% and reduced unplanned downtime by 60%.
//               </p>
//               <div className="grid grid-cols-3 gap-4 text-center">
//                 <div>
//                   <div className="text-2xl font-bold text-[#7B2CBF]">40%</div>
//                   <div className="text-sm text-gray-600">Efficiency Gain</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-[#7B2CBF]">60%</div>
//                   <div className="text-sm text-gray-600">Downtime Reduction</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-[#7B2CBF]">12 Mo</div>
//                   <div className="text-sm text-gray-600">ROI Achievement</div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Healthcare System Transformation</h3>
//               <p className="text-gray-600 mb-6">
//                 Guided AI adoption strategy that improved patient outcomes by 25% while reducing operational costs by $30M annually.
//               </p>
//               <div className="grid grid-cols-3 gap-4 text-center">
//                 <div>
//                   <div className="text-2xl font-bold text-[#7B2CBF]">25%</div>
//                   <div className="text-sm text-gray-600">Outcome Improvement</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-[#7B2CBF]">$30M</div>
//                   <div className="text-sm text-gray-600">Cost Reduction</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-[#7B2CBF]">95%</div>
//                   <div className="text-sm text-gray-600">Staff Adoption</div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Retail Chain Digital Transformation</h3>
//               <p className="text-gray-600 mb-6">
//                 AI-driven customer experience strategy that increased revenue by 35% and improved customer satisfaction scores by 50%.
//               </p>
//               <div className="grid grid-cols-3 gap-4 text-center">
//                 <div>
//                   <div className="text-2xl font-bold text-[#7B2CBF]">35%</div>
//                   <div className="text-sm text-gray-600">Revenue Growth</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-[#7B2CBF]">50%</div>
//                   <div className="text-sm text-gray-600">CSAT Improvement</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-[#7B2CBF]">24 Mo</div>
//                   <div className="text-sm text-gray-600">Full Implementation</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="py-16 md:py-24 bg-gradient-to-r from-[#10002B] to-[#240046] text-white">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Transform</span> Your Business Strategy?
//           </h2>
//           <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
//             Partner with our strategic AI experts to navigate your transformation journey and unlock sustainable competitive advantages.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <a
//               href="/contact-us"
//               className="inline-block px-8 py-3 bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
//             >
//               Schedule Strategic Consultation
//             </a>
//             <a
//               href="/solutions"
//               className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#5A189A] transition-colors"
//             >
//               Explore All Solutions
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StrategicAIConsultingPage;
