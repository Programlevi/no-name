const defaultTheme = require("tailwindcss/defaultTheme");
const production = process.env.NODE_ENV === "production";

module.exports = {
  purge: {
    content: ["./src/**/*.svelte", "./src/**/*.html"],
    defaultExtractor: (content) => [
      ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
      ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
    ],
    enabled: production, //use env for this
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
