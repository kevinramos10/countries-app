export function createCard(paises){
    
    const bandera = paises.flags.png
    const nombre = paises.name
    const poblacion = paises.population
    const region = paises.region
    const capital = paises.capital

    //div de paises
    const divTodosPais = document.getElementById('todosPaises')

    //div por cada pais
    const card = document.createElement('div')
    card.id = 'cardPais'

    //Para poder direccionar al card
    card.addEventListener('click', () => {
        location.href = './pages/country.html?pais=' + nombre
    })

    //img por cada bandera
    const img_bandera = document.createElement('img')
    img_bandera.src = bandera

    //p por cada nombre
    const p_nombre = document.createElement('p')
    p_nombre.id = 'nombrePais'
    p_nombre.textContent = nombre

    //p por cada poblacion
    const span_poblacion = document.createElement('span')
    span_poblacion.textContent = 'Poblacion: '
    const p_poblacion = document.createElement('p')
    p_poblacion.appendChild(span_poblacion) 
    p_poblacion.append(poblacion.toLocaleString()) 

    //p por cada region
    const span_region = document.createElement('span')
    span_region.textContent = 'Region: '
    const p_region = document.createElement('p')
    p_region.appendChild(span_region)
    p_region.append(region)

    //p por cada capital
    const span_capital = document.createElement('span')
    span_capital.textContent = 'Capital: '
    const p_capital = document.createElement('p')
    p_capital.appendChild(span_capital)
    p_capital.append(capital)

    card.appendChild(img_bandera)
    card.appendChild(p_nombre)
    card.appendChild(p_poblacion)
    card.appendChild(p_region)
    card.appendChild(p_capital)
    divTodosPais.appendChild(card)

    document.querySelector('main').appendChild(divTodosPais)
}


