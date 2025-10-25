// "use client";
// "use client";

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChartPie,
//   faDatabase,
//   faArrowTrendUp,
//   faMagnifyingGlassChart,
//   faGears,
//   faShieldHalved,
// } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChartPie, faDatabase, faArrowTrendUp, faMagnifyingGlassChart, faGears, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";

// const AdvancedDataAnalyticsPage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-[#10002B] to-[#240046] text-white">
//         <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//                 Advanced Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Analytics</span> Solutions
//               </h1>
//               <p className="text-lg text-gray-300">
//                 Transform your raw data into actionable insights and strategic advantages with our cutting-edge analytics capabilities.
//               </p>
//               <div className="pt-4">
//                 <a
//                   href="/contact-us"
//                   className="inline-block px-8 py-3 bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
//                 >
//                   Unlock Your Data's Potential
//                 </a>
//               </div>
//             </div>
//             <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl">
//               <div className="absolute inset-0 flex items-center justify-center bg-[#10002B]/20">
//                 <Image
//                   src="/images/data-analytics-hero.jpg"
//                   alt="Advanced Data Analytics"
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
//               Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Data</span> Into Decisions
//             </h2>
//             <p className="max-w-3xl mx-auto text-lg text-gray-600">
//               In today's data-driven world, the ability to extract meaningful insights from complex datasets is what separates industry leaders from the competition. Our advanced analytics solutions give you the edge.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <FontAwesomeIcon icon={faMagnifyingGlassChart} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-xl font-semibold mb-3 text-gray-900">Deep Insights</h3>
//               <p className="text-gray-600">
//                 Uncover hidden patterns, correlations, and opportunities within your data that conventional analysis might miss.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <FontAwesomeIcon icon={faArrowTrendUp} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-xl font-semibold mb-3 text-gray-900">Predictive Power</h3>
//               <p className="text-gray-600">
//                 Move beyond historical reporting to anticipate future trends, customer behaviors, and market shifts.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <FontAwesomeIcon icon={faGears} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-xl font-semibold mb-3 text-gray-900">Actionable Intelligence</h3>
//               <p className="text-gray-600">
//                 Transform complex findings into clear, actionable recommendations that drive strategic decision-making.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Our Capabilities Section */}
//       <div className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
//             Our Analytics <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Capabilities</span>
//           </h2>

