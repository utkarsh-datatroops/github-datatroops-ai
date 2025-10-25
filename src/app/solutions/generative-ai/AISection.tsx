import React, { useState } from "react";
import {
  Search,
  MessageSquare,
  Brain,
  Zap,
  Target,
  TrendingUp,
  AlertCircle,
  User,
} from "lucide-react";

interface AIModel {
  name: string;
  avatar: string;
  status: "active" | "training" | "idle";
  accuracy: number;
  issues: number;
  performance: ("excellent" | "good" | "average" | "needs-improvement")[];
}

const AIFeaturesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("Machine Learning");
  const aiModels: AIModel[] = [
    {
      name: "GPT-Neo",
      avatar: "🤖",
      status: "active",
      accuracy: 97,
      issues: 2,
      performance: [
        "excellent",
        "excellent",
        "good",
        "excellent",
        "excellent",
        "good",
        "excellent",
      ],
    },
    {
      name: "DALL-E",
      avatar: "🎨",
      status: "active",
      accuracy: 94,
      issues: 0,
      performance: [
        "good",
        "excellent",
        "excellent",
        "excellent",
        "excellent",
        "good",
        "excellent",
      ],
    },
    {
      name: "Claude",
      avatar: "🧠",
      status: "training",
      accuracy: 89,
      issues: 1,
      performance: [
        "excellent",
        "good",
        "excellent",
        "excellent",
        "excellent",
        "good",
        "excellent",
      ],
    },
    {
      name: "Whisper",
      avatar: "🎙️",
      status: "active",
      accuracy: 92,
      issues: 0,
      performance: [
        "excellent",
        "good",
        "good",
        "excellent",
        "excellent",
        "good",
        "excellent",
      ],
    },
    {
      name: "Midjourney",
      avatar: "🌟",
      status: "idle",
      accuracy: 96,
      issues: 0,
      performance: [
        "excellent",
        "good",
        "excellent",
        "excellent",
        "excellent",
        "good",
        "excellent",
      ],
    },
  ];

  const chatMessages = [
    {
      user: "Sarah Chen",
      avatar: "👩‍💼",
      question:
        "Can you remind me what our latest AI model said about content generation?",
      response:
        "Certainly! Our latest model shows 95% accuracy in content generation with significant improvements in contextual understanding and creativity metrics.",
    },
    {
      user: "Mike Johnson",
      avatar: "👨‍💻",
      question:
        "OK. Can you extract performance data and share them with the development team?",
      response:
        "I've compiled the performance metrics and shared them with the dev team. Key highlights include 23% faster processing and 18% better accuracy.",
    },
  ];

  const searchResults = [
    {
      time: "09:45",
      text: "AI model training completed successfully with 97% accuracy rate...",
      team: "ML Team",
    },
    {
      time: "14:30",
      text: "Natural language processing improvements show 23% better understanding...",
      team: "NLP Team",
    },
    {
      time: "16:15",
      text: "Computer vision model deployment scheduled for next week...",
      team: "Vision Team",
    },
    {
      time: "11:20",
      text: "Generative AI performance metrics indicate optimal efficiency...",
      team: "Gen AI Team",
    },
    {
      time: "13:45",
      text: "Deep learning architecture optimization reduced latency by 40%...",
      team: "Deep Learning Team",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "training":
        return "bg-orange-500";
      case "idle":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">
              Monthly AI Performance Report
            </h2>
            <p className="text-slate-400 mb-6">
              Receive monthly reports about the top performance metrics &
              optimization opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <h3 className="text-white font-semibold">Model Failures</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Total Issues:</span>
                    <span className="text-red-400 font-semibold">$125,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Number of Models:</span>
                    <span className="text-red-400 font-semibold">3</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-slate-400">Key Issues:</span>
                    <span className="text-red-400 ml-1">
                      Data quality concerns were cited in 2 out of 3 failed
                      deployments
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-orange-400" />
                  <h3 className="text-white font-semibold">
                    Optimization Needed
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Total Value:</span>
                    <span className="text-orange-400 font-semibold">
                      $2,300,000
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Number of Models:</span>
                    <span className="text-orange-400 font-semibold">6</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-slate-400">Key Reasons:</span>
                    <span className="text-orange-400 ml-1">
                      Performance bottlenecks are causing delays in inference
                      speed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">
              AI Model Search & Insights
            </h2>
            <p className="text-slate-400 mb-6">
              Easily search your entire AI workspace to instantly find the
              insights you need.
            </p>

            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search AI models, metrics, logs..."
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                <Brain className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">GPT-Neo</span>
                <User className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400 text-sm">AI Researcher</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">ML Pipeline</span>
                <Target className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400 text-sm">Best performance</span>
              </div>

              <div className="text-sm text-slate-500 mb-3">
                Training session - 15/03/2024 📊 ML Team
              </div>

              <div className="space-y-2">
                {searchResults.map((result, index) => (
                  <div key={index} className="text-sm">
                    <span className="text-blue-400">{result.time}</span>
                    <span className="text-slate-300 ml-2">
                      ...{result.text.substring(0, 50)}...
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">
              Ask anything about your AI models
            </h2>
            <p className="text-slate-400 mb-6">
              Let our AI assistant answer your questions so you&apos;re always
              up-to-date.
            </p>

            <div className="space-y-4">
              {chatMessages.map((chat, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl">{chat.avatar}</div>
                    <div className="flex-1">
                      <div className="text-white text-sm mb-1">
                        {chat.question}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-blue-300 font-medium text-sm mb-1">
                        AI Assistant
                      </div>
                      <div className="text-slate-300 text-sm">
                        {chat.response}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask about model performance, training data, or optimization..."
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-4 pr-12 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-blue-400 hover:text-blue-300">
                  <MessageSquare className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-2">
              AI Model Performance & Insights
            </h2>
            <p className="text-slate-400 mb-6">
              Review all your AI models & plan your next optimizations on
              autopilot.
            </p>

            <div className="grid grid-cols-7 gap-2 mb-4 text-center text-sm text-slate-400">
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
              <div>S</div>
            </div>

            <div className="space-y-4">
              {aiModels.map((model, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <Brain className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-white font-medium truncate">
                      {model.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{model.avatar}</span>
                    <div
                      className={`w-3 h-3 rounded-full ${getStatusColor(model.status)}`}
                    ></div>
                    {model.issues > 0 && (
                      <div className="flex items-center gap-1">
                        <span className="text-red-400 font-bold text-sm">
                          {model.issues}
                        </span>
                        <span className="text-red-400 text-sm">✕</span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {model.performance.map((perf, perfIndex) => (
                      <div
                        key={perfIndex}
                        className={`w-6 h-6 rounded-full border-2 border-slate-600 ${
                          perf === "excellent"
                            ? "bg-green-500"
                            : perf === "good"
                              ? "bg-blue-500"
                              : perf === "average"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFeaturesSection;
