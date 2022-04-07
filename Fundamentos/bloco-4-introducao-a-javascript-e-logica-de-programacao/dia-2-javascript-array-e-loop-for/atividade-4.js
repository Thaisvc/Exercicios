let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*imprimindo os valores */
for (let index = 0; index < numbers.length; index += 1 ){
    console.log(numbers[index]) 
}
/*----------------------------------------------------------------------------------------------------*/
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index2 = 0; index2 < numbers2.length; index2 += 1 ){
    soma += numbers2[index2]
  
}
console.log(soma) 
/*----------------------------------------------------------------------------------------------------*/

let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma2 = 0;


for (let index3 = 0; index3 < numbers3.length; index3 += 1 ){
    soma2 += numbers3[index3]

}
console.log(soma2 / numbers3.length)
/*----------------------------------------------------------------------------------------------------*/
let number4 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma3 = 0;

for (let index4 = 0; index4 < number4.length; index4 += 1 ){
    soma3 += number4[index4]
}

let resultado = soma3 / number4.length;

if (resultado > 20 ){
    console.log("valor maior que 20")
    
    }else{
    console.log("valor menor que 20")
    
    }

/*----------------------------------------------------------------------------------------------------*/
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior =0;

for (let indice = 0; indice < numeros.length; indice += 1 ){
   if(numeros[indice]  > maior){

    maior = numeros[indice] ;
   }
}
 
console.log(maior);
/*----------------------------------------------------------------------------------------------------*/
let numeros2 = [4, 20, 30, 80, 70, 8, 100, 2, 50, 22];
let impar =0;
for (let indice2 = 0; indice2 < numeros2.length; indice2 += 1 ){
   if(numeros2[indice2] % 2 !== 0){
    impar += 1
   }
}
if ( impar === 0){
    console.log('nenhum valor ímpar encontrado');
}else{
    console.log(impar);

}
/*----------------------------------------------------------------------------------------------------*/
let num1 = [5, 9, 300, 19, 70, 8, 100, 28, 35, 27];
let menor = 5000; /*num1[0] poderia usar o array iniciado na 1 posiçao*/

for (let indic = 0; indic < num1.length; indic += 1 ){
   if(num1[indic] < menor){

    menor = num1[indic] ;
   }
}
 
console.log(menor);
/*----------------------------------------------------------------------------------------------------*/

let sequencia = [0]

for (let indice3 = 1 ; indice3 <= 25 ; indice3 += 1){
sequencia.push(indice3);
    
}
console.log(sequencia) 
/*----------------------------------------------------------------------------------------------------*/

let sequencia2 = [0]

for (let indice4 = 1 ; indice4 <= 25 ; indice4 += 1){
sequencia2.push(indice4 / 2);
    
}
console.log(sequencia2) 



/*
Gabarito dos exercícios

Iremos utilizar esse array nos exercícios:


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
Exercício 1
Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
Solução :


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

Caso você não tenha conseguido fazer esses exercícios, reforce seus estudos sobre array, loops e lógica de programação.
Exercício 2
Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
Solução :


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

console.log(result);

Caso você não tenha conseguido fazer esses exercícios, reforce seus estudos sobre array, loops e lógica de programação.
Exercício 3
Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
Solução :


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;

console.log(average);

Caso você não tenha conseguido fazer esses exercícios, reforce seus estudos sobre array, loops e lógica de programação.
Exercício 4
Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
Solução :


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

result = result / numbers.length;

if (result > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}
Exercício 5
Utilizando for , descubra qual o maior valor contido no array e imprima-o;
Solução :


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);
Exercício 6
Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
Solução :


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}
Exercício 7
Utilizando for , descubra qual o menor valor contido no array e imprima-o;
Solução :


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}

console.log(smallestNumber);
Exercício 8
Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado.
Solução :


let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);
Exercício 9
Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
Solução :


for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
};
Bônus
Exercício 1
Ordene o array numbers em ordem crescente e imprima seus valores;
Solução :


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);
Exercício 2
Ordene o array numbers em ordem decrescente e imprima seus valores;
Solução :


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);
Exercício 3
Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push .
Solução :


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);
*/