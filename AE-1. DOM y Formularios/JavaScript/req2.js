function precioTotal() {
    var ingredientes = document.getElementByName("ingredientes");
    var precio = 0;

    if (ingredientes.checked) {
        precio++;
    }

    if (tam_g.checked){
        precio =+ 15;
    }
    else if (tam_m.checked){
        precio =+ 10;
    }
    else{
        precio=+5;
    }

    console.log("Precio total: " + precio);
}

window.onload = function(e){
    
    btn_procesar.onclick = precioTotal
}