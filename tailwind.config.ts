import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        light:{
          DEFAULT:"#FEFEFE",
          gray: "#F0F3F9"
        },
        primary:{
          DEFAULT:"#107BEF",
          dark:"#1010EF",
        },
        dark:{
          DEFAULT: "#121212",
          text: "#343434"
        }
      }
    },
  },
  plugins: [],
};
export default config;
