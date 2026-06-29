export const redirectCountry = () => {
    if(localStorage.getItem('token')){
        location.href = '/countries-app/index.html'
    }
}

export const redirectLogin = () => {
    if(!localStorage.getItem('token')){
        location.href = '/countries-app/pages/login.html'
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    location.href = '/countries-app/pages/login.html'
}

export const volver = () => {
    location.href = '/countries-app/index.html'
}