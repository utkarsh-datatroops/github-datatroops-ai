// "use client";

// import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Brain, TrendingUp, Award, Clock, Zap, HardDrive } from "lucide-react";

// interface ModelMetric {
//   name: string;
//   value: number;
//   change: number;
//   unit: string;
//   icon: React.ElementType;
//   description: string;
// }

// interface ModelPerformance {
//   name: string;
//   avatar: string;
//   description: string;
//   accuracy: number;
//   trainingTime: number;
//   inferenceSpeed: number;
//   memoryUsage: number;
//   dailyPerformance: ("excellent" | "good" | "average" | "poor")[];
// }

// const containerVariants = {
//   hidden: { opacity: 0, y: 40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// // const cardVariants = {
// //   hidden: { opacity: 0, scale: 0.9 },
// //   show: {
// //     opacity: 1,
// //     scale: 1,
// //     transition: {
// //       duration: 0.4,
// //       ease: "easeOut"
// //     }
// //   },
// //   exit: {
// //     opacity: 0,
// //     scale: 0.9,
// //     transition: {
// //       duration: 0.3,
// //       ease: "easeIn"
// //     }
// //   }
// // };

// const ModelPerformanceSection: React.FC = () => {
//   const [selectedModel, setSelectedModel] = useState<number>(0);
//   const [activeMetric, setActiveMetric] = useState<number>(0);
//   const [progress, setProgress] = useState<number>(0);
//   const [isVisible, setIsVisible] = useState<boolean>(false);
//   const progressInterval = useRef<NodeJS.Timeout | null>(null);
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const sectionRef = useRef<HTMLElement>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeftStart, setScrollLeftStart] = useState(0);
//   const animationFrameId = useRef<number | null>(null);

//   const models: ModelPerformance[] = [
//     {
//       name: "Neural Network Classifier",
//       avatar: "🧠",
//       description: "A multi-layer perceptron with deep architecture for complex pattern recognition",
//       accuracy: 94.7,
//       trainingTime: 3.2,
//       inferenceSpeed: 12,
//       memoryUsage: 450,
//       dailyPerformance: [
//         "excellent",
//         "good",
//         "excellent",
//         "excellent",
//         "good",
//         "excellent",
//         "excellent",
//       ],
//     },
//     {
//       name: "Random Forest",
//       avatar: "🌲",
//       description: "Ensemble learning method using multiple decision trees for robust predictions",
//       accuracy: 92.3,
//       trainingTime: 1.8,
//       inferenceSpeed: 8,
//       memoryUsage: 320,
//       dailyPerformance: [
//         "good",
//         "excellent",
//         "good",
//         "average",
//         "good",
//         "excellent",
//         "good",
//       ],
//     },
//     {
//       name: "Gradient Boosting",
//       avatar: "🚀",
//       description: "Sequential ensemble technique that builds models to correct errors of previous ones",
//       accuracy: 93.5,
//       trainingTime: 2.4,
//       inferenceSpeed: 15,
//       memoryUsage: 380,
//       dailyPerformance: [
//         "excellent",
//         "excellent",
//         "good",
//         "good",
//         "average",
//         "good",
//         "excellent",
//       ],
//     },
//     {
//       name: "Deep Learning CNN",
//       avatar: "📊",
//       description: "Convolutional neural network optimized for image and spatial data processing",
//       accuracy: 96.1,
//       trainingTime: 5.7,
//       inferenceSpeed: 22,
//       memoryUsage: 780,
//       dailyPerformance: [
//         "excellent",
//         "excellent",
//         "excellent",
//         "good",
//         "excellent",
//         "excellent",
//         "good",
//       ],
//     },
//   ];

//   // Calculate improvement percentages based on industry benchmarks
//   const getChangePercentage = useCallback((metric: string): number => {
//     const benchmarks = {
//       accuracy: {
//         "Neural Network Classifier": 1.2,
//         "Random Forest": 0.8,
//         "Gradient Boosting": 1.5,
//         "Deep Learning CNN": 2.3
//       },
//       trainingTime: {
//         "Neural Network Classifier": -0.5,
//         "Random Forest": -1.2,
//         "Gradient Boosting": -0.7,
//         "Deep Learning CNN": -1.8
//       },
//       inferenceSpeed: {
//         "Neural Network Classifier": 2.3,
//         "Random Forest": 1.5,
//         "Gradient Boosting": 3.1,
//         "Deep Learning CNN": 4.2
//       },
//       memoryUsage: {
//         "Neural Network Classifier": -15,
//         "Random Forest": -8,
//         "Gradient Boosting": -12,
//         "Deep Learning CNN": -20
//       }
//     };

