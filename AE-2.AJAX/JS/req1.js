const URL_DESTINO = "http://localhost:5501/AE-2.AJAX/JSON/";
const RECURSO = "pizzas.json";

let tamanyoElegido = [];

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  enviarPeticionAsincrona();
});

function enviarPeticionAsincrona() {
  // Primero creamos un nuevo objeto de XMLHttpRequest
  let xmlHttp = new XMLHttpRequest();

  // Cuando ejecutamos la función "open", el readyState tendrá el estado 1.
  // Cuando ejecutamos el send, tendrá el estado 2.
  xmlHttp.open("GET", URL_DESTINO + RECURSO, true);
  xmlHttp.send(null);
  // Al objeto le pasamos la función de callback.
  // Esta función se va a ejecutar cada vez que el "readyState" cambie.
  // Pero solo vamos a querer procesar el cambio cuando el estado sea completado.
  xmlHttp.onreadystatechange = function () {
    // Hay muchas maneras desarrollar la función pero lo hacemos así para controlar mejor.
    // Solo procesaremos la respuesta cuando ésta esté completa y sea correcta.
    // Hay que tener en cuenta que la respuesta nos llega en formato texto, después habrá que parsearlo a JSON.
    // Entonces:
    // Si el estado es igual a 4 (estado completo), ejecutas lo que viene después.
    // Si además de estar completo, el estado es 200 (OK), entonces obtenemos el valor en texto.
    if (this.readyState == 4) {
      if (this.status == 200) {
        procesarRespuesta(JSON.parse(this.responseText));
        comprobarTamanyo(JSON.parse(this.responseText));
      } else {
        alert("ERROR");
      }
    }
  };
}

function procesarRespuesta(jsonDoc) {
  let label = [];
  let labelTx = [];
  let input = [];

  for (let i = 0; i < jsonDoc.PIZZAS.TAMAÑOS.length; i++) {

    label[i] = document.createElement("label");
    input[i] = document.createElement("input");
    labelTx[i] = document.createTextNode(jsonDoc.PIZZAS.TAMAÑOS[i].TAMAÑO);

    tamanyo.appendChild(label[i]);
    label[i].appendChild(labelTx[i]);
    label[i].appendChild(input[i]);
    input[i].setAttribute("type", "radio");
    input[i].setAttribute("name", "tamanyo");
    input[i].value = jsonDoc.PIZZAS.TAMAÑOS[i].TAMAÑO;

  }
}

/* function comprobarTamanyo(jsonDoc) {

    let tamanyos = document.getElementsByName("tamanyo");
    let precio;

    for (let i = 0; i < tamanyos.length; i++) {
        if (tamanyos[i].checked) {
        tamanyoElegido.push(1);
        } else {
        tamanyoElegido.push(0);
        }
    }

    for (let i = 0; i < tamanyos.length; i++) {
        if (tamanyoElegido[i] == 1) {
            precio = jsonDoc.PIZZAS.TAMAÑOS[i].PRECIO;
        }
    }

} */

/*
    function procesarRespuesta(jsonDoc) {
        //Convertimos un texto a un objeto JSON
        var objetoJson = JSON.parse(jsonDoc)
        //Podemos hacer lo contrario con "JSON.stringify(obj)"
        console.log(objetoJson)

        // Creamos una tabla con los títulos "Ingredientes" y "Tamaños". 
        var table = document.createElement("table");
        var tr = document.createElement("tr");
        var thIngredientes = document.createElement("th");
        var thTamaños = document.createElement("th");
        table.id = "tabla";
        tr.id = "tr";
        thIngredientes.id = "thIngredientes";
        thTamaños.id = "thTamaños";

        var textIngredientes = document.createTextNode("Ingredientes");
        var textTamaños = document.createTextNode("Tamaños");

        thIngredientes.appendChild(textIngredientes);
        thTamaños.appendChild(textTamaños);
        tr.appendChild(thIngredientes);
        tr.appendChild(thTamaños);
        table.appendChild(tr);

        var arrayPIZZAs = objetoJson.PIZZAS;//Ojo mayusculas y minusculas, es como este en el json original

        var tr1 = documento.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        tr1.id = "tr1";
        td1.id = "td1";
        td2.id = "td2";

        // th = Título columna
        // tr = fila
        // td = celda


        // En un vídeo de Félix comenta de hacerlo todo mediante js y dom. Incluso el for each.

        //Iteramos el array de pizzas y formamos las filas y columnas
        for(let pizza of arrayPIZZAs){
            table += "<tr><td>" + pizza.PIZZAS + "</td>" + 
                "<td>" + pizza.PIZZAS.TAMAÑOS + "</td></tr>";
        }

        for (let i = 0; i<objetoJson.PIZZAS.INGREDIENTES.length; i++) {
            console.log(objetoJson.PIZZAS.INGREDIENTES[i]);
        }

        resBusqueda.innerHTML = table;

    }

    */
