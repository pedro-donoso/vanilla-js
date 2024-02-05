// 1- Importo datos desde el archivo JSON y me aseguro que los datos importados sean de tipo JSON.
import datos from "../data/data.json" assert { type: "json" };

// 2- Importo la clase Gift desde el archivo "clases.js"
import { Gift } from "./clases.js";

// 3- Selecciono el elemento HTML con el id "cuerpo-tabla"
const cuerpoTabla = document.querySelector("#cuerpo-tabla");

// 8- Llamo al Modal
const myModal = new bootstrap.Modal(document.getElementById("modalGift"));

// 10- Variable Global (afuera) para guardar los datos
let idGiftUpdate = null;

// 9- Método Global para mostrar el Modal
window.mostrarModal = (id) => {
  idGiftUpdate = id;
  // Obtengo la posición del elemento en el arreglo
  let index = datos.findIndex((item) => item.id == idGiftUpdate);

  document.querySelector("#giftModal").value = datos[index].gift;
  document.querySelector("#tipoModal").value = datos[index].tipo;
  document.querySelector("#tiempoModal").value = datos[index].tiempo;
  document.querySelector("#precioModal").value = datos[index].precio;
  document.querySelector("#imagenModal").value = datos[index].imagen;

  myModal.show();
};

// 11- Variable para Actualizar los Datos, e para que no se refresque la pantalla
const giftUpdate = (e) => {
  e.preventDefault();
  let index = datos.findIndex((item) => item.id == idGiftUpdate);
  datos[index].gift = document.querySelector("#giftModal").value;
  datos[index].tipo = document.querySelector("#tipoModal").value;
  datos[index].tiempo = document.querySelector("#tiempoModal").value;
  datos[index].precio = document.querySelector("#precioModal").value;
  datos[index].imagen = document.querySelector("#imagenModal").value;

  // 11.1- Se carga la tabla con los datos actualizados
  cargarTabla();

  11.2- 
  myModal.hide();
};

// 4- Creo Función para cargar y mostrar los datos en la tabla HTML
const cargarTabla = () => {

    // 6.4- Limpio el contenido existente en el cuerpo de la tabla
  cuerpoTabla.innerHTML = "";

  // 4.1- Mapea cada elemento de los datos de data.json y crea filas de la tabla HTML
  datos.map((item) => {
    // 4.2- Creo una fila por cada dato
    const fila = document.createElement("tr");

    // 4.3- Creo Celdas HTML para cada propiedad del elemento
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
        `;

    // 4.4- Establece el innerHTML de la fila y la agrega al cuerpo de la tabla
    fila.innerHTML = celdas;
    cuerpoTabla.append(fila);
  });
};

// 6- Función para agregar un nuevo Gift cuando se envía el formulario
const agregarGift = (event) => {
  event.preventDefault();

  // 6.1- Extraigo valores de los inputs del formulario, at se posiciona en el último elemento del array datos
  let id = datos.at(-1).id + 1;
  let gift = document.querySelector("#gift").value;
  let tipo = document.querySelector("#tipo").value;
  let tiempo = document.querySelector("#tiempo").value;
  let precio = document.querySelector("#precio").value;
  let imagen = document.querySelector("#imagen").value;

  // 6.2- Creo un nuevo objeto Gift y lo agrego al array de datos
  datos.push(new Gift(id, gift, tipo, tiempo, precio, imagen));

  // 6.3- Reseteo el formulario y recargo la tabla
  document.querySelector("#formGift").reset();
  cargarTabla();
};

// 7- Función para borrar un Gift cuando se hace clic en el botón, se agrega metodo al object model con window
window.borrarGift = (id) => {

  // 7.1- FindIndex obtiene la posición del elemento, se iguala el id creado con el anterior
  let index = datos.findIndex((item) => item.id == id);

  // 7.2 Pregunto al usuario si quiere eliminar la gift card
  let validar = confirm(
    `Está seguro/a que quiere eliminar la gift card ${datos[index].gift}?`
  );

  // 7.3 Elimina 1 elemento de la posición indicada
  if (validar) {
    datos.splice(index, 1);

    // 7.4 Se vuelve a llamar a la función para que se actualicen los datos
    cargarTabla();
  }
};

// 5- Inicializo la tabla cuando se carga el script
cargarTabla();

// 8- Agrego un event listener al formulario para manejar las envíos
document.querySelector("#formGift").addEventListener("submit", agregarGift);

// 9- Actualizar formulario
document.querySelector("#formModal").addEventListener("submit", giftUpdate);
