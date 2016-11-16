#!/bin/bash

echo "Content: text/html

<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, inital-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/dirtydir.css">
  </head>
  <body>"

if [ -e "$1" ]
then
	./cgi/dir-to-html.sh "$1"
fi

echo "
  </body>
</html>"
