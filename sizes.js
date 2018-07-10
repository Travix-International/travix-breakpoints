var TINY = 'tiny';
var SMALL = 'small';
var MEDIUM = 'medium';
var LARGE = 'large';
var XLARGE = 'xlarge';

var SIZES = {};
SIZES[TINY] = {
  max: 319,
  min: 0
};
SIZES[SMALL] = {
  max: 767,
  min: 320
};
SIZES[MEDIUM] = {
  max: 999,
  min: 768
};
SIZES[LARGE] = {
  max: 1199,
  min: 1000
};
SIZES[XLARGE] = {
  max: 9999,
  min: 1200
};

module.exports = {
  TINY: TINY,
  SMALL: SMALL,
  MEDIUM: MEDIUM,
  LARGE: LARGE,
  XLARGE: XLARGE,
  SIZES: SIZES
};
