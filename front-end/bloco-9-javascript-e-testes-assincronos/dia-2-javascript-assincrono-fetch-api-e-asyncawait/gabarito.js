/* Para fixar
O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?
Resposta:
Um código assíncrono é um código que não "trava" a fila de execução. Ou seja, a próxima instrução não espera o fim da instrução assíncrona para iniciar, diferentemente do código síncrono, que a próxima instrução só inicia ao final da anterior.
Quando você tem que enfileirar várias callbacks , que problema surge?
Resposta:
Surge o "callback hell", que nada mais é uma sequência de callbacks uma dentro da outra, o que dificulta a leitura e escalabilidade do código.
Por que as Promises são uma forma de resolver esse problema?
Resposta:
As Promises permitem que um fluxo de ações assíncronas seja escrito de forma similar a um fluxo de ações síncronas, garantindo também formas concisas e centralizadas de capturar possíveis erros durante sua execução.
Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.
Resposta:
Assíncrona, porquê não se tem controle do tempo e da integridade da resposta da API.
Dada a resposta anterior, o que é fetch e para que ele serve?
Resposta:
Fetch é uma função que faz uma requisição à API, ela tem ferramentas para tratar os dados recebidos, tanto no sucesso quanto no erro.
Exercícios
A seguir, temos possíveis soluções para os exercícios:
Agora, a prática
Como primeiro exercício, vamos usar a função fetch, que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins!. Como? Vamos praticar!
Primeiro, veja o manual da API do site icanhazdadjoke.com. Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa API:
Para começar, vamos fazer uma requisição via browser. Visite o site icanhazdadjoke.com, e perceba que ele devolve uma página HTML com uma piada aleatória.
Em seguida, no terminal, vamos fazer a requisição: curl -H "Accept: text/html" "https://icanhazdadjoke.com/". Perceba que o retorno é um HTML idêntico ao de uma requisição via browser com uma piada aleatória.
Para a próxima requisição, vamos usar o comando: curl -H "Accept: text/plain" "https://icanhazdadjoke.com/". Veja que agora recebemos apenas a piada aleatória em formato texto.
Por fim, faça a requisição: curl -H "Accept: application/json" "https://icanhazdadjoke.com/". Agora a API retorna um objeto no formato JSON.
Perceba que, dependendo do que passamos na chave Accept: no header, definido por -H no comando, o serviço nos retorna uma resposta diferente.
Utilize o HTML e o js a seguir como base: */


<!DOCTYPE html>
<html>
  <head>
    <title>Best jokes ever</title>
  <script src="apiScript.js" ></script>
  </head>
  <body>
    <h1>Get ready for a great joke!</h1>
    <h2 id="jokeContainer"></h2>
  </body>
</html>

// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

window.onload = () => fetchJoke();

/* Agora vamos tentar fazer as requisições a API usando fetch. Essa função recebe dois parâmetros:
O endereço para o qual a requisição será feita, ou seja, a url do serviço.
Um objeto contendo as especificações da requisição. Para essa API, atribuiremos a esse objeto as chaves method e headers
 */

// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject);
};

window.onload = () => fetchJoke();


/* O segundo parâmetro myObject define o tipo de request method: 'GET' e o formato da resposta headers: { 'Accept': 'application/json' }, como visto nas requisições via curl.
A função fetch é uma Promise e, como tal, dependendo de seus desdobramentos, podemos encadear procedimentos a serem feitos, utilizando as cláusulas .then(em caso de sucesso) e .catch(em caso de falha). A requisição fetch retorna um objeto Response. Utilizando .then, verifique a estrutura da resposta usando um console.log na response retornada pelo fetch.
 */

// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => console.log(response));
};

window.onload = () => fetchJoke();

/* Viu a response? Até recebemos uma resposta do serviço, mas como é que eu consigo retirar o texto da piada daí 🤔?
Para isso, usamos o método .json() na resposta da API. Esse método converte o conteúdo do body da Response e retorna uma outra Promise, que, quando bem-sucedida, retorna um JSON contendo as informações da piada.
A partir do fetch, troque o console.log() anterior pelo método .json() e imprima os dados da requisição.
 */

// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data));
};

window.onload = () => fetchJoke();

/* Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!
Código final: */
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data =>
      document.getElementById('jokeContainer').innerText = data.joke
    );
}

window.onload = () => fetchJoke();

/* Agora que tal um exercício menos guiado? Vamos consultar uma API que fornece os valores de crypto moedas e mostrar as 10 primeiras.
Agora que temos a url vamos criar um arquivo (api.js, por exemplo) e dentro dele uma função para pegar o array com as moedas.
 */
// api.js
const fetch = require('node-fetch');

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  console.log(coins);
}

fetchCoins();

/* Crie também um arquivo HTML (index.html, por exemplo) que deve conter uma tag para listar as crypto moedas. */
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crypto Coins</title>
</head>
<body>
  <h1>Crypto Moedas</h1>
  <ul id="coins-list"></ul>
</body>
</html>
{/* 
Pronto, temos um array com os dados das moedas e um esqueleto do HTML, agora vamos fazer com que as moedas apareçam na tela. Utilize o seguinte formato: Nome da moeda (símbolo da moeda): valor em dólares. Exemplo: Bitcoin (BTC): 46785.06.
 */}


<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crypto Coins</title>
</head>
<body>
  <h1>Crypto Moedas</h1>
  <ul id="coins-list"></ul>

  <script src="api.js"></script>
</body>
</html>

// api.js
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

const setCoins = async () => {
  const coins = await fetchCoins();

  const coinsList = document.getElementById('coins-list');

  coins.forEach((coin) => {
    const newLi = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);

    newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

    coinsList.appendChild(newLi);
  });
}

window.onload = () => setCoins();

{/* Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order Function para filtrar o array das moedas para mostrar apenas as 10 primeiras?
Copiar
Solução 1: */}

// api.js
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

const setCoins = async () => {
  const coins = await fetchCoins();

  const coinsList = document.getElementById('coins-list');

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');

      newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

      coinsList.appendChild(newLi);
    });
}

window.onload = () => setCoins();
{/* 
Nessa solução utilizamos a propriedade `rank` da moeda para fazer o filtro das 10 primeiras.

Solução 2: */}

// api.js
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

const setCoins = async () => {
  const coins = await fetchCoins();

  const coinsList = document.getElementById('coins-list');

  coins
    .filter((_, index) => index < 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');

      newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

      coinsList.appendChild(newLi);
    });
}

window.onload = () => setCoins();


{/* 
Bônus
Que tal usarmos uma API para converter o preço das crypto moedas do exercício anterior para a nossa moeda local ao invés de mostrar o seu valor em dólar?
 */}

// api.js
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
};

const fetchUsdCurrencies = async () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
  const usdEndpoint = '/currencies/usd.min.json'
  const url = baseUrl.concat(usdEndpoint);

  const usdCurrencies = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.usd)
    .catch((error) => error.toString());

  return usdCurrencies;
};

const setCoins = async () => {
  const coins = await fetchCoins();
  const usdCurrencies = await fetchUsdCurrencies();

  const coinsList = document.getElementById('coins-list');

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);
      const brlPrice = usdPrice * usdCurrencies.brl;

      newLi.innerText = `${coin.name} (${coin.symbol}): ${brlPrice.toFixed(2)}`;

      coinsList.appendChild(newLi);
    });
};

window.onload = () => setCoins();