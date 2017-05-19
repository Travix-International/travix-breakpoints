const assert = require('assert');
const _ = require('lodash');

const lib = require('./');

assert.ok(_.isPlainObject(lib.variables));
assert.ok(_.isPlainObject(lib.sizes));
