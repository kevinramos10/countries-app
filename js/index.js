import { redirectLogin, logout } from "./authGuard.js";
import { createCard } from "./createCard.js";

redirectLogin()

async function getPaises() {
    const response = await fetch('/countries-app/data.json')
    const data = await response.json()

    return data
}

let paises = [] 

async function render() {
    paises = await getPaises() 
    
    paises.forEach(pais => {
        createCard(pais)
        
    })
}
render()

function filtrar() {
    const regionSeleccionada  = document.getElementById('filtroRegion').value
    const paisBuscado = document.getElementById('buscarPais').value

    document.querySelector('#todosPaises').innerHTML = '' 

    let filtrados = []

    if(regionSeleccionada === 'Todas'){
        filtrados = paises
    }else{
        filtrados = paises.filter(pais => pais.region === regionSeleccionada)
    }

    filtrados = filtrados.filter(pais => pais.name.toLowerCase().includes(paisBuscado))
    
    filtrados.forEach(pais =>{
        createCard(pais)
    })

}

document.querySelector('#filtroRegion').addEventListener('change', filtrar)
document.querySelector('#buscarPais').addEventListener('input', filtrar)

document.getElementById('btnSalir').addEventListener('click', logout)
