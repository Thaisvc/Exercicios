let contador = document.querySelector('.contador');

document.querySelector('button').addEventListener('click', () => {
  let numero = parseInt(contador.textContent) + 1;
  contador.textContent = numero;
});
//O parseIntmétodo analisa um valor como uma string e retorna o primeiro inteiro. https://www.w3schools.com/jsref/jsref_parseint.asp