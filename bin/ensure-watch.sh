#!/bin/bash
. ./ctx-core/bin/ensure.sh
function main {
  ensure http-rollup-watch.sh -a metaim
  ensure browser-rollup-watch.sh -a metaim
}
main