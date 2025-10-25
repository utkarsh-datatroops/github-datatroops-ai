const SectionTitle = ({
  title,
  className = "text-3xl md:text-4xl",
  bottomColor = "",
}) => {
  if (!title) return null;

  return (
    <h1
      className={`text-[#003153] font-bold relative inline-block pb-2 ${className}`}
    >
      {title}
      <span
        className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-${bottomColor}`}
      ></span>
    </h1>
  );
};

export default SectionTitle;
