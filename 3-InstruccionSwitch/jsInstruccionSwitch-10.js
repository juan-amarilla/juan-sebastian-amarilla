// Amarilla Juan Sebastian
function mostrar()
{
	let destino;
    let estacion;
  
    destino = document.getElementById("txtIdDestino").value;
    estacion = document.getElementById("txtIdEstacion").value;

	switch (estacion){
       case "Invierno":
       if (destino == "Bariloche") {
            alert("Se viaja");
       }
       else if (destino == "Cataratas") {
            alert("No se viaja");
       } 
       else if (destino == "Mar del plata") {
           alert("No se viaja");
       }
       else if (destino == "Cordoba") {
           alert("No se viaja");
       }
       break;
       
       case "Verano":
       if (destino == "Bariloche") {
            alert("No se viaja");
       }
       else if (destino == "Cataratas") {
             alert("Se viaja");
       } 
       else if (destino == "Mar del plata") {
             alert("Se viaja");
       }
       else if (destino == "Cordoba") {
             alert("No se viaja");
       }
       break;
       
       case "Otoño":
       if (destino == "Bariloche") {
             alert("Se viaja");
       }
       else if (destino == "Cataratas") {
             alert("Se viaja");
       } 
       else if (destino == "Mar del plata") {
              alert("Se viaja");
       }   
       else if (destino == "Cordoba") {
            alert("Se viaja");
       }
       break;
       
       case "Primavera":
       if (destino == "Bariloche") {
           alert("No se viaja");
       }
       else if (destino == "Cataratas") {
            alert("Se viaja");
       } 
       else if (destino == "Mar del plata") {
             alert("Se viaja");
       }
       else if (destino == "Cordoba") {
            alert("Se viaja");
       }
       break;
    }
}