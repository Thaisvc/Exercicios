// useState
/* O useState é o hook mais comum e ele permite que você utilize o state e outros recursos do React sem escrever uma classe. Para entender melhor do que estamos falando, veja este componente com Estado feito com uma classe e em seguida o mesmo componente feito com hooks: */
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>Counter: {counter}</div>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increase Counter
      </button>
    </div>
  );
}

export default App;
/* A primeira mudança é que não é mais necessário importar o Component, somente o useState.
O constructor, junto com o super e o this.state também foram removidos. Ao invés disso foi adicionado o useState: O counter é o valor do estado, o setCounter é a função que será usada para definir novos valores ao estado e o useState(0) é onde você adiciona o valor inicial do seu estado, neste caso 0. E repare que não precisamos nos preocupar em como atualizar um estado com base no estado anterior! Essa lógica funciona de forma transparente.
Nosso event handler onClick também mudou. No lugar de this.setState temos somente a chamada da função setCounter definida anteriormente, recebendo como parâmetro o novo valor de counter, neste caso counter + 1.
Observe que tanto this.setState quanto setCounter possuem o objetivo de atualizar o estado do componente. Da mesma forma que valores atualizados por this.setState acontecem de forma assíncrona, mudanças utilizando setCounter também não são instantâneas.
A função setCounter recebe um novo valor para o estado e coloca na fila de re-renderização do componente. Na próxima vez que o componente for re-renderizado o valor retornado por useState será o estado atualizado. Você pode ler a documentação do useState para saber mais. */