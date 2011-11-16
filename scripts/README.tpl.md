ArrayStream.js ${version}
==========
[Node.js] ${description}

${changelog}

----------------
<< for (var i in changeLogs) { >>
* [${i}]: ${changeLogs[i]}
<< } >>

${overview}
----------------
### ${install} ###
    git clone git://github.com/shinout/ArrayStream.git

    ${_OR}

    npm install arraystream

### ${usage} ###
#### ${witharr} ####
    var ArrayStream = require('arraystream');
    var stream = new ArrayStream(['hoge', 'fuga', 'piyo']);

    stream.on('data', function(value, key) {
      console.log(value); // hoge, fuga, piyo
      console.log(key);   // 0,    1,    2
    });

    stream.on('end', function() { // ${endemit(iteration)}
      console.log('end');
    });

    stream.on('error', function(e) { // ${erremit}
      console.log(e);
    });



#### ${withobj} ####
    var ArrayStream = require('arraystream');
    var objstream = new ArrayStream({a:'hoge', b:'fuga', c:'piyo']);

    objstream.on('data', function(value, key) {
      console.log(key);   // a,    b,    c
      console.log(value); // hoge, fuga, piyo
    });

    objstream.on('end', function() { // ${endemit('Object')}
      console.log('end');
    });

    objstream.on('error', function(e) { // ${erremit}
      console.log(e);
    });



