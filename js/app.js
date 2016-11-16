function toggleOpen( object ) {
	object.style.height = "20em";
}

function setResults ( content_html ) {
	document.getElementById('raygancom_resultlist').innerHTML = content_html;
}


$.get("dirtydir.cgi?fs/frontpg/", function(data){
	document.getElementById('raygancom_resultlist').innerHTML=data;
});

