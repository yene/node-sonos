const device = require('./sonos-instance')

device.play(function (err) {
  if (err) {
    throw err
  }
  console.log('[+] Started Playing')
})
