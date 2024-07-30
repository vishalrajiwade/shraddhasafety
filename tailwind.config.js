/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./src/assets/images/hero-bg.png')",
      },
      colors:{
        blue:'#0A5FF9',
        darkBlue:'#0442b2',
        paleBlue:'#E1F4F7',
        heroBg:'#012935',
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif']
      }
    },
  },
  plugins: [],
}