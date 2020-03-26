const sass = require('sass'); // or require('node-sass');

const result = sass.renderSync({ file: './style.scss' });

console.log(result.css.toString());
