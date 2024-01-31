// Importar datos desde el archivo JSON
import datos from "../data/data.json";
assert { type: "json" };

// Importar la clase Gift desde el archivo "clases.js"
import { Gift } from "./clases.js";

// Seleccionar el elemento HTML con el id "cuerpo-tabla"
const cuerpoTabla = document.querySelector("#cuerpo-tabla");

// Función para cargar y mostrar los datos en la tabla HTML
const cargarTabla = () => {
    // Limpiar el contenido existente en el cuerpo de la tabla
    cuerpoTabla.innerHTML = "";

    // Mapear cada elemento de los datos y crear filas de la tabla HTML
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
            </td>`;

        // Establecer el innerHTML de la fila y agregarla al cuerpo de la tabla
        fila.innerHTML = celdas;
        cuerpoTabla.append(fila);
    });
};

// Función para agregar un nuevo regalo cuando se envía el formulario
const agregarGift = (event) => {
    event.preventDefault();

    // Extraer valores de los inputs del formulario
    let id = datos.at(-1).id + 1;
    let gift = document.querySelector("#gift").value;
    let tipo = document.querySelector("#tipo").value;
    let tiempo = document.querySelector("#tiempo").value;
    let precio = document.querySelector("#precio").value;
    let imagen = document.querySelector("#imagen").value;

    // Crear un nuevo objeto Gift y agregarlo al array de datos
    datos.push(new Gift(id, gift, tipo, tiempo, precio, imagen));

    // Reiniciar el formulario y recargar la tabla
    document.querySelector("#formGift").reset();
    cargarTabla();
};

// Inicializar la tabla cuando se carga el script
cargarTabla();

// Agregar un event listener al formulario para manejar las envíos
document.querySelector("#formGift").addEventListener("submit", agregarGift);
