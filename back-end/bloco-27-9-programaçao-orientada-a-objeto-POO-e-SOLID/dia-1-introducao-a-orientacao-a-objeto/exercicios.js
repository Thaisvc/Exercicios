class Student {
    constructor(inscricao, nome) {
        this._inscricao = inscricao;
        this._nome = nome;
        this._examsGrades = [];
        this._trabalhoNotas = [];
    }
    get incricaoes() {
        return this._inscricao;
    }
    set incricaoes(valor) {
        this._inscricao = valor;
    }
    get nomes() {
        return this._nome;
    }
    set nomes(valor) {
        if (valor.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
        }
        this._nome = valor;
    }
    get examsGradess() {
        return this._examsGrades;
    }
    set examsGradess(valor) {
        if (valor.length > 4) {
            throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
        }
        this._examsGrades = valor;
    }
    get trabalhoNotass() {
        return this._trabalhoNotas;
    }
    set trabalhoNotass(valor) {
        if (valor.length > 2) {
            throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
        }
        this._trabalhoNotas = valor;
    }
    // metado para soma
    sumGrades() {
        return [...this.examsGradess, ...this.trabalhoNotass]
            .reduce((previousNote, note) => {
            const nextNote = note + previousNote;
            return nextNote;
        }, 0);
    }
    // metado calcula a média das notas
    sumAverageGrade() {
        const sumGrades = this.sumGrades();
        const divider = this.examsGradess.length + this.trabalhoNotass.length;
        return Math.round(sumGrades / divider);
    }
}
// para testar 
/* const personOne = new Student('202001011', 'Maria da Silva');

console.log(personOne);

const personTwo = new Student('202001012', 'João da Silva');

console.log(personTwo); */
const personOne = new Student('202001011', 'Maria da Silva');
personOne.examsGradess = [25, 20, 23, 23];
personOne.trabalhoNotass = [45, 45];
console.log(personOne);
console.log('Soma de todas as notas: ', personOne.sumGrades());
console.log('Média de todas as notas: ', personOne.sumAverageGrade());
