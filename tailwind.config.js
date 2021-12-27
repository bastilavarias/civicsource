module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],

  fontFamily: {
    sans: ["Niramit", "Sans-serif"],
  },
};
