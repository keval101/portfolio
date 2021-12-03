module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.ts'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xl-max': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl-max': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... }

      'lg-max': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }

      'md-max': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      'sm-max': {'max': '640px'},
      // => @media (max-width: 640px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
