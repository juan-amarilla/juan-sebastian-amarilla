function mostrar()
{
    let numero = parseInt(prompt("Ingrese un numero"));
    let contadorDivisores = 0;

    for (let i=1;i<=numero;i++) {
      
      if (numero % i == 0) {
        contadorDivisores++ 
      }
    }

    if (contadorDivisores == 2) {
    	alert("El numero es primo.");
    } else {
        alert("El numero no es primo.")
      }
}//FIN DE LA FUNCIÓN