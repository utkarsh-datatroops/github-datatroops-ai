// "use client";

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloud, faServer, faShield, faRocket, faGlobe, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
// import { faAws, faGoogle, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
// import Image from "next/image";

// const CloudAIIntegrationPage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-[#10002B] to-[#240046] text-white">
//         <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//                 Cloud AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Integration</span> Solutions
//               </h1>
//               <p className="text-lg text-gray-300">
//                 Seamlessly integrate AI capabilities into your existing cloud infrastructure for scalable, secure, and efficient intelligent operations.
//               </p>
//               <div className="pt-4">
//                 <a
//                   href="/contact-us"
//                   className="inline-block px-8 py-3 bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
//                 >
//                   Scale Your AI in the Cloud
//                 </a>
//               </div>
//             </div>
//             <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl">
//               <div className="absolute inset-0 flex items-center justify-center bg-[#10002B]/20">
//                 <Image
//                   src="/images/cloud-ai-hero.jpg"
//                   alt="Cloud AI Integration"
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
//               Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Cloud AI</span> Integration?
//             </h2>
//             <p className="max-w-3xl mx-auto text-lg text-gray-600">
//               The cloud offers unparalleled scalability, flexibility, and cost-effectiveness for AI deployment. Our integration solutions ensure you harness the full power of cloud-native AI capabilities.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <FontAwesomeIcon icon={faRocket} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-xl font-semibold mb-3 text-gray-900">Rapid Scalability</h3>
//               <p className="text-gray-600">
//                 Scale your AI workloads up or down instantly based on demand, ensuring optimal resource utilization and cost efficiency.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <FontAwesomeIcon icon={faShield} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-xl font-semibold mb-3 text-gray-900">Enterprise Security</h3>
//               <p className="text-gray-600">
//                 Benefit from enterprise-grade security, compliance, and governance built into leading cloud platforms.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <FontAwesomeIcon icon={faGlobe} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-xl font-semibold mb-3 text-gray-900">Global Accessibility</h3>
//               <p className="text-gray-600">
//                 Deploy AI services globally with low latency and high availability across multiple regions and availability zones.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Cloud Platforms Section */}
//       <div className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
//             Multi-Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Expertise</span>
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
//               <FontAwesomeIcon icon={faAws} className="text-[#FF9900] w-16 h-16 mb-6" />
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Amazon Web Services</h3>
//               <p className="text-gray-600 mb-6">
//                 Leverage AWS's comprehensive AI/ML services including SageMaker, Bedrock, and Rekognition for robust AI solutions.
//               </p>
//               <ul className="text-left space-y-2 text-gray-600">
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Amazon SageMaker for ML model development</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>AWS Lambda for serverless AI functions</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Amazon Bedrock for generative AI</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>EC2 GPU instances for training</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
//               <FontAwesomeIcon icon={faMicrosoft} className="text-[#00A4EF] w-16 h-16 mb-6" />
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Microsoft Azure</h3>
//               <p className="text-gray-600 mb-6">
//                 Harness Azure's enterprise-focused AI services and seamless integration with Microsoft's ecosystem of tools.
//               </p>
//               <ul className="text-left space-y-2 text-gray-600">
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Azure Machine Learning Studio</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Azure Cognitive Services</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Azure OpenAI Service</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Power Platform integration</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
//               <FontAwesomeIcon icon={faGoogle} className="text-[#4285F4] w-16 h-16 mb-6" />
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Google Cloud Platform</h3>
//               <p className="text-gray-600 mb-6">
//                 Utilize Google's cutting-edge AI research and infrastructure for advanced machine learning and AI applications.
//               </p>
//               <ul className="text-left space-y-2 text-gray-600">
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Vertex AI for ML workflows</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>AutoML for automated model building</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>BigQuery ML for data analytics</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>TPU acceleration for training</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Integration Services Section */}
//       <div className="py-16 md:py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Integration</span> Services
//           </h2>

