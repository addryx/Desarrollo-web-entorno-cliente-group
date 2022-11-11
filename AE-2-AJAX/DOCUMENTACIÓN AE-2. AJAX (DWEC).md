## DOCUMENTACIÓN AE-2. AJAX (DWEC)

### HTML

Para el HTML nos hemos basado en el formulario de la actividad 1 realizada este trimestre. Hemos adaptado el formato del body utilizando divs para posteriormente poder hacer un CSS más organizado.

A parte de esto, los primeros cuatro inputs que son de tipo texto los hemos introducido en el body manualmente. En el `<div class="options">` hemos creado dos `<div>` más, uno para tamaños y otro para ingredientes. Estos estan vacios ya que serán posteriormente rellenados con una llamada AJAX al archivo pizzas.json.

### JAVASCRIPT

Cuando abrimos el archivo JS lo primero que vemos es el "modulo" de carga. 

Primero hemos creado el evento `window.onload = function()` , dentro de el está la función `enviarPeticionAsincrona()` y así cuando carga la página es lo primero que ejecuta (función explicada posteriormente en la documentación).

Para el botón de refrescar hemos creado un evento `refresh.onclick = () => { location.reaload();};` que recarga la página al clicar el botón.

Finalmente, en este módulo encontramos una EventListener que cuando detecta el submit del formulario evita ejecutar la action con el `e.preventDefault()` y lanza dos funciones, `validación` y `obtenerTotal`.

En el segundo "modulo" encontramos la validación del formulario. En esta hemos creado una funcion que se encarga de comprobar que cada campo este rellenado.

Para las de tipo texto lo hace mediante el `value.trim() == ""` para detectar si está vacío. Para el tamaño le metemos la información del `name="tamaño"` en una variable, posteriormente es recorrida con un for para ver si ese campo está seleccionado o no. Si lo está la variable creada "seleccionado" es true. Si no lo está (comprobandolo con un if) salta una alerta con un mensaje de error.

Para los ingredientes hace exactamente el mismo proceso.

En el tercer "módulo" hacemos la llamada a través de AJAX a la base de datos (json). Creamos una constante con la URL_DESTINO a la cual le metemos la dirección localhost y otra constante llamada RECURSO con el archivo json.

Creamos la función `enviarPeticionAsincrona()` , dentro de ésta encontramos:

Primero creamos un objeto XMLHttpRequest, después ejecutamos la función open y send.

	ESTADOS DEL READYSTATE:
	- open = 1
	- send = 2
	- interactive = 3
	- completed = 4

Llamamos al evento `xmlHttp.onreadystatechange = function()` y dentro de el creamos dos if's, uno nos detecta si el readyState es 4, por lo tanto completado y el otro nos detecta si el estado es 200 que asegura que es correcto, si los dos son true ejecutamos las funciones `procesarTamaño()` y `procesarIngredientes()` a las que se les pasa por parámetro el json parseado para poder acceder a éste.

Creamos las funciónes `procesarTamaño()` y `procesarIngredientes()` las cuales se les pasa por parámetro el `(jsonDoc)` ya que con estas funciónes a través de DOM creamos los elementos necesarios como los label, inputs o textos y los atributos de éstos.

Alguno de los valores como los tamaños y los ingredientes son traídos del `jsonDoc`.

El cuarto y último "módulo" nos calcula el precio de la pizza.

Volvemos a crear una función `obtenerTotal()` para hacer una llamada a AJAX y ejecutar la función `calcularPrecio()` volviendole a pasar el json paseado por parámetro.

En la función `calcularPrecio()` la cual tiene por parámetro el `jsonDoc` creamos dos variables para los precios de tamaño y ingredientes.

A través de dos for recorremos dentro del json los tamaños e ingredientes, comprobando si estos han sido seleccionados desde el formulario (para comprobar si han sido seleccionados volvemos a traer la variable tamaño y ingredientes seleccionadas en la validación) y le decimos que si ha sido seleccionada, la busque en el json y nos traiga el precio.

Al final le asociamos a través de dos atributos id un texto con `innerHTML` para el `estadoPedido`  y un texto más la suma de dos variables para el `precio`.

### JSON

En el archivo JSON básicamente hemos creado un primer objeto llamado PIZZAS, dentro de éste dos objetos más llamados INGREDIENTES y TAMAÑOS, y dentro de estos un array con objetos que tienen los propiedades *nombre* y *precio*.

### CSS

Para esta actividad hemos querido darle estílo y hemos implementado un archivo CSS en el cual le hemos cambiado la fuente a toda la página y accediendo al HTML mediante las etiquetas, id's y class hemos ido dandole formato a todos los elementos.

### RESULTADO DE LA APP (IMG)

Página principal:
![Image text](/AE-2-AJAX/img%20doc/Pasted%20image%2020221111164600.png)

Validación de los campos:

*Validación de los campos texto*

![Image text](/AE-2-AJAX/img%20doc/Pasted%20image%2020221111164615.png)

*Validación del campo tamaño*

![Image text](/AE-2-AJAX/img%20doc/Pasted%20image%2020221111164727.png)

*Validación de los ingredientes*

![Image text](/AE-2-AJAX/img%20doc/Pasted%20image%2020221111164744.png)

Resultado obtenido al hacer el submit:

![Image text](/AE-2-AJAX/img%20doc/Pasted%20image%2020221111164703.png)

	Actividad realizada por:
	- Adrián Fernández
	- Lierni Beltrán
	- Isaac Calderón
	- Marcos Sandá
	  
Ésta aplicación ha sido realizada con el IDE VSCode y comprobada en tiempo real a través del plugin Live Server. Aunque también se ha comprobado que pueda accederse a ella a través del archivo HTML. La actividad se ha ido realizando a lo largo de jornadas los 4 integrantes del equipo juntos.

