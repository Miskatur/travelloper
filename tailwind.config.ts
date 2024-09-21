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
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "350px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        "mid-xl": "1260px",
        xl: "1440px",
        xxl: "1600px",
        xxxl: "1920px",
      },
   
    },
  },
  plugins: [],
};
export default config;
