// Amarilla Juan Sebastian
// Parcial tres
function mostrar()
{
	let nombre;
	let edad;
	let genero;
	let estado;
	let temperatura;
	let seguir;
	let personaMayortemperatura;
	let flag = 0;
	let nombreMayortemperatura;
	let contadorViudo = 0;
	let contadorM = 0;
	let contadorMayor = 0;
	let contadorSoltero = 0;
	let promedio;
	let edadPromedio = 0;

	do
	{
	  nombre = prompt("Ingrese nombre");
	  while (isNaN(nombre)==false) {
      	alert("error");
      	nombre = prompt("Ingrese nombre");
      }
	  edad = parseInt(prompt("Ingrese edad"));
      while (isNaN(edad)==true || edad < 1) {
      	alert("error");
      	edad = parseInt(prompt("Ingrese edad"));
      }
	  genero = prompt("Ingrese genero");
	  while (isNaN(genero)==false || genero != "f" && genero != "m") {
      	alert("error");
      	genero = prompt("Ingrese genero");
      }
	  estado = prompt("Ingrese estado");
      while (isNaN(estado)==false || estado != "soltero" && estado != "casado" && estado != "viudo") {
      	alert("error");
      	estado = prompt("Ingrese estado");
      }
	  temperatura = parseInt(prompt("Ingrese temperatura"));
      while (isNaN(temperatura)==true) {
      	alert("error");
      	edad = parseInt(prompt("Ingrese edad"));
      }

      if (temperatura > personaMayortemperatura || flag == 0) {
          personaMayortemperatura = temperatura;
          nombreMayortemperatura = nombre;
          flag = 1;
      }

      if (edad > 17 && estado == "viudo") {
          contadorViudo++;
      }if (genero == "m" && estado == "soltero" || genero == "m" && estado == "viudo" ) {
          contadorM++;
       }if (edad > 60 && temperatura > 38) {
           contadorMayor++;
        }if (genero == "m" && estado == "soltero") {
            contadorSoltero++;
            edadPromedio += edad;
         }

      seguir = prompt("¿Quiere seguir? s/n")
	} while (seguir == "s");

    promedio = edadPromedio / contadorSoltero; 

	alert("Persona con mayor temperatura: " + nombreMayortemperatura);
	alert("Cantidad de viudos de mayor edad: " + contadorViudo);
	alert("Cantidad de hombres solteros o viudos: " + contadorM);
	alert("Cantidad de tercera de edad con mas de 38 de temperatura: " + contadorMayor); 
  alert("Promedio: " + promedio);
}