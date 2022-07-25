import React from 'react';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <FirstComponent />
        <SecondComponent />
      </div>
    );
  }
}

export default App;

// Agora vamos analisar a implementação do componente FirstComponent:
import React from 'react';
import { connect } from 'react-redux';

class FirstComponent extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.myFirstState.map((element,index) => (
            <p key={ index }>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myFirstState: state.myReducer.state});

export default connect(mapStateToProps, null)(FirstComponent);
// OBS: O método connect()() é utilizado para conectar o componente a store do Redux. 
/* Vamos analisar o que está acontecendo:
Estamos fazendo um map com os elementos presentes no array myFirstState que, por sua vez, está presente nas props. Mas como isso foi parar lá?
A função mapStateToProps, auto-descritiva, mapeia as entidades armazenadas nos estados para uma props.
No nosso caso, queremos acessar os dados providos pelo reducer myReducer, portanto basta acessar o caminho do state com o reducer desejado e nomear a prop que o receberá (no caso, chamamos de myFirstState).
Por último, como foi dito anteriormente, utilizamos o connect para conectar o Redux ao componente. Esse método possui o seguinte formato: connect()(). Como no caso estamos fazendo apenas leitura dos dados, basta passar a função mapStateToProps no primeiro parênteses e o componente no segundo.

O método connect nos dá acesso a store do Redux. A sua estrutura se dá da seguinte forma: connect()().
Nos primeiros parênteses, devem estar presentes os métodos nativos do Redux. No caso de utilizar somente o mapDispatchToProps, o primeiro parâmetro desses parênteses deverá ser null, já no caso de utilizar somente o mapStateToProps, que veremos logo a frente, o segundo parâmetro desses parênteses deverá ser null. Portanto, no caso de utilizar ambos mapStateToProps e mapDispatchToProps, essa é a sintaxe que o connect apresentará:
 */

export default connect(mapStateToProps, mapDispatchToProps)(Component)
// No segundo parênteses, colocamos o componente que deverá ser conectado.




