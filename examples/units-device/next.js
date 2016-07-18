const device = require('./sonos-instance')

device.next(function (err) {
  if (err) {
    throw err
  }
  console.log('[+] Moved onto next track')
})
