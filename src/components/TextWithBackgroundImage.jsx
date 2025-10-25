import Link from "next/link";
import { memo } from "react";
import { ServiceIcon } from "../assets/icons/icons";
import TechnologyBackgroundImage from "@/assets/images/technology-page/laptop-screen-code.jpg";
import { Button } from "./Button";
import Image from "next/image";

const TextWithBackgroundImage = ({
  data,
  mobileImage,
  titleSizeFixed = false,
  imageFixedFromRight = false,
}) => {
  const imageMap = {
    "laptop-screen-code.jpg": TechnologyBackgroundImage,
  };

  return (
    data && (
      <div className="hero-wrapper relative w-full">
        {data?.image && (
          <Image
            src={imageMap[data.image.src]}
            alt={data.image.alt}
            className={`hero-image ${mobileImage ? "hidden md:block" : ""} object-cover ${imageFixedFromRight ? "object-right" : ""} w-full h-[70vh]`}
          />
        )}
        {mobileImage && (
          <Image
            src={imageMap[data.image.src]}
            alt={mobileImage.alt}
            className={`hero-image block md:hidden object-cover object-center w-full h-[70vh]`}
          />
        )}
        <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <div className="hero-content relative h-full">
          <div className="hero-text-content absolute bottom-12 left-0 max-w-xl md:max-w-2xl pl-8 md:pl-12 lg:pl-16">
            {data.title && (
              <h1
                className={`hero-title ${titleSizeFixed ? "text-3xl md:text-4xl" : "text-3xl md:text-5xl lg:text-6xl"} font-bold text-white leading-tight mb-4`}
              >
                {data.title}
              </h1>
            )}
            {data.description && (
              <p className="hero-description text-lg md:text-xl text-gray-100 leading-relaxed pr-4">
                {data.description}
              </p>
            )}
            {data.buttons?.length > 0 && (
              <div className="buttons-container flex flex-wrap gap-4 pt-6">
                {data.buttons.map((button, index) => {
                  return (
                    <Link
                      key={index}
                      href={button.href || "#"}
                      className="cursor-pointer"
                    >
                      <Button
                        variant={button.variant}
                        size={button.size}
                        className={`action-button group cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ${button.className}`}
                      >
                        <span className="button-text">{button.text}</span>
                        {button.hasIcon && (
                          <ServiceIcon
                            icon="chevron-right"
                            className="button-icon w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                          />
                        )}
                      </Button>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default memo(TextWithBackgroundImage);
