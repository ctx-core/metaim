#!/bin/bash
METAIM_PORT="${METAIM_PORT:-3090}"
PORT=$METAIM_PORT nodemon metaim/http-load.js --watch private/dist/metaim.http.js --watch metaim/http-load.js