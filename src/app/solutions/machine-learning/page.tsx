"use client";

import React from "react";
import Background from "./global/background";
import Container from "./global/container";
import Wrapper from "./global/wrapper";
import { Particles } from "./ui/particles";
import Link from "next/link";
// import ModelPerformanceSection from "./components/ModelPerformanceSection";

// Icons
const BrainIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-purple-400"
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 2 17.5v-11a2.5 2.5 0 0 1 2.81-2.5L9.5 2Z"></path>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 22 17.5v-11a2.5 2.5 0 0 0-2.81-2.5L14.5 2Z"></path>
  </svg>
);

const ChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-purple-400"
  >
    <path d="M3 3v18h18"></path>
    <path d="m19 9-5 5-4-4-3 3"></path>
  </svg>
);

const TargetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-purple-400"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const DatabaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-purple-400"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
    <path d="M3 12a9 3 0 0 0 18 0"></path>
  </svg>
);

const CogIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-purple-400"
  >
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

const TrendingUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-purple-400"
  >
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"></polyline>
    <polyline points="16,7 22,7 22,13"></polyline>
  </svg>
);

// Hero Section Component
const HeroSection = () => (
  <div className="text-center py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <BrainIcon />
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Machine Learning
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Solutions
        </span>
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
        Harness the power of machine learning to transform your data into
        actionable insights. Our advanced ML algorithms enable predictive
        analytics, pattern recognition, and intelligent decision-making that
        drives business growth.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/contact-us">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </Link>
        <Link href="/solutions">
        <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
          Learn More
        </button>
        </Link>
        
      </div>
    </div>
  </div>
);

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: ChartIcon,
      title: "Predictive Analytics",
      description:
        "Forecast future trends and outcomes with advanced statistical models and machine learning algorithms.",
    },
    {
      icon: TargetIcon,
      title: "Pattern Recognition",
      description:
        "Identify hidden patterns and relationships in your data to uncover valuable business insights.",
    },
    {
      icon: DatabaseIcon,
      title: "Data Processing",
      description:
        "Handle large-scale data processing and feature engineering for optimal model performance.",
    },
    {
      icon: CogIcon,
      title: "Model Optimization",
      description:
        "Fine-tune machine learning models for maximum accuracy and efficiency in real-world applications.",
    },
    {
      icon: TrendingUpIcon,
      title: "Performance Monitoring",
      description:
        "Continuously monitor and improve model performance with automated tracking and alerts.",
    },
    {
      icon: BrainIcon,
      title: "Custom Algorithms",
      description:
        "Develop tailored machine learning solutions specific to your industry and business requirements.",
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our ML Capabilities
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            From data preprocessing to model deployment, we provide end-to-end
            machine learning solutions that transform your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 bg-opacity-50 rounded-lg p-8 border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <feature.icon />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Use Cases Section Component
const UseCasesSection = () => {
  const useCases = [
    {
      title: "Financial Services",
      description:
        "Risk assessment, fraud detection, algorithmic trading, and credit scoring solutions.",
      applications: [
        "Credit Risk Modeling",
        "Fraud Detection",
        "Portfolio Optimization",
        "Regulatory Compliance",
      ],
    },
    {
      title: "Healthcare",
      description:
        "Medical diagnosis, drug discovery, patient outcome prediction, and treatment optimization.",
      applications: [
        "Medical Imaging Analysis",
        "Drug Discovery",
        "Patient Risk Assessment",
        "Treatment Personalization",
      ],
    },
    {
      title: "E-commerce",
      description:
        "Recommendation systems, demand forecasting, price optimization, and customer segmentation.",
      applications: [
        "Product Recommendations",
        "Demand Forecasting",
        "Dynamic Pricing",
        "Customer Lifetime Value",
      ],
    },
    {
      title: "Manufacturing",
      description:
        "Predictive maintenance, quality control, supply chain optimization, and process automation.",
      applications: [
        "Predictive Maintenance",
        "Quality Assurance",
        "Supply Chain Optimization",
        "Process Control",
      ],
    },
  ];

  return (
    <div className="py-20 px-4 bg-gray-900 bg-opacity-30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Industry Applications
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our machine learning solutions are tailored for various industries,
            delivering measurable results across different business domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 rounded-lg p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {useCase.title}
              </h3>
              <p className="text-gray-300 mb-6">{useCase.description}</p>
              <div className="space-y-2">
                {useCase.applications.map((app, appIndex) => (
                  <div key={appIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// CTA Section Component
const CTASection = () => (
  <div className="py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-white mb-6">
        Ready to Transform Your Business with Machine Learning?
      </h2>
      <p className="text-xl text-gray-300 mb-8">
        Let our experts help you implement cutting-edge machine learning
        solutions that drive real business value and competitive advantage.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/contact-us">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
            Start Your ML Journey
          </button>
        </Link>
        <Link href="/about-us">
          <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
            Learn About Our Team
          </button>
        </Link>
      </div>
    </div>
  </div>
);

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      position: "Data Science Director, FinTech Solutions",
      quote:
        "The machine learning models developed by DataTroops have transformed our ability to detect fraud patterns, saving us millions in potential losses.",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      name: "Michael Rodriguez",
      position: "CTO, HealthTech Innovations",
      quote:
        "Implementing predictive analytics for patient outcomes has been a game-changer for our hospital network. The accuracy of these models exceeds anything we've used before.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Priya Sharma",
      position: "VP of Engineering, RetailX",
      quote:
        "The custom recommendation engine has increased our customer engagement by 40%. The ROI on this machine learning solution has been exceptional.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "James Wilson",
      position: "Head of Operations, LogiTech",
      quote:
        "Our supply chain optimization has reached new levels of efficiency with these ML algorithms. We've reduced costs while improving delivery times.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Hear from organizations that have transformed their operations with
            our machine learning solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 rounded-lg p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-purple-400">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-purple-400">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
import manufacturing from '@/assets/images/ml/simon-kadula-8gr6bObQLOI-unsplash (1).jpg'
import laptop from '@/assets/images/ml/photo-1556155092-490a1ba16284.jpeg'
import Image from "next/image";
// Case Studies Section Component
const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Predictive Maintenance for Manufacturing",
      company: "Global Motors Inc.",
      challenge:
        "Frequent unexpected equipment failures leading to costly downtime",
      solution:
        "Implemented IoT sensors and ML algorithms to predict maintenance needs",
      results: [
        "85% reduction in unplanned downtime",
        "$2.3M annual maintenance cost savings",
        "Extended equipment lifespan by 30%",
      ],
      image: manufacturing,
    },
    {
      title: "Customer Churn Prediction for Telecom",
      company: "ConnectNet Services",
      challenge:
        "High customer attrition rate with limited visibility into causes",
      solution:
        "Developed ML models to identify at-risk customers and intervention opportunities",
      results: [
        "42% reduction in customer churn",
        "$5.7M increase in annual recurring revenue",
        "Improved customer satisfaction scores by 28%",
      ],
      image:
        laptop,
    },
  ];

  return (
    <div className="py-20 px-4 bg-gray-900 bg-opacity-30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Real-world examples of how our machine learning solutions have
            delivered measurable business impact.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div
                className={`rounded-lg overflow-hidden h-64 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Image src={study.image} alt={study.title} width={40}  height={40} className="w-full h-full object-cover"/>
                {/* <img 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {study.title}
                </h3>
                <p className="text-purple-400 mb-4">{study.company}</p>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Challenge:
                  </h4>
                  <p className="text-gray-300">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Solution:
                  </h4>
                  <p className="text-gray-300">{study.solution}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Results:
                  </h4>
                  <ul className="text-gray-300 list-disc pl-5 space-y-1">
                    {study.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// FAQ Section Component
const FAQSection = () => {
  const faqs = [
    {
      question: "What types of machine learning models do you specialize in?",
      answer:
        "We specialize in a wide range of machine learning models including supervised learning (regression, classification), unsupervised learning (clustering, dimensionality reduction), reinforcement learning, and deep learning architectures. Our expertise spans traditional statistical models to cutting-edge neural networks.",
    },
    {
      question:
        "How much data is required to build an effective machine learning solution?",
      answer:
        "The data requirements vary based on the complexity of the problem and the type of model. Generally, more complex problems require larger datasets. However, we have techniques to work with limited data, including transfer learning, data augmentation, and synthetic data generation. We'll assess your specific needs during the consultation phase.",
    },
    {
      question:
        "How long does it take to develop and deploy a machine learning solution?",
      answer:
        "Timeline varies based on project scope, data readiness, and complexity. Simple models might be deployed in 4-6 weeks, while complex enterprise solutions could take 3-6 months. We follow an agile methodology with regular milestones and deliverables to ensure transparency throughout the development process.",
    },
    {
      question: "How do you ensure the security and privacy of our data?",
      answer:
        "We implement industry-standard security protocols including encryption, secure access controls, and anonymization techniques. We're compliant with regulations like GDPR and HIPAA where applicable. All data handling follows strict privacy policies, and we can work within your existing security infrastructure.",
    },
    {
      question:
        "Can your machine learning solutions integrate with our existing systems?",
      answer:
        "Yes, our solutions are designed with integration in mind. We develop APIs and connectors for seamless integration with your existing infrastructure, whether it's cloud-based or on-premises. We have experience integrating with various databases, CRMs, ERPs, and custom systems.",
    },
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Get answers to common questions about our machine learning solutions
            and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border ${openIndex === index ? "border-purple-500" : "border-gray-700"} rounded-lg overflow-hidden transition-all duration-300`}
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left bg-gray-800 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-purple-400 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="p-6 text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component
function MachineLearningPage() {
  return (
    <div className="min-h-screen">
      <Background>
        <Particles
          refresh
          ease={80}
          color="#d4d4d8"
          quantity={100}
          className="absolute inset-0 w-full h-full"
        />
        <Wrapper className="relative">
          <Container>
            <HeroSection />
            <FeaturesSection />
            <UseCasesSection />
            {/* <ModelPerformanceSection /> */}
            <TestimonialsSection />
            <CaseStudiesSection />
            <FAQSection />
            <CTASection />
          </Container>
        </Wrapper>
      </Background>
    </div>
  );
}

export default MachineLearningPage;
