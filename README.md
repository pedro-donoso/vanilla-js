### 1. Comienzo del Proyecto

 1.1. Creo carpeta **vanilla-js** en directorio raíz

 1.2. Abro carpeta con vscode

 1.3. Creo repositorio *vanilla-js* en Github
 
 1.4. Creo rama develop y la publico
 
1.5. Agrego Readme, realizo primer commit y lo pusheo al repositorio *vanilla-js*

### 2. Defino los Archivos

2.1. Creo archivo **index.html**

2.2. Agrego *Plantilla con cdn de Bootstrap* al index.html

2.3. Creo *carpeta data* donde almaceno el archivo **data.json**, que contiene los *productos iniciales* en **formato JSON**:

![uno](https://github.com/pedro-donoso/vanilla-js/assets/68760595/0a736058-f2ce-4ac7-82f9-c5baefbc044c)

2.4. Creo *carpeta js* con archivo **app.js** de **tipo módulo** y lo agrego en *index.html* bajo el script de Bootstrap

```
<script src="./js/app.js type="module"></script>
```

2.5. En el *archivo app.js* importar **data.json** de **tipo JSON**:

```
import datos from "../data/data.json" assert {type:"json"};
```

### 3. Archivos JS

3.1. En la *carpeta js* creo archivo **clases.js** con el **constructor**, para *exportar al app.js*:

![dos](https://github.com/pedro-donoso/vanilla-js/assets/68760595/eefa2a2a-50b1-41ea-a4b1-4efeaf0d051b)

3.2. En el archivo **app.js**, *Importo el archivo clases.js* con la **clase Gift**

```
import {Gift} from './clases.js'
```

### 4. Creación del Formulario y Tabla dinámica

4.1. En el archivo *index.html* creo **Formulario Bootstrap**:

![tres](https://github.com/pedro-donoso/vanilla-js/assets/68760595/24d88c77-9c47-4bb1-912b-e0065c853f38)

4.2. En el archivo *index.html* creo **Tabla dinámica Bootstrap**:

![cuatro](https://github.com/pedro-donoso/vanilla-js/assets/68760595/9865913e-75cb-4dd2-9982-ccbf726b2e83)

### 5. Cuerpo de la Tabla 

5.1 En el archivo *app.js* creo constante **cuerpoTabla** y selecciono el **id #cuerpo-tabla** ubicado en el *index.html*

```
const cuerpoTabla = document.querySelector("#cuerpo-tabla");
```

5.2 Creo Función para *cargar y mostrar los datos en la tabla* HTML:

```
const cargarTabla = () => { ...
```

5.3 **Mapea cada elemento** de los datos de data.json y *crea filas* de la tabla HTML

```
datos.map((item) => { ...
```

5.4 Creo una *fila por cada dato*

```
const fila = document.createElement("tr");
```

5.5 *Creo Celdas HTML* para cada propiedad del elemento

![cinco](https://github.com/pedro-donoso/vanilla-js/assets/68760595/41158401-1143-4e24-88a8-51c8b318b8fa)

5.6 Establece el *innerHTML de la fila* y la *agrega al cuerpo de la tabla*

```
fila.innerHTML = celdas;
    cuerpoTabla.append(fila);
```

5.7 *Inicializo la tabla* cuando se carga el script

```
cargarTabla();
```

### 6. Función para agregar un nuevo Gift cuando se envía el formulario

```
const agregarGift = (event) => {
  event.preventDefault();...
```

6.1. *Extraigo valores de los inputs del formulario*, **at se posiciona en el último elemento del array datos**

![seis](https://github.com/pedro-donoso/vanilla-js/assets/68760595/6b1df33d-4240-4ff6-b840-64efcf3c4024)

6.2 Creo un *nuevo objeto Gift* y lo agrego al *array de datos*

```
datos.push(new Gift(id, gift, tipo, tiempo, precio, imagen));...
```

6.3 **Reseteo el formulario** y *recargo la tabla*

```
document.querySelector("#formGift").reset();
  cargarTabla();
};
```

6.4. Agrego al final del archivo app.js un **eventListener para los envíos**

```
document.querySelector("#formGift").addEventListener("submit", agregarGift);
```

### 7. Función para borrar un Gift cuando se hace clic en el botón, se agrega metodo al object model con window

```
window.borrarGift = (id) => { ...
```

7.1. **FindIndex** obtiene la posición del elemento, se *iguala el id creado con el anterior*

```
let index = datos.findIndex((item) => item.id == id); ...
```

7.2. Pregunto al usuario si quiere **eliminar la gift card**

```
 let validar = confirm(
    `Está seguro/a que quiere eliminar la gift card ${datos[index].gift}?`
  ); ...
```

7.3. Elimina *1 elemento* de la posición indicada

```
 if (validar) {
    datos.splice(index, 1); ...
```

7.4. Se vuelve a llamar a la función para que se *actualicen los datos*

```
 cargarTabla();
  }
}; ...
```

### 8. Agrego modal de Bootstrap al index.html

![siete](https://github.com/pedro-donoso/vanilla-js/assets/68760595/c084ac31-052f-4914-9798-cd9e34196da5)
   
8.1. En *app.js* llamo al modal del index.html **mediante su id**

```
const myModal = new bootstrap.Modal(document.getElementById("modalGift"));
```

8.2. Creo método global para mostrar el Modal

![ocho](https://github.com/pedro-donoso/vanilla-js/assets/68760595/d7d607e6-a3cd-4e02-bff6-aba223ed879e)

### 9. Creo variable global para actualizar datos del modal

```
let idGiftUpdate = null;
```

9.1. Variable para actualizar los Datos, e para que no se refresque la pantalla

![nueve](https://github.com/pedro-donoso/vanilla-js/assets/68760595/6fa26845-bf1e-4a43-b094-9583ccdee2a5)

9.2. Se carga la tabla con los datos actualizados

```
cargarTabla(); ...
```

9.3. Se oculta el modal

```
  myModal.hide();
}; ...

```

9.4. Actualizo el formulario, mediante submit, al final del archivo app.js

```
document.querySelector("#formModal").addEventListener("submit", giftUpdate);
```


