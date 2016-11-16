#!/bin/bash

echo "Content: text/html

"

if [ -e "$1" ]
then
	./cgi/dir-to-html.sh "$1"
else
	echo "dirtydir: error"
fi
echo "
"
