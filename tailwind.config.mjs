import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        product: ['"Product Sans"', 'sans-serif'],
      },
    },
    screens: {
      'compact': {'max': '599px'},       // Phone in portrait
      'medium': {'min': '600px', 'max': '839px'},  // Tablet in portrait
      'expanded': {'min': '840px', 'max': '1199px'}, // Phone landscape, tablet landscape, desktop
      'large': {'min': '1200px', 'max': '1599px'}, // Desktop
      'extra-large': {'min': '1600px'}, // Ultra-wide desktop
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "light": {
        colors: {
          background: "#F8F9FF",
          foreground: "#191C20",
          primary: {
            DEFAULT: "#36618E",
            foreground: "#FFFFFF",
            primaryContainer: "#D1E4FF",
            onPrimaryContainer: "#001D36",
            primaryFixed: "#D1E4FF",
            onPrimaryFixed: "#001D36",
            primaryFixedDim: "#A0CAFD",
            onPrimaryFixedVariant: "#194975"
          },
          secondary: {
            DEFAULT: "#535F70",
            foreground: "#FFFFFF",
            secondaryContainer: "#D7E3F7",
            onSecondaryContainer: "#101C2B",
            secondaryFixed: "#D7E3F7",
            onSecondaryFixed: "#101C2B",
            secondaryFixedDim: "#BBC7DB",
            onSecondaryFixedVariant: "#3B4858"
          },
          tertiary: {
            DEFAULT: "#6B5778",
            foreground: "#FFFFFF",
            tertiaryContainer: "#F2DAFF",
            onTertiaryContainer: "#251431",
            tertiaryFixed: "#F2DAFF",
            onTertiaryFixed: "#251431",
            tertiaryFixedDim: "#D6BEE4",
            onTertiaryFixedVariant: "#523F5F"
          },
          danger: {
            DEFAULT: "#BA1A1A",
            foreground: "#FFFFFF",
            dangerContainer: "#FFDAD6",
            onDangerContainer: "#410002"
          },
          surface: {
            DEFAULT: "#F8F9FF",
            foreground: "#191C20",
            surfaceVariant: "#DFE2EB",
            onSurfaceVariant: "#43474E",
            surfaceDim: "#D8DAE0",
            surfaceBright: "#F8F9FF",
            surfaceContainerLowest: "#FFFFFF",
            surfaceContainerLow: "#F2F3FA",
            surfaceContainer: "#ECEEF4",
            surfaceContainerHigh: "#E6E8EE",
            surfaceContainerHighest: "#E1E2E8"
          },
          utils: {
            inverseSurface: "#2E3135",
            inverseOnSurface: "#EFF0F7",
            inversePrimary: "#A0CAFD",
            outline: "#73777F",
            outlineVariant: "#C3C7CF",
            shadow: "#000000",
            scrim: "#000000"
          },
          focus: "#36618E"
        }
      },
      "dark": {
        colors: {
          background: "#111418",
          foreground: "#E1E2E8",
          primary: {
            DEFAULT: "#A0CAFD",
            foreground: "#003258",
            primaryContainer: "#194975",
            onPrimaryContainer: "#D1E4FF",
            primaryFixed: "#D1E4FF",
            onPrimaryFixed: "#001D36",
            primaryFixedDim: "#A0CAFD",
            onPrimaryFixedVariant: "#194975"
          },
          secondary: {
            DEFAULT: "#BBC7DB",
            foreground: "#253140",
            secondaryContainer: "#3B4858",
            onSecondaryContainer: "#D7E3F7",
            secondaryFixed: "#D7E3F7",
            onSecondaryFixed: "#101C2B",
            secondaryFixedDim: "#BBC7DB",
            onSecondaryFixedVariant: "#3B4858"
          },
          tertiary: {
            DEFAULT: "#D6BEE4",
            foreground: "#3B2948",
            tertiaryContainer: "#523F5F",
            onTertiaryContainer: "#F2DAFF",
            tertiaryFixed: "#F2DAFF",
            onTertiaryFixed: "#251431",
            tertiaryFixedDim: "#D6BEE4",
            onTertiaryFixedVariant: "#523F5F"
          },
          danger: {
            DEFAULT: "#FFB4AB",
            foreground: "#690005",
            dangerContainer: "#93000A",
            onDangerContainer: "#FFDAD6"
          },
          surface: {
            DEFAULT: "#111418",
            foreground: "#E1E2E8",
            surfaceVariant: "#43474E",
            onSurfaceVariant: "#C3C7CF",
            surfaceDim: "#111418",
            surfaceBright: "#36393E",
            surfaceContainerLowest: "#0B0E13",
            surfaceContainerLow: "#191C20",
            surfaceContainer: "#1D2024",
            surfaceContainerHigh: "#272A2F",
            surfaceContainerHighest: "#32353A"
          },
          utils: {
            inverseSurface: "#E1E2E8",
            inverseOnSurface: "#2E3135",
            inversePrimary: "#36618E",
            outline: "#8D9199",
            outlineVariant: "#43474E",
            shadow: "#000000",
            scrim: "#000000"
          },
          focus: "#A0CAFD"
        }
      }
    }
  },
  'autoprefixer',)],
};
