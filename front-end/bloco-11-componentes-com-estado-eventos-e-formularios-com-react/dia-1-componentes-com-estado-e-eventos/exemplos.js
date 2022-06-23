// Introdução aos eventos
import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
function handleClick() {
  console.log('Clicou no botão!')
}

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return <button onClick={handleClick}>Meu botão</button>
  }
}

export default App;

// Vinculando funções à classe com this e bind no constructor
/* Toda classe em JavaScript tem acesso a um método chamado constructor(), e com as classes de React, definidas com class MinhaClasse extends React.Component, não é diferente! Quando um componente React é criado, ou seja, quando é colocado na tela do navegador, a primeira coisa que é executada é a função constructor(). Toda a lógica interna que o React adiciona aos seus componentes começa a ser inclusa neles nesse momento.
No JavaScript, o super() refere-se ao construtor da classe pai. (No nosso caso, refere-se à implementação de React.Component.) É importante lembrar que você não pode usar o this em um construtor até que você tenha chamado o construtor da classe pai, o JavaScript não vai te deixar fazer isso. Então, por hora, apenas lembre-se que para usar o this dentro do constructor() é preciso chamar o super() antes. Ter isso em mente vai ser muito importante ao lidar com estados nas classes!
A grande questão, no entanto, é que é possível adicionar aos construtores das classes React comportamentos e lógica extras! 
O this acessa, nos componentes React, um objeto que guarda tudo que importa àquele componente. Um código de Hello, World! em React, ilustrado abaixo, gera a impressão no console a seguir:
*/


class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

// Unindo componentes com estados e eventos


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}
