const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.querySelector('.error');
form.addEventListener('submit' , (e) => {
    e.preventDefault();

    if (email.value.trim() === '') {
        errormsg(error, 'Please enter a valid email address');
        email.placeholder = 'johnappleseed#mail.com';
    }
    else {
        removeErrorMsg(error);
    }
})

const errormsg = (element, message) => {
    element.innerText = message;
    element.classList.add('error-msg');
}
const removeErrorMsg = (element) => {
    element.innerText = '';
    element.classList.remove('error-msg');
}
