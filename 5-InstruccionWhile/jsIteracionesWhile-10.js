// Amarilla Juan Sebastian
/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let numeroIngresado;
	let numeroNegativo = 0;
	let numeroPositivo = 0;
	let cantidadPositivos = 0;
	let cantidadNegativos = 0;
	let cantidadCeros = 0;
	let cantidadPares = 0;
	let promedioPositivo = 0;
    let promedioNegativo = 0;
    let diferencia;
    let seguir;

    do
    {
      numeroIngresado = parseInt(prompt("Ingrese un numero."));

      if (numeroIngresado < 0) {
      	numeroNegativo += numeroIngresado;
      	cantidadNegativos++;
      } else if (numeroIngresado == 0) {
           cantidadCeros++;
        } else {
            numeroPositivo += numeroIngresado;
            cantidadPositivos++;
          } if (numeroIngresado % 2 == 0) {
               cantidadPares++;
            }

            seguir = prompt("¿Quiere ingresar otro numero? si/no");
    }  while (seguir == "si");

	if (cantidadPositivos > 0) {
		promedioPositivo = numeroPositivo / cantidadPositivos;
	} if (cantidadNegativos > 0) {
          promedioNegativo = numeroNegativo / cantidadNegativos;
	  } 
	 

	diferencia = cantidadPositivos - cantidadNegativos;

	document.write("Suma de los negativos " + numeroNegativo + "<br>");
	document.write("Suma de los positivos " + numeroPositivo + "<br>");
	document.write("La cantidad de positivos " + cantidadPositivos + "<br>");
	document.write("La cantidad de negativos " + cantidadNegativos + "<br>");
	document.write("La cantidad de ceros " + cantidadCeros + "<br>");
	document.write("La cantidad de pares " + cantidadPares + "<br>");
	document.write("El promedio de positivos " + promedioPositivo + "<br>");
	document.write("El promedio de negativos " + promedioNegativo + "<br>");
	document.write("La diferencia entre la suma de positivos y negativos " + diferencia + "<br>");
	//fin del while
}//FIN DE LA FUNCIÓN