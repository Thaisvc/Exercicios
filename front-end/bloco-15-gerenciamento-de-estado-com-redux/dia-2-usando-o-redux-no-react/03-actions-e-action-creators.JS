export const newAction = (state) => (
    {
        type: 'NEW_ACTION',
        state
    }
);
/* Acabamos de falar que actions são objetos simples em javascript, então porque criamos funções?
Chamadas de action creators, essas funções apenas criam e retornam uma action. Utilizamos as action creators porque nos trazem alguns benefícios em códigos mais complexos. Imagine ter que escrever esse objeto no seu código sempre que precisar enviar uma ação para o reducer, estaríamos tendo um trabalho repetitivo desnecessário, outra vantagem é que dessa forma também padronizamos a ação, evitando possíveis erros caso ela seja utilizada várias vezes.
 */