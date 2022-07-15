const service = require('./ service');

describe('Testando a services.js', () => {

  test('Testa se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    service.numAleatorio = jest.fn().mockReturnValue(10)
    expect(service.numAleatorio()).toBe(10)
    expect(service.numAleatorio).toHaveBeenCalled();
    expect(service.numAleatorio).toHaveBeenCalledTimes(1);
  });
});