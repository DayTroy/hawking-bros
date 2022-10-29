import axios from 'https://cdn.skypack.dev/axios';
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");
const searchForm = document.getElementsByTagName("form");
const searchFormWarning = document.querySelector(".inputWarning");

//1.2
axios.get(`https://jsonplaceholder.typicode.com/users`)
     .then(res => res.data)
     .then((data) => {
      data.forEach(obj => {
          resultsContainer.innerHTML += `
          <p> ID: <span>${obj.id}</span><p>
          <p> Имя: <span>${obj.name}</span><p>
          <p> Пользовательское имя: <span>${obj.username}</span><p>
          <p> Почта: <span>${obj.email}</span><p>
          <p> Адрес: <span>${obj.address.street}</span><p>
          <p> Телефон: <span>${obj.phone}</span><p>
          <p> Веб-сайт: <span>${obj.website}</span><p>
          <p> Название компании: <span>${obj.company.name}</span><p>
      </div>`
      });
     }
     );

//2.1
searchInput.addEventListener("change", () => {
    validateInput();
})  

function validateInput(){
    try{
      if(searchInput.value == 0 
      || searchInput.value == null
      || isNaN(searchInput.value)
      || searchInput.value < 5
      || searchInput.value > 10
      )
      {
        throw new Error("Invalid data");
      }
      else{
        console.log("Great!");
        searchFormWarning.innerHTML = "";
      }
    }
    catch(e){
      searchFormWarning.innerHTML = e.message;
      console.log(e.message);
    }
  }