import logo from './logo.svg';
import './App.css';
import React from "react"

// vamos incorporar a nossa constante element na função helloWorld, retornar um código JSX e encapsulá-la em uma div:
function helloWorld(nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}
const element = helloWorld("Jorge", "Maravilha");
const container = <div>{element}</div>;

// crie um elemento JSX que recebe o valor “Hello, JSX” de uma constante chamada textJSX, e o incorpore em uma tag h1 .
const textJSX = "Hello, JSX";
const ElementH1 = <h1>{textJSX}</h1>;

export default function App() {
  return (
    <div className="App">{ElementH1}</div>
  )
}

