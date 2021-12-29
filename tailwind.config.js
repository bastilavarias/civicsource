module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
      },

      screens: {
        "4xl": "2560px",
      },

      colors: {
        "white-transparent": "rgba(255,255,255, 0.5)",
        "primary-gray": "#484848",
        "secondary-gray": "#8F8F8F",
        "primary-green": "rgba(0, 235, 62, 1)",
        "primary-red": "rgba(233, 28, 28, 1)",
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
