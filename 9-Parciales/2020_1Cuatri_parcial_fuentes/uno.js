/*
Amarilla Juan Sebastian
</br> Debemos realizar la carga de 5(cinco) productos de prevención de contagio, <br>
de cada una debo obtener los siguientes datos: <br>
el tipo (validar "barbijo" , "jabón" o "alcohol") , <br>
el precio (validar entre 100 y 300),<br>
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
la Marca y el fabricante. <br>
Se debe Informar al usuario lo siguiente:<br>

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante<br>
b) Del tipo con mas unidades, el promedio por compra <br>
c) Cuántas unidades de jabones hay en total <br><br>
*/			
function mostrar()
{
	let contadorVueltas;
	let tipoIngresado;
	let precioIngresado;
	let cantidadIngresada;
	let marca;
	let fabricante;
	let barato;
	let flagAlcohol = true;
	let fabricanteBarato;
	let cantidadBarata;
	let promedio;
	let acumuladorBarbijo = 0;
	let acumuladoralcohol = 0;
	let acumuladorjabon = 0; 

    
    contadorVueltas = 0;
    contadorUnidadbarbijo = 0;
    contadorUnidadalcohol = 0;
    contadorUnidadjabon = 0;
	while (contadorVueltas < 5) {
        contadorVueltas++
        tipoIngresado = prompt("Ingrese tipo.");

        while (isNaN(tipoIngresado)== false || tipoIngresado != "barbijo" && tipoIngresado != "jabon" && tipoIngresado != "alcohol") {
              alert("error.");
              tipoIngresado = prompt("Reingrese de nuevo.");
              
        } 
        precioIngresado = prompt("Ingrese el precio.");
        precioIngresado = parseInt(precioIngresado); 

        while (isNaN(precioIngresado)== true || precioIngresado < 100 || precioIngresado > 300) {
            alert("error.");
            precioIngresado = prompt("Reingrese de nuevo.");
        }
        cantidadIngresada = prompt("Ingrese la cantidad.");
        cantidadIngresada = parseInt(cantidadIngresada); 

        while (isNaN(cantidadIngresada) == true || cantidadIngresada <= 0 || cantidadIngresada > 1000) {
            alert("error.");
            cantidadIngresada = prompt("Reingrese de nuevo.");
            
            
        }
        marca = prompt("Ingrese marca.");

        while (isNaN(marca)==false) {
            alert("error");
            marca = prompt("Reingrese de nuevo.");

        }
        fabricante = prompt("Ingrese fabricante.");

        while (isNaN(fabricante)==false) {
            alert("error");
            fabricante = prompt("Reingrese de nuevo.");
        }
        /*
        if ( tipoIngresado == "alcohol" && precioIngresado < barato || flagAlcohol == true) {
           barato = precioIngresado;
           fabricanteBarato = fabricante;
           cantidadBarata = cantidadIngresada;
     
           flagAlcohol = false;
        }
        */
        switch (tipoIngresado) {
            case "alcohol":
            contadorUnidadalcohol++;
            acumuladoralcohol += cantidadIngresada;
            if (tipoIngresado == "alcohol" && precioIngresado < barato || flagAlcohol == true) {
            	barato = precioIngresado;
                fabricanteBarato = fabricante;
                cantidadBarata = cantidadIngresada;
            }
            break;

            case "barbijo":
            contadorUnidadbarbijo++;
            acumuladorBarbijo += cantidadIngresada;
            break;

            case "jabon":
            contadorUnidadjabon++;
            acumuladorjabon += cantidadIngresada;
            break;
        }  
    }
    //a) Del más barato de los alcohol, la cantidad de unidades y el fabricante<br>

    alert("Del mas barato fue, " + barato + " que el fabricante es " + fabricanteBarato + " y la cantidad es de " + cantidadBarata);
    //b) Del tipo con mas unidades, el promedio por compra <br>   

    if (acumuladoralcohol > acumuladorBarbijo && acumuladoralcohol > acumuladorjabon) {
        promedio = acumuladoralcohol / contadorUnidadalcohol;
    } else {
    	if (acumuladorBarbijo > acumuladorjabon) {
            promedio = acumuladorBarbijo / contadorUnidadbarbijo;
    	} else {
               promedio = acumuladorjabon / contadorUnidadjabon;
    	  }
    }

    alert("promedio del tipo con mas unidades " + promedio);
    //c) Cuántas unidades de jabones hay en total <br><br>

    alert("La cantidad total de jabon es de " + acumuladorjabon);
}
