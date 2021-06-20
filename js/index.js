//هنا يجب إضافة كود الجافاسكريبت
const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const myForm = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

const emailError = document.getElementById('emailError')
const passError = document.getElementById('passwordError')

function checkInputs() {
    if (email.value.match(reg)) {
        emailError.style = 'display:inline; color: green;'
        emailError.innerHTML = 'نايس!'
    } else if (email.value === "" || email.value === " ") {
        emailError.style = 'display:inline;'
        emailError.innerHTML = 'لا يجب للمدخل ان يكون فارغ!'
    } else if (!email.value.match(reg)) {
        emailError.style = 'display:inline;'
        emailError.innerHTML = 'أدخل بريدك الإلكتروني بطريقة صالحة!'
    } 
    if (password.value === "" || password.value === " ") {
        passError.style = 'display:inline;'
        passError.innerHTML = 'لا يجب للمدخل ان يكون فارغ!'
    } else {
        passError.style = 'display:inline; color: green;'
        passError.innerHTML = 'نايس!'
    }
}

myForm.addEventListener('submit', function(event) {
    event.preventDefault()
    checkInputs()
})    
