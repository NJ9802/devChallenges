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
        background: "hsla(228, 38%, 97%, 1)",
        foreground: "hsla(225, 43%, 35%, 1)",
        accent: "hsla(212, 100%, 56%, 1)",
        darkBlue: "hsla(249, 20%, 18%, 1)",
        white95: "hsla(0, 0%, 95%, 1)",
        "gray-1": "hsla(0, 0%, 74%, 1)",
        "gray-2": "hsla(227, 19%, 76%, 1)",
        "gray-3": "hsla(229, 19%, 77%, 1)",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },

      borderRadius: {
        4: "4px",
      },
    },
  },
  plugins: [],
};
export default config;
