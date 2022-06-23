/* Existem duas maneiras de definirmos um componente:
1 Via função JavaScript: */
function Greeting(props) {
    return (<h1>Hello, {props.name}</h1>);
  }

  export default Greeting;
// ------------------------------------------------------------------------------

 // 2 Via classe:
 import React from 'react';
 class Greetin extends React.Component { // A declaração de um componente chamado Greeting. O componente Greeting herda da classe Component da biblioteca react.
   render() { // O componente Greeting descreve o que vai ser mostrado para quem usar a aplicação, declarado no método obrigatório render.
     return (<h1>Hello, {this.props.name}</h1>);// Nesse caso, Greeting retorna: <h1>Hello, {this.props.name}</h1>.
   } // O componente Greeting possui como propriedade um objeto chamado props, que contém todos os dados passados como parâmetro na hora de chamar um componente. Ou seja, chamar <Greeting name="Samuel" /> faz com que o componente tenha uma prop igual a { name: "Samuel" }.
 }

 export default Greetin; // Exportamos o componente Greeting de forma que ele possa ser reutilizado na aplicação.
// ------------------------------------------------------------------------------

 // Lembrando que, assim como podemos ter vários parâmetros em uma função, conseguimos também passar inúmeras propriedades para o componente por meio das props. Adicionemos o sobrenome da pessoa à função e ao componente.
 function greeting(name, lastName){
    return `Hello, ${name} ${lastName}`;
  }
  console.log(greeting('Samuel', 'Silva'));
// ------------------------------------------------------------------------------
  import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

export default Greeting;
// ------------------------------------------------------------------------------
// Agora o chamamos dentro do componente App:
import Greeting from './Greeting';

function App() {
  return (
    <main>
      <Greeting name="Samuel" lastName="Silva" />
    </main>
  );
}

export default App;
// ------------------------------------------------------------------------------


<section>
<img src={ album02.image } alt={ album02.title } />
<h2>{ album02.title }</h2>
<p>Lançamento: { album02.releaseDate.year }</p>
<p>Gravadora: { album02.others.recordCompany }</p>
<p>Formatos: { album02.others.formats }</p>
</section>

// https://app.betrybe.com/course/front-end/introducao-a-react/componentes-react/0115c033-cfc0-48bc-bcf5-812b599ee79a/conteudos/8434816c-d143-40ef-9236-49fe39720dda/composicao-de-componentes/bc3613e6-ee2c-43db-b389-7b4af59dddb5?use_case=next_button