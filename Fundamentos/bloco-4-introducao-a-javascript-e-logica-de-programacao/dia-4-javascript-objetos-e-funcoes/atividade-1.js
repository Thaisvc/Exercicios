/*TEXTO DE SER COMENTADO PARA TEXTE */





/* Crie um objeto player contendo as variáveis listadas abaixo.*/
let player = {
 name : 'Marta',
 lastName : 'Silva',
 age : 34,
 medals : { golden: 2, silver: 3 }
}
/*Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".*/

console.log('a jogadora'+' '+ player.name + ' '+  player.lastName + ' '+ 'tem'+ ' '+ player.age + ' '+ 'de idade');

/*Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.*/
let player = {
    name : 'Marta',
    lastName : 'Silva',
    age : 34,
    medals : { golden: 2, silver: 3 }
   };
//criando nava propriedadee
   player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

   console.log(player);

   /*Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".*/
   let player = {
    name : 'Marta',
    lastName : 'Silva',
    age : 34,
    medals : { golden: 2, silver: 3 }
   };
   player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('a jogadora'+' '+ player.name + ' '+  player.lastName + ' '+ 'foi eleita a melhor do mundo por 6 vezes".'+ ' '+ player.bestInTheWorld);*/
/*Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".*/
let player = {
    name : 'Marta',
    lastName : 'Silva',
    age : 34,
    medals : { golden: 2, silver: 3 }
   };
   console.log('a jogadora possui '+' '+ player['medals']['golden'] + 'medalha de ouro '+   '".'+ ' '+ player['medals']['silver'] + 'medalha de prata ');
