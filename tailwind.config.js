const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "ks-purple": "#6c63ff",
        "ks-gradient-purple": "#867eff",
        "ks-light-purple": "#e5e6f8",
        "ks-dark-purple": "#0e122f",
        "ks-green": "#22ac98",
        "ks-orange": "#e5672f",
        "ks-blue": "#49ade2",
        "transparent": "transparent",
        ...colors
      }
    },
  },
  variants: {
    extend: {
      scale: ['group-hover']
    },
  },
  plugins: [],
}
