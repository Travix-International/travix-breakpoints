# travix-breakpoints

[![npm](https://img.shields.io/npm/v/travix-breakpoints.svg)](https://www.npmjs.com/package/travix-breakpoints) [![Build Status](https://img.shields.io/travis/Travix-International/travix-breakpoints/master.svg)](http://travis-ci.org/Travix-International/travix-breakpoints)

> Breakpoint values for responsive design

Exports (CSS) breakpoint values for various sizes.

## Installation

```
$ npm install --save travix-breakpoints
```

## Usage

### CommonJS

```js
import { variables, sizes } from 'travix-breakpoints';

// `variables` is a flat Object of key/value pairs
// `sizes` is an object keyed by breakpoint sizes, with min/max values
```

You can also import them individually:

```js
import sizes from 'travix-breakpoints/sizes';
import variables from 'travix-breakpoints/variables';
```

### CSS Modules

```css
@value small from "travix-breakpoints/variables.css";

@media small {
  /* ... */
}
```

Or you can even import everything, and then extract them in the file:

```css
@value breakpoints: "travix-breakpoints/variables.css";
@value small, medium, smallMax from breakpoints;

@media small {
  /* ... */
}

.someClass {
  width: smallMax;
}
```

## Development

If you want to modify the breakpoints further, update them in `./lib/sizes.js`, and then run:

```
$ npm run generate:variables
```

This will then update the `./lib/variables.js` file accordingly.

## License

MIT © [Travix International](http://travix.com)
