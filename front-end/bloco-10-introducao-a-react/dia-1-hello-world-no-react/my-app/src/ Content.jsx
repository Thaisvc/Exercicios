import React from "react";

//Na pasta src, crie um novo arquivo chamado Content.jsx, que representará o componente Content;
// Dentro do arquivo Content.jsx, crie uma classe React chamada Content;

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class ContentE extends React.Component {
    render() {
        return (
            
            <p> {conteudos.map(position => 
            <>
            <div 
             key={position.conteudo}>
            <h3> {`O conteúdo é: ${position.conteudo}`}</h3> 
            <p> {`Status:  ${ position.status}`}</p> 
            <p> {`Bloco:  ${position.bloco}`}</p> 
            </div>
            </>
            
            ) }</p>
            
        )
    }
}




  // ----------------------------------------- GABARITO ___________________________________________

  class Content extends React.Component {
    render() {
      return(
        <div className="content">

          {conteudos.map((elem) => (
            <div 
            key={elem.conteudo} className="card">
              <h4>{`O conteudo é: ${elem.conteudo}`}</h4>
              <p>{`status: ${elem.status}`}</p>
              <p>{`bloco: ${elem.bloco}`}</p>
            </div>
          ))}

        </div>
      );
    }
  }
  export default ContentE;
