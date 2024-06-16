/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'body': '#1a202c', // dark gray
      },
      textColor: {
        'body': '#f7fafc', // light white
      },
      colors:{
        dark: "#202124",
        lightGrey: "#525356",
        grey: "#353638",
        white: "#ffffff",
        darkYellow: "#41331C",
        slate: "#e8eaed"
      },
      transitionProperty: {
        'width': 'width',
        'padding': 'padding',
      },
    },
    fontFamily: {
      sans: ["product-sans"],
    },

  },
  variants: {
    extend: {
      width: ['responsive', 'hover', 'focus'],
      padding: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}

