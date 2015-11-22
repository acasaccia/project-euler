var assert = require('assert');
require('../permutations.js');

assert.deepEqual(['1', '2'].permutations(), [['1', '2'], ['2', '1']]);
assert.deepEqual('123'.permutations(), ['123','132','213','231','312','321']);