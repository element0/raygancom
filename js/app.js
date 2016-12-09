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

function navResetActive ( ) {
	document.getElementById('nav_films').classList.remove("raygancom-nav-link-active");
	document.getElementById('nav_softw').classList.remove("raygancom-nav-link-active");
}

function navSetActive( nav_link_id ) {
	document.getElementById( nav_link_id ).classList.add("raygancom-nav-link-active");
}

function navToggle ( nav_link_id, filepath ) {
	navResetActive();
	navSetActive( nav_link_id );
	window.location.assign( "#" + filepath );
	var cgipath = "franz.cgi?" + "fs/" + filepath;
	$.get( cgipath, setResults );
	window.scrollTo(0,0);
}

function navToFrag ( url ) {
	var frag = "frontpg";
	var nav_link_id = "";

	var i = url.indexOf( "#" ) + 1;
	if( i != "" ) {
		frag = url.substr( i );
	}
	if( frag == "films" ) {
		nav_link_id = 'nav_films';
	}else if( frag == "frontpg" ) {
		nav_link_id = 'nav_softw';
	}else{
		frag = "frontpg";
		nav_link_id = 'nav_softw';
	}

	var filepath = "fs/" + frag;
	navTo( filepath );
	navResetActive();
	navSetActive( nav_link_id );
}


navToFrag( document.URL );



