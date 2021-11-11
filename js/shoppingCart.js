const namee = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parr = document.getElementById("warnings")

form.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parr.innerHTML = ""
    if(namee.value.length <6) {
        warnings += `El nombre no es valido <br>`
        entrar = true
    };
    if(!regexEmail.test(email.value)) {
        warnings += `El email no es valido <br>`
        entrar = true
    };
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida`
        entrar = true
    };

    if(entrar) {
        parr.innerHTML = warnings
    } else {
        parr.innerHTML = "¡Muchas gracias por tu compra! Hemos recibido tus datos, a la brevedad nos estaremos comunicando."
    };
});



localStorage.setItem('name', namee.innerHTML);
let inputName = localStorage.getItem('name')
