"use strict";

var fs     = require("fs");
var eslint = require("eslint");
var errors = require("../config/errors");
var rule   = require("../rules/prefer-for-of");

var ruleTester = new eslint.RuleTester({
    env: {
        "es6": true
    }
});

var EXAMPLES = __dirname + "/../examples/prefer-for-of";

ruleTester.run("rules/prefer-for-of", rule, {
    valid: [
        {
            code: fs.readFileSync(EXAMPLES + "/valid/for-each.js").toString(),
        },
        {
            code: fs.readFileSync(EXAMPLES + "/valid/for-of.js").toString()
        }
    ],

    invalid: [
        {
            code  : fs.readFileSync(EXAMPLES + "/invalid/for.js").toString(),
            errors: [ errors["prefer-for-of"] ]
        },
        {
            code  : fs.readFileSync(EXAMPLES + "/invalid/for-each.js").toString(),
            errors: [ errors["prefer-for-of"] ]
        },
        {
            code  : fs.readFileSync(EXAMPLES + "/invalid/for-in.js").toString(),
            errors: [ errors["prefer-for-of"] ]
        }
    ]
});
