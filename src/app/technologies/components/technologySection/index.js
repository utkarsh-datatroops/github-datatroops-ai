import { memo } from "react";
import TechnologySectionLayout from "../../../../components/TechnologySectionLayout";
const TechnologySection = ({ services }) => {
  return (
    <div className="technology-section w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-[1400px] mx-auto md:mx-20">
        {services.map((service, index) => (
          <TechnologySectionLayout key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default memo(TechnologySection);
