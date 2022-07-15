const service = require('./ service');

describe('Testando a services.js', () => {

  test('Testa se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    service.numAleatorio = jest.fn().mockReturnValue(10) // inicia com o valor 10
    expect(service.numAleatorio()).toBe(10)  // verificase se o valor do resultado e = a 10
    expect(service.numAleatorio).toHaveBeenCalled(); // verifica se a funçao foi chamada
    expect(service.numAleatorio).toHaveBeenCalledTimes(1); // verifica se a funçao foi chamada 1 vez
  });
});


describe('Testando a services.js  receber dois parâmetros e retornar a divisão do primeiro pelo segundo.', () => {
// Assim como o mockReturnValueOnce, podemos também implementar uma funcionalidade para apenas uma chamada com mockImplementationOnce.
  test('testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
    service.numAleatorio = jest.fn().mockImplementationOnce((a,b) => a / b);
    expect(service.numAleatorio(10, 2)).toBe(5)
    expect(service.numAleatorio).toHaveBeenCalled();
    expect(service.numAleatorio).toHaveBeenCalledTimes(1);
    expect(service.numAleatorio).toHaveBeenCalledWith(10,2); // verifica se a funçao foi chamada com os argumentos expecificos
  });
});



describe('testando implementações"', () => {
  // Assim como o mockReturnValueOnce, podemos também implementar uma funcionalidade para apenas uma chamada com mockImplementationOnce.
  test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
      service.numAleatorio = jest.fn().mockImplementation((a,b,c) => a * b * c);
      expect(service.numAleatorio(2,3,4)).toBe(24)
      expect(service.numAleatorio).toHaveBeenCalled();
      expect(service.numAleatorio).toHaveBeenCalledTimes(1);
      expect(service.numAleatorio).toHaveBeenCalledWith(2,3,4);
    });
    test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
     service.numAleatorio.mockReset();
      expect(service.numAleatorio).toHaveBeenCalledTimes(0);
  
     service.numAleatorio.mockImplementation(a => a * 2);
  
      expect(service.numAleatorio(5)).toBe(10);
      expect(service.numAleatorio).toHaveBeenCalled();
      expect(service.numAleatorio).toHaveBeenCalledTimes(1);
      expect(service.numAleatorio).toHaveBeenCalledWith(5);
    });
  });
 
   describe('A. Faça o mock das funções para com os seguintes casos:', () => {
      test('Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.', () => {
        // https://gabrieluizramos.com.br/fundamentando-mocks-em-javascript
         // jest.spyOn Esse método recebe como parâmetro o objeto a ser "espionado" e a função a ser verificada, da seguinte maneira:
        const mockFirstFunction = jest.spyOn(service, "caixaAlta" ).mockImplementation(a => a.toLowerCase());

    expect(mockFirstFunction("UPPERCASE")).toBe("uppercase");
    expect(service.caixaAlta).toHaveBeenCalledTimes(1);
    expect(service.caixaAlta).toHaveBeenCalledWith("UPPERCASE");
       
      });
      test('Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.', () => {
        service.primeraLetra = jest.fn().mockImplementation((string) => string.charAt(string.length - 1));
        expect(service.primeraLetra('thais')).toBe('s')
        expect(service.primeraLetra).toHaveBeenCalled()
        expect(service.primeraLetra).toHaveBeenCalledWith('thais')


       
      });

      test('Implemente, na terceira função: ela deve receber três strings e concatená-las.', () => {
        service.concatena = jest.fn().mockImplementation((a,b,c) => (a.concat(b,c)));
        expect(service.concatena('thais', 'viana', 'cunha')).toBe('thaisvianacunha')
        expect(service.concatena).toHaveBeenCalled()
        expect(service.concatena).toHaveBeenCalledWith('thais', 'viana', 'cunha')


       
      });
 
      test("restaurando a primeira função e verifica se ela retorna em caixa alta", () => {
        service.caixaAlta.mockRestore(); // só funciona quando a simulação foi criada com jest.spyOn
    
        expect(service.caixaAlta("thais")).toBe("THAIS");
      })

    });

  