//     const modelName = models[selectedModel].name;
//     return benchmarks[metric as keyof typeof benchmarks][modelName as keyof typeof benchmarks.accuracy];
//   }, [selectedModel, models]);

//   // Memoize metrics to prevent unnecessary recalculations
//   const metrics = useMemo<ModelMetric[]>(() => [
//     {
//       name: "Accuracy",
//       value: models[selectedModel].accuracy,
//       change: getChangePercentage("accuracy", models[selectedModel].accuracy),
//       unit: "%",
//       icon: Award,
//       description: "Percentage of correct predictions on test data"
//     },
//     {
//       name: "Training Time",
//       value: models[selectedModel].trainingTime,
//       change: getChangePercentage("trainingTime", models[selectedModel].trainingTime),
//       unit: "hrs",
//       icon: Clock,
//       description: "Time required to train the model on the dataset"
//     },
//     {
//       name: "Inference Speed",
//       value: models[selectedModel].inferenceSpeed,
//       change: getChangePercentage("inferenceSpeed", models[selectedModel].inferenceSpeed),
//       unit: "ms",
//       icon: Zap,
//       description: "Average time to make a single prediction"
//     },
//     {
//       name: "Memory Usage",
//       value: models[selectedModel].memoryUsage,
//       change: getChangePercentage("memoryUsage", models[selectedModel].memoryUsage),
//       unit: "MB",
//       icon: HardDrive,
//       description: "Memory footprint of the deployed model"
//     },
//   ], [selectedModel, models, getChangePercentage]);

//   // Intersection Observer to trigger animations when section is in view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   // Progress animation for active metric
//   useEffect(() => {
//     // Reset and restart progress animation when active metric changes
//     if (progressInterval.current) {
//       clearInterval(progressInterval.current);
//     }

//     setProgress(0);
//     progressInterval.current = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           if (progressInterval.current) {
//             clearInterval(progressInterval.current);
//           }
//           return 0;
//         }
//         return prev + 1;
//       });
//     }, 50);

//     return () => {
//       if (progressInterval.current) {
//         clearInterval(progressInterval.current);
//       }
//     };
//   }, [activeMetric]);

//   // Memoize the status color function to prevent unnecessary recalculations
//   const getStatusColor = useCallback((status: string) => {
//     switch (status) {
//       case "excellent":
//         return "bg-green-500";
//       case "good":
//         return "bg-blue-500";
//       case "average":
//         return "bg-yellow-500";
//       case "poor":
//         return "bg-red-500";
//       default:
//         return "bg-gray-500";
//     }
//   }, []);

//   // Get status label with emoji for better visual representation
//   const getStatusLabel = useCallback((status: string) => {
//     switch (status) {
//       case "excellent":
//         return "Excellent ✨";
//       case "good":
//         return "Good ✓";
//       case "average":
//         return "Average ⚠️";
//       case "poor":
//         return "Poor ⚠️";
//       default:
//         return "Unknown";
//     }
//   }, []);

//   // Handle mouse down event for drag scrolling
//   const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
//     if (!scrollRef.current) return;
//     setIsDragging(true);
//     setStartX(e.pageX);
//     setScrollLeftStart(scrollRef.current.scrollLeft);
//     scrollRef.current.style.cursor = "grabbing";
//     scrollRef.current.style.userSelect = "none";
//     e.preventDefault();
//   }, []);

//   // Handle touch start event for mobile drag scrolling
//   const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
//     if (!scrollRef.current) return;
//     setIsDragging(true);
//     setStartX(e.touches[0].pageX);
//     setScrollLeftStart(scrollRef.current.scrollLeft);
//   }, []);

//   // Handle mouse move event for drag scrolling
//   const handleMouseMove = useCallback((e: MouseEvent) => {
//     if (!isDragging || !scrollRef.current) return;
//     e.preventDefault();

//     if (animationFrameId.current) {
//       cancelAnimationFrame(animationFrameId.current);
//     }

//     animationFrameId.current = requestAnimationFrame(() => {
//       if (scrollRef.current) {
//         const walk = (e.pageX - startX) * 1.5; // Increased sensitivity
//         scrollRef.current.scrollLeft = scrollLeftStart - walk;
//       }
//     });
//   }, [isDragging, startX, scrollLeftStart]);

//   // Handle touch move event for mobile drag scrolling
//   const handleTouchMove = useCallback((e: TouchEvent) => {
//     if (!isDragging || !scrollRef.current) return;
//     e.preventDefault();

//     if (animationFrameId.current) {
//       cancelAnimationFrame(animationFrameId.current);
//     }

