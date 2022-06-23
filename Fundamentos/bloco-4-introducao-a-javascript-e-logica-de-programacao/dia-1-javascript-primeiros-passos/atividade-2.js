/*Utilize o operador typeof para imprimir qual o tipo das variáveis patientId , isEnrolled , patientInfo e patientEmail . Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. Exemplo: console.log(typeof patientId) retornará number .
*/


let patientId = 50;
let isEnrolled = true;
const patientInfo = {
    firstName: 'Ana',
    lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId)
console.log(typeof isEnrolled)
console.log(typeof patientInfo)
console.log(typeof patientEmail) 

/*O que aconteceria se tentássemos checar qual o tipo da variável patientAge ? Experimente executar o comando console.log(typeof patientAge) e veja o que acontece! Ué...mas não declaramos essa variável, não é mesmo? É exatamente por esse motivo que o seu tipo é undefined , como você pôde observar no retorno do console.log(typeof patientAge) .
*/
console.log(typeof patientAge) 

/*LISTA DE OPERADORES https://www.w3schools.com/js/js_operators.asp*/

const base = 5;
let height =8;

const area = base * height;
console.log(area);


const perimeter = 5+5+8+8;
console.log(perimeter);


/*GABARITO

Crie uma constante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
Solução:

const base = 5;
const height = 8;
Crie uma costante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
Solução:

const area  = base * height;
console.log(area);
Crie uma costante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
Solução:

const perimeter = 5 + 5 + 8 + 8;
console.log(perimeter);
*/
