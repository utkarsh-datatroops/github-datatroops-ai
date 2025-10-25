// components/BlogPost.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/app/Types/blogTypes";
import Tooltip from "@/components/ToolTip";

interface BlogPostProps extends BlogPost {
  animationDelay?: number;
}

const BlogPostComponent: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  imageSrc,
  category,
  categoryColor = "bg-purple-100 text-purple-700",
  isHighlighted = false,
  url,
  animationDelay = 0,
}) => {
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      viewport={{ once: true }}
      className={twMerge(
        "rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all",
        isHighlighted ? "col-span-1 sm:col-span-2 lg:col-span-3" : "col-span-1",
      )}
    >
      <div className="relative overflow-hidden rounded-t-3xl">
        <Image
          src={imageSrc}
          alt={title}
          width={isHighlighted ? 800 : 400}
          height={isHighlighted ? 400 : 300}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          style={{
            height: isHighlighted ? "300px" : "220px",
            maxHeight: "400px",
          }}
          unoptimized={true}
        />
      </div>

      <div className="p-3 sm:p-4">
        {category && (
          <span
            className={`inline-block text-xs font-medium px-2 sm:px-3 py-1 mb-2 rounded-full ${categoryColor}`}
          >
            {category}
          </span>
        )}

        <h2
          className={`font-bold text-gray-100 mb-2 hover:text-blue-600 transition-colors ${
            isHighlighted
              ? "text-xl sm:text-2xl lg:text-3xl"
              : "text-lg sm:text-xl"
          }`}
        >
          {url ? (
            <Link href={url}>{title}</Link>
          ) : (
            <Tooltip message="Coming Soon" key={title}>
              {title}
            </Tooltip>
          )}
        </h2>

        <p className="text-gray-400 text-xs sm:text-sm mb-3 line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center mt-2 sm:mt-4">
          <div>
            {url ? (
              <Link href={url}>
                <span className="block text-xs sm:text-sm font-medium flex items-center text-blue-500 hover:underline">
                  Read More{" "}
                  <ArrowRight className="inline-block ml-1 h-4 w-4 transition-transform duration-200 transform hover:translate-x-1" />
                </span>
              </Link>
            ) : (
              <span className="block text-xs sm:text-sm font-medium text-gray-400">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default BlogPostComponent;
