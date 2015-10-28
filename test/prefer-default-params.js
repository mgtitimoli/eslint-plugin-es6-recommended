"use strict";

var fs     = require("fs");
var eslint = require("eslint");
var errors = require("../config/errors");
var rule   = require("../rules/prefer-default-params");

var ruleTester = new eslint.RuleTester({
    env: {
        "es6": true
    }
});

var EXAMPLES = __dirname + "/../examples/prefer-default-params";

ruleTester.run("rules/prefer-default-params", rule, {
    valid: [
        {
            code: fs.readFileSync(EXAMPLES + "/valid.js").toString(),
        }
    ],

    invalid: [
        {
            code  : fs.readFileSync(EXAMPLES + "/invalid.js").toString(),
            errors: [ errors["prefer-default-params"] ]
        }
    ]
});
