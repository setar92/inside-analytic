/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'Serif': 'Proxima Nova',
    },
    container: {
      center: true,
    },
    screens: {
      'ld': { 'max': '1920px' },
      'xl': { 'max': '1536px' },
      'lg': { 'max': '1200px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '480px' },
    },
    extend: {
      colors: {
        main: '#0E0D16',
        primery: '#F28300',
        black: '#000',
        grey: '#F6F6F6',
        gray: '#0E0D164D',
        fon: '#F5F5F5',
        white: '#FFF',
        stars: '#38415D',
        dark: '#3A4562',
        grayText: '#878D9D',
        brightBlue: '#5876C5',
        empoyBtn: '#55699E',
        benefitBtn: '#FFCF00',
      },
    },
    listStyleType: {
      square: 'square',
    },
  },
  plugins: [],
};
