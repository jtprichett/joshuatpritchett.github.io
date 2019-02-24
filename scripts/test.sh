#!/usr/bin/env bash

set -e

BASE_DIR="$(dirname "${0}")"

echo
echo "Performing JavaScript unit tests..."
echo
CI=true npm --prefix="${BASE_DIR}/../web" test

echo
echo "Checking JavaScript Code Coverage..."
echo
CI=true npm --prefix="${BASE_DIR}/../web" run test:coverage

echo
echo "Performing JavaScript Linting..."
echo
CI=true npm --prefix="${BASE_DIR}/../web" run lint
