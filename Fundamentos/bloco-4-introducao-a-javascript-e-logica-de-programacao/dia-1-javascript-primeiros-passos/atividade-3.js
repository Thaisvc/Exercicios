const note = 50;

if (note >= 80) {
    console.log("Congratulations, you have been approved");
} else if (note < 80 && note >= 60) {
    console.log("You are on our waiting list");
} else if (note < 60) {
    console.log("You were disapproved");
}


/*GABARITO 
Condições If e Else

Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
Solução:

const grade = 80;
Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
Se a nota for menor que 60, imprima "Você foi reprovada(o)"
Solução:

if (grade >= 80) {
  console.log("Parabéns, você foi aprovada(o)!")
} else if (grade < 80 && grade >= 60) {
  console.log("Você está na nossa lista de espera");
} else if (grade < 60) {
  console.log("Você foi reprovada(o)")
}
*/