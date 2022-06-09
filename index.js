
const baseUrl = 'https://api.blockchair.com/bitcoin/stats';
var blocks
var difficulty

function getElement(element) {
    return document.querySelector(element);
}

var init = {
    method: 'GET',
    blocos: 'blocks'
}

function consultAPI() {

    fetch(baseUrl, init)
        .then(response => response.json())
        .then(result => {
            
            console.log(result)
            
            console.log(result.data.blocks)
            
            console.log(result.data.difficulty)
            
            blocks = result.data.blocks
            difficulty = result.data.difficulty
        })
        
    }
    // Colocar os console logs abaixo em uma função 
    // e passar ela como parametro da função consultaAPI
    // Exemplo: function consultaAPI(callback)
    consultAPI();
    console.log("blocks", blocks)
    console.log("difficulty", difficulty)
