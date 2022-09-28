const ask = require('readline-sync');
 /* const weightInKg = 48; // Você pode utilizar o valor que desejar aqui
const heightInCm = 155; // Você pode utilizar o valor que desejar aqui
 */
function handleBMI(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);
  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;
  const bmi = height / heightSquared;

  if (bmi < 18.5) {
    console.log('Status: Underweight (thin)');
    return;
  }
  if (bmi >= 18.5 && bmi < 25) {
    console.log('Status: Normal weight');
    return;
  }
  if (bmi >= 25 && bmi < 30) {
    console.log('Status: Overweight (overweight)');
    return;
  }
  if (bmi >= 30 && bmi < 35) {
    console.log('Status: Grade I obesity');
    return;
  }
  if (bmi >= 35 && bmi < 40) {
    console.log('Status: Grade II obesity');
    return;
  }
  console.log('Status: Obesity grades III and IV');
  return bmi;
} 
 
// A função main é o ponto de partida do nosso programa
 function main() { 
const askWeight =  ask.questionFloat('What your weight?');
 const askHeight =  ask.question('What your height?');
 const bmi = handleBMI(askWeight, askHeight);

  console.log(`BMI: ${bmi.toFixed(2)}`);
 } 

main();
// ------------------------------------------------------------------------------------------------------------------
// OUTRA FORMA 
// Para evitarmos essa quantidade de verificações, podemos primeiramente mapear, em um objeto, os IMCs máximos e mínimos de cada situação.
// ...
// function handleBMI(peso, altura) {
//   ...
// }

/* const BMI_MAX_AND_MIN = {
    'Underweight': {
      minBMI: 0,
      maxBMI: 18.4,
    },
    'Normal Weight': {
      minBMI: 18.5,
      maxBMI: 24.9,
    },
    'Overweight': {
      minBMI: 25,
      maxBMI: 29.9,
    },
    'Obese Class I': {
      minBMI: 30.0,
      maxBMI: 34.9,
    },
    'Obese Class II': {
      minBMI: 35,
      maxBMI: 39.9,
    },
    'Obese Class III': {
      minBMI: 40,
      maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
    },
  };
  
  // function main() {
  //   ...
  // }

 //  Agora que temos as relações entre as situações e os IMCs máximos/mínimos mapeadas, podemos verificar para cada chave (situação) do objeto BMI_MAX_AND_MIN, onde o IMC calculado se encontra. Para isto, vamos criar uma função chamada handleBMIResult, na qual primeiramente extrairemos as chaves do objeto BMI_MAX_AND_MIN. Em seguida, iremos iterar no array em que as as chaves são listadas e utilizar o find para encontrar a situação cujo intervalo compreenda o IMC Calculado.
 // const BMI_MAX_AND_MIN = {
// ...
// }

function handleBMIResult(imc) {
    const situacoes = Object.keys(BMI_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]
  
    const resultFind = results.find((situacao) => {
      const { maxBMI, minBMI } = BMI_MAX_AND_MIN[result]; // acessamos as informações do intervalo da situação iterada
  
      // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
      return bmi >= minBMI && bmi <= maxBMI;
    });
  
    return resultFind;
  }
  
  // function main() {
  // ...
  // }

  // Para finalizar, executaremos a handleBMIResult e mostraremos o seu resultado na função main, no console.
  // ...
// function main() {
//   const weight = readline.questionFloat('What\'s your weight? (kg) ');
//   const height = readline.questionInt('What\'s your height? (cm) ');
  
//   const bmi = handleBMI(weight, height);
const bmiResult = handleBMIResult(bmi);
  
//   console.log(`BMI: ${bmi.toFixed(2)}`);
   console.log(`bmiResult`);
// }

// main(); */