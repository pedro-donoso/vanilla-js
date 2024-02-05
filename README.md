![suscripcion](https://github.com/pedro-donoso/vanilla-js/assets/68760595/e65314f2-cf58-49fd-a2e3-4e9d0440b079)

## https://crud-vanillajs.netlify.app/

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
```
    "id": 1,
    "gift": "Spotify Premium",
    "tipo": "Suscripción",
    "tiempo": "1 mes",
    "precio": 250,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_714537-MLA53061400161_122022-V.jpg"
```

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

```
export class Gift {
 constructor(id, gift, tipo, tiempo, precio, imagen) {
  this.id = id;
  this.gift = gift;
  this.tipo = tipo;
  this.tiempo = tiempo;
  this.precio = precio;
  this.imagen = imagen;
 }
}
```

3.2. En el archivo **app.js**, *Importo el archivo clases.js* con la **clase Gift**

```
import {Gift} from './clases.js'
```

### 4. Creación del Formulario y Tabla dinámica

4.1. En el archivo *index.html* creo **Formulario Bootstrap**:

```
<form>
 <div class="row">
  <div class="col-12 col-md-6 offset-md-3">
   <label>Gift</label>
    <input type="text" class="form-control" id="gift" required>
  </div>
   <div class="col">
   <label>Tipo</label>
    <select id="tipo" class="form-control">
     <option value="Suscripción">Suscripción</option>
     <option value="Compra">Compra</option>
    </select>
  </div>
 </div>
  <div class="row mt-3">
  <div class="col">
   <label>Tiempo</label>
    <input type="text" class="form-control" id="gift" required>
  </div>
   <div class="col">
   <label>Tipo</label>
    <select id="tiempo" class="form-control">
     <option value="1 mes">1 mes</option>
     <option value="3 meses">3 meses</option>
     <option value="6">6 meses</option>
    </select>
  </div>
  <div class="col">
   <label>Precio</label>
    <input type="number" class="form-control" id="precio required">
  </div>
 </div>
 <div class="row mt-3">
  <div class="col">
   <input type="text" class="form-control" required placeholder="URL de la imagen" id="imagen">
  </div>
 </div>
<div class="mt-3 d-flex justify-content-end">
 <button class="btn btn-info">Guardar</button>
</div>
 
</form>
```

4.2. En el archivo *index.html* creo **Tabla dinámica Bootstrap**:

```
<div class="row">
            <div class="col-12 col-md-8 offset-md-2">
                <h3>Tabla de contenido</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Gift</th>
                            <th>Tipo</th>
                            <th>Tiempo</th>
                            <th>Precio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="cuerpo-tabla">

                    </tbody>
                </table>
            </div>
        </div>
```
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

```
const celdas = `<th>${item.gift}</th>
        <td>${item.tipo}</td>
        <td>${item.tiempo}</td>
        <td>$${item.precio}</td>
        <td><img class="img-fluid w-50" src="${item.imagen}" alt="Imagen"></td>
        <td>
            <div class="d-flex gap-2">
            <button onclick="mostrarModal(${item.id})" class="btn btn-outline-warning">
            <img src="img/boligrafo.png"/>
            </button>
            <button onclick="borrarGift(${item.id})" class="btn btn-outline-danger">
            <img src="img/cerrar.png"/>
            </button>
            </div>
        </td>
        `; ...
```

5.6 Establece el innerHTML de la fila y la agrega al cuerpo de la tabla

```
fila.innerHTML = celdas;
    cuerpoTabla.append(fila);
```

5.7 Inicializo la tabla cuando se carga el script

```
cargarTabla();
```









