/*1.	Para el departamento de facturación:
Amarilla Juan Sebastian
Ejercicio ferretefacturacion
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = precioUno + precioDos + precioTres;

    alert("El resultado es: " + resultado + ".");
}
function Promedio () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let promedio;

	precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precioUno + precioDos + precioTres;
    promedio = suma / 3;


    alert("El promedio es: " + promedio + ".");
}
function PrecioFinal () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let precioFinal;
	const IVA = 21;
	

	precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
	precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precioUno + precioDos + precioTres;

    precioFinal = suma + suma * IVA / 100;

    alert("El precio final es: $" + precioFinal + ".");
}