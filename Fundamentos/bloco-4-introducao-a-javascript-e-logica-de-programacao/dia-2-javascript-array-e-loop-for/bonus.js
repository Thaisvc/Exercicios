let number3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index3 = 0; index3 < number3.length; index3 += 1) {

  for (let segindex3 = 0; segindex3 < index3; segindex3 += 1)
   {
    if (number3[index3] < number3[segindex3]) {
      let positio1 = number3[index3];
      number3[index3] = number3[segindex3];
      number3[segindex3] = positio1;
    }
  }
}
console.log(numbers);


let numbrs2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let indice = 0; indice < numbrs2.length; indice += 1) {

  for (let segindice = 0; segindice < indice; segindice += 1)
   {
    if (numbrs2[indice] > numbrs2[segindice]) {
      let position = numbrs2[indice];
      numbrs2[indice] = numbrs2[segindice];
      numbrs2[segindice] = position;
    }
  }
}
console.log(numbrs2);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {

  for (let segIndex = 0; segIndex < index; segIndex += 1)
   {
    let mutiplic = numbers[index] * numbers[segIndex]
    console.log(numbers.push(mutiplic));

    
  }
}
/* ??????? */

/*GABARITO

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