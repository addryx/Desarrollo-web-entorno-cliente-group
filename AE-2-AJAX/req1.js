/* Carga */

window.onload = function () {
  enviarPeticionAsincrona();
};

refresh.onclick = () => { location.reload();};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  validacion();
  obtenerTotal();
});

/* Validación del formulario                

Con el método 'trim()' eliminanos los espacios en blanco a ambos lados del String. 
Comparamos que el campo correspondiente no sea igual a vacio, si está vacío lanza un mensaje al usuario informando. 
*/

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

  /*
  Con el siguiente método recorremos todas las etiquetas con el nombre 'tamaño'. Si reconoce que una está seleccionada la ejecución se rompe, 
  en el caso de que no encuentre un elemento seleccionado, manda un mensaje al usuario por pantalla.
  */ 
  tamaño = document.getElementsByName("tamaño");
  var seleccionado = false;
  for (var i = 0; i < tamaño.length; i++) {
    if (tamaño[i].checked) {
      seleccionado = true;
      break;
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
      break;
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
/* Realizamos una peticion ASINCRONA
  Esta funcion se va a realizar cara vez que haya un cambio en la propiedad 'readyState'.
  Cuando la respuesta este completa y su estado sea 200 leeremos el mensaje del servidor y lo procesaremos.  */ 
function enviarPeticionAsincrona() {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", URL_DESTINO + RECURSO, true);
  xmlHttp.send(null);

  xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        procesarTamaño(JSON.parse(this.responseText));
        procesarIngredientes(JSON.parse(this.responseText));
      } else {
        alert("[ERROR]");
      }
    }
  };
}
/*A la siguiente función se le pasa por parmetro un objeto JSON. Se crean como variables las etiquetas que vamos a utilizar y las inicializamos como arrays,
Con el DOM creamos los elementos correspondientes y con un for recorremos el tamaño de las pizzas del documento 'json'. Con cada iteración pedimos que se creen 
los elementos que necesitamos*/ 
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
/* Esta función es igual que la función anterior 'procesarTamaño(jsonDoc)'. En este caso recorremos con el for los ingredientes. */ 
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
//Volvemos a a crear esta función para hacer una llamada a AJAX y ejecutar funcion 'calcularPrecio'
function obtenerTotal() {

  let jsonHttp = new XMLHttpRequest();
  jsonHttp.open("GET", URL_DESTINO + RECURSO, true);
  jsonHttp.send(null);
  jsonHttp.onreadystatechange = function() {
      if (this.readyState == 4) {
          if (this.status == 200) {
              calcularPrecio(JSON.parse(this.responseText));
          }
      }
  }
}
/*A través de dos for recorremos el tamaño y los ingredientes, si el elemento ha sido seleccionado
  le suma el precio a la variable que corresponde. Al final le asociamos dos atributos id de un texto
  con innerHTML y aparece por pantalla la suma de las dos variables siendo estas el precio total.*/ 
function calcularPrecio(jsonDoc){
  let precioTamaño = 0;
  let precioIngredientes = 0;
  
  for (let i=0; i<jsonDoc.PIZZAS.TAMAÑOS.length; i++) {
      if (tamaño[i].checked) precioTamaño += jsonDoc.PIZZAS.TAMAÑOS[i].PRECIO;
  }

  for (let i=0; i<jsonDoc.PIZZAS.INGREDIENTES.length; i++) {
      if (ingrediente[i].checked) precioIngredientes += jsonDoc.PIZZAS.INGREDIENTES[i].PRECIO;
  }

  estadoPedido.innerHTML = "¡Tu pedido ha sido realizado!"
  precio.innerHTML = "Precio total: " + (precioTamaño + precioIngredientes) + "€";
}