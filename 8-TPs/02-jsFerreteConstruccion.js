/*2.	Para el departamento de Construcción:
Amarilla Juan Sebastian
ejercicio ferreteconstruccion
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let ancho;
	let largo;
	let perimetro;
	let alambre;

	largo = parseFloat(document.getElementById("txtIdLargo").value);
	ancho = parseFloat(document.getElementById("txtIdAncho").value);

    perimetro = (ancho + largo) * 2;

    alambre = perimetro * 3;

    alert("Se necesita comprar " + alambre + " metros de alambre.");




}
function Circulo () 
{
	let radio;
	let perimetro;
	let alambre;

	radio = parseFloat(document.getElementById("txtIdRadio").value);

	perimetro = 2 * 3.14 * radio;

	alambre = perimetro * 3;

	alert("Se necesita comprar " + alambre + " metros de alambre.");


	
}
function Materiales () 
{
	let largo;
	let ancho;
	let area;
	let cemento;
	let cal;

	largo = parseFloat(document.getElementById("txtIdLargo").value);
	ancho = parseFloat(document.getElementById("txtIdAncho").value);

	area = largo * ancho;

	cemento = area * 2;
	cal = area * 3;

    alert("Para cada contrapiso se necesita " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.");
}