import {ensure__agent} from 'ctx-core/agent/lib'
import {dictionary__agent} from 'ctx-core/agent/dictionary'
import {log,debug} from 'ctx-core/logger/lib'
const logPrefix = 'domain/agent.mjs'
export function domains__agent(ctx, ...opts$$) {
  return dictionary__agent(ctx, {
    key: 'domains__agent',
    scope: ['domains']
  }, ...opts$$)
}
export function domain__agent(ctx, ...opts$$) {
  return ensure__agent(ctx, {
    key: 'domain__agent',
    scope: ['domain']
  }, ...opts$$)
}
export function perspective__domain__agent(ctx, ...opts$$) {
  return ensure__agent(ctx, {
    key: 'perspective__domain__agent',
    scope: ['perspective__domain']
  }, ...opts$$)
}
export function perspective__canon__domain__agent(ctx, ...opts$$) {
  return ensure__agent(ctx, {
    key: 'perspective__canon__domain__agent',
    scope: ['perspective__canon__domain']
  }, ...opts$$)
}
export function entity__domain__agent(ctx, ...opts$$) {
  return ensure__agent(ctx, {
    key: 'entity__domain__agent',
    scope: ['entity__domain']
  }, ...opts$$)
}
export function attention__domain__agent(ctx, ...opts$$) {
  return ensure__agent(ctx, {
    key: 'attention__domain__agent',
    scope: ['attention__domain']
  }, ...opts$$)
}