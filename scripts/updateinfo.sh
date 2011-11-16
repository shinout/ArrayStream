#!/bin/sh
thisdir=$(dirname $0)
node ${thisdir}/umecob-command.js ${thisdir}/README.tpl.md ${thisdir}/en.lang > ${thisdir}/../README.md
node ${thisdir}/umecob-command.js ${thisdir}/README.tpl.md ${thisdir}/ja.lang > ${thisdir}/../README.ja.md
node ${thisdir}/umecob-command.js scripts/package.tpl.json  > ${thisdir}/../package.json
