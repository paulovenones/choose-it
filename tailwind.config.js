const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      orange: {
        300: '#FF9C38',
        400: '#FF7D26',
        500: '#FF5311',
        600: '#E5250B',
        700: '#CC1804',
      },
      blue: {
        300: '#33BEFF',
        400: '#26A1FF',
        500: '#1177FF',
        600: '#085CCC',
        700: '#003EB2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
