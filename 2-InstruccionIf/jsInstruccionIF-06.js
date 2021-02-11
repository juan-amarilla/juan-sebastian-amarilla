function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 1 && edad <=12) {


      alert("Es niño.");


	}

	if (edad >= 13 && edad <= 17) {

       alert("Es adolescente.");

	}

	if (edad >= 18) {

      alert("Es mayor de edad.");


	}



}//FIN DE LA FUNCIÓN