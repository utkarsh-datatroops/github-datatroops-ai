import { memo } from "react";

const TechnologyGridDescription = ({ description, className = undefined }) => {
  return (
    <div className={`${className}`}>
      <p className="technology-grid-description-text text-base text-gray-600 leading-relaxed max-w-[600px]">
        {description}
      </p>
    </div>
  );
};

export default memo(TechnologyGridDescription);
