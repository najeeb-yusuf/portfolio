/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern:  /bg-+/,
    }
  ],
  theme: {
    extend: {
      backgroundImage:{
        'qr-attendance': "url('./assets/stock/qr-code.jpg')",
        'blog': "url('./assets/stock/blog.jpg')", 
        'dima': "url('./assets/stock/quiz.jpg')",
        'api': "url('./assets/stock/api.jpg')",
        'minesweeper': "url('./assets/stock/minesweeper.png')",
        'powerstack': "url('./assets/stock/powerstack.svg')",
        'media': "url('./assets/stock/media.jpg')",
        'crypto': "url('./assets/stock/crypto.jpg')",
      },
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
