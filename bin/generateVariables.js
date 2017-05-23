/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const VARIABLE_PREFIX = '--tx-breakpoint';
const VARIABLES_FILE = path.join(__dirname, '../lib/variables.js');

const sizes = require('../lib/sizes');
const variables = {};

_.each(sizes, function (size, name) {
  const prefix = `${VARIABLE_PREFIX}-${name}`;
  _.each(size, function (value, variable) {
    variables[`${prefix}-${variable}`] = value;
  });

  variables[prefix] = `(min-width: ${size.min}) and (max-width: ${size.max})`;
});

const existingContent = fs.readFileSync(VARIABLES_FILE, 'utf8');
const writeContent = [
  existingContent.split('*/\n')[0],
  '*/\n',
  `module.exports = ${JSON.stringify(variables, null, 2)};\n`,
].join('');

fs.writeFileSync(VARIABLES_FILE, writeContent);
console.log(`File written at: ${VARIABLES_FILE}`);
