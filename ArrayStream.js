/**
 * ArrayStream -- ReadableStream of arrays or hash variables
 * @author SHIN Suzuki
 *
 */

var Stream = require('stream').Stream;
    nextTick = process.nextTick;

/**
 * @constructor
 * 
 * @param {Array} or {Object} arr 
 * @param {Object} op
 *          {boolean} tolerant  if true, continue iteration even if errors occurred
 * 
 * @event {data} function(value, key)
 *    Emitted when received an element.
 *
 * @event {end} function()
 *    Emitted when reached end
 *
 * @event {error} function(e)
 *    Emitted when an error occurred
 **/
function ArrayStream(arr, op) {
  op = op || {};
  this.i = 0;

  this.readable = true;
  this.paused   = !!op.pause;

  this.arr = arr || [];
  this.isArray  = Array.isArray(arr); 
  this.keys     = Object.keys(arr);
  this.length   = this.keys.length;
  this._options = op;

  if (!this.paused) nextTick(emit.bind(this));
}

ArrayStream.create = function(arr, op) {
  return new this(arr, op);
};

ArrayStream.forEach = function(arr, op, fn) {
  var args = Array.prototype.slice.call(arguments);
  var arg = args.shift();
  var fn  = args.pop();

  var stream = ArrayStream.create(arg, args.length? args[0]: null);

  stream.on("data", function(value, key) {
    fn(value, key);
  });
  return stream;
};

/**
 * extends Stream
 **/
require('util').inherits(ArrayStream, Stream);

/**
 * @see ReadableStream
 **/
ArrayStream.prototype.resume = function() {
  this.paused = false;
  emit.call(this);
};

/**
 * @see ReadableStream
 **/
ArrayStream.prototype.pause = function() {
  this.paused = true;
};

/**
 * @see ReadableStream
 **/
ArrayStream.prototype.destroy = function() { // implementing ReadableStream
  this.stream.destroy();
  this.readable = false;
}


/**
 * @see ReadableStream
 **/
ArrayStream.prototype.destroySoon = function() { // implementing ReadableStream
  // Not knowing what to do, this remains unimplemented...
  this.destroy();
}

/**
 * private function
 **/
function emit() {
  var self = this;
  (function execute() {
    try {
      if(self.i >= self.length) {
        self.emit('end');
      }
      else {
        var k = self.keys[self.i];
        self.emit('data', self.arr[k], k); 
        self.i++;
        if (!self.paused) nextTick(execute);
      }
    } catch (e) {
      self.emit('error', e);
      if (self._options.tolerant) {
        self.i++;
        if (!self.paused) nextTick(execute);
      }
      else {
        self.emit('end');
        self.readable = false;
      }
    }
  })();
}


ArrayStream.version = '0.0.3';

module.exports = ArrayStream;
