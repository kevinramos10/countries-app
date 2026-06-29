export const redirectCountry = () => {
    if(localStorage.getItem('token')){
        location.href = '../index.html'
    }
}

export const redirectLogin = () => {
    if(!localStorage.getItem('token')){
        location.href = '../pages/login.html'
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    location.href = '../pages/login.html'
}

export const volver = () => {
    location.href = '../index.html'
}