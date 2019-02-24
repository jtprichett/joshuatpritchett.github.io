#!/usr/bin/env bash

BASE_DIR="$(dirname "${0}")"

pushd "${BASE_DIR}/../web"
  npm run build
popd
