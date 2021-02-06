/*
Amarilla Juan Sebastian
Ejercicio 5 bis
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	let nombre; 
    let edad;
    let apellido;


    nombre = document.getElementById("txtIdNombre").value;
    edad = document.getElementById("txtIdEdad").value;
    apellido = prompt("Por favor ingrese su apellido");

    alert(apellido + "," + " usted se llama " + nombre + " y tiene " + edad + " años");










}
/*
bis :
se debe optener de alguna manera el apellido y mostrar asi:
"Perez, Usted se llama José y tiene 66 años"

*/

