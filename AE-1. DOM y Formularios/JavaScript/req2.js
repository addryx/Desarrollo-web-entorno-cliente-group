function precioTotal() {
      
    var precio = 0

    if(tam_g.checked){
        precio = 15
    } else if (tam_m.checked){
        precio = 10
    } else if (tam_p.checked){
        precio = 5
    }
    
    var ingred = document.getElementsByName("ingredientes")

    for(var i=0; i<ingred.length; i++){
        if(ingred[i].checked){
            precio ++
        }
    }

    alert("Precio: "+precio)
    console.log("Precio: "+precio)
}

window.onload = function(){
    formulario.onsubmit = precioTotal
}