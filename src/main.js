let dni = document.getElementById('dni');
const nameUser = document.getElementById('nameUser');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirPassword = document.getElementById('confirPassword');
const registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', () => {
  dni = dni.value;
  nameVisitor = nameUser.value;
  emailUser = email.value;

  saveVisitor(dni,nameVisitor, emailUser, null);
  
})