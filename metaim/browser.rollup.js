const {$browser__rollup__svelte} = require('ctx-core/svelte/rollup')
module.exports = $browser__rollup__svelte({
  input: 'metaim/browser.mjs',
  output: {
    file: 'public/dist/metaim.js'
  },
  sourceMap: true
})