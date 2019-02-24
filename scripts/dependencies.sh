#!/usr/bin/env bash

set -e

BASE_DIR="$(dirname "${0}")"

echo "Installing JavaScript Dependencies"
npm --prefix="${BASE_DIR}/../web" install
