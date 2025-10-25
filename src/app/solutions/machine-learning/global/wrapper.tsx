import React from "react";
import { cn } from "@/utils/cn";

interface Props {
  className?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const Wrapper = ({
  children,
  className,
  size = "lg",
  padding = "md",
}: Props) => {
  const sizeClasses = {
    sm: "max-w-3xl", // ~768px
    md: "max-w-5xl", // ~1024px
    lg: "max-w-7xl", // ~1152px
    xl: "max-w-7xl", // ~1280px
    full: "max-w-full", // No max width
  };

  const paddingClasses = {
    none: "",
    sm: "px-4 sm:px-6",
    md: "px-4 sm:px-6 lg:px-8",
    lg: "px-4 sm:px-6 lg:px-12",
    xl: "px-4 sm:px-8 lg:px-16",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto",
        sizeClasses[size],
        paddingClasses[padding],
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
