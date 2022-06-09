const baseUrl = 'https://api.blockchair.com/bitcoin/stats';



function getElement(element) {
    return document.querySelector(element);
  }

var init = {
    method: 'GET',
    blocos: 'blocks'
}

  function consultAPI(){
      
      fetch(baseUrl, init)
        .then(response => response.json())
        .then(data => console.log(data) )

   
  }
  
/*
 Site da API: https://blockchair.com/api/docs#link_001
*/


 
  

