const service = require('./ service');

describe('Testando a services.js', () => {

  test('Testa se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    service.numAleatorio = jest.fn().mockReturnValue(10)
    expect(service.numAleatorio()).toBe(10)
    expect(service.numAleatorio).toHaveBeenCalled();
    expect(service.numAleatorio).toHaveBeenCalledTimes(1);
  });
});


describe('Testando a services.js  receber dois parâmetros e retornar a divisão do primeiro pelo segundo.', () => {
// Assim como o mockReturnValueOnce, podemos também implementar uma funcionalidade para apenas uma chamada com mockImplementationOnce.
  test('testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
    service.numAleatorio = jest.fn().mockImplementationOnce((a,b) => a / b);
    expect(service.numAleatorio(10, 2)).toBe(5)
    expect(service.numAleatorio).toHaveBeenCalled();
    expect(service.numAleatorio).toHaveBeenCalledTimes(1);
    expect(service.numAleatorio).toHaveBeenCalledWith(10,2);
  });
});