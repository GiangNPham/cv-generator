/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#f0e0e8",
        background: "#1d0a13",
        primary: "#e597bd",
        secondary: "#88154d",
        accent: "#f03f95",
      },
    },
  },
  plugins: [],
};