//           <div className="space-y-20">
//             {/* Service 1 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//               <div className="order-2 md:order-1">
//                 <h3 className="text-2xl font-bold mb-4 text-gray-900">Cloud Migration & Modernization</h3>
//                 <p className="text-gray-600 mb-6">
//                   Migrate your existing AI workloads to the cloud or modernize legacy systems to take advantage of cloud-native AI capabilities and infrastructure.
//                 </p>
//                 <ul className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Assessment and migration planning</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Legacy system modernization</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Data pipeline transformation</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Performance optimization</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="order-1 md:order-2 bg-gray-100 rounded-xl p-8 shadow-inner">
//                 <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
//                   <Image
//                     src="/images/cloud-migration.jpg"
//                     alt="Cloud Migration"
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
//                     src="/images/api-integration.jpg"
//                     alt="API Integration"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold mb-4 text-gray-900">API & Microservices Integration</h3>
//                 <p className="text-gray-600 mb-6">
//                   Seamlessly integrate AI capabilities through RESTful APIs and microservices architecture, enabling flexible and scalable AI-powered applications.
//                 </p>
//                 <ul className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>RESTful API development and management</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Microservices architecture design</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Container orchestration with Kubernetes</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>API gateway and security implementation</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Service 3 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//               <div className="order-2 md:order-1">
//                 <h3 className="text-2xl font-bold mb-4 text-gray-900">MLOps & DevOps Integration</h3>
//                 <p className="text-gray-600 mb-6">
//                   Implement robust MLOps practices with continuous integration, deployment, and monitoring of machine learning models in cloud environments.
//                 </p>
//                 <ul className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>CI/CD pipelines for ML models</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Model versioning and experiment tracking</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Automated testing and validation</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Performance monitoring and alerting</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="order-1 md:order-2 bg-gray-100 rounded-xl p-8 shadow-inner">
//                 <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
//                   <Image
//                     src="/images/mlops-devops.jpg"
//                     alt="MLOps DevOps"
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
//                     src="/images/data-pipeline.jpg"
//                     alt="Data Pipeline"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Pipeline & Workflow Automation</h3>
//                 <p className="text-gray-600 mb-6">
//                   Build scalable data pipelines and automated workflows that feed your AI models with clean, processed data from multiple sources.
//                 </p>
//                 <ul className="space-y-3 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Real-time and batch data processing</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>ETL/ELT pipeline development</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Data quality monitoring and validation</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                     <span>Workflow orchestration and scheduling</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Benefits Section */}
//       <div className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
//             Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Benefits</span>
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
//               <FontAwesomeIcon icon={faRocket} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-lg font-semibold mb-2 text-gray-900">Faster Time-to-Market</h3>
//               <p className="text-gray-600 text-sm">
//                 Accelerate AI deployment with pre-built cloud services and managed infrastructure
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
//               <FontAwesomeIcon icon={faServer} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-lg font-semibold mb-2 text-gray-900">Reduced Infrastructure Costs</h3>
//               <p className="text-gray-600 text-sm">
//                 Pay only for what you use with elastic scaling and managed services
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
//               <FontAwesomeIcon icon={faSyncAlt} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-lg font-semibold mb-2 text-gray-900">Enhanced Reliability</h3>
//               <p className="text-gray-600 text-sm">
//                 Built-in redundancy, backup, and disaster recovery capabilities
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
//               <FontAwesomeIcon icon={faShield} className="text-[#7B2CBF] w-12 h-12 mb-4" />
//               <h3 className="text-lg font-semibold mb-2 text-gray-900">Enterprise Security</h3>
//               <p className="text-gray-600 text-sm">
//                 Industry-leading security, compliance, and data protection standards
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Use Cases Section */}
//       <div className="py-16 md:py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Use Cases</span> & Success Stories
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Scalable Computer Vision Platform</h3>
//               <p className="text-gray-600 mb-4">
//                 A manufacturing company needed to process millions of product images for quality control. We integrated their system with cloud-based computer vision APIs, enabling real-time processing with auto-scaling capabilities.
//               </p>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>99.9% uptime with global distribution</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>50% reduction in processing costs</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>10x increase in processing capacity</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Multi-Cloud ML Pipeline</h3>
//               <p className="text-gray-600 mb-4">
//                 A financial services firm required a robust ML pipeline spanning multiple cloud providers for risk analysis. We created a unified architecture that leverages the best services from each platform.
//               </p>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Reduced vendor lock-in risks</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>30% faster model training</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Enhanced disaster recovery</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Serverless NLP Processing</h3>
//               <p className="text-gray-600 mb-4">
//                 An e-commerce platform needed to analyze customer reviews and feedback at scale. We implemented a serverless architecture that processes text data on-demand with natural language processing.
//               </p>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Zero infrastructure management</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Pay-per-request pricing model</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Real-time sentiment analysis</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-bold mb-4 text-gray-900">Edge-to-Cloud AI Deployment</h3>
//               <p className="text-gray-600 mb-4">
//                 A logistics company required AI processing both at edge locations and in the cloud. We created a hybrid architecture that optimizes for latency, bandwidth, and cost considerations.
//               </p>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Reduced latency by 80%</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Lower bandwidth costs</span>
//                 </div>
//                 <div className="flex items-start">
//                   <span className="text-[#7B2CBF] font-bold mr-2">•</span>
//                   <span>Improved offline capabilities</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Process Section */}
//       <div className="py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Integration</span> Process
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="bg-gradient-to-r from-[#10002B] to-[#240046] rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
//                 <span className="text-white font-bold text-xl">01</span>
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">Assessment</h3>
//               <p className="text-gray-600">
//                 Comprehensive evaluation of your current infrastructure, AI requirements, and cloud readiness.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="bg-gradient-to-r from-[#10002B] to-[#240046] rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
//                 <span className="text-white font-bold text-xl">02</span>
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">Architecture Design</h3>
//               <p className="text-gray-600">
//                 Custom cloud architecture design optimized for your AI workloads, security, and performance requirements.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="bg-gradient-to-r from-[#10002B] to-[#240046] rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
//                 <span className="text-white font-bold text-xl">03</span>
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">Implementation</h3>
//               <p className="text-gray-600">
//                 Seamless deployment and integration of AI services with rigorous testing and validation processes.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="bg-gradient-to-r from-[#10002B] to-[#240046] rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
//                 <span className="text-white font-bold text-xl">04</span>
//               </div>
//               <h3 className="text-xl font-bold mb-3 text-gray-900">Optimization</h3>
//               <p className="text-gray-600">
//                 Continuous monitoring, performance tuning, and cost optimization to ensure maximum ROI.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="py-16 md:py-24 bg-gradient-to-r from-[#10002B] to-[#240046] text-white">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#5A189A]">Scale</span> Your AI in the Cloud?
//           </h2>
//           <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
//             Let's architect and implement a cloud AI solution that grows with your business and delivers exceptional performance.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <a
//               href="/contact-us"
//               className="inline-block px-8 py-3 bg-gradient-to-r from-[#7B2CBF] to-[#5A189A] text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
//             >
//               Start Your Cloud AI Journey
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

// export default CloudAIIntegrationPage;
