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
      'mint-left': '#0DB6EB',
      'black': '#000',
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
    },
  },
  plugins: [],
};
export default config;