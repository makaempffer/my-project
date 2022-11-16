/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      mdsm: '480',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        outfit:['Outfit', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        veryDarkBlue: '#293241',
        darkBlue: '#3d5a80',
        lightBlue: '#98c1d9',
        veryLightBlue: '#e0fbfc'
      }
    },
  },
  plugins: [],
}