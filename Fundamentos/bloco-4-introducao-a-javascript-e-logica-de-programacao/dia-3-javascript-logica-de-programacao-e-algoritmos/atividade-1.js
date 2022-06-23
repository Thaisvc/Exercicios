let fatorial = 1;
/* fatorial.reverse() revert o arry */

for (let indix = 10; indix > 0; indix -= 1) {
    fatorial *= indix;
}
console.log(fatorial);

let word = "tryber";
let inverse = " ";

for (let index = word.length - 1; index < word.length; index -= 1) {
    if (index >= 0) {
        inverse += word[index];
    } else {
        break;
    }
}
console.log(inverse);

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > biggestWord.length) {
        biggestWord = array[index];
    }
}

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < smallestWord.length) {
        smallestWord = array[index];
    }
}

console.log(biggestWord);
console.log(smallestWord);


let primo = 0;
let todosPrimo = 0;

for (let indice = 0; indice <= 50; indice += 1) {
    primo = indice;
    if (  primo / 2 === primo  && primo / 1 === 1) {
       
    }
    else{
        todosPrimo =  primo;
        console.log(todosPrimo);
    }
       
    

}