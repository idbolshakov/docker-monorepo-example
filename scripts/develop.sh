# !/bin/bash

SCOPE=$1 \
ACTION=$2 \
PORT=${3:-3000} \
NODE_VERSION=${4:-12} \
docker-compose \
  -p monorepo_demo_$1 \
  -f ./configs/docker-compose.yml \
  up;
