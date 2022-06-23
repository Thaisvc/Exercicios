const myName = "thais";
const birthCity = "vespasiano";
let birthYear = 1996;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030;

console.log(birthYear);

birthCity ="belo horizonte";
console.log(birthCity);


/* EXERCICIO

1- Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
2- Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
3- Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
4- Utilize o console.log() para imprimir as constantes e variáveis que você criou.
4- Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
6- Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔 

GABARITO


Conteúdos
Variáveis
Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
Solução:

const myName = "Link";
Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
Solução:

const birthCity = "Hyrule";
Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
Solução:

let birthYear = 1986;
Utilize o console.log() para imprimir as constantes e variáveis que você criou.
Solução:

console.log(myName);
console.log(birthCity);
console.log(birthYear);
Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
Solução:

birthYear = 2030;
console.log(birthYear);;
Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔
Solução:

birthCity = "The Sky";
console.log(birthCity);
// TypeError: Assignment to constant variable.
Recebemos esse erro porque tentamos mudar o valor de uma constante e isso não é permitido, visto que elas sempre devem manter sua atribuição original, caso contrário, não deveriam ser constantes.
*/