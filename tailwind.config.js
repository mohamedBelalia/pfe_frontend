 /** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'false',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '960px',
      'tab': '1170px',
      'lg': '1440px',
    },

    
    extend: {
      colors: {
        blue500: '#199AFF',
        blue600: '#2D62FE',
        teal500: '#349292',
        gray300: '#D0D3DA',
        gray500: '#717E91',
        gray700: '#414E5F',
      },
      width: {
        container: "70%"
      },
      
     
      
     },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
// tailwind.config.js

  

