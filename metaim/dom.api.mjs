import $ctx, {assign__components} from 'ctx-core/dom/svelte'
import {assign} from 'ctx-core/object/lib'
import {log,debug} from 'ctx-core/logger/lib'
const logPrefix = 'companies/dom.api'
log(logPrefix)
global.metaim = $ctx
assign($ctx, {
  assign__ctx
})
export {assign__components}
export function assign__ctx(ctx) {
  log(`${logPrefix}|assign__ctx`)
  return ctx
}