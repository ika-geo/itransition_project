/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#22a192',
        lightPrimary: 'rgba(0,255,151,0.6)',
        secondary: '#f1c40f',
        bgColor: '#f9fafb'
      }
    },
  },
  plugins: [],
}