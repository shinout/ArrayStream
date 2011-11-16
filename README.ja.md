ArrayStream.js 0.0.1
==========
[Node.js] 配列,ハッシュをReadableStreamとして扱う

変更履歴

----------------
* [0.0.1]: リリース

概要
----------------
### インストール方法 ###
    git clone git://github.com/shinout/ArrayStream.git

    または

    npm install arraystream

### 使い方 ###
#### 配列を扱う ####
    var ArrayStream = require('arraystream');
    var stream = new ArrayStream(['hoge', 'fuga', 'piyo']);

    stream.on('data', function(value, key) {
      console.log(value); // hoge, fuga, piyo
      console.log(key);   // 0,    1,    2
    });

    stream.on('end', function() { // イテレーションの終わりに実行されます。
      console.log('end');
    });

    stream.on('error', function(e) { // エラー発生時に呼び出されます。
      console.log(e);
    });



#### オブジェクトを扱う ####
    var ArrayStream = require('arraystream');
    var objstream = new ArrayStream({a:'hoge', b:'fuga', c:'piyo']);

    objstream.on('data', function(value, key) {
      console.log(key);   // a,    b,    c
      console.log(value); // hoge, fuga, piyo
    });

    objstream.on('end', function() { // Objectの終わりに実行されます。
      console.log('end');
    });

    objstream.on('error', function(e) { // エラー発生時に呼び出されます。
      console.log(e);
    });


