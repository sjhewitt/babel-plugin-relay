/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @fullSyntaxTransform
 * @format
 */

'use strict';

function invariant(condition, format) {
  if (!condition) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    throw new Error(require('util').format.apply(require('util'), [format].concat(args)));
  }
}

module.exports = invariant;