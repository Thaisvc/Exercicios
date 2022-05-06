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


/* GABARITO 
Gabarito dos exercícios
Parte I
Exercício 1

  const testingScope = escopo => { 
    if (escopo === true) { 
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);
Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

Bônus array.sort()

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
}

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);
array.sort com sort em uma linha.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);
*/

//O parseIntmétodo analisa um valor como uma string e retorna o primeiro inteiro. https://www.w3schools.com/jsref/jsref_parseint.asp

/*gabarito 
const factorial = number => {
    let result = 1;

    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }

    return result;
}

console.log(factorial(5));

Recursiva
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));
*/