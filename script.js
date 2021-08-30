
function mostrar(){
	var pelicula=getParameterByName("txtPelicula");
	var ano=getParameterByName("txtAno");

	document.getElementById("mostrar").innerHTML=''+
	'Año '+ano+'<br>'+
	'Pelicula '+pelicula+'<br>';
}

//gracias Chris Coyier
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" :
     decodeURIComponent(results[1].replace(/\+/g, " "));
}