const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
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
      boxShadow: {
        'type-1': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      },
    },
    fontFamily: {
      sans: ["product-sans", "Open Sans", "sans-serif"],
    },

  },
  variants: {
    extend: {
      width: ['responsive', 'hover', 'focus'],
      padding: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
})

// module.exports = withMT({
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// })