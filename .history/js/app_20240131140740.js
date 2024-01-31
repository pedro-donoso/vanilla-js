import datos from '../data/data.json' assert{type:"json"};
import {Gift} from './clases'

const cuerpoTabla = document.querySelector('#cuerpo-tabla')

const cargarTabla=()=>{

    datos.map((item)=>{

        const fila=document.createElement('tr')

        const celdas=`<th>${item.gift}</th>
        <td>${item.tipo}</td>
        <td>${item.tiempo}</td>
        <td>$</td>`

    })

}