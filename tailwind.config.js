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
      'lg': '1440px',
      'tab': '1170px',
    },
    extend: {},
  },
  plugins: [],
}

