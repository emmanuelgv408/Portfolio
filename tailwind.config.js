/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#e5e5e5', // Add this line
        'custom-blue' : '#14213d',
        'custom-orange' : '#fca311',
        'custom-grey' : 'e5e5e5'
        
      },
    },
  },
  plugins: [],
}