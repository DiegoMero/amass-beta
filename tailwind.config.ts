import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'mint': '#326CAF',
      'midnigth-green': '#004346',
      'prussian-blue': '#172A3A',
      'blue': '#508991',
      'tifanny-blue': '#75DDDD',
      'white': '#FFF',
    },
    extend: {
      animation: {
        'slide-in-menu': 'slideInMenu 0.5s',
      },
      keyframes: {
        slideInMenu: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;