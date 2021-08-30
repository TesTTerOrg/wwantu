
function mostrar(){
	var id=getParameterByName("txtId");
	var ano=getParameterByName("txtAno");
	var val=getParameterByName("rdV");

	document.getElementById("mostrar").innerHTML=''+
	'Año '+ano+'<br>'+
	'ID '+id+'<br>'+
	' '+val+'<br>'+
	' '+val+'<br>'+
	' '+val+'<br>'+
	' '+val+'<br>'+
	' '+val+'<br>';
}

//gracias Chris Coyier
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" :
     decodeURIComponent(results[1].replace(/\+/g, " "));
}