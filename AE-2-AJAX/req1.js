let tamElegido = [];
let ingrElegidos = [];

/* Carga */

window.onload = function () {
  enviarPeticionAsincrona();
  refresh.onclick = () => { location.reload();};
  formulario.onsubmit = validacion;
  formulario.onsubmit = calcularPrecio;
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
  });
};

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

  tamaño = document.getElementsByName("tamaño");
  var seleccionado = false;
  for (var i = 0; i < tamaño.length; i++) {
    if (tamaño[i].checked) {
      seleccionado = true;
      tamElegido[i] = 1;
      break;
    } else {
      tamElegido[i] = 0;
    }
  }
  if (!seleccionado) {
    alert("[ERROR] Debe seleccionar un tamaño.");
    return false;
  }

  ingrediente = document.getElementsByName("ingredientes");
  var seleccionado = false;
  for (var i = 0; i < ingrediente.length; i++) {
    if (ingrediente[i].checked) {
      seleccionado = true;
      ingrElegidos[i] = 1;
      break;
    } else {
      ingrElegidos[i] = 0;
    }
  }
  if (!seleccionado) {
    alert("[ERROR] Debe seleccionar un ingrediente.");
    return false;
  }
}

/* AJAX */

const URL_DESTINO = "http://localhost:5501/AE-2-AJAX/";
const RECURSO = "pizzas.json";

function enviarPeticionAsincrona() {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", URL_DESTINO + RECURSO, true);
  xmlHttp.send(null);

  xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        procesarTamaño(JSON.parse(this.responseText));
        procesarIngredientes(JSON.parse(this.responseText));
        calcularPrecio(JSON.parse(this.responseText));

      } else {
        alert("[ERROR DE MIERDA]");
      }
    }
  };
}

function procesarTamaño(jsonDoc) {
  let input = [];
  let inputTx = [];
  let br = [];
  let brfor = [];

  let label = document.createElement("label");
  label.setAttribute("for","Tamaño")
  let labelTx = document.createTextNode("* Elegir tamaño:");
  br = document.createElement("br");
  tamanyo.appendChild(label);
  label.appendChild(labelTx);
  label.appendChild(br);

  for (let i = 0; i < jsonDoc.PIZZAS.TAMAÑOS.length; i++) {
    input[i] = document.createElement("input");
    inputTx[i] = document.createTextNode(jsonDoc.PIZZAS.TAMAÑOS[i].TAMAÑO);
    brfor[i] = document.createElement("br");

    label.appendChild(input[i]);
    input[i].setAttribute("type", "radio");
    input[i].setAttribute("name", "tamaño");
    input[i].value = jsonDoc.PIZZAS.TAMAÑOS[i].TAMAÑO;
    label.appendChild(inputTx[i]);
    label.appendChild(brfor[i]);
  }
}

function procesarIngredientes(jsonDoc) {
  let input = [];
  let inputTx = [];
  let br = [];
  let brfor = [];

  let label = document.createElement("label");
  label.setAttribute("for","Ingredientes")
  let labelTx = document.createTextNode("* Añadir ingredientes:");
  br = document.createElement("br");
  ingr.appendChild(label);
  label.appendChild(labelTx);
  label.appendChild(br);

  for (let i = 0; i < jsonDoc.PIZZAS.INGREDIENTES.length; i++) {
    input[i] = document.createElement("input");
    inputTx[i] = document.createTextNode(jsonDoc.PIZZAS.INGREDIENTES[i].INGREDIENTE);
    brfor[i] = document.createElement("br");

    label.appendChild(input[i]);
    input[i].setAttribute("type", "checkbox");
    input[i].setAttribute("name", "ingredientes");
    input[i].value = jsonDoc.PIZZAS.INGREDIENTES[i].INGREDIENTE;
    label.appendChild(inputTx[i]);
    label.appendChild(brfor[i]);
  }

  let parr = document.createElement("p");
  let parrTx = document.createTextNode("Selecciona mínimo un ingrediente. Todas las pizzas llevan una base de tomate y mozzarella.")
  parr.appendChild(parrTx);
  ingr.appendChild(parr);
}

/* Cálculo del precio de la pizza */

function calcularPrecio(jsonDoc){
  // Guardo o acumulo aquí los precios.
  let precioTamaño;
  let precioIngredientes = 0;
  
  console.log("estoy dentro");

  let INGREDIENTES = [];
  INGREDIENTES = jsonDoc.PIZZAS.INGREDIENTES;

  // Si algún array tiene un 1 en alguna posición, esque ese ingrediente o tamaño ha sido marcado.
  // La posición de ese 1, coincidira la posición del precio del tamaño o ingrediente en la lista.
  //for (let i=0; i<jsonDoc.PIZZAS.TAMAÑOS.length; i++) {
  //    if (tamElegido[i] == 1) precioTamaño = jsonDoc.PIZZAS.TAMAÑOS[i].PRECIO;
  //}

  for (let i=0; i<INGREDIENTES.length; i++) {
      if (ingrElegidos[i] == 1) precioIngredientes += jsonDoc.PIZZAS.INGREDIENTES[i].PRECIO;
  }



  // Muestro el precio.
  agradecimiento.innerHTML = "¡Gracias! Hemos recibido tu pedido correctamente."
  total.innerHTML = "El Precio Total: " + (precioTamaño + precioIngredientes) + "€";
}