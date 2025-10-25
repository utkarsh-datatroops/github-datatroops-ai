// "use client";

// // React Imports
// import { useState, useEffect } from "react";
// import { twMerge } from "tailwind-merge";
// import Link from "next/link";

// // Component Imports
// import { Button, ButtonProps } from "@/components/Button";
// import { Orbit } from "@/components/Orbit";

// // Images Imports
// import DataTroopsLogo from "./datatroopsLogo.svg";

// export const navItems = [
//   {
//     name: "Solutions",
//     href: "/solutions",
//   },
//   {
//     name: "Technologies",
//     href: "/technologies",
//   },
//   {
//     name: "About Us",
//     href: "/about-us",
//   },
//   {
//     name: "Blogs",
//     href: "/datatroops-blogs",
//   }
// ];

// export const loginItems = [
//   {
//     buttonVariant: "tertiary",
//     name: "Contact Us",
//     href: "/contact-us",
//   },
// ] satisfies {
//   name: string;
//   href: string;
//   buttonVariant: ButtonProps["variant"];
// }[];

// export const Header = () => {
//   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const controlNavbar = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY) {
//         // if scroll down
//         setIsVisible(false);
//       } else {
//         // if scroll up
//         setIsVisible(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", controlNavbar);

//     return () => {
//       window.removeEventListener("scroll", controlNavbar);
//     };
//   }, [lastScrollY]);

