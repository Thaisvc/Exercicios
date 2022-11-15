/* Exercício 3
Crie uma interface que represente uma pizza. Ela deve conter:

Uma propriedade do tipo string chamada flavor que representa o sabor.
Uma propriedade chamada slices cujo tipo é a união entre os possíveis números de fatias da pizza.
O número de fatias pode ser 4, 6 ou 8;
Utilize um type alias para armazenar o tipo dessa propriedade.
a) Crie uma pizza sabor Calabresa de 8 fatias;

b) Crie uma pizza sabor Marguerita de 6 fatias;

c) Crie uma pizza sabor Nutela de 4 fatias.

 */

type Slices = 4 | 6 | 8;

interface IPizza {
    flavor: string;
    slices: Slices;

}

const typePizza1: IPizza = {
    flavor: 'Calabresa',
    slices: 8,
}

const typePizza2: IPizza = {
    flavor: 'Marguerita',
    slices: 6,
}

const typePizza3: IPizza = {
    flavor: 'Nutela',
    slices: 4,
}


console.log(typePizza1);


import { Common, Vegetarian, Sugar } from "./interfeceAndTypes";

interface PizzaVegetarian extends IPizza {
    flavor: Vegetarian
}

interface PizzaCommon extends IPizza {
    flavor: Common
}

interface PizzaSugar extends IPizza {
    flavor: Sugar,
    slices: 4
}


const frango: PizzaCommon = {
    flavor: "Frango",
    slices: 8
  }

  console.log(frango);
  
  const pepperoni: PizzaCommon = {
    flavor: "Pepperoni",
    slices: 6
  }
  
  console.log(pepperoni);
  
  const marguerita: PizzaVegetarian = {
    flavor: "Marguerita",
    slices: 8
  }
  
  console.log(marguerita);
  
  const palmito: PizzaVegetarian = {
    flavor: "Palmito",
    slices: 8
  }
  
  console.log(palmito);
  
  const goiabadaEQueijo: PizzaSugar = {
    flavor: "Goiabada com Queijo",
    slices: 4
  }
  
  console.log(goiabadaEQueijo);



  // EXEMPLO DE  TYPE ALIAIS
  type Point = {
    x: number;
    y: number;
  };

  
  // EXEMPLO DE  TYPE UNIONS
  function imprimirCPF(cpf: number | string){
    console.log("Seu CPF é: " + cpf);
  }
  
  imprimirCPF(11111111111);
  imprimirCPF('111.111.111-11');