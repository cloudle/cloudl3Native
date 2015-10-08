isServer  = typeof window is 'undefined'

Wings =
  isServer: isServer
  isClient: !isServer

module.exports = Wings