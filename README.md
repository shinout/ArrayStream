Extra comma. at line 7.
//------------------------------------//
//-------------- start ---------------//
 1	({ changeLogs        :
 2	    { "0.0.1" :   "Release"
 3	    }
 4	
 5	, changelog         : 'Change Log'
 6	, _OR               : 'OR'
*7	, description       : 'ReadableStream from array (or hash variable)',
 8	, install           : 'Installation'
 9	, overview          : 'Overview'
 10	, usage             : 'Usage'
 11	, witharr           : 'with Array'
 12	, withobj           : 'with Object'
 13	, iteration         : 'iteration'
 14	, endemit           : function(v) { return 'emitted at the end of '+ v}
 15	, erremit           : 'emitted when an error occurred'
 16	}
 17	)
//--------------- end ----------------//
//------------------------------------//

SyntaxError: Unexpected token ,
    at jsonize (/home/shinout/node_modules/umecob/umecob.js:339:19)
    at Object.sync (/home/shinout/node_modules/umecob/umecob.js:365:42)
    at Function.sync (/home/shinout/node_modules/umecob/umecob.js:237:90)
    at umecob (/home/shinout/node_modules/umecob/umecob.js:20:49)
    at Object.<anonymous> (/home/shinout/node_modules/arraystream/scripts/umecob-command.js:18:14)
    at Module._compile (module.js:432:26)
    at Object..js (module.js:450:10)
    at Module.load (module.js:351:31)
    at Function._load (module.js:310:12)
    at Array.0 (module.js:470:10)
'description' is not defined.  in /home/shinout/node_modules/arraystream/scripts/../scripts/README.tpl.md at line 3.
//------------------------------------//
//-------------- start ---------------//
 1	ArrayStream.js ${version}
 2	==========
*3	[Node.js] ${description}
 4	
 5	${changelog}
 6	
 7	----------------
 8	<< for (var i in changeLogs) { >>
 9	* [${i}]: ${changeLogs[i]}
 10	<< } >>
 11	
 12	${overview}
 13	----------------
//--------------- end ----------------//
//------------------------------------//

ReferenceError: description is not defined
    at Function.<anonymous> (eval at <anonymous> (/home/shinout/node_modules/umecob/umecob.js:548:50))
    at Function.eval (/home/shinout/node_modules/umecob/umecob.js:548:45)
    at Object.run (/home/shinout/node_modules/umecob/umecob.js:590:21)
    at common_end (/home/shinout/node_modules/umecob/umecob.js:222:57)
    at Function.sync (/home/shinout/node_modules/umecob/umecob.js:238:16)
    at umecob (/home/shinout/node_modules/umecob/umecob.js:20:49)
    at Object.<anonymous> (/home/shinout/node_modules/arraystream/scripts/umecob-command.js:18:14)
    at Module._compile (module.js:432:26)
    at Object..js (module.js:450:10)
    at Module.load (module.js:351:31)
'description' is not defined.  in /home/shinout/node_modules/arraystream/scripts/../scripts/README.tpl.md at line 3.