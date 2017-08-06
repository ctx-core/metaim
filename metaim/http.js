import 'core-js'
import env from 'metaim/env'
import {assign__env} from 'ctx-core/env'
import {assign} from 'ctx-core/object/lib'
import use__error from 'ctx-core/error/koa'
import {use__log__request$time
      , use__send
      , use__echo} from 'ctx-core/koa/lib'
import use__debug from 'ctx-core/debug/koa'
import koa from 'koa'
import throng from 'throng'
import conditional__koa from 'koa-conditional-get'
import etag__koa from 'koa-etag'
import sslify__koa from 'koa-sslify'
import bodyparser__koa from 'koa-bodyparser'
import compress__koa from 'koa-compress'
import {use__metaim} from 'metaim/koa'
import {log,info,debug} from 'ctx-core/logger/lib'
const app = new koa()
    , logPrefix = 'metaim/http'
log(logPrefix)
assign__env({app})
assign(app, {proxy: true})
throng({
  workers: env.WEB_CONCURRENCY,
  lifetime: Infinity
}, start)
function start() {
  info(`${logPrefix}|start`)
  use__log__request$time(app)
  if (!env.isLocalhost && !env.SSL) {
    app.use(sslify__koa({trustProtoHeader: true}))
  }
  use__send(app, {maxage: 3600000})
  app.use(compress__koa())
  app.use(conditional__koa())
  app.use(etag__koa())
  use__error(app)
  use__debug(app)
  app.use(bodyparser__koa())
  use__metaim(app)
  use__echo(app)
  app.listen(env.PORT)
  info(`${logPrefix}|started|port`, env.PORT)
  process.on('SIGTERM', () => {
    log(`Worker ${id} exiting...`)
    process.exit()
  })
}