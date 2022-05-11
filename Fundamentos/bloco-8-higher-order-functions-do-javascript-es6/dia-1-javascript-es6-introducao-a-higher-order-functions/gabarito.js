/* Conteúdos
Estruturando uma HOF
Para fixar
Vamos praticar com os seguintes exercícios:
1 - Crie uma função que retorne a string 'Acordando!!';
2 - Crie outra função que retorne a string 'Bora tomar café!!';
3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
 */
// Ao chamar a função doingThings:
doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
/* Solução: */

// Crie uma função que retorne a string 'Acordando!!';
const wakeUp = () => 'Acordando!!';

// Crie outra função que retorne a string 'Bora tomar café!!';
const breakfast = () => 'Bora tomar café!!';

// Crie mais uma função que retorne a string 'Partiu dormir!!';
const sleep = () => 'Partiu dormir!!';

// Agora desenvolva uma _HOF_ chamada `doingThings` e configure esta função
// para que imprima no console o resultado da execução das funções que você
// criou nos exemplos anteriores.
const doingThings = (callback) => {
  const result = callback();
  console.log(result);
};

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);
/* Exercícios
Agora a prática
A seguir, temos possíveis soluções para os exercícios:
1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
Solução:
 */
const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeGenerator));
/* 
Caso você não tenha conseguido fazer esse exercício, reforce seus estudos sobre high order functions, template literals e funções de string e de array.
2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
Solução: */

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));
/* Se você por acaso não comprendeu a sintaxe com ? e : não se preocupe. Este tipo de validação é conhecido como "operador ternário" e é uma alternativa para se realizar uma validação if, else onde ? é equivalente ao if e : ao else. Desta forma, o que está acontecendo é: O retorno da função numberChecker é verdadeiro ? se sim retorne 'Lucky day, you won!', se não :, retorne 'Try Again!'.
3 - Crie uma HOF que receberá três parâmetros:
O primeiro será um array de respostas corretas (Gabarito);
O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
Uma resposta correta adiciona 1 ponto à pontuação final;
A ausência de uma resposta não altera a pontuação (quando for "N.A");
Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:.
Solução: */

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
/* Bônus
Parte I
1 - Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
Solução: */

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const dragonDmg = Math.floor((Math.random() * (dragon.strength - minDmg + 1) + minDmg));
  return dragonDmg;
};
/* 2 - Crie uma função que reotorna o dano causado pelo warrior.
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
Solução:
 */
const warriorAttack = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = minDmg * warrior.weaponDmg;
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
  return warriorDamage;
};
/* 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
Solução: */

const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};
/* Parte II
1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.
Solução: */

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
};

gameActions.warriorTurn(warriorAttack);
/* 2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damagee mana do mage.
Solução:
 */
const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage);
    const mageDamage = mageTurnStats.damageDealt;
    mage.damage = mageDamage;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mageDamage;
  },
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
/* 3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.
Solução: */

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage);
    const mageDamage = mageTurnStats.damageDealt;
    mage.damage = mageDamage;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
/* 4 - Adicione ao objeto gameActions uma função de primeira classe que retorna o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
Solução: */

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage);
    const mageDamage = mageTurnStats.damageDealt;
    mage.damage = mageDamage;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());
