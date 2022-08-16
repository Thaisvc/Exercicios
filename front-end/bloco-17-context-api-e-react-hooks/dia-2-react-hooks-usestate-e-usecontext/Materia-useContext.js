/* O useContext é o hook que vai te ajudar a trabalhar com a Context API. Ele funciona como um Consumer, mas de uma forma muito menos complexa e que torna seu código bem mais legível!
Assim como seria feito utilizando o Consumer, vamos fazer um setup inicial para podermos utilizar o useContext:
Primeiro criamos o Context: */


import { createContext } from 'react';

const AppContext = createContext();

export default AppContext;

//Em seguida criamos o Provider: 


import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [stateA, setStateA] = useState('initialStateA');
  const [stateB, setStateB] = useState('initialStateB');
  const contextValue = {
    stateA,
    setStateA,
    stateB,
    setStateB,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

//Com o Context e o Provider criados, precisamos adicionar o Provider à aplicação:

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Provider from '../utils/Provider'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)

// Com o setup concluído, podemos utilizar o estado criado no Provider em qualquer componente que for necessário utilizando o useContext. Pra isso, precisamos importar o Context e o useContext:
import React, { useContext } from 'react';
import AppContext from '../utils/AppContext';

const ComponenteX = () => {
  const { stateA, setStateA, stateB } = useContext(AppContext);

  return (
    <div>
      <p>{stateA}</p>
      <p>{stateB}</p>
      <button onClick={() => setStateA("newState")}>Click</button>
    </div>
  );
};

export default ComponenteX;