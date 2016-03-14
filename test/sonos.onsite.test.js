/* eslint-env mocha */
const sonos = require('../')
const assert = require('assert')

describe('Search Music Library', function () {
  var device = null

  before(function (done) {
    var search = sonos.search()
    search.once('DeviceAvailable', function (dev) {
      device = dev
      done()
    })
  })

  it('get/set volume', function (done) {
    device.getVolume(function (err, initialVolume) {
      if (err) return done(err)
      var volumeToSet = initialVolume === 0 ? 1 : 0
      device.setVolume(volumeToSet, function (err) {
        if (err) return done(err)
        device.getVolume(function (err, currentVolume) {
          if (err) return done(err)
          assert.equal(volumeToSet, currentVolume)
          done()
        })
      })
    })
  })
  // it('returns search results from the Sonos library', function (done) {
  //   // TODO: Verify data response
  //   device.searchMusicLibrary('tracks', 'Newton', {}, done)
  // })
})
