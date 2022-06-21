// EXERCICIO 1
/* import Cat from './cat.jpg';
import Image from './Image';

function App() {
  return (
    <>
      <Image source= {Cat} alternativeText="Cute cat staring" />
    </>
  );
}

export default App; */
//_____________________________________________________________________________


/* 🚀 Crie uma aplicação React na sua máquina via create-react-app com o nome fixation-exercises-10-2. Crie um arquivo Image.js no diretório src do projeto e copie para esse arquivo o código escrito acima. Uma vez feito isso tudo, responda:
Qual o nome do componente declarado acima?
Chame o componente Image dentro do componente App, de forma que seja mostrada esta imagem, ou o texto Cute cat staring, caso a imagem não consiga ser carregada. */
//_____________________________________________________________________________

// EXERCICIO 2 

// arquivo App.js, criado pelo create-react-app, modificado
/* import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
        <Order orde={headphone} />
        <Order orde={energyDrink} />
      </div>
    );
  }
}

export default App; */

//_____________________________________________________________________________
//EXERCICIO 3 
/* Entretanto, a geração dinâmica dos componentes está incompleta, haja vista que é preciso passar uma key para UserProfile. Você pode averiguar isso copiando o código acima e entrando no console do Google Chrome, que lá vai estar presente um warning levantado pelo React.
Dito isso, altere a chamada do componente de UserProfile de forma que a lista seja gerada dinamicamente de maneira adequada. */
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];

    return (
      <div className="App">
        {
          users.map(user => <UserProfile key={user.id} use={user} />)
        }

        {/*  Como boa prática utilizamos a chave `id` do objeto como nossa key por ser única,
       caso ela não existisse, podemos usar qualquer outro valor que seja único no objeto
       (`email` ou `avatar`) ou até uma concatenação de valores (`user.name + user.email`)
      que seja única. */}


      </div>
    );

  }
}

export default App;