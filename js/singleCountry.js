import {redirectLogin, volver } from "/countries-app/js/authGuard.js"

redirectLogin()

const params = new URLSearchParams(location.search)
const nombrePais = params.get('pais')

async function render() {
    const response = await fetch('/countries-app/data.json')
    const data = await response.json()

    const pais = data.find(p => p.name === nombrePais)

    document.getElementById('imgBandera').src = pais.flags.png
    document.getElementById('nombrePa').textContent = pais.name
    document.getElementById('nombreNa').textContent = pais.nativeName
    document.getElementById('poblacion').textContent = pais.population.toLocaleString()
    document.getElementById('region').textContent = pais.region
    document.getElementById('subRegion').textContent = pais.subregion
    document.getElementById('capital').textContent = pais.capital
    document.getElementById('dominio').textContent = pais.topLevelDomain.join(', ')
    document.getElementById('moneda').textContent = pais.currencies.map(c => c.name).join(', ')
    document.getElementById('idiomas').textContent = pais.languages.map(l => l.name).join(', ')
}

render()

document.getElementById('btnSalir').addEventListener('click', volver)


