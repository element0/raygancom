function toggleOpen( object ) {
	object.style.height = "20em";
	object.raygancom.toggleOpenState
}

function setResults ( content_html ) {
	document.getElementById('raygancom_resultlist').innerHTML = content_html;
}

function navTo ( filepath ) {
	var cgipath = "dirtydir.cgi?" + filepath;
	$.get( cgipath, setResults );
}

function navToFrag ( url ) {
	frag = "frontpg";
	var i = url.indexOf( "#" ) + 1;
	if( i != "" ) {
		var frag = url.substr( i );
	}
	if( frag == "films" || frag == "frontpg" ) {
	}else{
		frag = "frontpg";
	}

	var filepath = "fs/" + frag;
	navTo( filepath );
}

navToFrag( document.URL );


/* $.get("dirtydir.cgi?fs/frontpg/", setResults ); */

