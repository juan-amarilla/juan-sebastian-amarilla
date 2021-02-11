function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	//Amarilla Juan Sebastian
	//Ejercicio 10 IF 



    let numero;
    numero = Math.floor(Math.random() * 10) + 1;	

    if (numero >= 9) {

       alert("Excelente, nota: " + numero );

    }

    else if (numero < 4) {

        alert("Vamos, la proxima se puede, nota: " + numero ); 

    }

    else if (numero >= 4) {


        alert("Aprobo, nota: " + numero );	
    }

}//FIN DE LA FUNCIÓN