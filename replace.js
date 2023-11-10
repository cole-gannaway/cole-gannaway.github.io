const replace = require('replace-in-file');

const options = {
  files: 'build/index.html',
  from: '../dist/output.css', // The text you want to replace
  to: 'styles.css', // The replacement text
};

try {
  const results = replace.sync(options);
  console.log('Replacement results:', results);
} catch (error) {
  console.error('Error occurred:', error);
}