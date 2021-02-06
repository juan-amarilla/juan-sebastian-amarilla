/*
Amarilla Juan Sebastian
Ejercicio 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

  let sueldo;
  let aumento;
  let resultado;

  sueldo = document.getElementById("txtIdSueldo").value;
  sueldo = parseInt(sueldo);

  aumento = sueldo * 10 / 100;

  resultado = sueldo + aumento;

  document.getElementById("txtIdResultado").value = resultado;


}
