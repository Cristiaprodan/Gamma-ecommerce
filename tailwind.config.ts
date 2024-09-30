/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#67EEAA",
        primary: "#262833",
        // "light-grey": "#E5E5E5",
        discount: "#EA4B48",
        // "dark-grey": "#d6d6d6",
        "dark-blue": "#171920",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".h1": {
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
          "@screen md": {
            fontSize: theme("fontSize.4xl"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.5xl"),
          },
        },
        ".h2": {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
          "@screen md": {
            fontSize: theme("fontSize.3xl"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.4xl"),
          },
        },
        ".h3": {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: theme("lineHeight.tight"),
          "@screen md": {
            fontSize: theme("fontSize.2xl"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.3xl"),
          },
        },
        ".h4": {
          fontSize: theme("fontSize.lg"),
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: theme("lineHeight.tight"),
          "@screen md": {
            fontSize: theme("fontSize.xl"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.2xl"),
          },
        },
        ".h5": {
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: theme("lineHeight.snug"),
          "@screen md": {
            fontSize: theme("fontSize.lg"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.xl"),
          },
        },
        ".h6": {
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: theme("lineHeight.snug"),
          "@screen md": {
            fontSize: theme("fontSize.base"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.lg"),
          },
        },
      });
    },
  ],
};
