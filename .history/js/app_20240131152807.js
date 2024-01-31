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

        fila.innerHTML=celdas
        cuerpoTabla.append(fila)

  });
};

const agregarGift=()=>{

}


cargarTabla();

document.querySelector('#formGift')