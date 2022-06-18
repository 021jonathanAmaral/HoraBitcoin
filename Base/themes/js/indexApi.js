
const blocosHtml = document.getElementById('blocoMinerados')
const blocos24h = document.getElementById('bloco24h')
const transactions24h = document.getElementById('transaction24h')
const priceOnUsd = document.getElementById('priceInUsd')
const difficultyHash = document.getElementById('difficultyHashHtml')


function callback() {

    blocos24h.innerText = allBlocks_24
    transactions24h.innerText =  allTransactions_24h
    difficultyHash.innerText = difficultyHashRate
    priceOnUsd.innerText = thePriceUsd
    blocosHtml.innerText = blocksTotal

}


