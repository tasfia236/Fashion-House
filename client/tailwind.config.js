/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'pink700': '#ffafca',
      'pink300': '#ffc8dc',
      'purple300': '#dee3ff',
      'purple700': '#9c89b8',
      'sky300': '#bde0fe',
      'sky500': '#a2d2ff',
      'sky700': '#90c9ff',
    },
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin"),
  ],
}
