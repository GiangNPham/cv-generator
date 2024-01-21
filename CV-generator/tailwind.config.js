/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#0f1355",
        background: "#fafbfc",
        primary: "#6590a6",
        secondary: "#a8c4d3",
        accent: "#7aa9c3",
      },
    },
  },
  plugins: [],
};