//           <div className="space-y-20">
//             {/* Capability 1 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//               <div className="order-2 md:order-1">
//                 <h3 className="text-2xl font-bold mb-4 text-gray-900">Descriptive Analytics</h3>
//                 <p className="text-gray-600 mb-6">
//                   Gain a comprehensive understanding of your historical data through advanced visualization and reporting. Our descriptive analytics solutions help you make sense of what has happened in your business and why.
//                 </p>
//                 <ul className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Interactive dashboards and real-time reporting</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Multi-dimensional data exploration and visualization</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Pattern recognition and anomaly detection</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Performance tracking and KPI monitoring</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="order-1 md:order-2 bg-gray-100 rounded-xl p-8 shadow-inner">
//                 <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
//                   <Image
//                     src="/images/descriptive-analytics.jpg"
//                     alt="Descriptive Analytics"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Capability 2 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//               <div className="bg-gray-100 rounded-xl p-8 shadow-inner">
//                 <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
//                   <Image
//                     src="/images/predictive-analytics.jpg"
//                     alt="Predictive Analytics"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold mb-4 text-gray-900">Predictive Analytics</h3>
//                 <p className="text-gray-600 mb-6">
//                   Leverage machine learning and statistical modeling to forecast future outcomes, identify risks, and discover opportunities before they become obvious to competitors.
//                 </p>
//                 <ul className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Customer behavior and lifetime value prediction</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Demand forecasting and inventory optimization</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Risk assessment and fraud detection</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Market trend analysis and opportunity identification</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Capability 3 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//               <div className="order-2 md:order-1">
//                 <h3 className="text-2xl font-bold mb-4 text-gray-900">Prescriptive Analytics</h3>
//                 <p className="text-gray-600 mb-6">
//                   Go beyond prediction to recommendation. Our prescriptive analytics solutions not only tell you what might happen but also suggest the best course of action to achieve your desired outcomes.
//                 </p>
//                 <ul className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Optimization algorithms for resource allocation</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Decision support systems and scenario modeling</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Automated decision-making for operational efficiency</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Strategic planning and investment recommendations</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="order-1 md:order-2 bg-gray-100 rounded-xl p-8 shadow-inner">
//                 <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
//                   <Image
//                     src="/images/prescriptive-analytics.jpg"
//                     alt="Prescriptive Analytics"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Capability 4 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//               <div className="bg-gray-100 rounded-xl p-8 shadow-inner">
//                 <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
//                   <Image
//                     src="/images/real-time-analytics.jpg"
//                     alt="Real-time Analytics"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold mb-4 text-gray-900">Real-time Analytics</h3>
//                 <p className="text-gray-600 mb-6">
//                   Make decisions at the speed of business with real-time data processing and analysis. Our streaming analytics solutions enable immediate response to changing conditions and opportunities.
//                 </p>
//                 <ul className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Live data streaming and processing</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Instant alerts and automated responses</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Dynamic pricing and recommendation engines</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Operational monitoring and performance optimization</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Technologies Section */}
//       <div className="py-16 md:py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
//             Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Technologies</span> We Use
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
//               <FontAwesomeIcon icon={faDatabase} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-lg font-semibold mb-2 text-gray-900">Big Data Platforms</h3>
//               <p className="text-gray-600 text-sm">
//                 Hadoop, Spark, Kafka, and cloud-native solutions for massive data processing
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
//               <FontAwesomeIcon icon={faChartPie} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-lg font-semibold mb-2 text-gray-900">Visualization Tools</h3>
//               <p className="text-gray-600 text-sm">
//                 Tableau, Power BI, D3.js, and custom dashboard solutions
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
//               <FontAwesomeIcon icon={faGears} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-lg font-semibold mb-2 text-gray-900">ML & AI Frameworks</h3>
//               <p className="text-gray-600 text-sm">
//                 TensorFlow, PyTorch, Scikit-learn, and specialized analytics libraries
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
//               <FontAwesomeIcon icon={faShieldHalved} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-lg font-semibold mb-2 text-gray-900">Security & Compliance</h3>
//               <p className="text-gray-600 text-sm">
//                 Enterprise-grade security with GDPR, HIPAA, and SOX compliance
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Industry Applications Section */}
//       <div className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
//             Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Applications</span>
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Financial Services</h3>
//               <p className="text-gray-600 mb-4">
//                 Risk management, fraud detection, algorithmic trading, and regulatory compliance through advanced analytics and machine learning models.
//               </p>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Credit scoring and loan default prediction</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Portfolio optimization and risk assessment</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Anti-money laundering and compliance monitoring</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Retail & E-commerce</h3>
//               <p className="text-gray-600 mb-4">
//                 Customer segmentation, demand forecasting, price optimization, and personalized marketing to maximize revenue and customer satisfaction.
//               </p>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Customer lifetime value and churn prediction</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Inventory optimization and supply chain analytics</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Recommendation engines and personalization</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Healthcare & Life Sciences</h3>
//               <p className="text-gray-600 mb-4">
//                 Clinical research, patient outcome prediction, operational efficiency, and drug discovery through advanced data analysis and AI.
//               </p>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Clinical trial optimization and patient stratification</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Predictive models for patient outcomes</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Operational analytics for hospital management</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Manufacturing & IoT</h3>
//               <p className="text-gray-600 mb-4">
//                 Predictive maintenance, quality control, supply chain optimization, and smart factory initiatives through IoT data analytics.
//               </p>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Equipment failure prediction and maintenance scheduling</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Quality assurance and defect detection</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Production optimization and energy management</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Process Section */}
//       <div className="py-16 md:py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
//             Our Analytics <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Process</span>
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="bg-gradient-to-r from-[#10002B] to-[#240046] rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
//                 <span className="text-white font-bold text-xl">01</span>
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">Data Discovery</h3>
//               <p className="text-gray-600">
//                 Comprehensive data audit, quality assessment, and opportunity identification across all your data sources.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="bg-gradient-to-r from-[#10002B] to-[#240046] rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
//                 <span className="text-white font-bold text-xl">02</span>
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">Data Preparation</h3>
//               <p className="text-gray-600">
//                 Cleaning, transformation, and integration of data from multiple sources into analysis-ready formats.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="bg-gradient-to-r from-[#10002B] to-[#240046] rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
//                 <span className="text-white font-bold text-xl">03</span>
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">Analysis & Modeling</h3>
//               <p className="text-gray-600">
//                 Advanced statistical analysis, machine learning, and predictive modeling tailored to your business questions.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="bg-gradient-to-r from-[#10002B] to-[#240046] rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
//                 <span className="text-white font-bold text-xl">04</span>
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">Insights & Action</h3>
//               <p className="text-gray-600">
//                 Clear visualization, interpretation, and actionable recommendations that drive strategic decision-making.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="py-16 md:py-24 bg-gradient-to-r from-[#10002B] to-[#240046] text-white">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Unlock</span> Your Data's Potential?
//           </h2>
//           <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
//             Let's transform your data into a strategic asset that drives growth, efficiency, and competitive advantage.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <a
//               href="/contact-us"
//               className="inline-block px-8 py-3 bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
//             >
//               Start Your Analytics Journey
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

// export default AdvancedDataAnalyticsPage;
