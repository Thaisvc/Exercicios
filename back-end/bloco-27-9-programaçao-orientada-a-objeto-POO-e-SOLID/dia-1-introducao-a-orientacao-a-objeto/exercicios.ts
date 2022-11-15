class Student {
    private _inscricao: string;
    private _nome: string;
    private _examsGrades: number[];
    private _trabalhoNotas: number[];



    constructor(inscricao: string, nome: string) {
        this._inscricao = inscricao;
        this._nome = nome;
        this._examsGrades = [];
        this._trabalhoNotas = [];
    }

    get incricaoes(): string {
        return this._inscricao;
    }

    set incricaoes(valor: string) {
        this._inscricao = valor;
    }


    get nomes(): string {
        return this._nome;
    }



    set nomes(valor: string) {
        if (valor.length < 3) {
            throw new Error
                ('O nome deve conter no mínimo 3 caracteres.')
        }
        this._nome = valor;
    }

    get examsGradess(): number[] {
        return this._examsGrades;
    }

    set examsGradess(valor: number[]) {
        if (valor.length > 4) {
            throw new Error
                ('A pessoa estudante só pode possuir 4 notas de provas.')
        }
        this.examsGradess = valor;
    }



    get trabalhoNotass(): number[] {
        return this._trabalhoNotas;
    }




    set trabalhoNotass(valor: number[]) {
        if (valor.length > 2) {
            throw new Error
                ('A pessoa estudante só pode possuir 2 notas de trabalhos.')
        }
        this._trabalhoNotas = valor;
    }

}

// Para testar!

const personOne = new Student('202001011', 'Maria da Silva');

console.log(personOne);

const personTwo = new Student('202001012', 'João da Silva');

console.log(personTwo);