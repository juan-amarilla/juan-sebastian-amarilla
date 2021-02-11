function mostrar()
{
	//tomo la edad  
	

    let edad;

    edad = parseInt(document.getElementById("txtIdEdad").value);

    if (edad >= 1 && edad <= 12) {

      alert("No es adolescente.");
    
    }
    else if (edad >=18) {

      alert("No es adolescente.");
     
    }


}//FIN DE LA FUNCIÓN