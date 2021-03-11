//Amarilla Juan Sebastian
// 1A
// Ejercicio 3
function mostrar()
{/*
	let seguir;
	let nombre;
	let nacionalidad;
	let edad;
	let genero;
	let estado;
	let temperatura;
	let temperaturaMax;
	let flag = 0;
	let nacionalidadTrue;
	let contadorS = 0;
	let contadorM = 0;
	let contadorTerceraedad = 0;
	let acumulador = 0;
	let mujer = 0;
	let promedio;

    do
	{
      nombre = prompt("ingrese nombre");
      while(isNaN(nombre)==false) {
        alert("error");
        nombre = prompt("ingrese nombre");
      }

      nacionalidad = prompt("ingrese nacionalidad");
      while (isNaN(nacionalidad)==false) {
      	alert("error");
      	nacionalidad = prompt("ingrese nacionalidad");
      }

      edad = parseInt(prompt("ingrese edad"));
      while (isNaN(edad)==true || edad < 1) {
      	alert("error");
      	edad = parseInt(prompt("ingrese edad"));
      }

      genero = prompt("ingrese genero");
      while(isNaN(genero)==false || genero != "f" && genero != "m") {
        alert("error");
        genero = prompt("ingrese genero");
      }

      estado = prompt("ingrese estado");
      while (isNaN(estado)==false || estado != "soltero" && estado != "casado" && estado != "viudo") {
      	alert("error");
      	estado = prompt("ingrese estado");
      }

      temperatura = parseInt(prompt("ingrese temperatura"));
      while (isNaN(temperatura)==true) {
      	alert("error");
      	temperatura = parseInt(prompt("ingrese temperatura"));
      }

      if (flag == 0 || temperatura > temperaturaMax) {
        temperaturaMax = temperatura;
        nacionalidadTrue = nacionalidad;
        flag = 1 
      } if (edad > 17 && estado == "soltero") {
            contadorS++;
        } if (edad > 17 && estado == "soltero" && genero == "f" || edad > 17 && estado == "viudo" && genero == "f") {
             contadorM++;
          }  if (edad > 60 && temperatura > 38) {
               contadorTerceraedad++;
            }  if (genero == "f" && estado == "casado" && edad > 17) {
                   acumulador += edad;
                   mujer++;
              }
	  	
      seguir = prompt("quiere seguir? s/n")
	} while (seguir == "s");

	promedio = acumulador / mujer;

	alert("la nacionalidad con mas temperatura: " + nacionalidadTrue);
	alert("la cantidad de mayores de edad solteros: " + contadorS);
	alert("la cantidad de mujeres viudas o solteras: " + contadorM);
	alert("la cantidad de personas de tercera edad con mucha temperatura: " + contadorTerceraedad);
  alert("el promedio de edad entre las mujeres casadas: " + promedio);
*/
/*
  let i = 0;
  let nombre;
  let carrera;
  let edad;
  let genero;
  let modalidad;
  let promedio;
  let promedioMax;
  let flag = 0;
  let carreraTrue;
  let contadorMayor = 0;
  let contadorMujer = 0;
  let contadorPersonapromedio = 0;
  let acumulador = 0; 
  let mujerDistancia = 0;
  let promedioMujer;

  do
  { i++;

    nombre = prompt("ingrese nombre");
    while(isNaN(nombre)==false) {
      alert("error");
      nombre = prompt("ingrese nombre");
    }

    carrera = prompt("ingrese carrera");
    while(isNaN(carrera)==false) {
      alert("error");
      carrera = prompt("ingrese carrera");
    }

    edad = parseInt(prompt("ingrese edad"));
    while(isNaN(edad)==true || edad < 1) {
      alert("error");
      edad = parseInt(prompt("ingrese edad"));
    }

    genero = prompt("ingrese genero");
    while(isNaN(genero)==false || genero != "m" && genero != "f") {
      alert("error");
      genero = prompt("ingrese genero");
    }

    modalidad = prompt("ingrese modalidad: presencial, semi-presencial o a distancia");
    while(isNaN(modalidad)==false || modalidad != "presencial" && modalidad != "a distancia" && modalidad != "semi-presencial") {
      alert("error");
      modalidad = prompt("ingrese modalidad: presencial, semi-presencial o a distancia");
    }

    promedio = parseInt(prompt("ingrese promedio entre 1 y 10"));
    while(isNaN(promedio)==true || promedio < 1 || promedio > 10) {
      alert("error");
      promedio = parseInt(prompt("ingrese promedio entre 1 y 10"));
    }

    if (flag == 0 || promedio > promedioMax) {
        promedioMax = promedio;
        carreraTrue = carrera;
        flag = 1;
    } if (edad > 17 && modalidad == "presencial") {
         contadorMayor++;
      } if (genero == "f" && modalidad == "a distancia" || genero == "f" && modalidad == "semi-presencial" ) {
            contadorMujer++;
        } if (edad > 40 && promedio > 7) {
             contadorPersonapromedio++; 
          } if (genero == "f" && modalidad == "a distancia") {
               acumulador += edad;
               mujerDistancia++; 
            }
    
  } while (i<15);

  promedioMujer = acumulador / mujerDistancia;

  document.write("la carrera con mas promedio: " + carreraTrue + " <br>");
  document.write("cantidad de mayores de edad presencial: " + contadorMayor + " <br>");
  document.write("cantidad de mujeres que cursan distancia o semi-presencial: " + contadorMujer + " <br>");
  document.write("adultos con mas de 7 de promedio: " + contadorPersonapromedio + " <br>");
  document.write("El promedio de edad entre las mujeres que cursan a distancia: " + promedioMujer +  " <br>");
*/

/*
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano
*/

  let especie;
  let pelaje;
  let edad;
  let nombre;
  let raza;
  let peso;
  let estado;
  let temperatura;
  let perroMax;
  let estadoEnfermo = 0;
  let porcentajeEnfermo;
  let nombreMascotaotra;
  let flag2 = 0;
  let temperaturaMin;
  let temperaturaMax;
  let flag3 = 0;
  let tipoMax;
  let contadorAnimal = 0;
  let i = 0;
  let contEnfermo = 0;
  let contInternado = 0;
  let contAdopcion = 0;
  let menorCantidad;
  let acumuladorPeso = 0;
  let sinPelosmin;
  let nombreGato;
  let razaGato;
  let perroPeso;
  let nombrePerro;
  let animalSinpelo;
  let porcentaje;
  let promedioPeso;
  let flag = 0;
  let seguir;
  let nombreEstado;
  let flag4 = 0;

  do
  { i++

    especie = prompt("ingrese especie");
    while(isNaN(especie)==false || especie != "gato" && especie != "perro" && especie != "otra cosa") {
      alert("error");
      especie = prompt("ingrese especie");
    }

    pelaje = prompt("ingrese pelaje");
    while(isNaN(pelaje)==false || pelaje != "corto" && pelaje != "largo" && pelaje != "sin pelo") {
      alert("error");
      pelaje = prompt("ingrese pelaje");
    }

    edad = parseInt(prompt("ingrese edad"));
    while(isNaN(edad)==true || edad < 1) {
      alert("error");
      edad = parseInt(prompt("ingrese edad"));
    }

    nombre = prompt("ingrese nombre");
    while(isNaN(nombre)==false) {
      alert("error");
      nombre = prompt("ingrese nombre");
    }

    raza = prompt("ingrese raza");
    while(isNaN(raza)==false) {
      alert("error");
      raza = prompt("ingrese raza");
    }

    peso = parseInt(prompt("ingrese peso"));
    while(isNaN(peso)==true || peso < 1) {
      alert("error");
      peso = parseInt(prompt("ingrese peso"));
    }

    estado = prompt("ingrese estado");
    while(isNaN(estado)==false || estado != "enfermo" && estado != "internado" && estado != "adopcion") {
      alert("error");
      estado = prompt("ingrese estado");
    }

    temperatura = parseInt(prompt("ingrese temperatura"));
    while(isNaN(temperatura)==true || temperatura < 1) {
      alert("error");
      temperatura = parseInt(prompt("ingrese temperatura"));
    }

    switch (estado) {
           case "enfermo":
           contEnfermo++;
           estadoEnfermo++;
           break;

           case "internado":
           contInternado++;
           break;

           case "adopcion":
           contAdopcion++;
           break;
    }

    switch (especie) {
           case "perro":
           if (peso > perroPeso || flag == 0) {
            perroPeso = peso;
            nombrePerro = nombre;
            flag = 1;
           }
           contadorAnimal++;
           break;

           case "gato":
           contadorAnimal++;
           break;

           case "otra cosa":
           nombreMascotaotra = nombre;
           break;
    }

    switch (pelaje) {
          case "largo":
          break;

          case "corto":
          break;

          case "sin pelo":
          if (temperatura < temperaturaMin || flag2 == 0) {
              temperaturaMin = temperatura;
              animalSinpelo = nombre
              flag2 = 1
          }
          break;
    }

    if (flag3 == 0 || temperatura > temperaturaMax) {
                temperaturaMax = temperatura;
                tipoMax = especie;
                flag3 = 1;
    }if (contEnfermo < contAdopcion && contEnfermo < contInternado) {
                    menorCantidad = contEnfermo;
                    nombreEstado = "enfermo";    
                }else if (contAdopcion < contEnfermo && contAdopcion < contInternado) {
                      menorCantidad = contAdopcion;
                      nombreEstado = "adopcion"; 
                 }else if (contInternado < contEnfermo && contInternado < contAdopcion) {
                      menorCantidad = contInternado;
                      nombreEstado = "internado"; 
                   }if (peso > 0) {
                         acumuladorPeso += peso;
                     } if (flag4 == 0 || peso < sinPelosmin) {
                        sinPelosmin = peso;
                        nombreGato = nombre;
                        razaGato = raza;
                        flag4 = 1;
                       }

    seguir = prompt("quiere seguir? s/n");
  } while (seguir == "s");

  porcentajeEnfermo = estadoEnfermo * 100 / i;
  porcentaje = contadorAnimal * 100 / i;
  promedioPeso = acumuladorPeso / i; 

  document.write("perro pesado: " + nombrePerro + "<br>");
  document.write("porcentaje de enfermos: " + porcentajeEnfermo + "<br>");
  document.write("ultimo nombre de otra cosa: " + nombreMascotaotra + "<br>");
  document.write("animal con menos temperatura: " + animalSinpelo + "<br>");
  document.write("tipo de mascota con mucha temperatura: " + tipoMax + "<br>");
  document.write("gatos y perros: " + porcentaje + "<br>");
  document.write("menor cantidad y estado: " + menorCantidad + " y " + nombreEstado + "<br>");
  document.write("el peso total: " + promedioPeso + "<br>");
  document.write("el nombre del gato: " + nombreGato + " y su raza: " + razaGato + "<br>");
}
