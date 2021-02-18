// Amarilla Juan Sebastian
/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
   let genero;
   genero = prompt("Ingrese f o m.");

   while (genero != "f" && genero != "m") {
        genero = prompt("Incorrecto, reingrese de nuevo f o m.");
   }

   if (genero == "f") {
      document.getElementById("txtIdSexo").value = "femenino";
   }

   else if (genero == "m") {
      document.getElementById("txtIdSexo").value = "masculino";
   }
}//FIN DE LA FUNCIÓN