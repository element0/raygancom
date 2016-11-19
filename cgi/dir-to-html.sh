#!/bin/bash

source etc/dirtydir.conf

function produce_dir_head_html {
	echo "<div class=\"$DIRCLASS\" id=\"$1\">"

	if [ -n "$DIRHEAD_FORE" ]
	then
		echo "$DIRHEAD_FORE"
	fi

	if [ -f "$1/_header.html" ]
	then
		cat "$1/_header.html"
	fi

	if [ -n "$DIRHEAD_AFT" ]
	then
		echo "$DIRHEAD_AFT"
	fi
}

function produce_dir_foot_html {
	echo "</div>"
}

function produce_dirent_head_html {
	echo "  <div class=\"raygancom-list-item-wrapper\" onclick=\"toggleOpen(this)\">"
	echo "  <div class=\"raygancom-list-item\" id=\"$1\"  onclick=\"toggleParOpen(this)\">"
}

function produce_dirent_foot_html {
	echo "  </div>"
	echo "    <div class=\"raygancom-list-item-grad\">"
	echo "      <div class=\"list-item-more-button dev-hide\">more</div>"
	echo "    </div>"
	echo "  </div>"
	echo "  <div class=\"raygancom-list-divider\"></div>"
}

function dirent-to-html {
	if [ -f "$1" ]
	then
		produce_dirent_head_html "$1"
		cat "$1"
		produce_dirent_foot_html
        elif [ -d "$1" ]
	then
		produce_dirent_head_html "$1"
		dir-to-html "$1"
		produce_dirent_foot_html
	fi
}

function dir-to-html {
	PATHNAME="$1"
	if [ -d "$PATHNAME" ]
	then
		produce_dir_head_html "$PATHNAME"
		for each in `ls -d "$PATHNAME"/[^._]*`
		do
			dirent-to-html "$each"
		done
		produce_dir_foot_html
	fi
}

shopt -s extglob

dir-to-html "$1"

