import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#244BEA",
          ink: "#101828",
          soft: "#EEF3FF",
          line: "#DDE6FF"
        }
      },
      boxShadow: {
        soft: "0 24px 70px rgba(36, 75, 234, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
