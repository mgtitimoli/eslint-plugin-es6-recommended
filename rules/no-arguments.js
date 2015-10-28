/**
 * @fileoverview Rule to disallow the use of arguments
 */

"use strict";

var errors = require("../config/errors");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {
        "Identifier": function(node) {

            if (node.name === "arguments") {
                context.report({
                    node   : node,
                    message: errors["no-arguments"]
                });
            }
        }
    };
};
