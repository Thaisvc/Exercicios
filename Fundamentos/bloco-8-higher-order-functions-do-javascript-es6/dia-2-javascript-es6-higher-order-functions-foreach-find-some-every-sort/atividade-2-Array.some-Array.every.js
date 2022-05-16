//1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

//2 parametro na funçao o array q espero e um nome para procura no array 
                              //percorrendo o array e procurando pelo menos 1 nome igual ao meu parametro
const hasName = (arr, name) => arr.some((pocurando) => pocurando === name)

//passando como parametro meu array nomes e um nome
console.log(hasName(names, 'thais'))


//2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 6 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
      //percorrendo o array q foi passado como parametro se meu parametro idade .age (.age estou chamando a idade do objeto passado como parametro)for = a passada como parametro de idade
    return arr.every((idade) => idade.age >= minimumAge)
  }
  
  console.log(people(people, 18));