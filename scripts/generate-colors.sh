#!/bin/bash

INFILE=$1

cat $INFILE | grep -A14 md-primary | tail -13 | awk '{ print "--primary-"$1": "substr($3,0,7)";" }'
cat $INFILE | grep -A29 md-primary | tail -14 | awk '{ print "--primary-contrast-"$1": "substr($3,0,7)";" }'

cat $INFILE | grep -A14 md-accent | tail -13 | awk '{ print "--accent-"$1": "substr($3,0,7)";" }'
cat $INFILE | grep -A29 md-accent | tail -14 | awk '{ print "--accent-contrast-"$1": "substr($3,0,7)";" }'

cat $INFILE | grep -A14 md-warn | tail -13 | awk '{ print "--warn-"$1": "substr($3,0,7)";" }'
cat $INFILE | grep -A29 md-warn | tail -14 | awk '{ print "--warn-contrast-"$1": "substr($3,0,7)";" }'

