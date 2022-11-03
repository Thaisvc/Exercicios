/* Exercício 1
Crie uma classe Car cujo objeto representará um carro.

Propriedades:

Deve conter uma propriedade do tipo string chamada brand que representa a marca.
Deve conter uma propriedade do tipo string chamada color que representa a cor.
Deve conter uma propriedade do tipo number chamada doors que representa a quantidade de portas.
Comportamentos:

Deve conter um método chamado honk que aciona a buzina do carro.
Deve possuir um método chamado turnOn que liga o carro.
Deve possuir um método chamado turnOff que desliga o carro.
Deve possuir um método chamado speedUp que acelera o carro.
Deve possuir um método chamado speedDown que reduz a velocidade do carro.
Deve possuir um método chamado stop que para o carro.
Deve possuir um método chamado turn que recebe uma direção do tipo string e vira o carro.
 */

class Car { // DEFINIR ESTRUTURA PADRAO PARA CAR
    brand: string; //  ATRIBUTOS DEFINIDOS PARA CLASS
    color: string;
    doors: number;
   
    constructor(brand: string /* BRAND DEVE TER O MSM TIPO DEFINIDO NA CALSS */, color: string, doors: number) { // INICIALIZA OS ATRIBUTOS | RECEBE PARAMETROS E  COM BASE NELES INICIALIZA OS VALORES DOS ATRIBUTOS
        this.brand = brand; // brand = brand PASSO O VALOR DOS PARAMETROS PARA OS ATRIBUTOS PARA Q ELE SEJA INICIALIZADO
        this.color = color; // this = SIGNIFICA DENTRO DESSA CLASS (class car) EXISTE ESSES ATRIBUTOS
        this.doors = doors; //  USAMOS THIS PARA ACESSAR E ENCHERGA OS ATRIBUTOS DE CLASS
    };

    honk(): void { // METADO FUNÇAO
        console.log('ACIONA A buzina');

    };

    turnOn(): void {
        console.log('ligar o carro');

    };

    turnOff(): void {
        console.log('desliga o carro');

    };

    speedUp(): void {
        console.log('acelera o carro');

    };

    speedDown():void {
        console.log('reduz a velocidade');

    };

    stop():void {
        console.log('para o carro');
    };

    turn(direçao: string): void {
        console.log(`virar o carro para ${direçao}`);

    };
};

// INSTACIAR A CLASS PARA USALA SENDO UM OBJ PODERIA EXPORTALA PARA USAR EM OURO ARQUIVO

// const cars = OBJETO
//new Car() = CLASS
// NEW SIGNIFICA Q ESTOU INSTANCIANDO MINHA CLASSE E CRIANDO UM OBJ CHAMADO CAR
// O OBJ PASSA A SER UMA REPRESENTAÇAO DA CLASSE 
// NAO USO MAIS A CLASS E SIM CHAMO O OBJ  -> cars.brand
const cars = new Car('ford', 'azul', 4);
cars.brand = 'toyota' // ALTERAR O NOME
export default Car;