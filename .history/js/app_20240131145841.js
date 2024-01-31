import datos from "../data/data.json" assert { type: "json" };
// import { Gift } from "./clases";

const cuerpoTabla = document.querySelector("#cuerpo-tabla");

const cargarTabla = () => {
  datos.map((item) => {
    const fila = document.createElement("tr");

    const celdas = `<th>${item.gift}</th>
        <td>${item.tipo}</td>
        <td>${item.tiempo}</td>
        <td>$${item.precio}</td>
        <td>
            <div>
            <button class="btn btn-outline-warning">
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path>
</svg>
            </button>
            </div>
        </td>
        `;

        fila.innerHTML=celdas
        cuerpoTabla.append(fila)

  });
};

cargarTabla()