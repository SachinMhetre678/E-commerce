import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: '#eef2ff',
          // ... other shades
          600: '#4f46e5',
          700: '#4338ca',
        },
      },
    },
  },
  plugins: [],
};
export default config;
