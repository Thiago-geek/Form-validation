const mail = document.getElementById('mail');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');
const mensaje = document.getElementById('mensaje');

// Validar correo electronico
mail.addEventListener('input',function(event){
  if(mail.validity.typeMismatch){
    mail.setCustomValidity("No se ha podido encontrar tu cuenta");
  } else {
    mail.setCustomValidity("");
  }});

 // Validar contraseña
password.addEventListener('input', function (event) {
  if (password.validity.tooShort) {
    password.setCustomValidity("La contraseña debe tener al menos 8 caracteres.");
  } else {
    password.setCustomValidity("");
  }});

// Validar que las contraseñas coincidan
repeatPassword.addEventListener('input', function () {
  if (password.value !== repeatPassword.value) {
    repeatPassword.setCustomValidity("Las contraseñas no coinciden.");
  } else {
    repeatPassword.setCustomValidity("");
  }});