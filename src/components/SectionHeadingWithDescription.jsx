import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";

const SectionHeadingWithDescription = ({
  title,
  description,
  description2,
  className = "mb-12 md:mb-16",
  bottomColor = "amber-400",
  titleClassName = "text-3xl md:text-4xl",
  descriptionClassname = "text-gray-600 max-w-3xl",
}) => {
  return (
    <div className={`text-center ${className}`}>
      <SectionTitle
        title={title}
        bottomColor={bottomColor}
        className={titleClassName}
      />
      <SectionDescription
        description={description}
        description2={description2}
        className={descriptionClassname}
      />
    </div>
  );
};

export default SectionHeadingWithDescription;
