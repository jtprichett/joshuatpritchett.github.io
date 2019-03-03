#!/usr/bin/env bash

set -e

BASE_DIR="$(dirname "${0}")"

./${BASE_DIR}/dependencies.sh
./${BASE_DIR}/test.sh
./${BASE_DIR}/build.sh
