/* /*operadores aritimeticos https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math*/

/*1- Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)

const a = 80;
const b = 100;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

/*2- Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

/*3- Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
 

const c = 200;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else if (c > a && c > b) {
  console.log(c);
}


/*4- Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const lado1 = 100;
const lado2 = 40;
const lado3 = 40;
const soma = lado1 + lado2 + lado3;
let posNeg = lado1 >= 0 && lado2 >= 0 && lado3 >= 0;

if (posNeg > 0) {

    if (soma == 180 ) {
        console.log("true")

    }

    else {
        console.log("false")
    }



}else {
    console.log('inválido');
  }


let pecaXadrez = "CAVALO";

switch (pecaXadrez.toLowerCase()) {
  case "peao":
    console.log("ate 2 casa para frente");
    break;

  case "rainha":
    console.log("1 casa para qualquer lado");
    break;

  case "cavalo":
    console.log("movimento em l");
    break;

  case "rei":
    console.log("qualquer direçao");
    break;

  case "bispo":
    console.log("somente na diagonal");
    break;

  case "torre":
    console.log("somente em linha reta");
    break;

    default :
    console.log("inválida");
    break



let nota = -200;

if (nota >= 90 && nota <=100) {
  console.log("A");
} else if (nota >= 80 && nota <=90) {
  console.log("B");
} else if (nota >= 70 && nota <=80) {
  console.log("C");
} else if (nota >= 60 && nota <=70) {
  console.log("D");
} else if (nota >= 50 && nota <=60) {
  console.log("E");
} else if (nota < 50 && nota >= 0) {
  console.log("F");

} else if (nota <=-1) {
  console.log("nota invalida");
}
}*/