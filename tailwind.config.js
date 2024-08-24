/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        "main-color": "#014dff",
        "body": "#f4f4f9",
      },
    },
  },
  plugins: [],
}

