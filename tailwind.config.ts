import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#FBC701',
        secondary1: '#6C252A',
        secondary2: '#542B15',
        secondary3: '#8F4717',
        secondary4: '#27130C',
        secondaryYellow: '#FEEEB3',
        secondaryGray: '#B8B8B8',
        Accent1:'#852E8C',
        Accent2:'#E4C629',
        Accent2_2:'#D23D61',
        AccentSword:'#ECF5E9',
        error:'#FE6768',
        succes:'#6CB928',
        border:'#D1C492',
        systemGray:'#48484A',
        gradientStart:'#1B121C',
        gradientEnd:'#110d17',
      },
      fontFamily: {
        sans: ['Nunito sans', 'Helvetica', 'Arial', 'sans-serif'],
        paytone: ["Paytone One", "sans-serif"]
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