//   // Close mobile nav when screen size changes to desktop
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) { // lg breakpoint in Tailwind
//         setIsMobileNavOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // Function to close mobile nav when navigation links are clicked
//   const handleNavLinkClick = () => {
//     setIsMobileNavOpen(false);
//   };

//   return (
//     <>
//       <div className="relative h-18 lg:h-20">
//         <header
//           className={twMerge(
//             "border-b border-gray-200/20 bg-[--color-10002B] w-full fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
//             !isVisible && "-translate-y-full",
//           )}
//         >
//           <div className="container">
//             <div className="h-18 lg:h-20 flex justify-between items-center">
//               <div className="flex gap-4 items-center">
//                 <div className="size-10">
//                   {/* ^ bg-gray-200 bg-[conic-gradient(from_45deg,var(--color-7B2CBF),var(--color-C77DFF),var(--color-E0AAFF))] */}

//                   {/* <DataTroopsLogo className="h-full w-full" /> */}
//                   <Link
//                     href="/"
//                     aria-label="Go to home page"
//                     legacyBehavior
//                     passHref
//                   >
//                     <a onClick={handleNavLinkClick}>
//                       <DataTroopsLogo className="h-full w-full cursor-pointer" />
//                     </a>
//                   </Link>
//                 </div>
//                 {/* <div className="font-extrabold text-2xl">DataTroops.ai</div> */}
//                 <Link href="/" className="font-extrabold text-2xl" onClick={handleNavLinkClick}>
//                   DataTroops.ai
//                 </Link>
//               </div>
//               <div className="h-full hidden lg:block">
//                 <nav className="h-full">
//                   {/* {navItems.map(({ name, href }) => (
//               <Tooltip message="Coming Soon" key={name}>
//                 <a href={href} key={href} className="h-full px-10  relative font-bold text-s tracking-wildest text-gray-400 uppercase
//                 inline-flex items-center before:content-[''] before:absolute
//                 before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0  last:after:absolute
//                  last:after:bottom-0  last:after:h-2  last:after:w-px  last:after:bg-gray-200/20  last:after:right-0">{name}</a>
//               </Tooltip>
//             ))} */}
//                   {navItems.map(({ name, href }) => (
//                     <Link
//                       href={href}
//                       key={name}
//                       className="h-full px-10 relative font-bold text-s tracking-wildest text-white uppercase inline-flex items-center before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0 last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0"
//                     >
//                       {name}
//                     </Link>
//                   ))}
//                 </nav>
//               </div>
//               <div className="hidden lg:flex gap-4">
//                 {loginItems.map(({ buttonVariant, name, href }) => (
//                   <Link href={href} key={name}>
//                     <Button variant={buttonVariant}> {name} </Button>
//                   </Link>
//                 ))}
//               </div>
//               <div className="flex items-center lg:hidden">
//                 <button
//                   onClick={() => setIsMobileNavOpen((curr) => !curr)}
//                   className="size-10 rounded-lg border-2 relative flex flex-col justify-center items-center gap-1"
//                 >
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                     <div
//                       className={twMerge(
//                         "w-4 h-0.5 bg-gray-100 -translate-y-1 transition duration-300",
//                         isMobileNavOpen && "translate-y-0 rotate-45",
//                       )}
//                     ></div>
//                   </div>
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                     <div
//                       className={twMerge(
//                         "w-4 h-0.5 bg-gray-100 translate-y-1 transition duration-300",
//                         isMobileNavOpen && "translate-y-0 rotate-135",
//                       )}
//                     ></div>
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </header>
//       </div>
//       {isMobileNavOpen && (
//         <div className="fixed top-18 left-0 bottom-0 right-0 bg-[var(--color-10002B)] z-30 overflow-hidden">
//           <div className="absolute-center isolate -z-10">
//             <Orbit />
//           </div>
//           <div className="absolute-center isolate -z-10">
//             <Orbit className="size-[350px]" />
//           </div>
//           <div className="absolute-center isolate -z-10">
//             <Orbit className="size-[500px]" />
//           </div>
//           <div className="absolute-center isolate -z-10">
//             <Orbit className="size-[650px]" />
//           </div>
//           <div className="absolute-center isolate -z-10">
//             <Orbit className="size-[800px]" />
//           </div>
//           <div className="container h-full">
//             <nav className="flex flex-col items-center gap-4 py-8 h-full justify-center">
//               {navItems.map(({ name, href }) => (
//                 <Link
//                   href={href}
//                   key={name}
//                   className="text-gray-400 uppercase tracking-wildest font-bold text-s h-10"
//                   onClick={handleNavLinkClick}
//                 >
//                   {name}
//                 </Link>
//               ))}
//               {loginItems.map(({ buttonVariant, name, href }) => (
//                 <Link href={href} key={name} className="w-full max-w-xs" onClick={handleNavLinkClick}>
//                   <Button block variant={buttonVariant}>
//                     {" "}
//                     {name}{" "}
//                   </Button>
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

"use client";

// React Imports
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

// Component Imports
import { Button, ButtonProps } from "@/components/Button";
import { Orbit } from "@/components/Orbit";

// Images Imports
import DataTroopsLogo from "./datatroopsLogo.svg";

export const navItems = [
  {
    name: "Solutions",
    href: "/solutions",
  },
  {
    name: "Technologies",
    href: "/technologies",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Blogs",
    href: "/datatroops-blogs",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Contact Us",
    href: "/contact-us",
  },
] satisfies {
  name: string;
  href: string;
  buttonVariant: ButtonProps["variant"];
}[];

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // if scroll down
        setIsVisible(false);
      } else {
        // if scroll up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // Close mobile nav when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint in Tailwind
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to close mobile nav when navigation links are clicked
  const handleNavLinkClick = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <>
      <div className="relative h-18 lg:h-20">
        <header
          className={twMerge(
            "border-b border-gray-200/20 bg-[--color-10002B] w-full fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
            !isVisible && "-translate-y-full",
          )}
        >
          <div className="container">
            <div className="h-18 lg:h-20 flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="size-10">
                  {/* ^ bg-gray-200 bg-[conic-gradient(from_45deg,var(--color-7B2CBF),var(--color-C77DFF),var(--color-E0AAFF))] */}

                  {/* <DataTroopsLogo className="h-full w-full" /> */}
                  <Link
                    href="/"
                    aria-label="Go to home page"
                    legacyBehavior
                    passHref
                  >
                    <a onClick={handleNavLinkClick}>
                      <DataTroopsLogo className="h-full w-full cursor-pointer" />
                    </a>
                  </Link>
                </div>
                {/* <div className="font-extrabold text-2xl">DataTroops.ai</div> */}
                <Link
                  href="/"
                  className="font-extrabold text-2xl"
                  onClick={handleNavLinkClick}
                >
                  DataTroops.ai
                </Link>
              </div>
              <div className="h-full hidden lg:block">
                <nav className="h-full">
                  {/* {navItems.map(({ name, href }) => (
              <Tooltip message="Coming Soon" key={name}>
                <a href={href} key={href} className="h-full px-10  relative font-bold text-s tracking-wildest text-gray-400 uppercase 
                inline-flex items-center before:content-[''] before:absolute 
                before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0  last:after:absolute 
                 last:after:bottom-0  last:after:h-2  last:after:w-px  last:after:bg-gray-200/20  last:after:right-0">{name}</a>
              </Tooltip>
            ))} */}
                  {navItems.map(({ name, href }) => (
                    <Link
                      href={href}
                      key={name}
                      className="h-full px-10 relative font-bold text-s tracking-wildest text-white uppercase inline-flex items-center before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0 last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0"
                    >
                      {name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="hidden lg:flex gap-4">
                {loginItems.map(({ buttonVariant, name, href }) => (
                  <Link href={href} key={name}>
                    <Button variant={buttonVariant}> {name} </Button>
                  </Link>
                ))}
              </div>
              <div className="flex items-center lg:hidden">
                <button
                  onClick={() => setIsMobileNavOpen((curr) => !curr)}
                  className="size-10 rounded-lg border-2 relative flex flex-col justify-center items-center gap-1 hover:border-white transition-colors duration-200 hover:scale-105 transform"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div
                      className={twMerge(
                        "w-4 h-0.5 bg-gray-100 -translate-y-1 transition-all duration-300 ease-in-out",
                        isMobileNavOpen && "translate-y-0 rotate-45",
                      )}
                    ></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div
                      className={twMerge(
                        "w-4 h-0.5 bg-gray-100 translate-y-1 transition-all duration-300 ease-in-out",
                        isMobileNavOpen && "translate-y-0 -rotate-45",
                      )}
                    ></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* Mobile Navigation Overlay with Smooth Transitions */}
      <div
        className={twMerge(
          "fixed top-18 left-0 bottom-0 right-0 bg-[var(--color-10002B)] z-30 overflow-hidden transition-all duration-300 ease-in-out",
          isMobileNavOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none",
        )}
      >
        {/* Animated Background Orbits */}
        <div
          className={twMerge(
            "absolute-center isolate -z-10 transition-all duration-500 ease-out",
            isMobileNavOpen ? "scale-100 opacity-100" : "scale-75 opacity-0",
          )}
        >
          <Orbit />
        </div>
        <div
          className={twMerge(
            "absolute-center isolate -z-10 transition-all duration-500 ease-out delay-75",
            isMobileNavOpen ? "scale-100 opacity-100" : "scale-75 opacity-0",
          )}
        >
          <Orbit className="size-[350px]" />
        </div>
        <div
          className={twMerge(
            "absolute-center isolate -z-10 transition-all duration-500 ease-out delay-150",
            isMobileNavOpen ? "scale-100 opacity-100" : "scale-75 opacity-0",
          )}
        >
          <Orbit className="size-[500px]" />
        </div>
        <div
          className={twMerge(
            "absolute-center isolate -z-10 transition-all duration-500 ease-out delay-200",
            isMobileNavOpen ? "scale-100 opacity-100" : "scale-75 opacity-0",
          )}
        >
          <Orbit className="size-[650px]" />
        </div>
        <div
          className={twMerge(
            "absolute-center isolate -z-10 transition-all duration-500 ease-out delay-300",
            isMobileNavOpen ? "scale-100 opacity-100" : "scale-75 opacity-0",
          )}
        >
          <Orbit className="size-[800px]" />
        </div>

        <div className="container h-full">
          <nav className="flex flex-col items-center gap-4 py-8 h-full justify-center">
            {navItems.map(({ name, href }, index) => (
              <Link
                href={href}
                key={name}
                className={twMerge(
                  "text-gray-400 uppercase tracking-wildest font-bold text-s h-10 transition-all duration-300 ease-out hover:text-white hover:scale-105 transform",
                  isMobileNavOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4",
                )}
                style={{
                  transitionDelay: isMobileNavOpen
                    ? `${100 + index * 50}ms`
                    : "0ms",
                }}
                onClick={handleNavLinkClick}
              >
                {name}
              </Link>
            ))}
            {loginItems.map(({ buttonVariant, name, href }, index) => (
              <Link
                href={href}
                key={name}
                className={twMerge(
                  "w-full max-w-xs transition-all duration-300 ease-out transform",
                  isMobileNavOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4",
                )}
                style={{
                  transitionDelay: isMobileNavOpen
                    ? `${300 + index * 50}ms`
                    : "0ms",
                }}
                onClick={handleNavLinkClick}
              >
                <Button
                  block
                  variant={buttonVariant}
                  className="hover:scale-105 transition-transform duration-200"
                >
                  {name}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
