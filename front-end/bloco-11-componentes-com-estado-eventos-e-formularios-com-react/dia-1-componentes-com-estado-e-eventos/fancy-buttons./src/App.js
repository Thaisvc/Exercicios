import './App.css';
import React from 'react';
class App extends React.Component {
  constructor() { // vai executar minha logica antes do render 

    super(); // liga minha funçao contructo com a funçao contruto nativa
    this.buttonA = this.buttonA.bind(this) // vinculando a this a minha funçao buttona
    this.buttonB = this.buttonB.bind(this) // vinculando a this a minha funçao buttona 
    this.buttonC = this.buttonC.bind(this) // vinculando a this a minha funçao buttona  
  }

  buttonA() {
    console.log(this);
    console.log("clicou no A");
  }

  buttonB() {
    console.log(this);
    console.log("clicou no B");
  }

  buttonC() {
    console.log(this);
    console.log("clicou no C");
  }
  render() {
    return (
      <>
        <button onClick={this.buttonA}>Button A</button>
        <button onClick={this.buttonB}>Button B</button>
        <button onClick={this.buttonC}>Button C</button>
      </>
    )
  }
}



export default App;
