/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5E8BC2',
        secondary: '#A2ACBD',
        tertiary: '#3E4756',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
};
