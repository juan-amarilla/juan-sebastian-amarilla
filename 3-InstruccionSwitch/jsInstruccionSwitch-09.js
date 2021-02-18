// Amarilla Juan Sebastian
function mostrar()
{
    let destino;
    let estacion;
    let preciofinal;
    let descuento = 0;
    let aumento = 0;
    const precio = 15000;
	
    destino = document.getElementById("txtIdDestino").value;
    estacion = document.getElementById("txtIdEstacion").value;
 
    switch (estacion){
       case "Invierno":
       if (destino == "Bariloche") {
          aumento = 20;
       }
       else if (destino == "Mar del plata") {
          descuento = 20;
       }
       else if (destino == "Cataratas") {
          descuento = 10;
       }
       else if (destino == "Cordoba") {
            descuento = 10;
       }
       break;
       
       case "Verano":
       if (destino == "Bariloche") {
           descuento = 20; 
       }
       else if (destino == "Mar del plata") {
           aumento = 20;
       }
       else if (destino == "Cataratas")  {    
            aumento = 10;
       }
       else if (destino == "Cordoba") {
            aumento = 10;
       }
       break;
       
       default:
       if (destino == "Cordoba") {
          preciofinal = precio;
       }
       else if (destino == "Bariloche") {
          aumento = 10;
       }
       else if (destino == "Mar del plata") {
           aumento = 10;
       }
       else if (destino == "Cataratas") {
           aumento = 10;
       }
       break;
    }   

    if (aumento != 0 ) {
       preciofinal = precio + precio * aumento / 100; 
    }
    
    else if (descuento != 0) {
       preciofinal = precio - precio * descuento / 100;
    }
    else{
       preciofinal = precio;
    }

    alert("Precio final $" + preciofinal);  
}	