// Amarilla Juan Sebastian
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let flag = 0;
	let numeroIngresado;
	let seguir;
	let sumaPositivos = 0;
	let productoNegativos = 1;

	do
	{
	  numeroIngresado = parseInt(prompt("Ingrese un numero."));
	  if (numeroIngresado > 0) {
	  	sumaPositivos = sumaPositivos + numeroIngresado;
	  } else if (numeroIngresado < 0) {
	  	   flag = 1;
           productoNegativos = productoNegativos * numeroIngresado;
	    }
	  seguir = prompt("¿Quiere seguir? si/no");
	} while (seguir == "si");

	if (flag == 0) {
	   productoNegativos = 0;
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = productoNegativos;

}//FIN DE LA FUNCIÓN