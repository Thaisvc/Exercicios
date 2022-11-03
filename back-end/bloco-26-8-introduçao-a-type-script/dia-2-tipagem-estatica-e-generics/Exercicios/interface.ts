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
type Slices  = 4 | 6 | 8;

interface IPizza {
    flavor: string;
    slices: Slices;
    exibir(): void;
}

const typePizza1: IPizza = {
    flavor: 'Calabresa',
    slices: 8,
    exibir(): void {
        console.log('pizza de calabresa com 8 fatias');
        
    }
}

const typePizza2: IPizza = {
    flavor: 'Marguerita',
    slices: 6,
    exibir(): void {
        console.log('pizza de Marguerita com 6 fatias');
        
    }
}

const typePizza3: IPizza = {
    flavor: 'Nutela',
    slices: 4,
    exibir(): void {
        console.log('pizza de Nutela com 4 fatias');
        
    }
}