
const baseUrl = 'https://api.blockchair.com/bitcoin/stats';
var blocks
var difficulty

const blocosHtml = document.getElementById('blocoMinerados') 
 const blocos24h = document.getElementById('bloco24h')
 const transaction24h = document.getElementById('transaction24h')

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
            
            blocks = result.data.blocks
            difficulty = result.data.difficulty
            blocks_24h = result.data.blocks_24h
            transaction24 = result.data.transactions_24h
            callback()
        })
        
    }


consultAPI(callback)
    
   
