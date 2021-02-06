/*
Amarilla Juan Sebastian
Ejercicio 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
  let sueldo;
  let descuento;
  let resultado;

  sueldo = document.getElementById("txtIdImporte").value;
  sueldo = parseInt(sueldo);

  descuento = sueldo * 25 / 100;

  resultado = sueldo - descuento;

  document.getElementById("txtIdResultado").value = resultado;

}
