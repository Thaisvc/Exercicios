import './App.css';
import React from 'react';
class App extends React.Component {
  constructor() { // vai executar minha logica antes do render 

    super(); // liga minha funçao contructo com a funçao contruto nativa

    this.state = { // acessando meu objeto this na chave state -> PARA GUIARDA INFORMAÇOES 
      button1: 0, // iniciando estado do botao A
      button2: 0, // iniciando estado do botao B
      button3: 0, // iniciando estado do botao C
    }

    this.buttonA = this.buttonA.bind(this) // vinculando a this a minha funçao buttona
    this.buttonB = this.buttonB.bind(this) // vinculando a this a minha funçao buttona 
    this.buttonC = this.buttonC.bind(this) // vinculando a this a minha funçao buttona  
  }

  buttonA() {
    console.log(this);
    console.log("clicou no A");
    this.setState((estado) => ({ // setState usa essa funçao pois a mudança no state é assicrona (setState torna a funçao assicrona)
      button1: estado.button1 + 1 
    }))
  }

  buttonB() {
    console.log(this);
    console.log("clicou no B");
    this.setState((estadoAnterior, _props) => ({ // _ indica q _props nao vai ser usado
      
      button2: estadoAnterior.button2 + 1
      
    }))
    
  }

  buttonC() {
    console.log(this);
    console.log("clicou no C");
    this.setState((estadoAnterior, _props) => ({
      button3: estadoAnterior.button3 + 1 
    }))
  }
  render() {
    return (
      <>
        <button onClick={this.buttonA}>{this.state.button1}</button>
        <button onClick={this.buttonB}>{this.state.button2}</button>
        <button onClick={this.buttonC}>{this.state.button3}</button>
      </>
    )
  }
}



export default App;
