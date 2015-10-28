/**
 * @fileoverview Disallow reassignment of function parameters.
 * @author Nat Burns
 * @copyright 2014 Nat Burns. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
  var props = context.options[0] && Boolean(context.options[0].props);
  /**
   * Reports a reference if is non initializer and writable.
   * @param {Reference} reference - A reference to check.
   * @param {int} index - The index of the reference in the references.
   * @param {Reference[]} references - The array that the reference belongs to.
   * @returns {void}
   */
  function checkReference(reference, index, references) {

    //type: "LogicalExpression";
    if (references.type === "AssignmentExpression") {

      context.report();
    }
  }

  /**
   * Checks parameters of a given function node.
   * @param {ASTNode} node - A function node to check.
   * @returns {void}
   */
  function checkForFunction(node) {
    node.params
  }

  return {
    // `:exit` is needed for the `node.parent` property of identifier nodes.
    "FunctionDeclaration:exit"    : checkForFunction,
    "FunctionExpression:exit"     : checkForFunction,
    "ArrowFunctionExpression:exit": checkForFunction
  };

};
