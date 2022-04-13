// pq usar o --> .split('').reverse().join('') <--
//.reverse() é usado em array
let reverterArray = [1,2,3].reverse(); 
console.log(reverterArray);
//.reverse() mais não funciona em uma string
let reverterString = "arroz".reverse(); 
console.log(reverterString);
// então para resolver usamos .splint para transforma string em arry
// usamos o .reverse() para reverter o array criado
// e usamos .join para transformalo de volta em string

// EXEMPLO .SPLIT()divide uma String coloca essas substrings em um array e retorna o array
const myString = 'teste';
const splits = myString.split()
console.log(splits);
//-------------------------------------------------------------------------------------------------------------------
//EXEMPLO .JOIN()  junta todos os elementos de um array em uma string e retorna esta string.
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"
//-------------------------------------------------------------------------------------------------------------------
//EXEMPLO .REVERSE()  inverte os itens de um array. 
var myArray = ['one', 'two', 'three'];
myArray.reverse();
console.log(myArray)

//-------------------------------------------------------------------------------------------------------------------
// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function polindromo (params) {
    let palavra = params.split('').reverse().join('');
    if (palavra === params) {
        return true;
      } else {
        return false;
      }
}
console.log(polindromo('thais'));

//-------------------------------------------------------------------------------------------------------------------
//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function arrayInteriros(params) {
    for (let key in params) {
        let valor = params[key] ;
        if(params[key] > valor ){
            return params[key];
        }

    }
    
}
console.log(arrayInteriros[1,2,3]);
