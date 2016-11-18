function toggleOpen( object ) {
	if( object.parentElement.style.height == "10em" )
	{
		if( object.scrollHeight > object.parentElement.scrollHeight - 20 ) {
			object.parentElement.style.height = "20em";
		}else{
			object.parentElement.style.height = "15em";
		}
	}else{
		object.parentElement.style.height = "10em";
	}
}

function setResults ( content_html ) {
	document.getElementById('raygancom_resultlist').innerHTML = content_html;
}

function navTo ( filepath ) {
	var cgipath = "dirtydir.cgi?" + filepath;
	$.get( cgipath, setResults );
	window.scrollTo(0,0);
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



