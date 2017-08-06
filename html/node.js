import env from 'censible/env'
import {$ctx__html as $ctx__html__core} from 'ctx-core/html/node'
import {log,debug} from 'ctx-core/logger/lib'
const logPrefix = 'html/node'
export function $ctx__html(ctx, ...ctx__html$$) {
  log(`${logPrefix}|$ctx__html`)
  return $ctx__html__core(ctx, {
    NODE_ENV: env.NODE_ENV
  }, ...ctx__html$$)
}
export const $ctx__html__metaim = $ctx__html