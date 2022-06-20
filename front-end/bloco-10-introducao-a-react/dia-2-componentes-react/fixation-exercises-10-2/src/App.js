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

/* 🚀 Crie uma aplicação React na sua máquina via create-react-app com o nome fixation-exercises-10-2. Crie um arquivo Image.js no diretório src do projeto e copie para esse arquivo o código escrito acima. Uma vez feito isso tudo, responda:
Qual o nome do componente declarado acima?
Chame o componente Image dentro do componente App, de forma que seja mostrada esta imagem, ou o texto Cute cat staring, caso a imagem não consiga ser carregada. */

// EXERCICIO 2 

// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
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

export default App;