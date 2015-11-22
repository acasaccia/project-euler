var assert = require('assert');
require('../array_unique.js');

assert.deepEqual(['1', '2', '2', '3'].unique(), ['1', '2', '3']);
assert.deepEqual([3, 1, 2, 2, 3, 3, 3, 4, 5].unique(), [3, 1, 2, 4, 5]);
