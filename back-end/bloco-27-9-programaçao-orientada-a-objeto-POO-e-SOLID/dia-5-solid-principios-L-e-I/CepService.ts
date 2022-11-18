// ./CepService.ts
import ICep from './ICep';

class CepService {
  private readonly cepApi: ICep; // INVERSAO DE DEPENDENCIA

 /*  constructor() { ANTES
    this.cepApi = new FooCepAPI();
  } */

  constructor(cepApi: ICep) { //PASSO 1 INJEÇAO DE DEPENDENCIA // PASSO 2 INVERSAO DE DEPENDENCIA
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;