import env from 'metaim/env'
import route__koa from 'koa-route'
import {$ctx__html} from 'html/node'
import Index__SSR from 'metaim/Index__SSR.html'
import {info,debug,log} from 'ctx-core/logger/lib'
const logPrefix = 'metaim/koa'
export default use__metaim
export function use__metaim(app) {
  log(`${logPrefix}|use__metaim`)
  app.use(route__koa.get('/', get__root__koa))
}
export async function get__root__koa(ctx) {
  log(`${logPrefix}|get__root__koa`)
  const ctx__html = $ctx__html(ctx)
  ctx.body = Index__SSR.render({
    ctx: ctx__html
  })
}