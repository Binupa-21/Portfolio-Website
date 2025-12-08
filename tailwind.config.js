/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", // The Cyan color
        secondary: "#a855f7", // The Purple color
        dark: "#0f172a", // Very dark blue/slate for background
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'], // For the coding text
      }
    },
  },
  plugins: [],
}