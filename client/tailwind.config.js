/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
     
      // 'pink700': '#ff89b0',
      // 'pink500': '#ffafca',
      // 'pink300': '#ffc8dc',
      // 'sky300': '#bde0fe',
      // 'sky500': '#a2d2ff',
      // 'sky700': '#90c9ff',
      // 'purple300': '#dee3ff',
      // 'purple700': '#9c89b8',
        white: '#ffffff',
        sky300: '#7dd3fc',
        pink100: '#ffeaf6',
        pink300: '#f9a8d4',
        pink700: '#be185d',
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

