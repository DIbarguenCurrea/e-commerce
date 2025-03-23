/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "tham",
    "tham-e-squeeze",
    "tham-w-6",
    "tham-active",
    "tham-box",
    "tham-inner",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ubuntu-sans)", "sans-serif"],
        mono: ["var(--font-ubuntu-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
