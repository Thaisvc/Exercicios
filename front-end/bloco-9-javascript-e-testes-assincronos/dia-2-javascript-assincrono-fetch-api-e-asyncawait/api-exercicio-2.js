// api.js
/* 1- Agora que temos a url vamos criar um arquivo (api.js, por exemplo) e dentro dele uma função para pegar o array com as moedas.
2- Crie também um arquivo HTML (index.html, por exemplo) que deve conter uma tag para listar as crypto moedas.
🚀 3- Pronto, temos um array com os dados das moedas e um esqueleto do HTML, agora vamos fazer com que as moedas apareçam na tela. Utilize o seguinte formato: Nome da moeda (símbolo da moeda): valor em dólares. Exemplo: Bitcoin (BTC): 46785.06.
🚀 4- Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order Function para filtrar o array das moedas para mostrar apenas as 10 primeiras?
 */
// async tranforma em assicrona a funçao
async function moedas() {
  //chamando a api/await trata o retorno positivo da promises/await passa a resposta para a variavel pronises entao ela nao e mais uma promeses e sim a respota de uma
  //await espera a promeses de fetch retornar a resposta
  try {
    const response = await fetch('https://api.coincap.io/v2/assets/');//tratamos a primeira promeses
    const data = await response.json();// transforma em formato jason os dados q queremos
    //console.log(data);
    const resul = await data.data
    setCoins(resul)
    //console.log(resul)
  } catch (error) {
    console.log('Vishi deu erro')
  }
 
}

const setCoins = async (data) => {
  const coinsList = document.getElementById('coins-list');
  data
    .filter(( a, index) => index < 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
      newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;
      coinsList.appendChild(newLi);
    });
  
}
window.onload = moedas;

// a funçao moedas ela busca os dados da api trata eles e chama a funçao setCoins passando os dados/resultado/resposta da api buscada
// a funçao setCoins ela cria as linhas e exibe o resutado passado como parametro os moedas

//-------------------------------------------


async function converterMoeda() {
  //chamando a api/await trata o retorno positivo da promises/await passa a resposta para a variavel pronises entao ela nao e mais uma promeses e sim a respota de uma
  //await espera a promeses de fetch retornar a resposta
  try {
    const response = await fetch('https://api.coincap.io/v2/assets/');//tratamos a primeira promeses
    const data = await response.json();// transforma em formato jason os dados q queremos
    //console.log(data);
    const resul = await data.data
    setCoins(resul)
    //console.log(resul)
  } catch (error) {
    console.log('Vishi deu erro')
  }
 
}