/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
Amarilla Juan Sebastian
 */
function CalcularPrecio () 
{
  let lamparas;
  let empresa;
  let precioTotal;
  let porcentaje;
  let precioUltimo;
  let lamparasPrecio = 35;
  let descuento;

  lamparas = parseInt(document.getElementById("txtIdCantidad").value);
  empresa = document.getElementById("Marca").value;

  if (lamparas >= 6) {
    descuento = 50;
    precioTotal = lamparas * lamparasPrecio;
    porcentaje = precioTotal * descuento / 100;
    precioUltimo = precioTotal - porcentaje;
  }else if (lamparas == 5 && empresa == "ArgentinaLuz") {
    descuento = 40;
    precioTotal = lamparas * lamparasPrecio;
    porcentaje = precioTotal * descuento / 100;
    precioUltimo = precioTotal - porcentaje;
   } else if (lamparas == 5 && empresa != "ArgentinaLuz") {
      descuento = 30;
      precioTotal = lamparas * lamparasPrecio;
      porcentaje = precioTotal * descuento / 100;
      precioUltimo = precioTotal - porcentaje;
     } else if (lamparas == 4 && empresa == "ArgentinaLuz" || lamparas == 4 && empresa == "FelipeLamparas") {
         descuento = 25;
         precioTotal = lamparas * lamparasPrecio;
         porcentaje = precioTotal * descuento / 100;
         precioUltimo = precioTotal - porcentaje;
       } else if (lamparas == 4 && empresa != "ArgentinaLuz" || lamparas == 4 && empresa != "FelipeLamparas") {
         descuento = 20;
         precioTotal = lamparas * lamparasPrecio;
         porcentaje = precioTotal * descuento / 100;
         precioUltimo = precioTotal - porcentaje;
       } else if (lamparas == 3 && empresa == "ArgentinaLuz") {
         descuento = 15;
         precioTotal = lamparas * lamparasPrecio;
         porcentaje = precioTotal * descuento / 100;
         precioUltimo = precioTotal - porcentaje;
       } else if (lamparas == 3 && empresa == "FelipeLamparas") {
         descuento = 10;
         precioTotal = lamparas * lamparasPrecio;
         porcentaje = precioTotal * descuento / 100;
         precioUltimo = precioTotal - porcentaje;
       } else if (lamparas == 3 && empresa != "ArgentinaLuz" || lamparas == 3 && empresa != "FelipeLamparas") {
         descuento = 5;
         precioTotal = lamparas * lamparasPrecio;
         porcentaje = precioTotal * descuento / 100;
         precioUltimo = precioTotal - porcentaje;
       } else if (lamparas >= 1 && lamparas < 3) {
           precioTotal = lamparas * lamparasPrecio;
           precioUltimo = precioTotal;
         }

  document.getElementById("txtIdprecioDescuento").value = precioUltimo;
}