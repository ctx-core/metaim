#!/bin/bash
NGINX_DIR="${NGINX_DIR:-/etc/nginx/sites-available/}"
sudo cp metaim/metaim.nginx $NGINX_DIR
