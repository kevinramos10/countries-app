import { redirectCountry } from "./authGuard.js"

redirectCountry()

const usuarioInput = document.getElementById('user')
const passwordInput = document.getElementById('password')
const btnInput = document.getElementById('btnIngresar')


btnInput.addEventListener('click', (e) => {
    e.preventDefault()

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: usuarioInput.value.trim(),
            password: passwordInput.value.trim(),
            expiresInMins: 30
        })
    })
    .then(res => res.json())
    .then((data) => {
        if(data.message){
            document.getElementById('messageError').textContent = 'Credenciales invalidas!'
        }
        else{
            document.getElementById('messageError').textContent = ''
            localStorage.setItem('token', data.accessToken)

            redirectCountry()
        }
    })

})


