function cargar(){

    // Creación del form y añadirlo al div.

    var form = document.createElement("form");
    form.id = "form";
    form.action = "send";
    form.method = "post";
    div1.appendChild(form);

    // Creación de los campos texto DNI, nombre y apellidos, dirección y teléfono y añadirlos al form.

    var tituloDNI = document.createElement("label");
    form.appendChild(tituloDNI);
    var txtTituloDNI = document.createTextNode('DNI: ');
    tituloDNI.appendChild(txtTituloDNI);
    
    var DNI = document.createElement("input");
    DNI.id = "DNI";
    DNI.type = "text";
    DNI.name = "DNI";
    form.appendChild(DNI);

    var tituloNC = document.createElement("label");
    form.appendChild(tituloNC);
    var txtTituloNC = document.createTextNode('Nombre completo: ');
    tituloNC.appendChild(txtTituloNC);

    var nombreCompleto = document.createElement("input");
    nombreCompleto.id = "nombre";
    nombreCompleto.type = "text"
    nombreCompleto.name = "nombre";
    form.appendChild(nombreCompleto);

    var tituloDireccion = document.createElement("label");
    form.appendChild(tituloDireccion);
    var txtTituloDireccion = document.createTextNode("Dirección: ");
    tituloDireccion.appendChild(txtTituloDireccion);

    var direccion = document.createElement("input");
    direccion.id = "direccion";
    direccion.type = "text"
    direccion.name = "direccion";
    form.appendChild(direccion);

    var tituloTelefono = document.createElement("label");
    form.appendChild(tituloTelefono);
    var txtTituloTelefono = document.createTextNode("Teléfono: ");
    tituloTelefono.appendChild(txtTituloTelefono);

    var telefono = document.createElement("input");
    telefono.id = "telefono";
    telefono.type = "tel"
    telefono.name = "telefono";
    form.appendChild(telefono);

    // Creación de los 2 campos radio con 4 opciones cada uno y añadirlos al form.

    var tituloRadio1 = document.createElement("label");
    form.appendChild(tituloRadio1);
    var txtTituloRadio1 = document.createTextNode("Radio 1: ");
    tituloRadio1.appendChild(txtTituloRadio1);

    var radio1 = document.createElement("input");
    form.appendChild(radio1);
    radio1.id = "radio1";
    radio1.type = "radio";
    radio1.name = "radio1";
    radio1.value = "1";
    var txtRadio1 = document.createElement("label");
    form.appendChild(txtRadio1);
    var titRadio1 = document.createTextNode("1");
    txtRadio1.appendChild(titRadio1);

    var radio2 = document.createElement("input");
    form.appendChild(radio2);
    radio2.id = "radio2";
    radio2.type = "radio";
    radio2.name = "radio2";
    radio2.value = "2";
    var txtRadio2 = document.createElement("label");
    form.appendChild(txtRadio2);
    var titRadio2 = document.createTextNode("2");
    txtRadio2.appendChild(titRadio2);
    
    var radio3 = document.createElement("input");
    form.appendChild(radio3);
    radio3.id = "radio3";
    radio3.type = "radio";
    radio3.name = "radio3";
    radio3.value = "3";
    var txtRadio3 = document.createElement("label");
    form.appendChild(txtRadio3);
    var titRadio3 = document.createTextNode("3");
    txtRadio3.appendChild(titRadio3);

    var radio4 = document.createElement("input");
    form.appendChild(radio4);
    radio4.id = "radio4";
    radio4.type = "radio";
    radio4.name = "radio4";
    radio4.value = "4";
    var txtRadio4 = document.createElement("label");
    form.appendChild(txtRadio4);
    var titRadio4 = document.createTextNode("4");
    txtRadio4.appendChild(titRadio4);

    var tituloRadio2 = document.createElement("label");
    form.appendChild(tituloRadio2);
    var txtTituloRadio2 = document.createTextNode("Radio 2: ");
    tituloRadio2.appendChild(txtTituloRadio2);

    var radioa = document.createElement("input");
    form.appendChild(radioa);
    radioa.id = "radioa";
    radioa.type = "radio";
    radioa.name = "radioa";
    radioa.value = "a";
    var txtRadio1 = document.createElement("label");
    form.appendChild(txtRadio1);
    var titRadio1 = document.createTextNode("a");
    txtRadio1.appendChild(titRadio1);

    var radiob = document.createElement("input");
    form.appendChild(radiob);
    radiob.id = "radiob";
    radiob.type = "radio";
    radiob.name = "radiob";
    radiob.value = "b";
    var txtRadiob = document.createElement("label");
    form.appendChild(txtRadiob);
    var titRadiob = document.createTextNode("b");
    txtRadiob.appendChild(titRadiob);
    
    var radioc = document.createElement("input");
    form.appendChild(radioc);
    radioc.id = "radioc";
    radioc.type = "radio";
    radioc.name = "radioc";
    radioc.value = "c";
    var txtRadioc = document.createElement("label");
    form.appendChild(txtRadioc);
    var titRadioc = document.createTextNode("c");
    txtRadioc.appendChild(titRadioc);

    var radiod = document.createElement("input");
    form.appendChild(radiod);
    radiod.id = "radiod";
    radiod.type = "radio";
    radiod.name = "radiod";
    radiod.value = "d";
    var txtRadiod = document.createElement("label");
    form.appendChild(txtRadiod);
    var titRadiod = document.createTextNode("d");
    txtRadiod.appendChild(titRadiod);

    // Creación campos para 5 checkbox diferentes y añadirlos al form.

    var txtcheckbox = document.createElement("label");
    form.appendChild(txtcheckbox);
    var titcheckbox = document.createTextNode("Checkbox: ");
    txtcheckbox.appendChild(titcheckbox);

    var checkbox1 = document.createElement("input");
    form.appendChild(checkbox1);
    checkbox1.id = "checkbox1";
    checkbox1.type = "checkbox";
    checkbox1.name = "checkbox1";
    checkbox1.value = "1";
    var txtcheckbox1 = document.createElement("label");
    form.appendChild(txtcheckbox1);
    var titcheckbox1 = document.createTextNode("1");
    txtcheckbox1.appendChild(titcheckbox1);

    var checkbox2 = document.createElement("input");
    form.appendChild(checkbox2);
    checkbox2.id = "checkbox2";
    checkbox2.type = "checkbox";
    checkbox2.name = "checkbox2";
    checkbox2.value = "2";
    var txtcheckbox2 = document.createElement("label");
    form.appendChild(txtcheckbox2);
    var titcheckbox2 = document.createTextNode("2");
    txtcheckbox2.appendChild(titcheckbox2);

    var checkbox3 = document.createElement("input");
    form.appendChild(checkbox3);
    checkbox3.id = "checkbox3";
    checkbox3.type = "checkbox";
    checkbox3.name = "checkbox3";
    checkbox3.value = "3";
    var txtcheckbox3 = document.createElement("label");
    form.appendChild(txtcheckbox3);
    var titcheckbox3 = document.createTextNode("3");
    txtcheckbox3.appendChild(titcheckbox3);

    var checkbox4 = document.createElement("input");
    form.appendChild(checkbox4);
    checkbox4.id = "checkbox4";
    checkbox4.type = "checkbox";
    checkbox4.name = "checkbox4";
    checkbox4.value = "4";
    var txtcheckbox4 = document.createElement("label");
    form.appendChild(txtcheckbox4);
    var titcheckbox4 = document.createTextNode("4");
    txtcheckbox4.appendChild(titcheckbox4);

    var checkbox5 = document.createElement("input");
    form.appendChild(checkbox5);
    checkbox5.id = "checkbox5";
    checkbox5.type = "checkbox";
    checkbox5.name = "checkbox5";
    checkbox5.value = "5";
    var txtcheckbox5 = document.createElement("label");
    form.appendChild(txtcheckbox5);
    var titcheckbox5 = document.createTextNode("5");
    txtcheckbox5.appendChild(titcheckbox5);

    // Creación de campos para 2 imágenes y añadirlos al form.
    
    var divImg = document.createElement("div");
    divImg.id = "contImg";
    form.appendChild(divImg);

    var img1 = document.createElement("img");
    img1.id = "img1";
    img1.src = "/AE-1. DOM y Formularios/img/img1.png";
    divImg.appendChild(img1);

    var img2 = document.createElement("img");
    img2.id = "img2";
    img2.src = "/AE-1. DOM y Formularios/img/img2.png";
    divImg.appendChild(img2);

    // Creación de un campo select y añadirlo al form.

    var txtSelect = document.createElement("label");
    form.appendChild(txtSelect);
    var titSelect = document.createTextNode("Select: ")
    txtSelect.appendChild(titSelect);

    var select = document.createElement("select");
    form.appendChild(select);

    var opcion1 = document.createElement("option");
    select.appendChild(opcion1)
    var txtopcion1 = document.createTextNode("Opcion 1");
    opcion1.appendChild(txtopcion1);

    var opcion2 = document.createElement("option");
    select.appendChild(opcion2)
    var txtopcion2 = document.createTextNode("Opcion 2");
    opcion2.appendChild(txtopcion2);

    var opcion3 = document.createElement("option");
    select.appendChild(opcion3)
    var txtopcion3 = document.createTextNode("Opcion 3");
    opcion3.appendChild(txtopcion3);
    
    // Creación de campo para un textarea y añadirlo al form.

    var txtTextArea = document.createElement("label");
    form.appendChild(txtTextArea);
    var titTextArea = document.createTextNode("Text Area: ")
    txtTextArea.appendChild(titTextArea);

    var textarea = document.createElement("textarea");
    form.appendChild(textarea);
    textarea.name = "textarea";
    textarea.placeholder = "Escribe aquí";
    textarea.rows = "5";

    // Creación de un campo submit y añadirlo al form.

    var btn = document.createElement("button");
    form.appendChild(btn);
    btn.type = "submit";
    btn.name = "btn";
    btn.style = "width:50px; height:20px";

    var txtbtn = document.createTextNode("Botón");
    btn.appendChild(txtbtn);

}