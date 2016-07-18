const device = require('./sonos-instance')

device.play('spotify:user:bencevans:playlist:2EGqotN8Vr1aJQgKmIV9jN', function (err) {
  if (err) {
    throw err
  }
  console.log('[+] Playing My Stared Tracks')
})
