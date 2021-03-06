/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule getValidRelayQLTag
 * 
 * @format
 */

'use strict';

/**
 * Given a TemplateLiteral path, return the metadata about a RelayQL tag
 * if one exists.
 */

function getValidRelayQLTag(path) {
  var node = path.node;


  var tag = path.get('tag');
  var tagName = tag.matchesPattern('Relay.QL') ? 'Relay.QL' : tag.matchesPattern('RelayClassic.QL') ? 'RelayClassic.QL' : tag.isIdentifier({ name: 'RelayQL' }) ? 'RelayQL' : null;
  if (!tagName) {
    return [null, null, null];
  }

  var p = path;
  var propName = null;
  while (!propName && (p = p.parentPath)) {
    if (p.isProperty()) {
      propName = p.node.key.name;
    }
  }

  return [node.quasi, tagName, propName];
}

module.exports = getValidRelayQLTag;