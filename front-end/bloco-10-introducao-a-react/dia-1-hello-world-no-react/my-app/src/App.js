import './App.css';
import Header from './Header';
import Content from './ Content';
import Footer from './ Footer';

function App() {
  return (
    <div className="App">
       <Header />
       <Content />
       <Footer />
    </div>
  );
}

export default App;
/* 
3 🚀 Crie um novo projeto utilizando npx create-react-app.
. Na pasta src, crie um novo arquivo chamado Header.jsx, que representará o componente Header;
. No arquivo Header.jsx, crie uma classe React, chamada Header. Essa classe deve renderizar uma tag h1 com o texto 'Conteúdos de Front-End'. Não esqueça de exportar esse componente;
. No arquivo App.js, importe o componente Header criado anteriormente;
. Renderize o componente Header no App.js;
. Na pasta src, crie um novo arquivo chamado Content.jsx, que representará o componente Content;
. Dentro do arquivo Content.jsx, crie uma classe React chamada Content;
. Ainda no arquivo Content.jsx, adicione o seguinte array:

*/