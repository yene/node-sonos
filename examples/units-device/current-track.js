const device = require('./sonos-instance')

device.currentTrack()
.then(function (currentTrack) {
  console.log('[+] Title: ' + currentTrack.title)
  console.log('    Artist: ' + currentTrack.artist)
  console.log('    Position: ' + currentTrack.position + '/' + currentTrack.duration)
  console.log('    Album Art: ' + currentTrack.albumArtURL)
})
.catch(function (err) {
  throw errr
})
