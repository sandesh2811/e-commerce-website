import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        borderColor: "var(--border-color)",
        secondaryTextColor: "var(--secondary-text-color)",
      },
      screens: {
        mid: "630px",
        midLg: "950px",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Epilogue: ["Epilogue", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
