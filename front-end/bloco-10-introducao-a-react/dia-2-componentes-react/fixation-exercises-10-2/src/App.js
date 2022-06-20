import Cat from './cat.jpg';
import Image from './Image';

function App() {
  return (
    <>
      <Image source= {Cat} alternativeText="Cute cat staring" />
    </>
  );
}

export default App;

/* 🚀 Crie uma aplicação React na sua máquina via create-react-app com o nome fixation-exercises-10-2. Crie um arquivo Image.js no diretório src do projeto e copie para esse arquivo o código escrito acima. Uma vez feito isso tudo, responda:
Qual o nome do componente declarado acima?
Chame o componente Image dentro do componente App, de forma que seja mostrada esta imagem, ou o texto Cute cat staring, caso a imagem não consiga ser carregada. */