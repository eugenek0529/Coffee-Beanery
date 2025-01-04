/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee-bg': '#fff9f1',
        'coffee-text': '#3D553F',
      },
      fontFamily: {
        adobe: ["p22-mackinac-pro", "serif"],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
} 