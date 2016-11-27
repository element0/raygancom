/*  raygancom/js/app.js 
 */

function toggleOpen( object )
{
	var thisStyle = window.getComputedStyle( object );
	var parStyle = window.getComputedStyle( object.parentElement );

	console.log( "parStyle.height: " + parStyle.height );
	console.log( "thisStyle.height: " + thisStyle.height );
}

function toggleParOpen( object )
{
	console.log(object.id);
	var thisStyle = window.getComputedStyle( object );
	var parStyle = window.getComputedStyle( object.parentElement );

	if( thisStyle.height > parStyle.height )
	{
		object.raygancom_save_height = parStyle.height;
		object.parentElement.style.height = thisStyle.height;
	} else {
		if( object.raygancom_save_height != "" )
		{
			object.parentElement.style.height =
				object.raygancom_save_height;
		}
	}
}

function setResults ( content_html ) {
	document.getElementById('raygancom_resultlist').innerHTML = content_html;
	/* maybe init innerHTML style here */
}

function navTo ( filepath ) {
	var cgipath = "franz.cgi?" + filepath;
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



