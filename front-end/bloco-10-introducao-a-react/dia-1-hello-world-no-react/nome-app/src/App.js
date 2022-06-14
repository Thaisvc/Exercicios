/* import logo from './logo.svg';
import './App.css';
 */

/* const Task = (value) => {
  return (
    <li>{value}</li>
  );
} */

// 2 
// https://pt.stackoverflow.com/questions/514407/para-que-serve-e-como-definir-a-prop-key-no-react
// https://pt-br.reactjs.org/docs/lists-and-keys.html
// https://blog.matheuscastiglioni.com.br/listando-tarefas-com-react/

/* const tasks = () => {
  const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];
  return (
  <ul> 
    {tarefas.map(position => <li>{position}</li>)}
  </ul>
  );
};


const element = Task("tarefas");

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {tasks}
        <p>
          {tasks}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        {tasks}
        </a>

      </header>
    </div>
  );
}
 */
// ----------------------------------------------------------------------------------------
// outra forma


import React from 'react';
import './App.css';


const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends React.Component {
  render() {
    return (
      <ul>
        {tarefas.map(position => <li>{position}</li>)}
      </ul>
    );
  }
}

export default App;