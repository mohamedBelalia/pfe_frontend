 /** @type {import('tailwindcss').Config} */
 export default {
   content: [
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
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
   plugins: [],
 }

