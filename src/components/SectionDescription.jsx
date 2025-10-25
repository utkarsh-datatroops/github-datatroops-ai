const SectionDescription = ({
  description,
  description2,
  className = "text-gray-600 max-w-3xl",
}) => {
  return (
    description && (
      <>
        <p className={`mx-auto text-lg mt-8 pb-4  ${className}`}>
          {description}
        </p>
        {description2 && (
          <p className={`mx-auto text-lg pb-4 ${className}`}>{description2}</p>
        )}
      </>
    )
  );
};

export default SectionDescription;
