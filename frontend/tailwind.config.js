/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {

   
    extend: {
      colors:{
        "darkie":"#23232d",
        "lightie":"#eff3f2",
        "btncolor":"#2694A8"
        ,"pinkish":"#EA80FC",
        'blueish':"#EEF4FC"

      },
      fontFamily: {
        'bricolage': ['Bricolage Grotesque', 'sans-serif'],      },
      
    },
  },
  plugins: [],
}
