import env from 'metaim/env'
import {clone} from 'ctx-core/object/lib'
import $html__layout from 'ctx-core/layout/html'
import {$versioned
      , $versioned__js} from 'ctx-core/html/node'
import {$html__js} from 'ctx-core/html/lib'
import $ctx__html__metaim from 'metaim/node'
import {$regexp__indentation} from 'ctx-core/string/indendation'
import {$js__components} from 'ctx-core/svelte/js'
import {log,debug} from 'ctx-core/logger/lib'
const logPrefix = 'metaim/html'
export function $html__root(ctx, ...opts$$) {
  log(`${logPrefix}|$html__root`)
  const opts = clone(...opts$$)
      , {names__components} = opts
  return $html__layout(ctx, {
    title: 'MetaIM',
    $meta__$head: $$meta__$head(ctx, opts),
    css: [
      $versioned('/dist/metaim.css')
    ],
    $body
  })
  function $body() {
  const $ctx__html =
          opts.$ctx__html
          || $ctx__html__metaim
      , ctx__html = $ctx__html(ctx, {
          env_name: env.NODE_ENV
        })
      , json__ctx__html = JSON.stringify(ctx__html)
    if (!opts.js) {
      opts.js = $js__html__files(ctx)
    }
    return `
      <body>
        ${$html__mount()}
      </body>
    `.trim().replace($regexp__indentation(2), '')
  }
  function $html__mount() {
    return  names__components
            ? `
              <script type="application/javascript">
                (function() {
                  $ctx.mount({
                    ctx: ${json__ctx__html},
                    components: ${$js__components(names__components)}
                  })
                })()
              </script>
              `.trim().replace($regexp__indentation(12), '')
            : ''
  }
}
export function $js__html__files(opts={}) {
  const rest = opts.rest || []
  return [
    env.BABEL__POLYFILL__URL,
    $versioned__js('/dist/metaim', opts)
  ].concat(...rest)
}