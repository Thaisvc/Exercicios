"use strict";
// ./Person.ts
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
        this.name = _name;
        this.birthDate = _birthDate;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this.validateName(value);
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (value) {
            this.validateBirthDate(value);
            this._birthDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.getAge = function (value) {
        var diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        var yearMs = 31536000000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
    };
    Person.prototype.validateName = function (value) {
        if (value.length < 3)
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
    };
    Person.prototype.validateBirthDate = function (value) {
        if (value.getTime() > new Date().getTime())
            throw new Error('A data de nascimento não pode ser uma data no futuro.');
        if (Person.getAge(value) > 120)
            throw new Error('A pessoa deve ter no máximo 120 anos.');
    };
    return Person;
}());
exports.default = Person;
