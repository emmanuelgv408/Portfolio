/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
       
        'custom-grey' : '#131415',
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