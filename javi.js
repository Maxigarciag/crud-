function registrar(){
    var nombre=document.getElementById("name").value;
   //document.getElementById("lbnombre").innerText = nombre;
   var DNI=document.getElementById("dni").value;
   //document.getElementById("lbdni").innerText = DNI;
   var OBRA=document.getElementById("obra").value;
   //document.getElementById("lbobra").innerText = OBRA;
   var FYH=document.getElementById("fyh").value;
   //document.getElementById("lbfyh").innerText = FYH;
   var SUCU=document.getElementById("sucu").value;
   //document.getElementById("lbsucu").innerText = SUCU;
    

   var table = document.getElementById("tablaDatos");
    var row = table.insertRow(-1);

    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

   
    cell1.innerHTML = nombre;
    cell2.innerHTML = DNI;
    cell3.innerHTML = OBRA;
    cell4.innerHTML = SUCU;
    cell5.innerHTML = FYH;
}
function limpiarcampos() {
    var table = document.getElementById("tablaDatos").getElementsByTagName('tbody')[0];
     
    document.getElementById("name").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("obra").value = "";
    document.getElementById("sucu").value = "";
    document.getElementById("fyh").value = "";

}
let filaSeleccionada = null;



function editarFila(row) {
    filaSeleccionada = row;
    document.getElementById("name").value = filaSeleccionada.cells[0].innerHTML;
    document.getElementById("dni").value = filaSeleccionada.cells[1].innerHTML;
    document.getElementById("obra").value = filaSeleccionada.cells[2].innerHTML;
    document.getElementById("sucu").value = filaSeleccionada.cells[3].innerHTML;
    document.getElementById("fyh").value = filaSeleccionada.cells[4].innerHTML;
}

function editarDatos() {
    if (filaSeleccionada === null) {
        alert("Selecciona una fila para editar.");
    } else {
        filaSeleccionada.cells[0].innerHTML = document.getElementById("name").value;
        filaSeleccionada.cells[1].innerHTML = document.getElementById("dni").value;
        filaSeleccionada.cells[2].innerHTML = document.getElementById("obra").value;
        filaSeleccionada.cells[3].innerHTML = document.getElementById("sucu").value;
        filaSeleccionada.cells[4].innerHTML = document.getElementById("fyh").value;
    }
}