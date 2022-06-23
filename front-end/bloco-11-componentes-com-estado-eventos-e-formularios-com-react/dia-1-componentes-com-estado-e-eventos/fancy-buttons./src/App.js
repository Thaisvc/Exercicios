import './App.css';
import React from 'react';

function buttonA(){
  console.log("clicou no A");
}

function buttonB(){
  console.log("clicou no B");
}
function buttonC(){
  console.log("clicou no C");
}

class App extends React.Component {
  render() {
    return (
      <>
      <button onClick={buttonA}>Button A</button>
      <button onClick={buttonB}>Button B</button>
      <button onClick={buttonC}>Button C</button>
      </>
    )
  }
}



export default App;
