import React, { memo, useMemo } from "react";
import { CARD_COLOR_CLASSES, cn } from "~/lib/utils";

const TechCategoryCard = memo(
  ({ title, description, icon, technologies, theme = "red" }) => {
    const colorClasses = useMemo(
      () => CARD_COLOR_CLASSES[theme] || CARD_COLOR_CLASSES.red,
      [theme],
    );

    const headerContent = useMemo(
      () => (
        <div className="categoryHeader flex items-start gap-4 mb-6">
          {icon && (
            <div className="categoryIcon flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-orange-500">
              <img
                src={icon.src}
                alt={icon.alt}
                className="iconImage w-full h-full object-contain"
              />
            </div>
          )}
          <div className="categoryContent">
            {title && (
              <h3 className="categoryTitle text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                {title}
              </h3>
            )}
            {description && (
              <p className="categoryDescription text-gray-600 text-sm md:text-base">
                {description}
              </p>
            )}
          </div>
        </div>
      ),
      [title, description, icon],
    );

    const technologyTags = useMemo(
      () => (
        <div className="techTagsContainer flex flex-wrap gap-2">
          {technologies &&
            technologies.map((tech, index) => (
              <div
                key={index}
                className={cn(
                  "techTag px-4 py-2 rounded-full text-sm bg-gray-50 text-gray-600 border border-gray-200",
                  `${colorClasses.hoverBadgeColor}`,
                  "hover:text-white",
                )}
              >
                {tech}
              </div>
            ))}
        </div>
      ),
      [technologies, colorClasses.hoverBadgeColor],
    );

    return (
      <div
        className={`categoryCard bg-white rounded-2xl p-6 md:p-8 relative border border-gray-100 shadow-md hover:shadow-xl 
      transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group`}
      >
        <div
          className={`absolute top-0 left-0 w-1 h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-b ${colorClasses.from} ${colorClasses.to}`}
        />
        {headerContent}
        {technologyTags}
      </div>
    );
  },
);

TechCategoryCard.displayName = "TechCategoryCard";

export default TechCategoryCard;
