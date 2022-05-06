 const Scope = escopo => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = (`${ifScope} ótimo, fui utilizada no escopo !`);
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }
  Scope(false);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  oddsAndEvens.sort((a,b) => {
      return a - b;
  })
  console.log(oddsAndEvens); // será necessário alterar essa linha 😉

  const factorial = number => {
    let result = 1;

    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }

    return result;
}

console.log(factorial(5));
 
 
  //https://pt.stackoverflow.com/questions/426836/como-pegar-a-maior-palavra-de-uma-string-em-javascript#:~:text=Explica%C3%A7%C3%A3o%3A%20Utilizando%20o%20split%20na,a%20propriedade%20length%20da%20string.
  let longestWord ="Antônio foi no banheiro e não sabemos o que aconteceu"// retorna 'aconteceu'
  const maiorPalavra = longestWord
  .match(/\w+/g)
  .sort((a, b) => b.length - a.length)[0];
console.log(maiorPalavra);



