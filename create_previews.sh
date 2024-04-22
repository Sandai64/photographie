#!/bin/env bash

command -v jpegoptim >/dev/null 2>&1 || { echo >&2 "fatal: jpegoptim not found."; exit 1; }
echo "jpegoptim OK"

cd ./src/assets/albums/ || exit 1
rm -r ./preview/
cp -r ./original/ ./preview/

echo "folder structure OK"
echo "----- STARTING ALBUM COMPRESSION -----"

find ./preview/ -type f -name "*.jpg" -exec jpegoptim --strip-all --max=20 --size=10% {} \;

echo "----- DONE -----"
echo "final folder sizes :"
du -sh ./original ./preview | sort -h
