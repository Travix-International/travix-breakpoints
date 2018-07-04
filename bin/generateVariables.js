/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const VARIABLE_PREFIX = '--tx-breakpoint';
const VARIABLES_JS_FILE = path.join(__dirname, '../variables.js');
const VARIABLES_CSS_FILE = path.join(__dirname, '../variables.css');

const { SIZES } = require('../sizes');
const jsVars = {};
const cssVarsLines = [];


/**
 * Prepare variables
 */
_.each(SIZES, function (size, name) {

  const prefix = `${VARIABLE_PREFIX}-${name}`;
  _.each(size, function (value, variable) {
    jsVars[`${prefix}-${variable}`] = `${value}px`;

    const cssVarName = _.camelCase(`${name}-${variable}`);
    cssVarsLines.push(`@value ${cssVarName}: ${value}px;`);
  });

  const condition = `(min-width: ${size.min}px) and (max-width: ${size.max}px)`;
  jsVars[prefix] = condition;
  cssVarsLines.push(`@value ${name}: ${condition};`);
});


/**
 * Write to file
 */
// JS
const existingJsContent = fs.readFileSync(VARIABLES_JS_FILE, 'utf8');
const writeJsContent = [
  existingJsContent.split('*/\n')[0],
  '*/\n',
  `module.exports = ${JSON.stringify(jsVars, null, 2)};\n`,
].join('');

fs.writeFileSync(VARIABLES_JS_FILE, writeJsContent);
console.log(`File written at: ${VARIABLES_JS_FILE}`);

// CSS
const existingCssContent = fs.readFileSync(VARIABLES_CSS_FILE, 'utf8');
const writeCssContent = [
  existingCssContent.split('*/\n')[0],
  '*/\n',
  `${cssVarsLines.join('\n')}\n`,
].join('');

fs.writeFileSync(VARIABLES_CSS_FILE, writeCssContent);
console.log(`File written at: ${VARIABLES_CSS_FILE}`);
