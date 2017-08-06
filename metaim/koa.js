import env from 'metaim/env'
import route__koa from 'koa-route'
import {assign} from 'ctx-core/object/lib'
import {info,debug,log} from 'ctx-core/logger/lib'
const logPrefix = 'metaim/koa'
export default use__metaim
export function use__metaim(app) {
  log(`${logPrefix}|use__metaim`)
  app.use(route__koa.get('/', get__root__koa))
}
export async function get__root__koa(ctx) {
  log(`${logPrefix}|get__root__koa`)

}