//     animationFrameId.current = requestAnimationFrame(() => {
//       if (scrollRef.current) {
//         const walk = (e.touches[0].pageX - startX) * 1.5; // Increased sensitivity
//         scrollRef.current.scrollLeft = scrollLeftStart - walk;
//       }
//     });
//   }, [isDragging, startX, scrollLeftStart]);

//   // Handle mouse up event to end drag scrolling
//   const handleMouseUp = useCallback(() => {
//     setIsDragging(false);
//     if (scrollRef.current) {
//       scrollRef.current.style.cursor = "grab";
//       scrollRef.current.style.userSelect = "auto";
//     }
//     if (animationFrameId.current) {
//       cancelAnimationFrame(animationFrameId.current);
//       animationFrameId.current = null;
//     }
//   }, []);

//   // Handle touch end event to end mobile drag scrolling
//   const handleTouchEnd = useCallback(() => {
//     setIsDragging(false);
//     if (animationFrameId.current) {
//       cancelAnimationFrame(animationFrameId.current);
//       animationFrameId.current = null;
//     }
//   }, []);

//   // Add and remove event listeners for drag scrolling
//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     window.addEventListener("touchmove", handleTouchMove, { passive: false });
//     window.addEventListener("touchend", handleTouchEnd);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//       window.removeEventListener("touchmove", handleTouchMove);
//       window.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

//   return (
//     <section
//       ref={sectionRef}
//       className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
//       aria-labelledby="model-performance-heading"
//     >
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
//         <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
//         <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-full filter blur-3xl"></div>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isVisible ? "show" : "hidden"}
//           className="text-center mb-16"
//         >
//           <h2
//             id="model-performance-heading"
//             className="text-4xl md:text-5xl font-bold text-white mb-4"
//           >
//             Machine Learning{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
//               Model Performance
//             </span>
//           </h2>
//           <div className="w-40 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
//           <p className="text-gray-300 max-w-3xl mx-auto text-lg">
//             Explore the performance metrics of our machine learning models and see how they compare across different dimensions.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Model Selection and Performance Grid */}
//           <motion.div
//             className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 border border-gray-700 shadow-xl"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
//               <Brain className="w-6 h-6 text-purple-400 mr-2" />
//               Model Comparison
//             </h3>

//             <div className="space-y-4">
//               {models.map((model, index) => (
//                 <motion.div
//                   key={index}
//                   className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${selectedModel === index ? 'bg-gradient-to-br from-purple-900/60 to-pink-900/60 border border-purple-500 shadow-lg shadow-purple-500/20' : 'bg-gray-700/60 hover:bg-gray-700/80 border border-gray-600 hover:border-purple-400/50'}`}
//                   onClick={() => setSelectedModel(index)}
//                   role="button"
//                   aria-pressed={selectedModel === index}
//                   tabIndex={0}
//                   onKeyDown={(e) => e.key === 'Enter' && setSelectedModel(index)}
//                   whileHover={{ scale: 1.01 }}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                 >
//                   <div className="flex items-center gap-3 min-w-0 flex-1">
//                     <div className="p-2 bg-gray-800 rounded-lg">
//                       <Brain className="w-5 h-5 text-purple-400 flex-shrink-0" />
//                     </div>
//                     <div>
//                       <span className="text-white font-medium truncate block">
//                         {model.name}
//                       </span>
//                       <span className="text-gray-400 text-xs">
//                         {model.description.substring(0, 40)}...
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
//                     <span className="text-2xl">{model.avatar}</span>
//                     <div className="text-purple-400 font-bold">
//                       {model.accuracy}%
//                     </div>
//                   </div>

//                   <div className="hidden md:grid grid-cols-7 gap-1">
//                     {model.dailyPerformance.map((perf, perfIndex) => (
//                       <div
//                         key={perfIndex}
//                         className={`w-6 h-6 rounded-full border-2 border-gray-600 ${getStatusColor(perf)} transition-all duration-300 hover:scale-110`}
//                         title={`Day ${perfIndex + 1}: ${getStatusLabel(perf)}`}
//                         aria-label={`Day ${perfIndex + 1}: ${getStatusLabel(perf)}`}
//                       ></div>
//                     ))}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Mobile-friendly performance visualization */}
//             <div className="mt-6 md:hidden">
//               <h4 className="text-sm font-semibold text-gray-300 mb-2">7-Day Performance</h4>
//               <div className="flex justify-between space-x-1">
//                 {models[selectedModel].dailyPerformance.map((perf, perfIndex) => (
//                   <div
//                     key={perfIndex}
//                     className={`flex-1 h-12 ${getStatusColor(perf)} rounded-md flex items-center justify-center text-xs font-medium text-white`}
//                     title={`Day ${perfIndex + 1}: ${getStatusLabel(perf)}`}
//                   >
//                     {perfIndex + 1}
//                   </div>
//                 ))}
//               </div>
//               <div className="flex justify-between text-xs text-gray-400 mt-1">
//                 <span>Day 1</span>
//                 <span>Today</span>
//               </div>
//             </div>

