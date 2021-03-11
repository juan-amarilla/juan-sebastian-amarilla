function mostrar()
{
	let numero;
	let i = 0;
	
    for (i=0;;i++) {
		numero = parseInt(prompt("Ingrese un numero o para terminar ingrese 9."));

		if (numero == 9) {
           break
		}
		console.log(numero);
	}
}//FIN DE LA FUNCIÓN