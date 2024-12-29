/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	},
  	colors: {
  		white: '#ffffff',
  		sky300: '#7dd3fc',
  		pink100: '#ffeaf6',
  		pink300: '#f9a8d4',
  		pink700: '#be185d',
  		yellow500: '#fde047',
  		gray100: '#94a3b8',
  		rose600: '#e11d48'
  	}
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
};
