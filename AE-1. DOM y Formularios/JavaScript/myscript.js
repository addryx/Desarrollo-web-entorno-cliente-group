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


/* DIRECCIÓN 

A partir de aquí hay que ordenarlo y corregir cosas (Crear labels etc) */



    var direccion = document.createElement("input");
    direccion.id = "name" // <input id="name"/>
    direccion.type = "text" // <input id="name" type="text"/>
    direccion.name = "name" // <input id="name" type="text" name="street"/>

    var contenido2 = document.createTextNode("Direccion");

    formulario.appendChild(direccion);
    document.body.appendChild(contenido2);

    var numero = document.createElement("input");
    numero.id = "name" // <input id="name"/>
    numero.type = "number" // <input id="name" type="number"/>
    numero.name = "number" // <input id="name" type="number" name="number"/>

    var contenido3 = document.createTextNode("Numero");

    formulario.appendChild(numero);
    document.body.appendChild(contenido3);
}