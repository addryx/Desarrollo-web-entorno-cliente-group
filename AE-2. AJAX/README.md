##AE-2. AJAX

###Requerimiento 1

Se pide hacer una aplicación AJAX que gestione una pizzería como la actividad 1. Puedes basarte en dicha actividad para reutilizar lo que consideres o para hacerte una idea de lo que tienes que implementar junto a tu compañero. El formulario que tendremos que usar será el mismo que en dicha actividad, consúltala para más información.

La idea es simular un entorno de acceso a servidor para traer toda la información que se necesite para cargar la página. La página cargará parte de los datos de manera dinámica, concretamente los tamaños y los ingredientes. Dichos datos estarán en formato JSON, por lo que habrá que tratarlos en el cliente para poder mostrarlos.

Nada más terminar de cargar la página, se accederá mediante AJAX a datos en un fichero del servidor para traer los tamaños de las pizzas y cargarlos dinámicamente. Al mismo tiempo, nos traeremos los ingredientes que tenemos disponibles para mostrarlos en nuestra pizzería.

También dispondremos de un botón de refrescar, de tal manera que cuando lo pulsemos haremos una llamada de nuevo a nuestro servidor para traernos los posibles cambios de los datos de nuestra aplicación.

**Valoración: 7 puntos sobre 10**

###Requerimiento 2

Si pulsamos el botón de procesar el pedido, la web mostrará el resultado del precio total de la pizza. Para calcular dicho precio, el programa accederá mediante AJAX al servidor para traer la información sobre el precio del tamaño de la pizza escogido, así como el precio de los ingredientes escogidos. El precio de los ingredientes podrá ser diferente.

**Valoración: 3 puntos sobre 10**

###Consideraciones

Para toda la actividad se valorará la claridad de código, la modularidad, la eficiencia de los algoritmos empleados y comentarios explicativos sobre los puntos clave de la aplicación (JavaDoc o normales, lo que se consideré más apropiado).

Se recomienda el uso de GITHUB para realizar el trabajo de grupo.

Para la entrega, se subirá el código fuente comprimido a la plataforma, incluyendo un documento PDF con todo lo necesario para demostrar el correcto funcionamiento de la actividad (resultados, capturas de pantalla, ficheros, fotos, etc.). No es necesario que el documento PDF sea muy extenso, pero SÍ que incluya, al menos, las capturas de los resultados obtenidos y la explicación de los puntos clave de la actividad realizada. También puede ser valido para la entrega subir el PDF con la URL de acceso al repositorio GITHUB sin necesidad de incluir el código fuente.