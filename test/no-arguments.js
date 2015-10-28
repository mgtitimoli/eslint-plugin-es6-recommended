"use strict";

var fs     = require("fs");
var eslint = require("eslint");
var errors = require("../config/errors");
var rule   = require("../rules/no-arguments");

var ruleTester = new eslint.RuleTester({
    env: {
        "es6": true
    }
});

var EXAMPLES = __dirname + "/../examples/no-arguments";

ruleTester.run("rules/no-arguments", rule, {
    valid: [
        {
            code: fs.readFileSync(EXAMPLES + "/valid.js").toString(),
        }
    ],

    invalid: [
        {
            code  : fs.readFileSync(EXAMPLES + "/invalid.js").toString(),
            errors: [ errors["no-arguments"] ]
        }
    ]
});
