// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import Image, { StaticImageData } from "next/image";
// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { twMerge } from "tailwind-merge";
// import Link from "next/link";

// import blogsImage from "@/assets/images/blogs.avif";
// import blogsImage2 from "@/assets/images/test-2.avif";
// import blogsImage3 from "@/assets/images/test-3.avif";
// import blogsImage4 from "@/assets/images/test-4.jpg";
// import Tooltip from "@/components/ToolTip";
// import { ArrowRight } from "lucide-react";

// interface BlogPostProps {
//   title: string;
//   excerpt: string;
//   imageSrc: string | StaticImageData;
//   category: string;
//   categoryColor?: string;
//   isHighlighted?: boolean;
//   url?: string; // Add this optional prop
// }

// const BlogPost: React.FC<BlogPostProps> = ({
//   title,
//   excerpt,
//   imageSrc,
//   category,
//   categoryColor = "bg-purple-100 text-purple-700",
//   isHighlighted = false,
//   url, // Destructure the URL prop
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className={twMerge(
//         "rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all",
//         isHighlighted ? "col-span-1 sm:col-span-2 lg:col-span-3" : "col-span-1",
//       )}
//     >
//       <div className="relative overflow-hidden rounded-t-3xl">
//         <Image
//           src={imageSrc}
//           alt={title}
//           width={isHighlighted ? 800 : 400}
//           height={isHighlighted ? 400 : 300}
//           className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
//           style={{
//             height: isHighlighted ? "300px" : "220px",
//             maxHeight: "400px",
//           }}
//           unoptimized={true}
//         />
//       </div>

//       <div className="p-3 sm:p-4">
//         {category && (
//           <span
//             className={`inline-block text-xs font-medium px-2 sm:px-3 py-1 mb-2 rounded-full ${categoryColor}`}
//           >
//             {category}
//           </span>
//         )}

//         <h2
//           className={`font-bold text-gray-100 mb-2 hover:text-blue-600 transition-colors ${
//             isHighlighted
//               ? "text-xl sm:text-2xl lg:text-3xl"
//               : "text-lg sm:text-xl"
//           }`}
//         >
//           {url ? (
//             <Link href={url}>
//               {/* <a> */}
//               {/* <Tooltip message="Coming Soon" key={title}> */}
//               {title}
//               {/* </Tooltip> */}
//               {/* </a> */}
//             </Link>
//           ) : (
//             <Tooltip message="Coming Soon" key={title}>
//               {title}
//             </Tooltip>
//           )}
//           {/* <Tooltip message="Coming Soon" key={title}>
//             {title}
//           </Tooltip> */}
//         </h2>
//         <p className="text-gray-400 text-xs sm:text-sm mb-3 line-clamp-2">
//           {excerpt}
//         </p>

//         <div className="flex items-center mt-2 sm:mt-4">
//           <div>
//             {/* &apos; */}
//             {url ? (
//               <Link href={url}>
//                 <span className="block text-xs sm:text-sm font-medium flex items-center text-blue-500 hover:underline">
//                   {"Read More"}{" "}
//                   <ArrowRight className="inline-block ml-1 h-4 w-4 transition-transform duration-200 transform hover:translate-x-1" />
//                 </span>
//               </Link>
//             ) : (
//               <span className="block text-xs sm:text-sm font-medium text-gray-400">
//                 Coming Soon
//               </span>
//             )}
//             {/* {url ? <Link href={url}>
//               <span className="block text-xs sm:text-sm font-medium">
//                 {'Read More'}
//                 <ArrowRight className="inline-block ml-1 h-3 w-3 text-blue-500 hover:translate-x-2" />
//               </span>
//             </Link> : <span className="block text-xs sm:text-sm font-medium">
//               {'Coming Soon'}
//             </span>} */}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//     // </Tooltip>
//   );
// };

// const BlogSection: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const sliderRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 640);
//     };

//     checkIfMobile();
//     window.addEventListener("resize", checkIfMobile);

//     return () => {
//       window.removeEventListener("resize", checkIfMobile);
//     };
//   }, []);

//   const blogPosts: BlogPostProps[] = [
//     {
//       title: "How To Choose The Perfect AI Chatbot For Your Business",
//       excerpt:
//         "Learn how to select the ideal AI chatbot to enhance your customer service, automate responses, and improve operational efficiency for your business.",
//       imageSrc: blogsImage,
//       category: "AI Solutions",
//       categoryColor: "bg-purple-100 text-purple-700",
//       isHighlighted: true,
//       url: "blog/how-to-choose-perfect-ai-chatbot-for-your-business",
//     },
//     {
//       title: "AI in Healthcare: Revolutionizing Patient Care",
//       excerpt:
//         "Explore how AI is revolutionizing healthcare, improving diagnostics, patient care, and operational efficiency across the globe.",
//       imageSrc: blogsImage2,
//       category: "Healthcare Innovation",
//       categoryColor: "bg-green-100 text-green-700",
//     },
//     {
//       title: "The Role of AI in E-Commerce: Enhancing User Experience",
//       excerpt:
//         "AI is transforming the e-commerce landscape by delivering personalized shopping experiences, optimizing inventory, and boosting sales. Learn how businesses can thrive using AI.",
//       imageSrc: blogsImage3,
//       category: "E-Commerce",
//       categoryColor: "bg-pink-100 text-pink-700",
//     },
//     {
//       title: "How Deep Learning Is Changing the Financial Industry",
//       excerpt:
//         "Discover how deep learning models are reshaping financial services by enabling better fraud detection, risk management, and predictive market insights.",
//       imageSrc: blogsImage4,
//       category: "FinTech",
//       categoryColor: "bg-blue-100 text-blue-700",
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));
//   };

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   useEffect(() => {
//     if (!sliderRef.current || !isMobile) return;

//     let startX: number;

//     const handleTouchStart = (e: TouchEvent) => {
//       startX = e.touches[0].clientX;
//     };

//     const handleTouchEnd = (e: TouchEvent) => {
//       const endX = e.changedTouches[0].clientX;
//       const diff = startX - endX;

//       if (Math.abs(diff) > 50) {
//         if (diff > 0) {
//           nextSlide();
//         } else {
//           prevSlide();
//         }
//       }
//     };

//     const slider = sliderRef.current;
//     slider.addEventListener("touchstart", handleTouchStart);
//     slider.addEventListener("touchend", handleTouchEnd);

//     return () => {
//       slider.removeEventListener("touchstart", handleTouchStart);
//       slider.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, [isMobile, nextSlide, prevSlide]);

//   return (
//     <section className="py-8 sm:py-12 px-4 ">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white mb-4">Our Latest Blogs</h2>
//         <div className="mt-4 flex justify-center">
//           <div className="w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]" />
//         </div>
//         <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
//           At DataTroops.ai, we share valuable insights on AI-driven solutions,
//           the latest in tech innovations, and how AI is shaping industries. Stay
//           updated with our articles.
//         </p>
//       </div>
//       <div className="max-w-7xl mx-auto">
//         {isMobile ? (
//           <div className="relative" ref={sliderRef}>
//             {/* Mobile Slider */}
//             <div className="overflow-hidden">
//               <div
//                 className="flex transition-transform duration-300 ease-in-out"
//                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//               >
//                 {blogPosts.map((post) => (
//                   <div key={post.title} className="w-full flex-shrink-0">
//                     <BlogPost {...post} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {/* Navigation Buttons */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10"
//               aria-label="Previous slide"
//             >
//               <FontAwesomeIcon
//                 icon={faArrowLeft}
//                 className="h-4 w-4 text-gray-700"
//               />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10"
//               aria-label="Next slide"
//             >
//               <FontAwesomeIcon
//                 icon={faArrowRight}
//                 className="h-4 w-4 text-gray-700"
//               />
//             </button>
//             {/* Dots Indicator */}
//             <div className="flex justify-center mt-4 gap-2">
//               {blogPosts.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-blue-600" : "bg-gray-300"}`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {blogPosts.map((post) => (
//               <BlogPost key={post.title} {...post} />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default BlogSection;

// components/BlogSection.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { BlogSectionConfig } from "@/app/Types/blogTypes";
import { defaultBlogConfig } from "@/app/Data/blogData";
import BlogPostComponent from "@/sections/BlogPost";

interface BlogSectionProps {
  config?: Partial<BlogSectionConfig>;
  className?: string;
  enableMobileSlider?: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ({
  config = {},
  className = "",
  enableMobileSlider = true,
}) => {
  // Merge provided config with defaults
  const { title, subtitle, posts, showGradientLine, maxWidth, gridCols } = {
    ...defaultBlogConfig,
    ...config,
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!sliderRef.current || !isMobile || !enableMobileSlider) return;

    let startX: number;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    const slider = sliderRef.current;
    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobile, enableMobileSlider]);

  const maxWidthClass = `max-w-${maxWidth}`;
  const gridColsClass = `grid-cols-${gridCols?.mobile} sm:grid-cols-${gridCols?.tablet} lg:grid-cols-${gridCols?.desktop}`;

  return (
    <section className={`py-8 sm:py-12 px-4 ${className}`}>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        {showGradientLine && (
          <div className="mt-4 flex justify-center">
            <div className="w-40 h-1 bg-gradient-to-r from-[#5A189A] to-[#7B2CBF]" />
          </div>
        )}
        {subtitle && (
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>

      <div className={`${maxWidthClass} mx-auto`}>
        {isMobile && enableMobileSlider ? (
          <div className="relative" ref={sliderRef}>
            {/* Mobile Slider */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {posts.map((post, index) => (
                  <div key={post.id} className="w-full flex-shrink-0">
                    <BlogPostComponent {...post} animationDelay={index * 0.1} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10"
              aria-label="Previous slide"
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="h-4 w-4 text-gray-700"
              />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10"
              aria-label="Next slide"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="h-4 w-4 text-gray-700"
              />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 gap-2">
              {posts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className={`grid ${gridColsClass} gap-4 sm:gap-6`}>
            {posts.map((post, index) => (
              <BlogPostComponent
                key={post.id}
                {...post}
                animationDelay={index * 0.1}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
