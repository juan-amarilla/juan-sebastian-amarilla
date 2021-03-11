// Amarilla Juan Sebastian
function mostrar()
{
	let numero = parseInt(prompt("Ingrese un numero. "));
	let pares = 0;

	for (let i=1;i<=numero;i++) {
        
        if (i % 2 == 0) {
        	pares++;
        	console.log(i);
        }
    }

    console.log("La cantidad de pares son: " + pares);
}//FIN DE LA FUNCIÓN