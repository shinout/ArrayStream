var ArrayStream = require('../ArrayStream');
require('./load.test').load(global);
require('termcolor').define;

var TOTAL = 1000;
var fs = require('fs');

/**
 * normal usage (arr)
 */
var arr = [];
for (var i=0; i<TOTAL; i++) {
  arr[i] = Math.sin(i);
}

var as = ArrayStream.forEach(arr, function(v, k) {
  T.equal(v, arr[k], 'foreach');
});
