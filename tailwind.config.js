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
      backgroundImage: {
        'hero': "url('/images/bg/hero-bg.webp')",
        'hero-sm': "url('/images/bg/hero-sm.webp')",
        'event': "url('/images/bg/event.webp')",
        'christmas': "url('/images/bg/christmas.webp')",
        'miracle-asset': "url('/images/bg/miracle-asset.webp')"
      },
      colors: {
        transparent: 'transparent',
        'white': {
          default: '#FFFFFF',
          100: '#ECEFF1',
          200: '#FFFFFF66'
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
          300: '#979797',
          400: '#BEBEBE'
        },
        'blue': {
          default: '#00427A'
        }
      },
    },
  },
  plugins: [],
};
