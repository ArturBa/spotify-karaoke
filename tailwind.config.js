module.exports = {
  prefix: '',
  purge: [
    './apps/**/*.html',
    './apps/**/*.ts',
    './libs/**/*.html',
    './libs/**/*.ts',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        player: '100px',
      },
      width: {
        sidebar: '300px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
