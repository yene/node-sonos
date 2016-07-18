const SONOS_HOST = process.env.SONOS_HOST

if (!SONOS_HOST) {
  console.error('[!] Missing $SONOS_HOST')
  process.exit(1)
}

console.log('[-] Using Sonos Host ' + SONOS_HOST)

const Sonos = require('../../').Sonos
const sonos = new Sonos(SONOS_HOST)

module.exports = sonos
