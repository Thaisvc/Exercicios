//Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens, faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread.


const specialFruit = ['kiwi', 'banana', 'tamarino'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'mel'];

const fruitSalad = (fruit, additional) => {
    return [...fruit, ...additional]

};

console.log(fruitSalad(specialFruit, additionalItens));

//1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const info = { ...user, ...jobInfos };
console.log(info);

const apresentaçao = ({ name, age, nationality, profession, squad, squadInitials }) => {
    console.log(`"Hi, my  is ${name} I'm  ${age} years old and I'm  ${nationality}. I work as a   ${profession} and my  ${squad} is  ${squadInitials} Landing Logic"`);
}

apresentaçao(info)

//1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

/* saudacoes[1](saudacoes[0]); */ // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao, realizaSaudacao] = saudacoes;

console.log(realizaSaudacao(saudacao)); // Olá

//2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

/* console.log(comida, animal, bebida);  */

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);

//3 - O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

/* console.log(numerosPares); // [6, 8, 10, 12]; */
// as virgulas representa os elemento removido do array
[, , , ...numerosPares] = numerosPares;

console.log(numerosPares);

//Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined. Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian.

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};


console.log(getNationality(otherPerson));
console.log(getNationality(person));

//Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.
const getPosition = (latitude, longitude) => ({
    latitude,
    longitude
});

console.log(getPosition(-19.8157, -43.9542));

//Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => {
    return number * value
};

console.log(multiply(8));