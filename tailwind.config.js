import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFCF7",
          100: "#FFF9EE",
          200: "#FFF3DD",
          300: "#FFECC9",
          400: "#F8E3C5",
          500: "#F0D6B4",
          600: "#E5C9A3",
          700: "#D1B48F",
          800: "#B99B76",
          900: "#9A7F5F",
        },
        olive: {
          50: "#F8F9F3",
          100: "#F1F3E7",
          200: "#E3E7CF",
          300: "#D5DBB7",
          400: "#C7CF9F",
          500: "#B9C387",
          600: "#A6B173",
          700: "#8D975F",
          800: "#747D4B",
          900: "#5B6337",
        },
        teal: {
          50: "#EAFAF5",
          100: "#D5F5EB",
          200: "#ABEBD7",
          300: "#81E0C3",
          400: "#56D6AF",
          500: "#2CBA8C",
          600: "#239571",
          700: "#1B7055",
          800: "#124A38",
          900: "#09251C",
        },
        brown: {
          50: "#FAF8F6",
          100: "#F5F0ED",
          200: "#EBE2DB",
          300: "#E0D3C9",
          400: "#D6C5B7",
          500: "#CCB6A5",
          600: "#BEA28E",
          700: "#A48A74",
          800: "#8A725E",
          900: "#705B49",
        },
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['"TAN Twinkle"', 'Georgia', 'serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "0.9375rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: "#F5F0E8"
            },
            content1: {
              DEFAULT: "#FFF9EE",
              foreground: "#705B49"
            },
            content2: {
              DEFAULT: "#F0D6B4",
              foreground: "#705B49"
            },
            content3: {
              DEFAULT: "#E5C9A3",
              foreground: "#705B49"
            },
            content4: {
              DEFAULT: "#D1B48F",
              foreground: "#705B49"
            },
            divider: {
              DEFAULT: "rgba(112, 91, 73, 0.15)"
            },
            focus: {
              DEFAULT: "#2CBA8C"
            },
            foreground: {
              DEFAULT: "#705B49"
            },
            primary: {
              50: "#EAFAF5",
              100: "#D5F5EB",
              200: "#ABEBD7",
              300: "#81E0C3",
              400: "#56D6AF",
              500: "#2CBA8C",
              600: "#239571",
              700: "#1B7055",
              800: "#124A38",
              900: "#09251C",
              DEFAULT: "#2CBA8C",
              foreground: "#FFFFFF"
            },
            default: {
              50: "#FAF8F6",
              100: "#F5F0ED",
              200: "#EBE2DB",
              300: "#E0D3C9",
              400: "#D6C5B7",
              500: "#CCB6A5",
              600: "#BEA28E",
              700: "#A48A74",
              800: "#8A725E",
              900: "#705B49",
              DEFAULT: "#CCB6A5",
              foreground: "#705B49"
            }
          }
        }
      }
    })
  ]
}