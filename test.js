const assert = require('assert');
const _ = require('lodash');

const lib = require('./');

// variables
assert.ok(_.isPlainObject(lib.variables));


// sizes
assert.ok(_.isPlainObject(lib.SIZES));
_.each(lib.SIZES, function (entries, sizeName) {
  const entryKeys = Object.keys(entries);

  assert.ok(entryKeys.length > 1);

  const hasMin = entryKeys.indexOf('min') > -1;
  const hasMax = entryKeys.indexOf('max') > -1;

  assert.ok(hasMin || hasMax);
});
