const {$browser__rollup__svelte} = require('ctx-core/svelte/rollup')
module.exports = $browser__rollup__svelte({
  entry: 'metaim/browser.js',
  dest: 'public/dist/metaim.js',
  sourceMap: true
})