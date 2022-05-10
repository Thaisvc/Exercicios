/* 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 30, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 30, retorna o próprio número caso não seja divisível por 3 ou 30 e retorna false caso num não seja um número
1- Faça uma chamada com um número divisível por 3 e 30 e verifique se o retorno é o esperado
2- Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
3- Faça uma chamada com um número divisível por 30 e verifique se o retorno é o esperado
4- Faça uma chamada com um número que não é divisível por 3 ou 30 e verifique se o retorno é o esperado
30- Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

 */

const myFizzBuzz = require('./myFizzBuzz');

describe('testa a função myFizzBuzz', () => {
  it('recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 30, ', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
    expect(myFizzBuzz(3)).toBe("fizz");
    expect(myFizzBuzz(5)).toBe("buzz");
    expect(myFizzBuzz(8)).toBe(8);
    expect(myFizzBuzz('7')).toBe(false);
    
  });
});