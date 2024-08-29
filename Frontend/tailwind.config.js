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
        ArchivoBlack: ["Archivo Black", "sans-serif"],
        Questrial: ["Questrial", "sans-serif"],
        Urbanist: ["Urbanist", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        DMSerifText: ["DM Serif Text", "sans-serif"]
      },
      colors: {
        "text-color-white": "#f4f4f5",
        "text-color-black": "#27272a",
        "body-white": "#fafafa",
        "body-black": "#18181b",
        "border-lines-light": "#e5e7eb",
        "button-color": "#21232a",
      },
    },
  },
  plugins: [],
}

