/**
 * @fileoverview Rule to disallow the use of: for, for-in, and Array.prototype.forEach
 */

"use strict";

var errors = require("../config/errors");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {
        "CallExpression": function(node) {

            // TODO: allow computed: true
            if (
                node.callee.type === "MemberExpression" &&
                node.callee.property.type === "Identifier" &&
                node.callee.computed === false &&
                node.callee.property.name === "forEach" &&
                node.arguments[0].type === "FunctionExpression"
            ) {
                context.report(
                    node,
                    errors["prefer-for-of"]
                );
            }
        },

        "ForStatement": function(node){

            if (
                node.update &&
                node.update.type === "UpdateExpression" &&
                node.update.operator === "++"
            ) {
                context.report(
                    node,
                    errors["prefer-for-of"]
                );
            }
        },

        "ForInStatement": function(node){

            context.report(
                node,
                errors["prefer-for-of"]
            );
        }
    };
};
