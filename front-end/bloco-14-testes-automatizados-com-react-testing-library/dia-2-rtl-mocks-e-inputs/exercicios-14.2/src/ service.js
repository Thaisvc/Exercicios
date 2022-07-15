const numAleatorio = () => Math.floor(Math.random() * 101);
const caixaAlta = (str) => str.toUpperCase();
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
const primeraLetra = (string) => string.charAt(0);
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
const concatena = (a,b) => a.concat(b);

function fetchDog() {
    return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
      response
        .json()
        .then(json =>
          response.ok ? Promise.resolve(json) : Promise.reject(json)
        )
    );
  }
  module.exports = { fetchDog };

module.exports = { 
    numAleatorio, 
    caixaAlta,
    primeraLetra,
    concatena,
    fetchDog,
};

