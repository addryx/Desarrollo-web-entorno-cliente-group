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

    

    function validacion() {
        console.log("validando los datos del formulario...")
        if (Nombre.value.trim() == "") {
            // Si no se cumple la condicion...
            alert('[ERROR] El campo debe de estar relleno');
            return false;
        }
        
        //Validando que se haya elegido alguna opción del radio
        //notese que seleccionamos por name ya que queremos todos
        //los radio button
        ingrediente = document.getElementsByName("ingredientes");
        var seleccionado = false;
        for(var i=0; i<ingrediente.length; i++) {
            if(ingrediente[i].checked) {
                seleccionado = true;
                break;//en cuanto alguna pregunta este seleccionada
                    //paramos la ejecución
            }
        }

        if(!seleccionado) {
            alert('[ERROR] Debe seleccionar SI, NO o NS/NC');
            return false;
        }


    

        // Si el script ha llegado a este punto, todas las condiciones
        // se han cumplido, por lo que se devuelve el valor true
        // para que se propague el evento de mandar el formulario
        alert("Mandamos el formulario!")
        return true;
    }

    window.onload = function(){
        formulario.onsubmit = precioTotal
        formulario.onsubmit = validacion
    }