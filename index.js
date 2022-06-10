
 const blocosHtml = document.getElementById('blocoMinerados') 
 const blocos24h = document.getElementById('bloco24h')
 const transaction24h = document.getElementById('transaction24h')
 
 
function callback(){
  
    blocosHtml.innerText = blocks

    blocos24h.innerText = blocks_24h

    transaction24h.innerText = transaction24
    


}

consultAPI(callback)