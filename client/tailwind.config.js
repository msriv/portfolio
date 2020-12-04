const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  theme: {
    colors: {
      gray: colors.trueGray,
      teal: colors.teal,
      white: colors.white,
      purple: colors.purple,
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
