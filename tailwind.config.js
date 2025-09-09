/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
       // Make sure `foreground` is set up correctly
        foreground: {
          DEFAULT: '#000000', // Light mode
          dark: '#ffffff',    // Dark mode
        },
    },
  },
  plugins: [],
};
