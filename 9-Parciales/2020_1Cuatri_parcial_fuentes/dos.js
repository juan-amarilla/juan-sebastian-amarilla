/*
Amarilla Juan Sebastian
<h2></br>Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
<br> Tipo validad("arena";"cal";"cemento") 
<br> Cantidad de bolsas,
<br> Precio por bolsa (más de cero ),
<br> 
<br> Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
<br> Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
<br>a)
El importe total a pagar , bruto sin descuento y...
<br>b)
el importe total a pagar con descuento(solo si corresponde)
<br>d)
Informar el tipo con mas cantidad de bolsas.		
<br>f)
El tipo mas caro
*/		
function mostrar()
{
	let tipoIngresado;
	let cantidadIngresada;
	let precioIngresado;
	let seguir;
	let descuento = 0; 
	let precioTotal;
	let porcentaje;
	let precioUltimo;
	let acumuladorCal = 0;
	let acumuladorCemento = 0;
	let acumuladorArena = 0;
	let precioMaximo;
	let flag = true;
	let cantidadAlta;
  let nombreTipo;
  let nombre;
  let acumuladorPreciouno = 0;
  let acumuladorPreciodos = 0;
  let acumuladorPreciotres = 0;
  let total;
  let totalCondescuento;
  let acumPreciounod = 0;
  let acumPreciodosd = 0;
  let acumPreciotresd = 0;

	do 
  {   
        tipoIngresado = prompt("Ingrese tipo.");

        while (isNaN(tipoIngresado)== false || tipoIngresado != "arena" && tipoIngresado != "cal" && tipoIngresado != "cemento") {
            alert("error.");
            tipoIngresado = prompt("Reingrese de nuevo.");
              
        } 

        cantidadIngresada = prompt("Ingrese la cantidad.");
        cantidadIngresada = parseInt(cantidadIngresada);

        while (isNaN(cantidadIngresada) == true || cantidadIngresada <= 0) {
            alert("error.");
            cantidadIngresada = prompt("Reingrese de nuevo.");
            
            
        }

        precioIngresado = prompt("Ingrese el precio.");
        precioIngresado = parseInt(precioIngresado); 

        while (isNaN(precioIngresado)== true || precioIngresado <= 0) {
            alert("error.");
            precioIngresado = prompt("Reingrese de nuevo.");
        }

        
        
       if(cantidadIngresada > 10 && cantidadIngresada < 31) {
          descuento = 15;
          precioTotal = cantidadIngresada * precioIngresado;
          porcentaje = precioTotal * descuento / 100;
          precioUltimo = precioTotal - porcentaje;
        }else if (cantidadIngresada > 30) {
           descuento = 25;
           precioTotal = cantidadIngresada * precioIngresado;
           porcentaje = precioTotal * descuento / 100;
           precioUltimo = precioTotal - porcentaje;
        }else if (cantidadIngresada > 0 && cantidadIngresada < 11){
           precioTotal = cantidadIngresada * precioIngresado;
         }

        switch (tipoIngresado) {
            case "arena":
            acumuladorArena += cantidadIngresada;
            acumuladorPreciouno += precioTotal;
            if (cantidadIngresada > 10) {
              acumPreciounod += precioUltimo;
            }
            if (tipoIngresado == "arena" && precioIngresado > precioMaximo || flag == true) {
                precioMaximo = precioIngresado;
                flag = false;
                nombre = "arena";
            } 
            break;

            case "cal":
            acumuladorCal += cantidadIngresada;
            acumuladorPreciodos += precioTotal;
            if (cantidadIngresada > 10) {
              acumPreciodosd += precioUltimo;
            }
            if (tipoIngresado == "cal" && precioIngresado > precioMaximo || flag == true) {
                precioMaximo = precioIngresado;
                flag = false;
                nombre = "cal";
            } 
            break;

            case "cemento":
            acumuladorCemento += cantidadIngresada;
            acumuladorPreciotres += precioTotal;
            if (cantidadIngresada > 10) {
              acumPreciotresd += precioUltimo;
            }
            if (tipoIngresado == "cemento" && precioIngresado > precioMaximo || flag == true) {
                precioMaximo = precioIngresado;
                flag = false;
                nombre = "cemento";
            } 
            break;
        }

   
     
    seguir = prompt("¿Quiere seguir? si/no");
  } while (seguir == "si" || seguir == "s");

  total = acumuladorPreciouno + acumuladorPreciodos + acumuladorPreciotres;
  totalCondescuento = acumPreciounod + acumPreciodosd + acumPreciotresd;
  
    
    if (acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento) {
        cantidadAlta = acumuladorArena;
        nombreTipo = "arena";
    }else{
         if(acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento) {
             cantidadAlta = acumuladorCal;
             nombreTipo = "cal";
         }else{
             cantidadAlta = acumuladorCemento;
             nombreTipo = "cemento";
          }
    }

    document.write("El importe sin descuento: " + total + "<br>");
    document.write("El importe con descuento: " + totalCondescuento + "<br>");
    document.write("El tipo con mas cantidad de bolsas " + cantidadAlta + " " + nombreTipo + "<br>");
    document.write("El tipo mas caro fue " + " $" + precioMaximo + " de " + nombre + "<br>");
}