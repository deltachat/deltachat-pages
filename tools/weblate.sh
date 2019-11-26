#!/usr/bin/env bash

# This is a friendly fork of F-Droid's i18n.sh at https://dev.gajim.org/gajim/website/blob/master/tools/translation/tools_i18n/i18n.sh

# Fail on errors.
#set -eu -o pipefail 

DIR_TOOLS=`dirname $0`

PREVIOUS_CWD=`pwd` 
cd ${DIR_TOOLS}/../ 

DIR_SRC=. 
DIR_BUILD=${DIR_SRC}/build 
DIR_PO=${DIR_SRC}/po 
DIR_CONTENT=${DIR_SRC}/content

echo $DIR_BUILD
echo $PWD

