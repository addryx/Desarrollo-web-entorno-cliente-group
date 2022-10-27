function precioTotal() {
    
    // Creamos la variable precio para darle un valor al finalizar todas las sumas.

    var precio = 0

    // En este if le estamos preguntando si el tamaño en cuestión está checkeado, si lo está le añade el importe correspondiente al precio,
    // si no lo está pasa al siguiente y vuelve a hacer la misma comprobación.

    if(tam_g.checked){
        precio = 15
    } else if (tam_m.checked){
        precio = 10
    } else if (tam_p.checked){
        precio = 5
    }
    
    // Creamos una variable a la cual le añadimos el valor correspondiente a los input con name = "ingredientes"

    var ingred = document.getElementsByName("ingredientes")

    // Creamos un for para que recorra todos los input con name = "ingredientes" (a través de la variable creada), si el ingrediente [i] está checkeado, 
    // le añade +1 al precio, hace una y otra vez este proceso hasta que el for ha recorrido todos los inputs.

    for(var i=0; i<ingred.length; i++){
        if(ingred[i].checked){
            precio ++
        }
    }

    // Sacamos el precio total a través de una alerta al usuario.

    alert("Precio: "+precio)
}

    // Con el windows onload le estamos comunicando que cuando el formulario sea enviado (submit a través del botón) ejecute la función precioTotal().

    window.onload = function(){
        formulario.onsubmit = precioTotal
    }