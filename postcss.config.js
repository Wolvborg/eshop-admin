/* eslint-disable @typescript-eslint/no-var-requires */

const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    require('tailwindcss'),
    ...(process.env.NODE_ENV === 'production' ? [autoprefixer] : []),
  ],
};
