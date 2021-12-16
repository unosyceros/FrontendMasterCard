function addRegalo(nombre, precio, cantidad){
    
    const tr = document.createElement('tr');
    var html ="";
    
    const total = precio * cantidad;
debugger;
    html += '<td>'+nombre+'</td>';
    html += '<td>'+precio+'</td>';
    html += '<td>'+cantidad+'</td>';
    html += '<td>'+total+'</td>';
    html += '<td><button class="btn btn-danger" onclcik="eliminarRegalo('+total+')">Eliminar</button></td>';
    html += '</tr>';
    debugger;
    tr.innerHTML = html;
    document.getElementById('regalos').appendChild(tr);
}


function eliminarRegalo(total){
    debugger;
    document.getElementById('regalos').each(function(){
        var regalo = $(this).find('td').eq(3).html();
        if(regalo == total){
            $(this).remove();
        }
    });
}
function exportar(){
//exportar a excel
    var tabla = document.getElementById('regalos');
    //delete column 3
    var tabla2 = tabla.getElementsByTagName('tr');
    var lastcolumn = tabla2.length - 1;
    tabla2.removeChild(tabla2.childNodes[lastcolumn]);
    var html = tabla2.outerHTML;
    window.open('data:application/vnd.ms-excel,' + encodeURIComponent(html));

}

window.onload = function(){
    document.getElementById('btn-agregar').addEventListener('click', function(){
        var nombre = document.getElementById('addRegalo').value;
        var precio = document.getElementById('addPrecio').value;
        var cantidad = document.getElementById('addCantidad').value;

        addRegalo(nombre, precio, cantidad);
    });
    

    
}
