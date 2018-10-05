document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

const handleError = () => {
  alert('Se ha presentado un error de conexión');
}

const getStaff = (callback) => {
  const staffRequest = new XMLHttpRequest();
  staffRequest.open('GET', `staffVisited.json`);
  staffRequest.onload = callback;
  staffRequest.onerror = handleError;
  staffRequest.send();
}

const showStaff = () => {
  getStaff(() => {
    const dataStaff = JSON.parse(event.currentTarget.responseText); 
    const selectStaff = document.getElementById('staff');
    document.innerHTML = selectStaff.value = ''; // fijar opción de selección
    document.innerHTML = selectStaff.length = 1; // elimina la opción anterior seleccionada
    Object.keys(dataStaff).forEach((id) => {
      const staff = dataStaff[id];
      selectStaff.innerHTML += `
      <option value="${staff.email}">${staff.name}</option>
      `      
    })    
  })
}

showStaff();