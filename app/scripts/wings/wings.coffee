photonics = require('./photonics.coffee')
isServer  = typeof window is 'undefined'

Wings = {
  isServer: isServer
  isClient: !isServer
}

module.exports = Wings