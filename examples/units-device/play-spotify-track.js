const device = require('./sonos-instance')

device.play('spotify:track:4IcrE1a2ay9pbmCRy9EvrW', function (err) {
  if (err) {
    throw err
  }
  console.log('[+] Playing Misshapes by Bare Jams')
})
