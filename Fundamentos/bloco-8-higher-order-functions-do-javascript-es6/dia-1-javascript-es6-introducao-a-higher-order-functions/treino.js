//CALLBACK
const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mul = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const callback = (func) => func(10, 5)


const acorda = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (callback) => callback();


console.log(doingThings(acorda));



const newEmployees = (gerarEmail) => {
    const employees = {
        id1: gerarEmail('Pedro Guerra'),
        id2: gerarEmail('Luiza Drumond'),
        id3: gerarEmail('Carla Paiva'),
    }
    return employees;
};
// CALBACK RECEBE COMO PARAMETRO newEmployees/employees
const gerarEmail = (callbak) => {
    const email = callbak.toLowerCase().split(' ').join('_');
    let gerar = { callbak, email: `${email}@gmail.com` };
    return gerar;
}

console.log(newEmployees(gerarEmail));






const autor = (param) => {
    const detalhe = {
        autor: `Jay Kristoff -> ${param}`,
        Editora: `VR Editora -> ${param}`,
        publicação: `1 janeiro 2017 -> ${param}`,
    }
    return detalhe;
}

const book = (preferido) => preferido('Nevernight')

console.log(book(autor));
//-------------------------------------------------------------------------------------------------------------

