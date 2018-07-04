const TINY = 'tiny';
const SMALL = 'small';
const MEDIUM = 'medium';
const LARGE = 'large';
const XLARGE = 'xlarge';

const SIZES = {
  [TINY]: {
    max: 319,
    min: 0
  },
  [SMALL]: {
    max: 767,
    min: 320
  },
  [MEDIUM]: {
    max: 999,
    min: 768
  },
  [LARGE]: {
    max: 1199,
    min: 1000
  },
  [XLARGE]: {
    max: 9999,
    min: 1200
  }
};

module.exports = {
  TINY,
  SMALL,
  MEDIUM,
  LARGE,
  XLARGE,
  SIZES
};
