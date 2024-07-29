/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:'#0A5FF9',
        darkBlue:'#0442b2',
        heroBg:'#012935',
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif']
      }
    },
  },
  plugins: [],
}