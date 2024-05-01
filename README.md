# Converting Julian and Gregorian dates to each other.

**_This package assumes use of the Gregorian calendar and only works correctly for dates after 1858._**

---

## Install from jsr.io

[![JSR Scope](https://jsr.io/badges/@hinthar)](https://jsr.io/@hinthar) [![JSR](https://jsr.io/badges/@hinthar/julian-days-converter)](https://jsr.io/@hinthar/julian-days-converter) [![JSR Score](https://jsr.io/badges/@hinthar/julian-days-converter/score)](https://jsr.io/@hinthar/julian-days-converter)

npm

```bash
npx jsr add @hinthar/julian-days-converter
```
yarn

```bash
yarn dlx jsr add @hinthar/julian-days-converter
```
pnpm

```bash
pnpm dlx jsr add @hinthar/julian-days-converter

```
deno

```bash
deno add @hinthar/julian-days-converter
```
bun

```bash
bunx jsr add @hinthar/julian-days-converter
```




## Install from npm registry

```bash
npm i @hinthar/julian-days-converter
```

```bash
pnpm i @hinthar/julian-days-converter
```

```bash
yarn add @hinthar/julian-days-converter
```



## From CDN

![jsd](https://www.jsdelivr.com/assets/8aab44d2735c604d59887d32cc74b517689e5d5c/img/jsdelivr-horizontal-regular.svg)

```html
<script src="https://cdn.jsdelivr.net/npm/@hinthar/julian-days-converter@1.0.0/dist/browser/index.min.js"></script>
```

**UNPKG**

```html
<script src="https://www.unpkg.com/@hinthar/julian-days-converter@1.0.0/dist/browser/index.js"></script>
```

---

## Usage

**CJS**

```javascript
const julianDay = require("@hinthar/julian-days-converter");
const converter = julianDay();
// Gregorian to Julian
const jd = converter.toJD(2024, 4, 30);
// Julian to Gregorian
const gregorianDate = converter.toGregorian(2460430.5);
console.log(jd); // 2460430.5
console.log(gregorianDate);
// { year: 2024, month: 4, day: 30, hour: 12, minute: 0, second: 0 }
```

**ESM**

```javascript
import julianDay from "@hinthar/julian-days-converter";
const converter = julianDay();
// Gregorian to Julian
const jd = converter.toJD(2024, 4, 30);
// Julian to Gregorian
const gregorianDate = converter.toGregorian(2460430.5);
console.log(jd); // 2460430.5
console.log(gregorianDate);
// { year: 2024, month: 4, day: 30, hour: 12, minute: 0, second: 0 }
```

**Browser**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/@hinthar/julian-days-converter@1.0.0/dist/browser/index.min.js"></script>
  </head>
  <body>
    <script>
      // Gregorian to Julian
      var jd = toJD(2024, 4, 30);
      // Julian to Gregorian
      var gregorianDate = toGregorian(2460430.5);
      console.log(jd); // 2460430.5
      console.log(gregorianDate);
      // { year: 2024, month: 4, day: 30, hour: 12, minute: 0, second: 0 }
    </script>
  </body>
</html>
```

---
