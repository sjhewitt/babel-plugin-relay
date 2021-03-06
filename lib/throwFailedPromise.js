/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @providesModule throwFailedPromise
 * @format
 */

'use strict';

/**
 * This function is used in place of the non-standard promise.done() method.
 * However, this is an anti-pattern as any function which operates on a Promise
 * should instead consider returning that Promise for the caller to handle
 * failure itself.
 */

function throwFailedPromise(promise) {
  promise.then(undefined, function (error) {
    return setTimeout(function () {
      throw error;
    }, 0);
  });
}

module.exports = throwFailedPromise;