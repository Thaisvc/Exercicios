"use strict";
// Para testar!
// ./index.ts
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var maria = new Person_1.default('Maria da Consolação', new Date('1980/01/25'));
var luiza = new Person_1.default('Luiza Andrade', new Date('2005/10/02'));
console.log(maria);
console.log(luiza);
// deve retornar erro
// const invalidPersonName = new Person('An', new Date('2000/06/07'));
// deve retornar erro
// const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));
