//Amarilla Juan Sebastian
// Ejercicio 2
function mostrar()
{
  let seguir;
  let pro;
  let cantidad;
  let precio;
  let descuento;
  let porcentaje;
  let precioT;
  let precioU;
  let acumuladorPro1 = 0;
  let acumuladorPro2 = 0;
  let acumuladorPro3 = 0;
  let acumuladorPro1d = 0;
  let acumuladorPro2d = 0;
  let acumuladorPro3d = 0;
  let acumuladorPro1c = 0;
  let acumuladorPro2c = 0;
  let acumuladorPro3c = 0;
  let nombre;
  let flag = 0;
  let nombreTrue;
  let total;
  let totalD;


  do
  {
  	pro = prompt("ingrese producto");
    while(isNaN(pro)==false || pro != "arena" && pro != "cal" && pro != "cemento") {
        alert("error");
        pro = prompt("ingrese producto");
    }

    cantidad = parseInt(prompt("ingrese cantidad"));
    while (isNaN(cantidad)==true || cantidad < 1) {
      	alert("error");
      	cantidad = parseInt(prompt("ingrese cantidad"));
    }

    precio = parseInt(prompt("ingrese precio"));
    while (isNaN(precio)==true || precio < 1) {
      	alert("error");
      	precio = parseInt(prompt("ingrese precio"));
    }

    if (cantidad > 10) {
        descuento = 15;
        precioT = cantidad * precio;
        porcentaje = precioT * descuento / 100;
        precioU = precioT - porcentaje;
    } else if (cantidad > 30) {
        descuento = 25;
        precioT = cantidad * precio;
        porcentaje = precioT * descuento / 100;
        precioU = precioT - porcentaje;
      } else {
           precioT = cantidad * precio;
        }

    switch (pro) {
        case "arena":
        acumuladorPro1 += precioT;
        if (cantidad > 10) {
           acumuladorPro1d += precioU;
        }
        acumuladorPro1c += cantidad;
        break;
        case "cal":
        acumuladorPro2 += precioT;
        if (cantidad > 10) {
           acumuladorPro2d += precioU;
        }
        acumuladorPro2c += cantidad;
        break;
        case "cemento":
        acumuladorPro3 += precioT;
        if (cantidad > 10) {
           acumuladorPro3d += precioU;
        }
        acumuladorPro3c += cantidad;
        break;
    }

    if (acumuladorPro1c > acumuladorPro2c && acumuladorPro1c > acumuladorPro3c ) {
       nombre = "arena";
    } else if (acumuladorPro2c > acumuladorPro1c && acumuladorPro2c > acumuladorPro3c) {
          nombre = "cal";
      } else if (acumuladorPro3c > acumuladorPro1c && acumuladorPro3c > acumuladorPro2c) {
          nombre = "cemento";
      }

    if (flag == 0 || precio > precioMax) {
    	precioMax = precio;
        nombreTrue = pro;
        flag = 1;
    }       

    seguir = prompt("Quiere seguir? s/n")
  } while (seguir == "s");

  total = acumuladorPro1 +  acumuladorPro2 +  acumuladorPro3;
  totalD = acumuladorPro1d +  acumuladorPro2d +  acumuladorPro3d;

  alert("Importe total sin descuento: " + total);
  alert("Importe total con descuento: " + totalD);
  alert("El tipo con mas cantidad: " + nombre);
  alert("El tipo mas caro: " + nombreTrue);
}
