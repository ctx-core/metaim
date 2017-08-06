const {$node__rollup__svelte} = require('ctx-core/svelte/rollup')
module.exports = $node__rollup__svelte({
  entry: 'metaim/http.js',
  dest: 'private/dist/metaim.http.js',
  sourceMap: true
})