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