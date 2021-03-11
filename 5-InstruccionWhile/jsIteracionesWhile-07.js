// Amarilla Juan Sebastian
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador = 0;
	let acumulador = 0;
	let numeroIngresado;
	let seguir;
	let promedio;

	do
	{
      numeroIngresado = parseInt(prompt("Ingrese un numero."));
      acumulador = acumulador + numeroIngresado;
      contador++;
      seguir = prompt("¿Quiere seguir? si/no.");
	} while (seguir == "si");

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN