/**
 * @fileoverview Prefer use of default parameters.
 * @author Felix Enriquez
 * @copyright 2015 Felix Enriquez. All rights reserved.
 */
"use strict";
var msg = 'use default parameters instead asignation with "||" operator';
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
  function checkForFunction(node) {
    //from function body to body in blockStament
    var body = node.body.body;

    body.forEach(function(childNode) {
      if (childNode.type === 'ExpressionStatement' && childNode.expression.type === 'AssignmentExpression') {
        node.params.forEach(function(param) {
          if (node.expression.left.name === param.name &&
            childNode.expression.right.type === 'LogicalExpression' &&
            childNode.expression.right.operator === "||" &&
            childNode.expression.right.left.name === param.name) {
            context.report(
              childNode,
              msg);
          }
        });
      }
    });
  }

  return {
    // `:exit` is needed for the `node.parent` property of identifier nodes.
    "FunctionDeclaration:exit": checkForFunction,
    "FunctionExpression:exit": checkForFunction,
    "ArrowFunctionExpression:exit": checkForFunction
  };

};

module.exports.schema = [{
  "type": "object",
  "properties": {
    "props": {
      "type": "boolean"
    }
  },
  "additionalProperties": false
}];
