import './App.css';
import React from 'react';
class App extends React.Component {
 

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
        <button onClick={buttonA}>Button A</button>
        <button onClick={buttonB}>Button B</button>
        <button onClick={buttonC}>Button C</button>
      </>
    )
  }
}



export default App;
