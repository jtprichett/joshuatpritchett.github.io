#!/usr/bin/env bash

set -e

BASE_DIR="$(dirname "${0}")"

if [ -d ./${BASE_DIR}/../web/node_modules ];  then
  echo "Deleting Node Modules..."
  rm -rf ./${BASE_DIR}/../web/node_modules
fi

./${BASE_DIR}/dependencies.sh
./${BASE_DIR}/test.sh
./${BASE_DIR}/build.sh
