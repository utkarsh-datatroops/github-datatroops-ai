"use client";

import { memo } from "react";
import TechnologyLogo from "./TechnologyLogo";
import TechnologyGridTitle from "./TechnologyGridTitle";
import LinkWrapper from "./LinkWrapper";
import TechnologyGridDescription from "./TechnologyGridDescription";

const TechnologyCard = ({ technology }) => {
  const { techName, image, pageUrl } = technology;
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <LinkWrapper pageUrl={pageUrl}>
      <div
        className="technology-card relative bg-white hover:border-gray-200 transition-all duration-200 mx-8 sm:mx-0 group flex flex-col items-center"
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-0 xl:p-4 flex justify-center items-center">
          <TechnologyLogo iconSrc={image?.src} alt={image?.alt} />
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
          {techName}
        </div>
      </div>
    </LinkWrapper>
  );
};

const TechnologyGrid = ({ technologies }) => {
  return (
    <div className="technology-grid grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-0 gap-y-4">
      {technologies.map((technology, idx) => (
        <TechnologyCard key={idx} technology={technology} />
      ))}
    </div>
  );
};

const TechnologySectionContent = ({ title, description }) => {
  return (
    <div className="technology-section-content lg:max-w-[45%] flex flex-col text-center md:text-left">
      <TechnologyGridTitle title={title} />
      <TechnologyGridDescription description={description} />
    </div>
  );
};

const TechnologySectionLayout = ({ service }) => {
  const { title, description, technologies } = service;

  return (
    <div className="technology-section-layout py-8 border-b border-gray-200 last:border-b-0 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-12 lg:gap-4">
        <TechnologySectionContent title={title} description={description} />
        <div className="flex-1">
          <TechnologyGrid technologies={technologies} />
        </div>
      </div>
    </div>
  );
};

export default memo(TechnologySectionLayout);
