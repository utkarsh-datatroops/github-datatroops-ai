"use client";

import React from "react";
import Tooltip from "@/components/ToolTip";
import Link from "next/link";
import { FeatureItem } from "@/app/Types/featureTypes";

const FeatureCard: React.FC<FeatureItem> = ({
  title,
  description,
  icon: Icon,
  href,
}) => {
  const cardContent = (
    <div className="bg-gray-900 bg-opacity-50 rounded-lg p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-purple-500">
      <div className="bg-gradient-to-r from-[#5A189A] to-[#7B2CBF] p-4 rounded-lg mb-6">
        <Icon />
      </div>
      <h3 className="text-white text-xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );

  return href ? (
    <Link href={href} className="block w-full h-full">
      {cardContent}
    </Link>
  ) : (
    <Tooltip message="Coming Soon" key={title}>
      {cardContent}
    </Tooltip>
  );
};

export default FeatureCard;
