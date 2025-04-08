#!/bin/bash

zokrates compile -i src/zokrates/proofGeneration.zok
zokrates setup
zokrates compute-witness -a $1 $2 $3 $4
zokrates generate-proof