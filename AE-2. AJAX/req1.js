/* Validación del formulario */

function validacion() {
  console.log("validando los datos del formulario...");
  if (texto1.value.trim() == "") {
    alert("[ERROR] El campo debe de estar relleno");
    return false;
  } else if (texto2.value.trim() == "") {
    alert("[ERROR] El campo debe de estar relleno");
    return false;
  } else if (texto3.value.trim() == "") {
    alert("[ERROR] El campo debe de estar relleno");
    return false;
  } else if (texto4.value.trim() == "") {
    alert("[ERROR] El campo debe de estar relleno");
    return false;
  }

  ingrediente = document.getElementsByName("ingredientes");
  var seleccionado = false;
  for (var i = 0; i < ingrediente.length; i++) {
    if (ingrediente[i].checked) {
      seleccionado = true;
      break; //en cuanto alguna pregunta este seleccionada
      //paramos la ejecución
    }
  }
  if (!seleccionado) {
    alert("[ERROR] Debe seleccionar un ingrediente.");
    return false;
  }
}

/* Cálculo del precio de la pizza */

function precioTotal() {
  // Creamos la variable precio para darle un valor al finalizar todas las sumas.

  var precio = 0;

  // En este if le estamos preguntando si el tamaño en cuestión está checkeado, si lo está le añade el importe correspondiente al precio,
  // si no lo está pasa al siguiente y vuelve a hacer la misma comprobación.

  if (tam_g.checked) {
    precio = 15;
  } else if (tam_m.checked) {
    precio = 10;
  } else if (tam_p.checked) {
    precio = 5;
  }

  // Creamos una variable a la cual le añadimos el valor correspondiente a los input con name = "ingredientes"

  var ingred = document.getElementsByName("ingredientes");

  // Creamos un for para que recorra todos los input con name = "ingredientes" (a través de la variable creada), si el ingrediente [i] está checkeado,
  // le añade +1 al precio, hace una y otra vez este proceso hasta que el for ha recorrido todos los inputs.

  for (var i = 0; i < ingred.length; i++) {
    if (ingred[i].checked) {
      precio++;
    }
  }

  // Sacamos el precio total a través de una alerta al usuario.

  alert("Precio: " + precio);
}

window.onload = function () {
  formulario.onsubmit = validacion;
  formulario.onsubmit = precioTotal;
};

/* AJAX */

const URL_DESTINO = "http://localhost:5500/01_02_AJAX/";
const RECURSO = "pizzas.json";

function enviarPeticionAsincrona() {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
    } else {
      alert("ZASCA!");
    }
  };
  xmlHttp.open("GET", URL_DESTINO + RECURSO, true);
  xmlHttp.send(null);
}

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

    //Iteramos el array de pizzas y formamos las filas y columnas
    for(let pizza of arrayPIZZAs){
        table += "<tr><td>" + pizza.INGREDIENTES + "</td>" + 
            "<td>" + pizza.TAMAÑOS + "</td></tr>";
    }

    resultadoBusqueda.innerHTML = table;

}