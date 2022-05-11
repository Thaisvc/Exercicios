/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
Solução: */

const employeeGenerator1 = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    /*  console.log(email); */
    return { fullName, email: `${email}@trybe.com` };
};

const newEmployees1 = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva'),
    };
    return employees;
};

console.log(newEmployees1(employeeGenerator1));

//-------------------------------------------------------------------------------- outra forma
const newEmployees = (employeeGenerator) => {
    //objeto com os nomes mais a funçao geradora do email
    const employees = {
        id1: employeeGenerator('Pedro Guerra'),
        id2: employeeGenerator('Luiza Drumond'),
        id3: employeeGenerator('Carla Paiva')
    }
    return employees;
}

const employeeGenerator = (fullName) => {
    //toLowerCase coloca tudo em caixa baixa minusculo split separa o valor do objeto join junta com um _ no meio das palavras separadas pelo split
    const email = fullName.toLowerCase().split(' ').join('_');
    //cria o objeto q sera exibido 
    return { fullName, email: `${email}@betrybe.com` }
}
console.log(newEmployees(employeeGenerator));

//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número 
//aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se 
//o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string
// (Ex: "Tente novamente" ou "Parabéns você ganhou").

const gerarNum = (aposta) => {

    for (let index = 1; index <= 5; index += 1) {
        const gera = Math.floor(Math.random() * 6)
        return gera;

    }

}

gerarNum()

const aposta = () => {
    if (gerarNum) {

    }
}

//--------------------------------------------------------------RESPOSTA
const numberChecker = (myNumber, number) => myNumber === number; //FERIFICA NUMEROS

const lotteryResult = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);
    return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));

/* 3 - Crie uma HOF que receberá três parâmetros:
O primeiro será um array de respostas corretas (Gabarito);
O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
Uma resposta correta adiciona 1 ponto à pontuação final;
A ausência de uma resposta não altera a pontuação (quando for "N.A");
Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:. */
//--------------------------------------------------------------- RESPOSTA
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