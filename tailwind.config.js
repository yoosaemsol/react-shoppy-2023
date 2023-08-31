/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#F4D5BB',
        'brand-active': '#FF76B6',
        'brand-yellow': '#FFFF59',
        'brand-green': '#90C47E',
        'brand-brown': '#B57869',
      },
    },
  },
  plugins: [],
};
