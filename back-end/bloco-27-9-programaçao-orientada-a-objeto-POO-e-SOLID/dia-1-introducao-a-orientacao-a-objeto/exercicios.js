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
            this.examsGradess = valor;
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
    return Student;
}());
// Para testar!
var personOne = new Student('202001011', 'Maria da Silva');
console.log(personOne);
var personTwo = new Student('202001012', 'João da Silva');
console.log(personTwo);
