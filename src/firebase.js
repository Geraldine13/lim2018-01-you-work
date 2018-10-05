var config = {
  apiKey: "AIzaSyDGUUQ1k9lZJHK46Ov48c4QH2xgilkPYEE",
  authDomain: "you-work-876c3.firebaseapp.com",
  databaseURL: "https://you-work-876c3.firebaseio.com",
  projectId: "you-work-876c3",
  storageBucket: "you-work-876c3.appspot.com",
  messagingSenderId: "845657403156"
};
firebase.initializeApp(config);

const saveVisitor = (date, dni, name, email, photoUrl, staff) => {
  return firebase.database().ref('visitors/' + dni)
    .set({
      dateVisit: date,
      dni: dni,
      username: name,
      email: email,
      picture: photoUrl,
      visited: staff
    });
}

const visitReport = () => {
  const bodyTable = document.getElementById('content-table');
  firebase.database().ref('visitors/')
    .on('value', (visitorsRef) => {
      const visitors = visitorsRef.val();
      const visitorsList = Object.keys(visitors).reverse();
      visitorsList.forEach((id) => {
        const visitor = visitors[id];
        console.log(visitor);
        bodyTable.innerHTML += `
          <tr>
            <td>${visitor.dateVisit}</td>
            <td>${visitor.dni}</td>
            <td>${visitor.username}</td>
            <td>${visitor.email}</td>
            <td>en prueba</td>
            <td>${visitor.visited}</td>
          </tr>
          `
      })
    })
}

// // Registro de Usuarios Nuevos
// const registerNew = (email, password) => {
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((result) => {
//       const user = result.user;
//       if (user.displayName == null) {
//         username = document.getElementById('nameUser').value;
//       } else {
//         username = user.displayName;
//       }
//       if (user.displayName == null) {
//         username = document.getElementById('nameUser').value;
//       } else {
//         username = user.displayName;
//       }
//       if (user.photoURL == null) {
//         picture = "https://thumbs.dreamstime.com/b/icono-del-usuario-46707697.jpg";
//       } else {
//         picture = user.photoURL;
//       }
//       saveData(user.uid, username, user.email, picture);
//       check();
//       alert('Se ha registrado tu visita! \nSe notificará aConfirma el mensaje de verificación en tu correo y seguidamente puedes Iniciar Sesión');
//       formRegister.classList.add('hidden');
//       formStart.classList.remove('hidden');
//     })
//     .catch((error) => {
//       let errorCode = error.code;
//       let errorMessage = error.message;
//       if (error.message === 'auth/email-already-in-use') {
//         validInputs.innerHTML = "El email ingresado ya está en uso";
//       } else if (error.message === 'The email address is already in use by another account.') {
//         validInputs.innerHTML = "El email está siendo utilizado por otro usuario";
//       }
//     })
// }