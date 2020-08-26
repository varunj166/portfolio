// const autoprefixer = require('autoprefixer');

module.exports = {
  // plugins: [require('autoprefixer')]
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        '> 0.2%',
        'ie >= 10',
        'not op_mini all',
        'not dead'
      ]
    }
  }
};