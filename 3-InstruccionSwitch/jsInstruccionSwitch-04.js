//Amarilla Juan Sebastian
function mostrar()
{
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value;

	switch (mes) {

        case "Febrero":
        alert("Si tiene 28 dias.");
        break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
        alert("Si tiene 30 dias.");
        break;
        default:
        alert("Si tiene 31 dias.");
    }
}//FIN DE LA FUNCIÓN