var through = require('through2')

function importer(levelup) {
  var transform = through.obj(function (obj, env, next) {
    if(!obj.id) return next() // error?
    this.push({key: obj.id, value: obj.g || '_', type: 'put'})
    next()
  })
  
  transform
    .pipe(levelup.createWriteStream({type: 'put'}))

  return transform
}

module.exports = importer