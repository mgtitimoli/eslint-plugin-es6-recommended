/**
 * eslint-plugin-es6-recommended - ESLint plugin for JavaScript ES6 best practices
 */

"use strict";

module.exports = {
    rules: {
        "no-arguments" : require("./rules/no-arguments"),
        "prefer-for-of": require("./rules/prefer-for-of")
    },
    rulesConfig: {
        "no-arguments" : 0,
        "prefer-for-of": 0
    }
};
