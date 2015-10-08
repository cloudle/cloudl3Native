Wings = require('./scripts/wings/wings.coffee')
main  = require('./scripts/sub.coffee')
slave = require('./scripts/slave.coffee')
photonics = require('./main.coffee')

window.Photonics = photonics if Wings.isClient

console.log(Wings, photonics)