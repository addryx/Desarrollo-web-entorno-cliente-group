
const URL_DESTINO = "http://localhost:5500/AE-2.AJAX/JSON/"
const RECURSO = "pizzas.json"

    function enviarPeticionAsincrona() {

        // Primero creamos un nuevo objeto de XMLHttpRequest
        let xmlHttp = new XMLHttpRequest()

        // Al objeto le pasamos la función de callback. 
        // Esta función se va a ejecutar cada vez que el "readyState" cambie. 
        // Pero solo vamos a querer procesar el cambio cuando el estado sea completado. 
        xmlHttp.onreadystatechange = function () {

            // Hay muchas maneras desarrollar la función pero lo hacemos así para controlar mejor. 
            // Solo procesaremos la respuesta cuando ésta esté completa y sea correcta. Entonces: 
            // Si el estado es igual a 4 (estado completo), ejecutas lo que viene después.
            // Si además de estar completo, el estado es 200 (OK), entonces obtenemos el valor en texto. 
            if (this.readyState == 4) {
                if (this.status == 200) {
                    procesarRespuesta(this.responseText)
                } else {
                    alert("ERROR")
                }
            }
        }

        // Cuando ejecutamos la función "open", el readyState tendrá el estado 1. 
        // Cuando ejecutamos el send, tendrá el estado 2. 
        xmlHttp.open('GET', URL_DESTINO + RECURSO, true)
        xmlHttp.send(null)
    }


    function procesarRespuesta(jsonDoc) {
        //Convertimos un texto a un objeto JSON
        var objetoJson = JSON.parse(jsonDoc)
        //Podemos hacer lo contrario con "JSON.stringify(obj)"
        console.log(objetoJson)

        //Lo suyo seria crear objetos con el DOM, esto esta regulín
        //pero como ejemplo sencillo vale
        var table = "<tr><th>Ingredientes</th><th>Tamaños</th></tr>";
        var arraypIZZAs = objetoJson.PIZZAS;//Ojo mayusculas y minusculas, es como este en el json original
        
        //Iteramos el array de pizzas y formamos las filas y columnas
        for(let pizza of arraypIZZAs){
            table += "<tr><td>" + pizza.INGREDIENTES + "</td>" + 
                "<td>" + pizza.TAMAÑOS + "</td></tr>";
        }

        resultadoBusqueda.innerHTML = table;

    }