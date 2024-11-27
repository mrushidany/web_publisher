/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'spoqa': ['Spoqa Han Sans', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        'white': {
          default: '#FFFFFF',
          100: '#ECEFF1'
        },
        'dark': {
          default: '#242424',
          100: '#2C2C2C'
        },
        'orange': {
          default: '#F58220'
        },
        'gray': {
          default: '#7D7D7D',
          100: '#575757',
          200: '#BBBBBB',
          300: '#979797'
        },
        'blue': {
          default: '#00427A'
        }
      },
    },
  },
  plugins: [],
};
