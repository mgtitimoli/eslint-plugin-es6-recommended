# eslint-plugin-es6-recommended
ESLint plugin to promote ES6 best practices.

### Installation

`npm install --save-dev eslint-plugin-es6-recommended`

### Usage

Add the following to your `.eslintrc` file:

```js
"plugins": [
  "es6-recommended"
]
```
### Rules

All of these rules have to do with JavaScript modules in one way or another.

- `no-arguments` - use rest parameters instead of arguments
- `prefer-for-of` - use for-of instead of for, for-in, and Array.prototype.forEach

TODO:
- prefer-class
- prefer-default-params
