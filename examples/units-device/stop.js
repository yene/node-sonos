const device = require('./sonos-instance')

device.stop(function (err) {
  if (err) {
    throw err
  }
  console.log('[+] Stopped')
})
