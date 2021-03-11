// Amarilla Juan Sebastian
function mostrar()
{

	let numero = parseInt(prompt("Ingrese un numero. "));
	let contadorDivisores = 0;

	for (let i=1;i<=numero;i++) {
        
        if (numero % i == 0) {
        	contadorDivisores++;
        	console.log(i);
        }
    }

    console.log("La cantidad de divisores son: " + contadorDivisores);

}//FIN DE LA FUNCIÓN