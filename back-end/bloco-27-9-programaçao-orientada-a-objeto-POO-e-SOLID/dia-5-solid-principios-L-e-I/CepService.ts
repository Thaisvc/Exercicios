// ./CepService.ts
import FooCepAPI from './FooCepAPI';

class CepService {
  private readonly cepApi: FooCepAPI;

 /*  constructor() { ANTES
    this.cepApi = new FooCepAPI();
  } */

  constructor(cepApi: FooCepAPI) { // INJEÇAO DE DEPENDENCIA
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