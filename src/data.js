document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

const handleError = () => {
  alert('Se ha presentado un error');
}

// function addStaff() {
//   const data = JSON.parse(this.responseText);
//   console.log(data);
  
//   // const article = data.response.docs[0];
//   // const title = article.headline.main;
//   // const snippet = article.snippet;

//   // let li = document.createElement('li');
//   // li.className = 'articleClass';
//   // li.innerText = snippet;

//   // responseContainer.appendChild(li);
// }

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
    selectStaff.innerHTML = '';

    Object.keys(dataStaff).forEach((id) => {
      const staff = dataStaff[id];
      console.log(staff);
      
      selectStaff.innerHTML += `
     
      <option value="${id}">${staff.name}</option>
      `

      
    })



    // for (i in dataStaff) {
    //   console.log(dataStaff[i]);
    //   let option = document.createElement("option");
    //   option.setAttribute('value', dataStaff[i].id);
    //   option.innerText += dataStaff[i].name;
    //   selectStaff.appendChild(option);
    // }

    // Object.keys(dataStaff).forEach((id) => {
    //   const person = dataStaff[id];
    //   console.log(person);
    //   // selectStaff.option value="${id}">${person.name}</option>
    //   
      
      
      
    // })
    
    
  })
}

showStaff();