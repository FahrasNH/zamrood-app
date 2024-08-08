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
        'sans': ['Albert-Sans', 'sans-serif'],
        'thesignature': ['Thesignature', 'cursive'],
        'unbounded': ['Unbounded', 'sans-serif'],
      },
    },
    screens: {
      allMobile: { min: "320px", max: "767px" },
      mobileS: { min: "320px", max: "374px" },
      mobileM: { min: "375px", max: "424px" },
      mobileL: { min: "425px", max: "767px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1281px" },
      "2xl": { min: "1536px" },
    },
  },
  plugins: [],
};
export default config;
