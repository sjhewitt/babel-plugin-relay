/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule createCompatNode
 * 
 * @format
 */

'use strict';

/**
 * Relay Compat transforms graphql definitions into objects with `modern` and
 * `classic` keys, each containing the resulting transforms.
 */
function createCompatNode(t, modernNode, classicNode) {
  return t.objectExpression([t.objectProperty(t.identifier('modern'), modernNode), t.objectProperty(t.identifier('classic'), classicNode)]);
}

module.exports = createCompatNode;