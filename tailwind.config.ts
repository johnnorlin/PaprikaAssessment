import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //defining theme colors for Paprika.
      colors: {
        'off-black': '#121212',
        'salmon-2': '#ff7b7b',
        'gray': '#4a4a4a',
        'paprika-salmon': '#ff8574',
        'white': 'white',
        'light-gray': '#fafafa',
        'middle-gray': '#a0a0a0',
        'white-2': 'white',
        'black': 'black',
        'paprika-light': '#ff7b7b',
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
