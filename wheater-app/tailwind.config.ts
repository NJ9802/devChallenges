import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        background: "hsla(var(--background))",
        foreground: "hsla(var(--foreground))",
        accent: "hsla(var(--accent))",
        primary: "hsla(var(--primary))",
        button: "hsla(var(--button))",
        gray: "hsla(var(--gray))",
        "gray-2": "hsla(var(--gray-2))",
        grayText: "hsla(var(--grayText))",
        lightGray: "hsla(var(--lightGray))",
      },

      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
