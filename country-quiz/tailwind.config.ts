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

      fontFamily: {
        montserat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        foreground: "hsla(var(--foreground))",
        background: "hsla(var(--background))",
        light: "hsla(var(--light))",
        green: "hsla(var(--green))",
        lightBlue: "hsla(var(--lightBlue))",
        darkBlue: "hsla(var(--darkBlue))",
        yellow: "hsla(var(--yellow))",
        darkYellow: "hsla(var(--darkYellow))",
        "yellow-foreground": "hsla(var(--yellow-foreground))",
        "success-foreground": "hsla(var(--success-foreground))",
        "error-foreground": "hsla(var(--error-foreground))",
        error: "hsla(var(--error))",
        success: "hsla(var(--success))",
      },
    },
  },
  plugins: [],
};
export default config;