//             {/* Model quick stats */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
//               <div className="bg-gray-800/60 p-3 rounded-lg">
//                 <div className="text-xs text-gray-400">Accuracy</div>
//                 <div className="text-lg font-bold text-white">{models[selectedModel].accuracy}%</div>
//               </div>
//               <div className="bg-gray-800/60 p-3 rounded-lg">
//                 <div className="text-xs text-gray-400">Training</div>
//                 <div className="text-lg font-bold text-white">{models[selectedModel].trainingTime}h</div>
//               </div>
//               <div className="bg-gray-800/60 p-3 rounded-lg">
//                 <div className="text-xs text-gray-400">Speed</div>
//                 <div className="text-lg font-bold text-white">{models[selectedModel].inferenceSpeed}ms</div>
//               </div>
//               <div className="bg-gray-800/60 p-3 rounded-lg">
//                 <div className="text-xs text-gray-400">Memory</div>
//                 <div className="text-lg font-bold text-white">{models[selectedModel].memoryUsage}MB</div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Metrics Display */}
//           <motion.div
//             className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 border border-gray-700 shadow-xl"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//               <h3 className="text-2xl font-bold text-white mb-2 sm:mb-0">
//                 {models[selectedModel].name} Metrics
//               </h3>
//               <div className="flex items-center space-x-2 bg-gray-700/50 px-3 py-1 rounded-full">
//                 <TrendingUp className="w-4 h-4 text-purple-400" />
//                 <span className="text-sm text-gray-300">Performance Analysis</span>
//               </div>
//             </div>

//             <div
//               ref={scrollRef}
//               className="flex gap-4 overflow-x-auto pb-4 cursor-grab scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
//               onMouseDown={handleMouseDown}
//               onTouchStart={handleTouchStart}
//               aria-label="Scrollable metrics cards"
//             >
//               {metrics.map((metric, index) => {
//                 const MetricIcon = metric.icon;
//                 return (
//                   <motion.div
//                     key={index}
//                     className={`flex-shrink-0 w-72 p-6 rounded-xl ${activeMetric === index ? 'bg-gradient-to-br from-purple-900/60 to-pink-900/60 border border-purple-500 shadow-lg shadow-purple-500/20' : 'bg-gray-700/60 border border-gray-600'} cursor-pointer transition-all duration-300 hover:border-purple-400`}
//                     onClick={() => setActiveMetric(index)}
//                     role="button"
//                     aria-pressed={activeMetric === index}
//                     tabIndex={0}
//                     onKeyDown={(e) => e.key === 'Enter' && setActiveMetric(index)}
//                     whileHover={{ scale: 1.02 }}
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
//                     transition={{ duration: 0.4, delay: index * 0.1 }}
//                   >
//                     <div className="flex justify-between items-start mb-4">
//                       <div className="p-3 bg-gray-800/80 rounded-lg">
//                         <MetricIcon className="w-6 h-6 text-purple-400" />
//                       </div>
//                       <div className={`px-3 py-1 rounded-full text-xs font-medium ${metric.change > 0 ? 'bg-green-900/40 text-green-400' : 'bg-red-900/40 text-red-400'}`}>
//                         {metric.change > 0 ? '+' : ''}{metric.change}%
//                       </div>
//                     </div>
//                     <h4 className="text-lg font-semibold text-white mb-1">{metric.name}</h4>
//                     <div className="flex items-baseline gap-1">
//                       <span className="text-2xl font-bold text-white">{metric.value}</span>
//                       <span className="text-gray-400 text-sm">{metric.unit}</span>
//                     </div>
//                     <p className="mt-2 text-xs text-gray-400 line-clamp-2">
//                       {metric.description}
//                     </p>

