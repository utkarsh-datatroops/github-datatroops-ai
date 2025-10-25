import { memo } from "react";

const TechnologyGridTitle = ({ title, className = undefined }) => {
  return (
    <div className={`${className}`}>
      <h2
        className={`technology-grid-title-text text-[32px] ont-bold text-[#003153] mb-4 leading-tight`}
      >
        {title}
      </h2>
    </div>
  );
};

export default memo(TechnologyGridTitle);
