// Amarilla Juan Sebastian
/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("Ingrese la clave."); 
    
    while(clave != "utn750") {
        clave = prompt("Reingrese de nuevo la clave.");     
    }
}//FIN DE LA FUNCIÓN