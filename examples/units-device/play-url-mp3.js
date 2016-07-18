const device = require('./sonos-instance')

device.play('https://archive.org/download/testmp3testfile/mpthreetest.mp3',
function (err) {
  if (err) {
    throw err
  }
  console.log('[+] Started Playing MP3 Test from Archive.org')
})
