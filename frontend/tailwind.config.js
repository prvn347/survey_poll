const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
  plugins: [
    addVariablesForColors,
  ],
}
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
