// App.js
import React, { Component }from 'react';
import './App.css';

// Depois de transformar o componente App.js em um componente de classe, já podemos definir nosso estado inicial local, para que possamos armazenar nele os dados que a API retornará. Também podemos fazer, em seguida, a requisição e colocar um título para ser exibido na página. Veja abaixo:
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }
 // Depois de transformar o componente App.js em um componente de classe, já podemos definir nosso estado inicial local, para que possamos armazenar nele os dados que a API retornará. Também podemos fazer, em seguida, a requisição e colocar um título para ser exibido na página. Veja abaixo:
 componentDidMount() {
  this.fetchCharacters();
}

 render() {
  const { characters } = this.state;
  return (
    <div className="App">
      <h1>
        Ricky and Morty Characters:
      </h1>
      <div className="body">
        {characters.map(({ name, image }) => {
          return (
            <div className="container" key={name}>
              <h3>{name}</h3>
              <img src={image} alt={name}/>
            </div>
          )
        })}
     {/*    // Você certamente notou que continua aparecendo apenas o título que tínhamos colocado anteriormente na página. Se você der um console.log em characters irá notar que o array continua vazio. Aquele velho problema do código ser lido antes da API retornar ataca novamente, mas nada tema, porque com o componentDidMount não há problema!
Todos os nossos problemas serão resolvidos apenas chamando a função fetchCharacters dentro do componentDidMount, mas, caso prefira, você pode fazer o fetch diretamente dentro dele. Irá funcionar das duas formas. */}
{/* //  Primeira maneira:
    fetchCharacters() {
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results})
      })
    }

    componentDidMount() {
      this.fetchCharacters();
    }

//  Segunda maneira:
    componentDidMount() {
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results})
      })
    } */}
      </div>
    </div>
  );
}
}


export default App;

/* Ao final, teremos uma aplicação funcionando e um código assim ou bem parecido com isso:
// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters: [],
        };
      }

    componentDidMount() {
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results})
      })
    }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map((character) => {
            return (
              <div className="container" key={character.name}>
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App; */