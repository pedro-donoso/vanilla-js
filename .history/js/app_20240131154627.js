import datos from "../data/data.json" assert { type: "json" };
import { Gift } from "./clases";

const cuerpoTabla = document.querySelector("#cuerpo-tabla");

const cargarTabla = () => {
  datos.map((item) => {
    const fila = document.createElement("tr");

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

    fila.innerHTML = celdas;
    cuerpoTabla.append(fila);
  });
};

const agregarGift = (event) => {
  event.preventDefault();

  let id = datos.at(-1).id + 1;
  let gift = document.querySelector("#gift").value;
  let tipo = document.querySelector("#tipo").value;
  let tiempo = document.querySelector("#tiempo").value;
  let precio = document.querySelector("#precio").value;
  let imagen = document.querySelector("#imagen").value;

  datos.push(
    new Gift(
        id, gift, tipo, tiempo, precio, imagen));
};

cargarTabla();

document.querySelector("#formGift").addEventListener("submit", agregarGift);
