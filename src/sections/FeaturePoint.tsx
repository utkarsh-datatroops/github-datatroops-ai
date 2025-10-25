import { CheckCircle } from "lucide-react";

export const FeaturePoint = ({ text }: { text: string }) => (
  <div className="flex items-center">
    <CheckCircle className="text-[var(--color-E0AAFF)] h-5 w-5 mr-2" />
    <span className="text-gray-100">{text}</span>
  </div>
);
