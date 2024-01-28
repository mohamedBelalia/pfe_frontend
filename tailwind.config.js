/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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

