/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ubuntu-sans)", "sans-serif"],
        mono: ["var(--font-ubuntu-mono)", "monospace"],
      },
    },
  },
  plugins: [flowbite],
};
