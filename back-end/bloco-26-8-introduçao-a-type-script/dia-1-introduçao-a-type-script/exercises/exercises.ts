// ./exercises.ts
// A primeira função que vamos desenvolver recebe um nome e o imprime na tela com o texto “Olá Nome”.
export function greeter(name: string):string {
    return `Olá ${name}!`;
}

// A segunda função que vamos desenvolver irá mostrar na tela o nome da pessoa e sua idade.
export function personAge(name: string, age: number): string {
    return `${name} tem ${age} anos!`;
}
//A terceira função que vamos desenvolver fará a adição de todos os números que estão dentro de um array. Para isso, faremos uma função add que será chamada dentro da função sumArray, que por sua vez utilizará o método reduce para realizar a soma dos valores.
export function add(x: number, y: number): number {
    return x + y;
}

export function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
}
//A quarta função que vamos desenvolver será para calcular a área de um triângulo. A fórmula para isso é multiplicar a medida da base pela medida da altura e dividir o resultado por dois.

export function triangle(base: number, height: number): number {
    return (base * height) / 2;
}
//A quinta função que vamos desenvolver será para calcular a área de um quadrado. Para calcular isso, multiplicamos a medida da base pela medida da altura. Como as medidas são as mesmas, multiplicá-las é o mesmo que elevar uma delas ao quadrado.
export function square(side: number): number {
    return side ** 2;
}

// A última função que vamos desenvolver será para calcular a área de um retângulo. A área do retângulo é dada pela multiplicação da base pela altura.
export function rectangle(base: number, height: number): number {
    return base * height;
}

// Pronto. Agora, vamos fazer algumas chamadas ao nosso módulo de área no arquivo index.ts.