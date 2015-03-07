# level-dna
[![NPM](https://nodei.co/npm/level-dna.png)](https://nodei.co/npm/level-dna/)

Import genome data ([json format](https://www.npmjs.com/package/dna2json)) into LevelDB.

## Example

Example of importing the dna of [contra](https://github.com/contra) into level.

```js
var fs = require('request')
var JSONStream = require('JSONStream')
var levelup = require('levelup')
var tolevel = require('level-dna')

var db = levelup('./contra')

request('https://github.com/contra/dna/blob/master/dna.json?raw=true')
  .pipe(JSONStream.parse('*'))
  .pipe(tolevel(db))
```

The format will turn
```
{"id":"rs4477212","c":1,"pos":82154,"g":"AA"}
```
into
```
{"key":"rs4477212","value": "AA"}
```

So it will only save the genotype and the RSID. If you think you also need the other
information, feel free to create an issue/pull request.
