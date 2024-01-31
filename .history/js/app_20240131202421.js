// Importo datos desde el archivo JSON
import datos from "../data/data.json" assert { type: "json" };

// Importo la clase Gift desde el archivo "clases.js"
import { Gift } from "./clases.js";

// Selecciono el elemento HTML con el id "cuerpo-tabla"
const cuerpoTabla = document.querySelector("#cuerpo-tabla");

// Creo Función para cargar y mostrar los datos en la tabla HTML
const cargarTabla = () => {

  // Limpiao el contenido existente en el cuerpo de la tabla
  cuerpoTabla.innerHTML = "";

  // Mapea cada elemento de los datos y crea filas de la tabla HTML
  datos.map((item) => {
    const fila = document.createElement("tr");

    // Celdas HTML para cada propiedad del elemento
    const celdas = `<th>${item.gift}</th>
        <td>${item.tipo}</td>
        <td>${item.tiempo}</td>
        <td>$${item.precio}</td>
        <td>
            <div class="d-flex gap-2">
            <button class="btn btn-outline-warning">
            <img src="img/boligrafo.png"/>
            </button>
            <button class="btn btn-outline-danger">
            <img src="img/cerrar.png"/>
            </button>
            </div>
        </td>
        `;

    // Establece el innerHTML de la fila y la agrega al cuerpo de la tabla
    fila.innerHTML = celdas;
    cuerpoTabla.append(fila);
  });
};

// Función para agregar un nuevo Gift cuando se envía el formulario
const agregarGift = (event) => {
  event.preventDefault();

  // Extraigo valores de los inputs del formulario
  let id = datos.at(-1).id + 1;
  let gift = document.querySelector("#gift").value;
  let tipo = document.querySelector("#tipo").value;
  let tiempo = document.querySelector("#tiempo").value;
  let precio = document.querySelector("#precio").value;
  let imagen = document.querySelector("#imagen").value;

  // Creo un nuevo objeto Gift y lo agrego al array de datos
  datos.push(new Gift(id, gift, tipo, tiempo, precio, imagen));

  // Reinicio el formulario y recargo la tabla
  document.querySelector("#formGift").reset();
  cargarTabla();
};

const borrarGift=(id)=>{
  let index=datos.findIndex((item)=>item.id==id)
}

// Inicializo la tabla cuando se carga el script
cargarTabla();

// Agrego un event listener al formulario para manejar las envíos
document.querySelector("#formGift").addEventListener("submit", agregarGift);
