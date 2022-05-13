//CALLBACK
const sum = (num1,num2) => num1 + num2;
const sub = (num1,num2) => num1 - num2;
const mul = (num1,num2) => num1 * num2;
const div = (num1,num2) => num1 / num2;

const callback = (func) => func(10,5)

console.log(callback(div));



const acorda = () => 'Acordando!!' ;
const cafe = () => 'Bora tomar café!!' ;
const dormir = () => 'Partiu dormir!!' ;

const doingThings = (callback) => callback();


console.log(doingThings(acorda));



const newEmployees = (gerarEmail) => {
    const employees = {
      id1: gerarEmail('Pedro Guerra'),
      id2:gerarEmail('Luiza Drumond'),
      id3: gerarEmail('Carla Paiva'),
    }
    return employees;
  };
// CALBACK RECEBE COMO PARAMETRO newEmployees/employees
  const gerarEmail = (callbak) =>{
      const email = callbak.toLowerCase().split(' ').join('_');
      let gerar = { callbak, email :`${email}@gmail.com` };
      return gerar;
  }

  console.log(newEmployees(gerarEmail));

  const livro = (books) => { books :`${books}amo de mais `};


  const books = (gerarbook) => {
    const empogou = {
      id1: gerarbook('trono de vidro'),
      id2:gerarbook('nevenight'),
      id3: gerarbook('memorias'),
    }
    return empogou;
  };
  console.log(books());

  console.log(livro(livro));
