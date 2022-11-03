interface IPessoa_Funcionaria { // ESTRUTURA A SER SEGUIDA
    _nome: string;
    _cpf: string | number;
    _dataNasc: Date;
    _ativo: boolean;
    cadastrar(pessoa_funcionaria: object): void;
    imprimir(): void;
}

class Pessoa_Funcionaria implements IPessoa_Funcionaria{  // implements IPessoa_Funcionaria SIGNIFICA Q CLASS PRECISA OBRIGATORIAMENTE TER A ESTRUTURA DA INTERFACE
    _nome: string;
    _cpf: string | number;
    _dataNasc: Date;
    _ativo: boolean;
    


    constructor(nome: string, cpf: string | number, dataNasc: Date, ativo: boolean) {
        this._nome = nome;
        this._cpf = cpf;
        this._dataNasc = dataNasc;
        this._ativo = ativo;   
    }

    cadastrar(pessoa_funcionaria: object){
        console.log(`Cadastrar no banco ${pessoa_funcionaria}`);
    }

    imprimir(){
        console.log(`NOME: ${this._nome}`);
    }
}

//objeto = pessoa_funcionaria
//classe = Pessoa_Funcionaria
//new = instanciando minha classe e criando um objeto chamado pessoa_funcionaria
const pessoa_funcionaria = new Pessoa_Funcionaria('Felipe', 123456789, new Date('1990/02/02'), true);

const pessoa_funcionaria_data = {
    nome: 'Felipe',
    cpf: 123456,
    dataNasc: new Date('1990/02/02'),
    ativo: true
};

console.log(pessoa_funcionaria._nome); //GET
pessoa_funcionaria._nome = 'Nunes'; //SET
console.log(pessoa_funcionaria._nome);

console.log(pessoa_funcionaria._dataNasc);
console.log(pessoa_funcionaria._cpf);
console.log(pessoa_funcionaria._ativo);

pessoa_funcionaria.cadastrar(pessoa_funcionaria_data);
pessoa_funcionaria.imprimir();
