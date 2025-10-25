import localFont from "next/font/local";

export const barlow = localFont({
  src: [
    {
      path: "fonts/Barlow/Barlow-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-barlow",
  display: "swap",
});

export const barlowSemiCondensed = localFont({
  src: [
    {
      path: "fonts/Barlow_Semi_Condensed/BarlowSemiCondensed-Medium.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-barlow-semi-condensed",
  display: "swap",
});

export const inter = localFont({
  src: [
    {
      path: "fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const khula = localFont({
  src: [
    { path: "fonts/Khula/Khula-Regular.ttf", weight: "400", style: "normal" },
  ],
  display: "swap",
});

export const soraFont = localFont({
  src: [
    {
      path: "fonts/Sora/Sora-VariableFont_wght.ttf",
      weight: "variable",
      style: "normal",
    },
  ],
  variable: "--font-sora",
  display: "swap",
});

export const spaceGroteskFont = localFont({
  src: [
    {
      path: "fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf",
      weight: "variable",
      style: "normal",
    },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});
