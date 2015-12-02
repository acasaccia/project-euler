var assert = require('assert');
require('../combinations.js');

assert.deepEqual(['1', '2'].combinations(1), [['1'], ['2']]);
assert.deepEqual(['1', '2', '3'].combinations(2), [['1', '2'], ['1', '3'], ['2', '3']]);
assert.throws(function(){'123'.combinations(); });
assert.deepEqual('123'.combinations(2), ['12', '13', '23']);