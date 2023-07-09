/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        typing: {
          '100%': {left: '90%', margin:'0 -35px 0 35px'}
        },
        sliding:{
          '100%': {top: '-10rem'}
        }
      },
      animation:{
        'type': 'typing 1.5s steps(22) infinite',
        'slide': 'sliding 7.5s steps(5) infinite'
      }
    },
    fontFamily: {
      'main': ["Poppins", "sans-serif"],
      'secondary': ['"Permanent Marker"', "cursive"],
      'tertiary': ['"Source Code Pro"', "monospace"],
  }},
  plugins: [
    require('flowbite/plugin')
],
  }
