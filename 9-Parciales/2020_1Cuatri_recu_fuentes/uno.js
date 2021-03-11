//Amarilla Juan Sebastian
// Ejercicio 1
function mostrar()
{
	let i = 0;
	let pro;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let flag = 0;
	let precioMax;
	let cantidadTrue;
	let fabricanteTrue;
	let flagUno = 0;
	let cantidadMax;
	let acumulador = 0;
	let promedio;

	do
	{
      i++
      pro = prompt("ingrese producto");
      
      while(isNaN(pro)==false || pro != "barbijo" && pro != "alcohol" && pro != "jabon") {
            alert("error");
            pro = prompt("ingrese producto");
      }

      precio = parseInt(prompt("ingrese precio"));
      while (isNaN(precio)==true || precio < 100 || precio > 300) {
      	 alert("error");
      	 precio = parseInt(prompt("ingrese precio"));
      }

      cantidad = parseInt(prompt("ingrese cantidad"));
      while (isNaN(cantidad)==true || cantidad < 1) {
      	alert("error");
      	cantidad = parseInt(prompt("ingrese cantidad"));
      }

      marca = prompt("ingrese marca");
      while (isNaN(marca)==false) {
      	alert("error");
      	marca = prompt("ingrese marca");
      }

      fabricante = prompt("ingrese fabricante");
      while (isNaN(fabricante)==false) {
      	alert("error");
      	fabricante = prompt("ingrese fabricante");
      }

      if (flag == 0 || precio > precioMax && pro == "jabon") {
            precioMax = precio;
            cantidadTrue = cantidad;
            fabricanteTrue = fabricante;
            flag = 1;
      }

      if (flagUno == 0 || cantidad > cantidadMax) {
          cantidadMax = cantidad;
          flagUno = 1; 
      }

      if (pro == "barbijo") {
          acumulador += cantidad;
      }

    } while (i<5);

    promedio = cantidadMax / i;

    alert("La cantidad del jabon mas caro: " + cantidadTrue + " y el fabricante: " + fabricanteTrue);
    alert("El promedio de la cantidad mas alta: " + promedio);
    alert("La cantidad total de barbijos comprados: " + acumulador);
}   
