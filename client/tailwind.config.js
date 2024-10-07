/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#04c1fb',
        lightPrimary: '#04C1FB99',
        secondary: '#f1c40f',
        customBlack: '#393939',
        customWhite: '#d3d3d3',
      }
    },
  },
  plugins: [],
}