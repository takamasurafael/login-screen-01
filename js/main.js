const eye = document.querySelector('.fa-eye');
const eyeSlash = document.querySelector('.fa-eye-slash');
const showPass = document.querySelector('#field-pass');

function passView() {
    showPass.type = 'text';
    eye.style.display = 'none';
    eyeSlash.style.display = 'flex';
}

function passHide() {
    showPass.type = 'password';
    eye.style.display = 'flex';
    eyeSlash.style.display = 'none';
}

// SING IN - SING UP

const login = document.querySelector('.login');
const register = document.querySelector('#register');

function loginScreen() {
    register.style.display = 'none';
    login.style.display = 'flex';
}

function registerScreen() {
    login.style.display = 'none';
    register.style.display = 'flex';
}