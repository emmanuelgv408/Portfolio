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
        'custom-grey' : '#e5e5e5',
        'background': "#000000",
        'primary-text': "#E5E5E5 ",
        'cyan': " #00BCD4",
        'dark-cyan': "A#00ACC1",
        'real':'#0097A7'
      },
    },
  },
  plugins: [],
}