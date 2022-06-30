/* Como visto no vídeo anterior, existem funções específicas que são executadas ao final de cada fase do ciclo de vida de um componente: componentDidMount, componentDidUpdate e componentWillUnmount. Porém o vídeo também menciona que existem outras funções consideradas menos comuns, como é caso de shouldComponentUpdate, que pode ser chamada na fase de atualização.
Os componentes React, assim como os seres vivos, possuem um ciclo de vida. No caso do React, o ciclo é dividido em 3 etapas. São elas:
Montagem - quando o componente é inicializado e inserido no DOM;
Atualização - quando os props ou estados do componente são alterados;
Desmontagem - quando o componente morre 🧟‍♂️, sumindo do DOM. 
O ciclo de vida e os principais métodos funcionam da seguinte maneira:
Montagem:
constructor - recebe as props e define o estado;
render - renderiza o componente, inserindo-o no DOM;
componentDidMount - dispara uma ou mais ações após o componente ser inserido no DOM (ideal para requisições);
Atualização:
shouldComponentUpdate - possibilita autorizar ou não o componente a atualizar;
componentDidUpdate - dispara uma ou mais ações após o componente ser atualizado;
Desmontagem:
componentWillUnmount - dispara uma ou mais ações antes de o componente ser desmontado.

*/

import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject,
    })
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    //Esse método será responsável por salvar a piada no array de piadas storedJokes!!
  }

  render() {
    const { storedJokes } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      {
        /*
        Aqui vamos construir nossa lógica com uma renderização condicional
        do nosso componente Joke, a ideia é renderizar um loading enquanto
        esperamos a nossa requisição de piadas finalizar.

        <p>RENDERIZAÇÃO CONDICIONAL</p>
        */
      }

      </div>
    );
  }
}

export default DadJoke;