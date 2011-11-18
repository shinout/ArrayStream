var ArrayStream = require('../ArrayStream');
var LineStream = require('linestream');
var FILENAME = __dirname + '/hoge';
if (typeof global != 'undefined') require('./load.test').load(global);

var TOTAL = 1000;
var fs = require('fs');

/**
 * normal usage (arr)
 */
var arr = [];
for (var i=0; i<TOTAL; i++) {
  arr[i] = Math.sin(i);
}

 var as = require('child_process').spawn('cat', [__filename]).stdout;

var as = new ArrayStream(arr.map(function(v) {
  return v + "\n";
}));

var wstream = as.pipe(fs.createWriteStream(FILENAME));

wstream.on("close", function() {
  var content  = fs.readFileSync(FILENAME).toString();
  var original = arr.join('\n') + '\n';
  T.equal(content, original, "pipe succeeded");
});
