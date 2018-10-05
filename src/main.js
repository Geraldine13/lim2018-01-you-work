let dateVisit = document.getElementById('date-visit');
let dni = document.getElementById('dni');
const nameUser = document.getElementById('nameUser');
const email = document.getElementById('email');
const photoImg = document.getElementById('photo-replace');
const password = document.getElementById('password');
const registerButton = document.getElementById('registerButton');

const fecha = new Date();
dateVisit.innerHTML = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} - ${fecha.getHours()}:${fecha.getMinutes()}`;

registerButton.addEventListener('click', () => {
  date = dateVisit.innerHTML;  
  dni = dni.value;
  nameVisitor = nameUser.value;
  emailVisitor = email.value;
  photoVisitor = photoImg.getAttribute('src'); 
  saveVisitor(date, dni, nameVisitor, emailVisitor, photoVisitor);
  alert('Se ha registrado su Visita');
})


