//array colocando proximos aromas

smells= [
    {
        "id": "1:",
        "aroma": "Mango y peonias",
    },
    {
        "id": "2:",
        "aroma": "Pera y jazmin",
    },
     {
        "id": "3:",
        "aroma": "Limón",
    },
     {
       "id": "4:",
       "aroma": "Pepino",
   },
   {
      "id": "5:",
      "aroma": "Chocolate",
   },
  
  ,]


// mostrar al usuario proximos aromas

function addSmell() { 
let list = document.getElementById("smellList"); 
list.classList.add('listStyle');
  
smells.forEach(function(arrayData, index) {
  
let creatingList= document.createElement("li");  
let content = document.createTextNode(arrayData.id+' '+arrayData.aroma);
  
list.appendChild(creatingList);
creatingList.appendChild(content);

})
}

addSmell();

// creando input para que usuario indique aroma

let smellChosen = document.getElementById('inputSmell');
let messageToUsername = document.createElement('h2');

smellChosen.addEventListener('submit', (e) => {
    e.preventDefault();

    
    messageToUsername.innerHTML += `<p class="messageSent">Mensaje enviado, muchas gracias por colaborar y formar parte de nuestro crecimiento.</p> `;
    smellChosen.appendChild(messageToUsername);

    localStorage.setItem("aroma-elegido", (smellChosen).value);
});

