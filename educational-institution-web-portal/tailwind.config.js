/** @type {import('tailwindcss').Config} */
/* eslint-disable-next-line */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '10rem',
          center: true,
        },
      },
    },
  },
  plugins: [
    require('tailwindcss'),
// eslint-disable-next-line 
    require('autoprefixer')
  ],
}