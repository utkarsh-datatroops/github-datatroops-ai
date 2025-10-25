"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  Brain,
  Award,
  Clock,
  Zap,
  HardDrive,
  ChevronRight,
  ChevronLeft,
  BarChart2,
  Maximize2,
  Minimize2,
} from "lucide-react";

interface ModelMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  icon: React.ElementType;
  description: string;
  color: string;
}

interface Model {
  id: string;
  name: string;
  avatar: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  metrics: {
    [key: string]: number;
  };
  performance: number[];
}

const ModelComparisonSection: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>("neural-network");
  const [expandedView, setExpandedView] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Mouse position for interactive background effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform mouse position to create parallax effect
  const backgroundX = useTransform(mouseX, [0, window.innerWidth], [10, -10]);
  const backgroundY = useTransform(mouseY, [0, window.innerHeight], [10, -10]);
  const springBackgroundX = useSpring(backgroundX, {
    stiffness: 100,
    damping: 30,
  });
  const springBackgroundY = useSpring(backgroundY, {
    stiffness: 100,
    damping: 30,
  });

  // Handle mouse move for interactive background
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  // Intersection observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Scroll to selected model
  useEffect(() => {
    if (scrollContainerRef.current) {
      const selectedModelElement = document.getElementById(
        `model-${selectedModel}`,
      );
      if (selectedModelElement) {
        selectedModelElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [selectedModel]);

  // Model data
  const models: Model[] = [
    {
      id: "neural-network",
      name: "Neural Network",
      avatar: "🧠",
      description:
        "Deep multi-layer perceptron optimized for complex pattern recognition and classification tasks",
      strengths: [
        "Excellent at pattern recognition",
        "Handles complex non-linear relationships",
        "Highly adaptable to diverse data types",
      ],
      weaknesses: [
        "Requires significant training data",
        "Computationally intensive",
        "Black-box nature limits interpretability",
      ],
      metrics: {
        accuracy: 94.7,
        trainingTime: 3.2,
        inferenceSpeed: 12,
        memoryUsage: 450,
      },
      performance: [85, 92, 96, 94, 97, 93, 95],
    },
    {
      id: "random-forest",
      name: "Random Forest",
      avatar: "🌲",
      description:
        "Ensemble learning method using multiple decision trees for robust predictions and feature importance",
      strengths: [
        "Resistant to overfitting",
        "Provides feature importance",
        "Handles missing values well",
      ],
      weaknesses: [
        "Less effective with high-dimensional sparse data",
        "Limited expressiveness for complex patterns",
        "Large memory footprint for many trees",
      ],
      metrics: {
        accuracy: 92.3,
        trainingTime: 1.8,
        inferenceSpeed: 8,
        memoryUsage: 320,
      },
      performance: [88, 90, 91, 94, 92, 95, 93],
    },
    {
      id: "gradient-boosting",
      name: "Gradient Boosting",
      avatar: "🚀",
      description:
        "Sequential ensemble technique that builds models to correct errors of previous ones",
      strengths: [
        "High predictive accuracy",
        "Handles mixed data types well",
        "Robust to outliers",
      ],
      weaknesses: [
        "Prone to overfitting",
        "Sequential nature limits parallelization",
        "Sensitive to noisy data",
      ],
      metrics: {
        accuracy: 93.5,
        trainingTime: 2.4,
        inferenceSpeed: 15,
        memoryUsage: 380,
      },
      performance: [82, 89, 93, 96, 94, 92, 95],
    },
    {
      id: "deep-learning",
      name: "Deep Learning CNN",
      avatar: "📊",
      description:
        "Convolutional neural network optimized for image and spatial data processing",
      strengths: [
        "Exceptional for image and spatial data",
        "Automatic feature extraction",
        "Transfer learning capabilities",
      ],
      weaknesses: [
        "Very high computational requirements",
        "Needs large labeled datasets",
        "Complex hyperparameter tuning",
      ],
      metrics: {
        accuracy: 96.1,
        trainingTime: 5.7,
        inferenceSpeed: 22,
        memoryUsage: 780,
      },
      performance: [90, 94, 97, 95, 98, 96, 99],
    },
  ];

  // Metrics configuration
  const metrics: ModelMetric[] = [
    {
      id: "accuracy",
      name: "Accuracy",
      value: 0,
      unit: "%",
      icon: Award,
      description: "Percentage of correct predictions on test data",
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "trainingTime",
      name: "Training Time",
      value: 0,
      unit: "hrs",
      icon: Clock,
      description: "Time required to train the model on the dataset",
      color: "from-amber-500 to-orange-500",
    },
    {
      id: "inferenceSpeed",
      name: "Inference Speed",
      value: 0,
      unit: "ms",
      icon: Zap,
      description: "Average time to make a single prediction",
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "memoryUsage",
      name: "Memory Usage",
      value: 0,
      unit: "MB",
      icon: HardDrive,
      description: "Memory footprint of the deployed model",
      color: "from-purple-500 to-violet-500",
    },
  ];

  // Get current model
  const currentModel =
    models.find((model) => model.id === selectedModel) || models[0];

  // Calculate performance trend
  const calculateTrend = (performance: number[]): number => {
    if (performance.length < 2) return 0;
    const lastValue = performance[performance.length - 1];
    const previousValue = performance[performance.length - 2];
    return lastValue - previousValue;
  };

  // Get trend color
  const getTrendColor = (trend: number): string => {
    if (trend > 0) return "text-emerald-500";
    if (trend < 0) return "text-red-500";
    return "text-gray-400";
  };

  // Get performance level
  const getPerformanceLevel = (value: number): string => {
    if (value >= 95) return "Exceptional";
    if (value >= 90) return "Excellent";
    if (value >= 85) return "Very Good";
    if (value >= 80) return "Good";
    if (value >= 75) return "Above Average";
    return "Average";
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-black"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive background elements */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          x: springBackgroundX,
          y: springBackgroundY,
        }}
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full filter blur-[120px] transform translate-x-1/3 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full filter blur-[120px] transform -translate-x-1/3 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-pink-600/10 rounded-full filter blur-[120px] transform -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="inline-block">Next-Generation</span>{" "}
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">
              Model Comparison
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Explore our cutting-edge machine learning models with interactive
            visualizations and detailed performance metrics.
          </p>
        </motion.div>

        {/* View toggle */}
        <div className="flex justify-end mb-6">
          <motion.button
            onClick={() => setExpandedView(!expandedView)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/60 backdrop-blur-sm text-gray-300 hover:text-white border border-gray-700 hover:border-purple-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {expandedView ? (
              <>
                <Minimize2 className="w-4 h-4" />
                <span>Compact View</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-4 h-4" />
                <span>Expanded View</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Model selection carousel */}
        <div className="relative mb-12">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <motion.button
              onClick={() => {
                const currentIndex = models.findIndex(
                  (model) => model.id === selectedModel,
                );
                const prevIndex =
                  (currentIndex - 1 + models.length) % models.length;
                setSelectedModel(models[prevIndex].id);
              }}
              className="p-3 rounded-full bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:text-white border border-gray-700 hover:border-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <motion.button
              onClick={() => {
                const currentIndex = models.findIndex(
                  (model) => model.id === selectedModel,
                );
                const nextIndex = (currentIndex + 1) % models.length;
                setSelectedModel(models[nextIndex].id);
              }}
              className="p-3 rounded-full bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:text-white border border-gray-700 hover:border-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto py-4 px-12 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent snap-x"
          >
            {models.map((model, index) => (
              <motion.div
                id={`model-${model.id}`}
                key={model.id}
                className={`flex-shrink-0 w-[280px] p-6 rounded-xl snap-center cursor-pointer transition-all duration-300 ${selectedModel === model.id ? "bg-gradient-to-br from-purple-900/60 to-indigo-900/60 border-2 border-purple-500/70 shadow-lg shadow-purple-500/20" : "bg-gray-800/40 backdrop-blur-sm border border-gray-700 hover:border-purple-400/50"}`}
                onClick={() => setSelectedModel(model.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-900/80 rounded-lg">
                      <Brain className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="text-xl font-semibold text-white">
                      {model.avatar} {model.name}
                    </div>
                  </div>
                  {selectedModel === model.id && (
                    <motion.div
                      className="w-3 h-3 rounded-full bg-purple-500"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {model.description}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-900/60 p-2 rounded-lg">
                    <div className="text-xs text-gray-400">Accuracy</div>
                    <div className="text-lg font-bold text-white">
                      {model.metrics.accuracy}%
                    </div>
                  </div>
                  <div className="bg-gray-900/60 p-2 rounded-lg">
                    <div className="text-xs text-gray-400">Speed</div>
                    <div className="text-lg font-bold text-white">
                      {model.metrics.inferenceSpeed}ms
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Model details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedModel}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Performance visualization */}
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <BarChart2 className="w-6 h-6 text-purple-400" />
                  Performance Trends
                </h3>
                <div className="flex items-center gap-2 px-3 py-1 bg-gray-900/60 rounded-full">
                  <div
                    className={`w-2 h-2 rounded-full ${getTrendColor(calculateTrend(currentModel.performance))}`}
                  ></div>
                  <span
                    className={`text-sm font-medium ${getTrendColor(calculateTrend(currentModel.performance))}`}
                  >
                    {calculateTrend(currentModel.performance) > 0 ? "+" : ""}
                    {calculateTrend(currentModel.performance).toFixed(1)}%
                  </span>
                </div>
              </div>

              {/* Performance chart */}
              <div className="h-64 relative">
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gray-700"></div>
                <div className="absolute inset-y-0 left-0 w-[1px] bg-gray-700"></div>

                <div className="absolute inset-0 flex items-end justify-between px-2">
                  {currentModel.performance.map((value, index) => (
                    <motion.div
                      key={index}
                      className="w-[10%] bg-gradient-to-t from-purple-600 to-indigo-400 rounded-t-md relative group"
                      style={{ height: `${value}%` }}
                      initial={{ height: 0 }}
                      animate={{ height: `${value}%` }}
                      transition={{ duration: 0.7, delay: index * 0.1 }}
                    >
                      <motion.div
                        className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                      >
                        {value}%
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Day labels */}
                <div className="absolute bottom-[-24px] inset-x-0 flex justify-between px-2">
                  {currentModel.performance.map((_, index) => (
                    <div key={index} className="text-xs text-gray-400">
                      Day {index + 1}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">
                    Current Performance
                  </h4>
                  <div className="px-3 py-1 bg-gray-900/60 rounded-full text-sm text-white">
                    {getPerformanceLevel(
                      currentModel.performance[
                        currentModel.performance.length - 1
                      ],
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-800">
                    <h5 className="text-sm font-medium text-gray-300 mb-2">
                      Strengths
                    </h5>
                    <ul className="space-y-2">
                      {currentModel.strengths.map((strength, index) => (
                        <motion.li
                          key={index}
                          className="text-sm text-white flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                          {strength}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-800">
                    <h5 className="text-sm font-medium text-gray-300 mb-2">
                      Limitations
                    </h5>
                    <ul className="space-y-2">
                      {currentModel.weaknesses.map((weakness, index) => (
                        <motion.li
                          key={index}
                          className="text-sm text-white flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></div>
                          {weakness}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics details */}
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Performance Metrics
              </h3>

              <div className="space-y-6">
                {metrics.map((metric) => {
                  const metricValue =
                    currentModel.metrics[
                      metric.id as keyof typeof currentModel.metrics
                    ];
                  return (
                    <motion.div
                      key={metric.id}
                      className="bg-gray-900/60 rounded-lg p-5 border border-gray-800"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-br ${metric.color}`}
                          >
                            {React.createElement(metric.icon, {
                              className: "w-5 h-5 text-white",
                            })}
                          </div>
                          <h4 className="text-lg font-semibold text-white">
                            {metric.name}
                          </h4>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-white">
                            {metricValue}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {metric.unit}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm mb-4">
                        {metric.description}
                      </p>

                      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${metric.color}`}
                          initial={{ width: 0 }}
                          animate={{
                            width: `${(metricValue / getMaxValueForMetric(metric.id, models)) * 100}%`,
                          }}
                          transition={{ duration: 1, delay: 0.2 }}
                        ></motion.div>
                      </div>

                      {expandedView && (
                        <motion.div
                          className="mt-6 grid grid-cols-4 gap-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                        >
                          {models.map((model) => (
                            <div
                              key={`${metric.id}-${model.id}`}
                              className={`p-3 rounded-lg text-center ${model.id === selectedModel ? "bg-purple-900/40 border border-purple-500/50" : "bg-gray-800/60"}`}
                            >
                              <div className="text-xs text-gray-400 mb-1">
                                {model.name.split(" ")[0]}
                              </div>
                              <div className="text-sm font-semibold text-white">
                                {
                                  model.metrics[
                                    metric.id as keyof typeof model.metrics
                                  ]
                                }
                                {metric.unit}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                className="mt-8 p-4 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-lg border border-purple-800/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  Optimization Insights
                </h4>
                <p className="text-gray-300 text-sm">
                  {selectedModel === "neural-network" &&
                    "Our neural network model excels in accuracy but has room for improvement in training time and memory usage. We're implementing pruning techniques and distributed training to address these areas."}
                  {selectedModel === "random-forest" &&
                    "The random forest model offers excellent balance between performance and resource usage. Further optimization will focus on feature selection to improve accuracy while maintaining its efficiency advantages."}
                  {selectedModel === "gradient-boosting" &&
                    "Gradient boosting provides strong predictive power with moderate resource requirements. We're exploring early stopping and learning rate adjustments to further enhance its performance profile."}
                  {selectedModel === "deep-learning" &&
                    "While our CNN delivers superior accuracy, its resource demands are significant. Current optimization efforts include model quantization, architecture search, and hardware acceleration to improve efficiency."}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// Helper function to get maximum value for a metric across all models
function getMaxValueForMetric(metricId: string, models: Model[]): number {
  return Math.max(
    ...models.map(
      (model) => model.metrics[metricId as keyof typeof model.metrics],
    ),
  );
}

export default ModelComparisonSection;
