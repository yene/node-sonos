/* eslint-env mocha */
const sonos = require('../')
const assert = require('assert')

describe('sonos.search()', function () {
  it('finds a sonos device', function (done) {
    sonos.search(function (dev) {
      done()
    })
  })
})

describe('Sonos', function () {
  var device = null

  before(function (done) {
    sonos.search(function (dev) {
      device = dev
      done()
    })
  })

  describe('.deviceDescription()', function () {
    it('gets device description', function (done) {
      device.deviceDescription(function (err, data) {
        if (err) {
          return done(err)
        }
        assert.equal(typeof data, 'object')
        assert.equal(data.manufacturer, 'Sonos, Inc.')
        done()
      })
    })
  })

  describe('.play()', function () {
    describe('resuming', function () {
    })
    describe('playing uri', function () {
    })
    describe('playing spotify track', function () {
    })
  })

  describe('.currentTrack()', function () {
    describe('- no track playing', function () {
      return
      before(function (done) {
        device.stop(done)
      })
      it('returns empty data when nothing is in queue', function (done) {
        device.currentTrack(function (err, currentTrack) {
          if (err) {
            return next(err)
          }
          assert.equal(currentTrack.position, 0)
          assert.equal(currentTrack.duration, 0)
          assert.equal(currentTrack.uri, '')
          done()
        })
      })
    })

    describe('- with track playing', function () {
      before(function (done) {
        device.play('https://archive.org/download/testmp3testfile/mpthreetest.mp3', done)
      })
      after(function (done) {
        device.stop(done)
      })
      it('returns empty data when no track is playing', function (done) {
        device.currentTrack(function (err, currentTrack) {
          if (err) {
            return next(err)
          }
          assert.equal(currentTrack.position, 0)
          assert.equal(currentTrack.duration, 0)
          assert.equal(currentTrack.uri, '')
          done()
        })
      })
    })
  })

  describe('.searchMusicLibrary', function () {
    it('returns search results from the Sonos library', function (done) {
      // TODO: Verify data response
      device.searchMusicLibrary('tracks', 'Newton', {}, done)
    })
  })

})
