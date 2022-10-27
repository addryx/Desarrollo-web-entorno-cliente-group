function cargar() {

/* Creación del formulario y lo añadimos al div*/

    var formulario = document.createElement("form");
    formulario.id = "formulario"; // <form id="formulario"</form>
    formulario.action = "loquesea";
    formulario.method = "post";

    formdiv.appendChild(formulario);

/* Creación de label e input y los añadimos al formulario*/

/* NOMBRE */
    var nomlabel = document.createElement("label");
    nomlabel.for = "nombre";

    var label1 = document.createTextNode("Nombre: ");
    nomlabel.appendChild(label1);
    formulario.appendChild(nomlabel);

    var nombre = document.createElement("input");
    nombre.id = "name" // <input id="name"/>
    nombre.type = "text" // <input id="name" type="text"/>
    nombre.name = "nombre" // <input id="name" type="text" name="nombre"/>

    formulario.appendChild(nombre);

/* APELLIDOS */
    var apelabel = document.createElement("label");
    apelabel.for = "apellidos";

    var label2 = document.createTextNode("Apellidos: ");
    apelabel.appendChild(label2);
    formulario.appendChild(apelabel);

    var apellidos = document.createElement("input");
    apellidos.id = "apellidos" // <input id="apellidos"/>
    apellidos.type = "text" // <input id="apellidos" type="text"/>
    apellidos.name = "apellidos" // <input id="apellidos" type="text" name="apellidos"/>

    formulario.appendChild(apellidos);


/* DIRECCIÓN */

/* IMÁGENES */

var imagen = documento.createElement("img");
imagen.src = "descarga.jpeg";

formulario.appendChild(imagen);


}