//                     {activeMetric === index && (
//                       <motion.div
//                         className="mt-4"
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
//                           <motion.div
//                             className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
//                             style={{ width: `${progress}%` }}
//                             initial={{ width: '0%' }}
//                             animate={{ width: `${progress}%` }}
//                             transition={{ duration: 0.1, ease: 'linear' }}
//                             aria-valuenow={progress}
//                             aria-valuemin={0}
//                             aria-valuemax={100}
//                           ></motion.div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </motion.div>
//                 );
//               })}
//             </div>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeMetric}
//                 className="mt-8 bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-600 shadow-lg"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <h4 className="text-lg font-semibold text-white flex items-center">
//                     <span className="mr-2 text-purple-400">
//                       {React.createElement(metrics[activeMetric].icon, { className: "w-5 h-5" })}
//                     </span>
//                     {metrics[activeMetric].name} Details
//                   </h4>
//                   <div className="flex items-center space-x-2">
//                     <div className={`px-2 py-1 rounded-full text-xs font-medium ${metrics[activeMetric].change > 0 ? 'bg-green-900/40 text-green-400' : 'bg-red-900/40 text-red-400'}`}>
//                       {metrics[activeMetric].change > 0 ? '+' : ''}{metrics[activeMetric].change}%
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-gray-300 mb-6 text-sm leading-relaxed">
//                   {activeMetric === 0 && `This model achieves ${metrics[0].value}% accuracy on test data, representing a ${metrics[0].change}% improvement over the previous version. The confusion matrix shows excellent precision and recall across all classes.`}
//                   {activeMetric === 1 && `Training completes in ${metrics[1].value} hours, which is ${Math.abs(metrics[1].change)}% faster than the previous version. This efficiency gain comes from optimized hyperparameter tuning and parallel processing.`}
//                   {activeMetric === 2 && `The model processes inference requests in ${metrics[2].value}ms on average, a ${metrics[2].change}% improvement in speed. This makes it suitable for real-time applications with strict latency requirements.`}
//                   {activeMetric === 3 && `Memory footprint is ${metrics[3].value}MB, reduced by ${Math.abs(metrics[3].change)}% through model pruning and quantization techniques while maintaining accuracy.`}
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                   <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700">
//                     <div className="text-sm text-gray-400 mb-1">Previous</div>
//                     <div className="text-lg font-semibold text-white">
//                       {activeMetric === 0 && `${(metrics[0].value - metrics[0].change).toFixed(1)}%`}
//                       {activeMetric === 1 && `${(metrics[1].value + Math.abs(metrics[1].change)).toFixed(1)} hrs`}
//                       {activeMetric === 2 && `${(metrics[2].value - metrics[2].change).toFixed(1)} ms`}
//                       {activeMetric === 3 && `${(metrics[3].value + Math.abs(metrics[3].change)).toFixed(0)} MB`}
//                     </div>
//                   </div>
//                   <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700">
//                     <div className="text-sm text-gray-400 mb-1">Current</div>
//                     <div className="text-lg font-semibold text-white">
//                       {activeMetric === 0 && `${metrics[0].value}%`}
//                       {activeMetric === 1 && `${metrics[1].value} hrs`}
//                       {activeMetric === 2 && `${metrics[2].value} ms`}
//                       {activeMetric === 3 && `${metrics[3].value} MB`}
//                     </div>
//                   </div>
//                   <div className="bg-gray-800/70 p-4 rounded-lg border border-gray-700">
//                     <div className="text-sm text-gray-400 mb-1">Target</div>
//                     <div className="text-lg font-semibold text-white">
//                       {activeMetric === 0 && `${(metrics[0].value + 1.5).toFixed(1)}%`}
//                       {activeMetric === 1 && `${(metrics[1].value - 0.3).toFixed(1)} hrs`}
//                       {activeMetric === 2 && `${(metrics[2].value - 3).toFixed(1)} ms`}
//                       {activeMetric === 3 && `${(metrics[3].value - 50).toFixed(0)} MB`}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
//                   <h5 className="text-sm font-semibold text-white mb-2">Optimization Strategy</h5>
//                   <p className="text-gray-400 text-sm">
//                     {activeMetric === 0 && "We're improving accuracy through ensemble techniques and advanced data augmentation strategies to enhance model generalization."}
//                     {activeMetric === 1 && "Our training optimization focuses on distributed computing and curriculum learning to reduce overall training time while maintaining quality."}
//                     {activeMetric === 2 && "We're implementing model distillation and hardware-specific optimizations to further reduce inference latency for real-time applications."}
//                     {activeMetric === 3 && "Memory efficiency improvements include quantization, pruning, and knowledge distillation to create lighter models without sacrificing performance."}
//                   </p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             {/* Scroll indicator */}
//             <div className="mt-4 flex justify-center">
//               <div className="text-xs text-gray-500 flex items-center">
//                 <span className="mr-2">←</span>
//                 <span>Scroll for more metrics</span>
//                 <span className="ml-2">→</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <style jsx>{`
//         div::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ModelPerformanceSection;
