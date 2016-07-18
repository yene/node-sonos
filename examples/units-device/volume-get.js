const device = require('./sonos-instance')

device.volume(function (err, volume) {
  if (err) {
    throw err
  }
  console.log('[+] Volume set at ' + volume)
})
