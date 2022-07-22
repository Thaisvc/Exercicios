/* Parte 1
1 - Crie uma função que gere um número aleatório
Defina uma função que gere um número aleatório entre 0 e 100.
Desenvolva os testes para essa função.
Utilize o mock e defina o retorno padrão como 10.
Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
Solução: */

const randomNumber = () => Math.floor(Math.random() * 101);
module.exports = { randomNumber };

const service = require('./service');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});
/* Caso você não tenha conseguido fazer esse exercício, reforce seus estudos sobre Math.floor(), Math.random() e jest.
Video de resolução do Exercício 1:

2 - Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.
Defina o mock da função para a nova funcionalidade da função.
Teste se a função foi chamada e a nova implementação de divisão foi aplicada.
Verifique se a aplicação da nova implementação acontece apenas uma vez.
Solução:
 */
const service = require('./service');

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(service.randomNumber(10, 2)).toBe(5);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
});
/* 3 - Use a mesma função do primeiro exercício
Utilize o mock e desenvolva uma nova implementação que receba três parâmetros
Retorne a multiplicação dos parâmetros.
Realize os testes que achar necessário.
Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.
Faça os testes que achar necessário.
Solução: */

const service = require('./service');

describe("testando implementações", () => {
  test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNumber(2, 3, 4)).toBe(24);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
  });

  test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);

    service.randomNumber.mockImplementation(a => a * 2);

    expect(service.randomNumber(5)).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(5);
  });
});
/* 4 - Crie três funções.
Desenvolva a primeira função: essa função deve recebe uma string e retorná-la em caixa alta.
Crie a segunda função: ela recebe uma string e deve retornar só a primeira letra.
Elabore a terceira função: essa função deve receber duas strings e concatená-las.
A. Faça o mock das funções para com os seguintes casos:
Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.
Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.
Implemente, na terceira função: ela deve receber três strings e concatená-las.
B. Após criar os mocks, faça os testes necessários para garantir que os mocks estão funcionando.
C. Após criar os testes, restaure a implementação da primeira função.
Faça o teste necessário para garantir que a implementação da função foi restaurado.
Solução: */

const firstFunction = (str) => str.toUpperCase();
const secondFunction = (str) =>  str.charAt(0);
const thirdFunction = (str1, str2) => str1.concat(str2);

module.exports = {
  firstFunction,
  secondFunction,
  thirdFunction,
};

const service = require("./service");

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    const mockFirstFunction = jest.spyOn(service, "firstFunction" ).mockImplementation(a => a.toLowerCase());

    expect(mockFirstFunction("UPPERCASE")).toBe("uppercase");
    expect(service.firstFunction).toHaveBeenCalledTimes(1);
    expect(service.firstFunction).toHaveBeenCalledWith("UPPERCASE");
  });

  test("mockando função que recebe um parâmetro e retorna a última letra", () => {
    const mockSecondFunction = jest.spyOn(service, "secondFunction").mockImplementation(a => a.charAt(a.length - 1));

    expect(mockSecondFunction("letter")).toBe("r");
    expect(service.secondFunction).toHaveBeenCalledTimes(1);
    expect(service.secondFunction).toHaveBeenCalledWith("letter");
  });

  test("mockando função que recebe 3 parâmetros e os concatena", () => {
    const mockThirdFunction = jest.spyOn(service, "thirdFunction").mockImplementation((a, b, c) => a.concat(b, c));

    expect(mockThirdFunction("tr", "y", "be")).toBe("trybe");
    expect(service.thirdFunction).toHaveBeenCalledTimes(1);
    expect(service.thirdFunction).toHaveBeenCalledWith("tr", "y", "be");
  });

  test("restaurando a primeira função e verifica se ela retorna em caixa alta", () => {
    service.firstFunction.mockRestore();

    expect(service.firstFunction("lowercase")).toBe("LOWERCASE");
  })
});
/* 5 - Crie uma função que faça requisição para a api dog pictures.
Mocke a requisição e crie dois testes.
O primeiro deve interpretar que a requisição se resolveu e teve como valor "request success".
O segundo deve interpretar que a requisição falhou e ter como valor "request failed".
Crie todos os testes que achar necessário.
Solução: */

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

const service = require("./service");
describe("testando a requisição", () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  test("testando requisição caso a promise resolva", async () => {
    service.fetchDog.mockResolvedValue("request success");

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe("request success");
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    service.fetchDog.mockRejectedValue("request failed");

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).rejects.toMatch("request failed");
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });
});



//------------------------------------------Parte 2-----------------------------

