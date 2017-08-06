#!/bin/bash
. ./ctx-core/bin/ensure.sh
function main {
  ensure metaim-start.sh -a metaim
}
main