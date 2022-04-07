let status = "nao se aplica";

switch (status) {
  case "aprovada":
    console.log("voce foi aprovada");
    break;

  case "reprovada":
    console.log("voce foi reprovada");
    break;

    case "lista":
    console.log("voce esta na lista de espera") ;
    break;
    default :
    console.log ('não se aplica' );
    break
}

/*
Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .
*/