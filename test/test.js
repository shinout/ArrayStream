var ArrayStream = require('../ArrayStream');
if (typeof global != 'undefined') require('./load.test').load(global);
require("termcolor").define;

var TOTAL = 1000;

/**
 * normal usage (arr)
 */
var arr = [];
for (var i=0; i<TOTAL; i++) {
  arr[i] = Math.sin(i);
}

//var arem = new ArrayStream(arr);
var arem = ArrayStream.create(arr, {name: 'arr'});
var count = 0;

arem.on('data', function(value, key) {
  T.equal(count, key, 'key number');
  T.equal(Math.round(value, 8), Math.round(Math.sin(key), 8), 'value');
  count++;
});

arem.on('end', function() {
  T.equal(count, TOTAL, 'count');
});



/**
 * normal usage (obj)
 */

var obj = {};
var count3 = 0;
for (var i=0; i<TOTAL; i++) {
  obj[Math.sin(i)] = i;
}

//var objem = new ArrayStream(obj);
var objem = ArrayStream.create(obj, {name: 'obj'});
objem.on('data', function(value, key) {
  T.equal(Math.round(key, 8), Math.round(Math.sin(value), 8), 'key');
  T.equal(count3, value, 'value');
  count3++;
});

objem.on('end', function() {
  T.equal(count3, TOTAL, 'count');
});

/**
 * throwing error without continuing
 */

//var eobjem = new ArrayStream(obj);
var eobjem = ArrayStream.create(obj, {name: 'objerr'});
var ecount = 0;

eobjem.on('data', function(v, k) {
  if ( v == 0) {
    throw "hoge error";
  }
});

eobjem.on('error', function(e) {
  ecount++;
  T.equal(e, 'hoge error', 'object err test');
});

eobjem.on('end', function() {
  T.equal(ecount, 1, 'object err test');
});

/**
 * throwing error without continuing
 */

//var eobjem2 = new ArrayStream(obj, { tolerant: true});
var eobjem2 = ArrayStream.create(obj, { tolerant: true, name: 'objerr2'});
var ecount2 = 0;

eobjem2.on('data', function(v, k) {
  if ( (v % 100) == 0) {
    throw "hoge error";
  }
});

eobjem2.on('error', function(e) {
  ecount2++;
  T.equal(e, 'hoge error', 'object err test');
});

eobjem2.on('end', function() {
  T.equal(ecount2, Math.floor(TOTAL/100), 'error count');
});


/* resume test */
var ae = ArrayStream.create(arr, {pause: true});
var c = c2 = 0;

ae.on('data', function(value, key) {
  T.equal(c, key, 'key number');
  T.equal(Math.round(value, 8), Math.round(Math.sin(key), 8), 'value');
  c++;
});

ae.on('end', function() {
  T.equal(c, TOTAL, 'with resume end');
});

ae.resume();



/**
 * resume test 2 (resuming after emitting starts)
 **/
var as = ArrayStream.create(arr);

as.on('data', function(value, key) {
  T.equal(c2, key, 'key number');
  T.equal(Math.round(value, 8), Math.round(Math.sin(key), 8), 'value');
  c2++;

  if (key == 500) {
    as.pause();
  }
});

as.on('end', function() {
  T.equal(c2, TOTAL, 'with resume2 end');
});


setTimeout(function() {
  as.resume();
}, 2000);
