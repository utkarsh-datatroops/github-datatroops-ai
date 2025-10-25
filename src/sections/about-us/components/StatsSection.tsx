"use client";

import React from "react";
import {
  FaRocket,
  FaGlobe,
  FaSmile,
  FaUserFriends,
  FaRobot,
} from "react-icons/fa";

const stats = [
  {
    value: "10+",
    label: "AI Projects Deployed",
    icon: FaRocket,
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    value: "12+",
    label: "Clients in Countries",
    icon: FaGlobe,
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    icon: FaSmile,
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    value: "100%+",
    label: "Client Retention",
    icon: FaUserFriends,
    color: "bg-gradient-to-br from-orange-500 to-red-500",
  },
  {
    value: "1k+",
    label: "Conversations Handled by Our AI Agents",
    icon: FaRobot,
    color: "bg-gradient-to-br from-indigo-500 to-violet-500",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-[#10002B] to-[#240046]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            DataTroopsAi By Numbers
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-14 h-14 rounded-full ${stat.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="text-white text-2xl" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
