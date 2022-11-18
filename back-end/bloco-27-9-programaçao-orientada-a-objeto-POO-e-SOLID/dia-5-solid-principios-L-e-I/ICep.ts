export default interface ICep {         
    getAddressByCEP(cep: string, number: number): Promise<string>;
    getCepByAddress(address: string, number: number): Promise<string>;

}