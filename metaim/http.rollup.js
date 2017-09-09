const {$node__rollup__svelte} = require('ctx-core/svelte/rollup')
module.exports = $node__rollup__svelte({
  input: 'metaim/http.js',
  output: {
    file: 'private/dist/metaim.http.js'
  },
  sourceMap: true
})