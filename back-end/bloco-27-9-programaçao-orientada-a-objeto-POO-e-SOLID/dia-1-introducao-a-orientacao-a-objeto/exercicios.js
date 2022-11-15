var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Student = /** @class */ (function () {
    function Student(inscricao, nome) {
        this._inscricao = inscricao;
        this._nome = nome;
        this._examsGrades = [];
        this._trabalhoNotas = [];
    }
    Object.defineProperty(Student.prototype, "incricaoes", {
        get: function () {
            return this._inscricao;
        },
        set: function (valor) {
            this._inscricao = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "nomes", {
        get: function () {
            return this._nome;
        },
        set: function (valor) {
            if (valor.length < 3) {
                throw new Error('O nome deve conter no mínimo 3 caracteres.');
            }
            this._nome = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "examsGradess", {
        get: function () {
            return this._examsGrades;
        },
        set: function (valor) {
            if (valor.length > 4) {
                throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
            }
            this._examsGrades = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "trabalhoNotass", {
        get: function () {
            return this._trabalhoNotas;
        },
        set: function (valor) {
            if (valor.length > 2) {
                throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
            }
            this._trabalhoNotas = valor;
        },
        enumerable: false,
        configurable: true
    });
    // metado para soma
    Student.prototype.sumGrades = function () {
        return __spreadArray(__spreadArray([], this.examsGradess, true), this.trabalhoNotass, true).reduce(function (previousNote, note) {
            var nextNote = note + previousNote;
            return nextNote;
        }, 0);
    };
    // metado calcula a média das notas
    Student.prototype.sumAverageGrade = function () {
        var sumGrades = this.sumGrades();
        var divider = this.examsGradess.length + this.trabalhoNotass.length;
        return Math.round(sumGrades / divider);
    };
    return Student;
}());
// para testar 
/* const personOne = new Student('202001011', 'Maria da Silva');

console.log(personOne);

const personTwo = new Student('202001012', 'João da Silva');

console.log(personTwo); */
var personOne = new Student('202001011', 'Maria da Silva');
personOne.examsGradess = [25, 20, 23, 23];
personOne.trabalhoNotass = [45, 45];
console.log(personOne);
console.log('Soma de todas as notas: ', personOne.sumGrades());
console.log('Média de todas as notas: ', personOne.sumAverageGrade());
