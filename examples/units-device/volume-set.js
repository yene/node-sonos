const device = require('./sonos-instance')

device.setVolume(10, function (err, volume) {
  if (err) {
    throw err
  }
  console.log('[+] Volume set to ' + volume)
})
