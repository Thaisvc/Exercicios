import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
//Neste exemplo, estamos chamando a função tick que chama o ReactDOM.render a cada segundo, e injeta no elemento pai com id root um 'Hello World' e o horário. 