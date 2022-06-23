import './App.css';
import React from 'react';

function buttonA(){
  console.log("clicou no A");
}



class App extends React.Component {
  render() {
    return (
      <>
      <button onClick={buttonA}>Button A</button>
      
      </>
    )
  }
}



export default App;
