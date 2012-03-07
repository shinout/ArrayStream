ArrayStream.js 0.0.5
==========
[Node.js] ReadableStream from array (or hash variable)


Overview
----------------
## Installation ##

    $ git clone git://github.com/shinout/ArrayStream.git

    OR

    $ npm install arraystream

## Usage ##
### with Array ###

    var ArrayStream = require('arraystream');
    var stream = ArrayStream.create(['hoge', 'fuga', 'piyo']);

    stream.on('data', function(value, key) {
      console.log(value); // hoge, fuga, piyo
      console.log(key);   // 0,    1,    2
    });

    stream.on('end', function() { // emitted at the end of iteration
      console.log('end');
    });

    stream.on('error', function(e) { // emitted when an error occurred
      console.log(e);
    });




### with Object ###
    var ArrayStream = require('arraystream');
    var objstream = new ArrayStream({a:'hoge', b:'fuga', c:'piyo']);

    objstream.on('data', function(value, key) {
      console.log(key);   // a,    b,    c
      console.log(value); // hoge, fuga, piyo
    });

    objstream.on('end', function() { // emitted at the end of Object
      console.log('end');
    });

    objstream.on('error', function(e) { // emitted when an error occurred
      console.log(e);
    });


### syntax sugar (forEach) ###

    var arr = ['hoge', 'fuga', 'piyo'];
    var stream = ArrayStream.forEach(arr, function(value, key) {
      console.log(value); // hoge, fuga, piyo
      console.log(key);   // 0,    1,    2
    });

    stream.on('end', function() { // emitted at the end of iteration
      console.log('end');
    });

    stream.on('error', function(e) { // emitted when an error occurred
      console.log(e);
    });


