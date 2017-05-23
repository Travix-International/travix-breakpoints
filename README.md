# travix-breakpoints

[![npm](https://img.shields.io/npm/v/travix-breakpoints.svg)](https://www.npmjs.com/package/travix-breakpoints) [![Build Status](https://img.shields.io/travis/Travix-International/travix-breakpoints/master.svg)](http://travis-ci.org/Travix-International/travix-breakpoints)

> Breakpoint values for responsive design

Exports (CSS) breakpoint values for various sizes.

## Installation

```
$ npm install --save travix-breakpoints
```

## Usage

```js
import { variables, sizes } from 'travix-breakpoints';

// `variables` is a flat Object of key/value pairs
// `sizes` is an object keyed by breakpoint sizes, with min/max values
```

## Development

If you want to modify the breakpoints further, update them in `./lib/sizes.js`, and then run:

```
$ npm run generate:variables
```

This will then update the `./lib/variables.js` file accordingly.

## License

MIT © [Travix International](http://travix.com)
