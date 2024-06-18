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
        backgroundcolor: "var(--backgroundcolor)",
        blackforinput: "var(--blackforinput)",
        success: "var(--success)",
        "systemgray-3": "var(--systemgray-3)",
        "variable-collection-accent": "var(--variable-collection-accent)",
        "variable-collection-accent2": "var(--variable-collection-accent2)",
        "variable-collection-black": "var(--variable-collection-black)",
        "variable-collection-border": "var(--variable-collection-border)",
        "variable-collection-error": "var(--variable-collection-error)",
        "variable-collection-primary": "var(--variable-collection-primary)",
        "variable-collection-secondary-yellow": "var(--variable-collection-secondary-yellow)",
        "variable-collection-secondary2": "var(--variable-collection-secondary2)",
        "variable-collection-secondary3": "var(--variable-collection-secondary3)",
        "variable-collection-secondary4": "var(--variable-collection-secondary4)",
        "variable-collection-seconday1": "var(--variable-collection-seconday1)",
        "variable-collection-success": "var(--variable-collection-success)",
        "variable-collection-sword": "var(--variable-collection-sword)",
        "variable-collection-systemgray": "var(--variable-collection-systemgray)",
        "variable-collection-white": "var(--variable-collection-white)",
      },
    },
  },
  plugins: [],
};
export default config;
