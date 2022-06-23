import logo from './logo.svg';
import './App.css';
import React from 'react';

function buttonA(){
  console.log('clicou em A')
}
class App extends React.Component {
  render() {
    return (
      <>
      <button onClick={buttonA}>Button 1 </button>
      </>
    )
  }
}

export default App;
