function mostrar()
{
	
   let destino = document.getElementById("txtIdDestino").value;

    switch (destino){
        case "Bariloche":
        alert("Hace frio.");
        break;
        case "Cataratas":
        alert("Hace calor.");
        break;
        case "Mar del plata":
        alert("Hace Calor.");
        break;
        case "Ushuaia":
        alert("Hace Frio.");
    }
}//FIN DE LA FUNCIÓN