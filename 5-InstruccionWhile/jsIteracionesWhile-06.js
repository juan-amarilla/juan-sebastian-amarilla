// Amarilla Juan Sebastian
function mostrar()
{
	let promedio;
	let contador = 0;
	let acumulador = 0;
	let numeroIngresado;

	while (contador<5) {
        numeroIngresado = parseInt(prompt("Ingrese un numero"));
        acumulador = acumulador + numeroIngresado;
        contador++;
	}

	promedio = acumulador / 5

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN