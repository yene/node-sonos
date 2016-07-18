var network

network.on('connect', () => {
  console.log('[+] Connected to Sonos network')
})

network.on('disconnect', () => {
  console.error('[!] Disconnected from Sonos network')
})
