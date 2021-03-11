// Amarilla Juan Sebastian
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numeroIngresado;
	let seguir;
	let numeroMaximo;
	let numeroMinimo;
	let flag = 0;

	do
	{
	    numeroIngresado = parseInt(prompt("Ingrese un numero."));
        
        if (flag == 0 || numeroIngresado > numeroMaximo) {
            numeroMaximo = numeroIngresado;
	    } if (flag == 0 || numeroIngresado < numeroMinimo) {
             numeroMinimo = numeroIngresado;
             flag = 1
          }
	     
        seguir = prompt("¿Quiere seguir? si/no");  
	}   while (seguir == "si");

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;	
}//FIN DE LA FUNCIÓN