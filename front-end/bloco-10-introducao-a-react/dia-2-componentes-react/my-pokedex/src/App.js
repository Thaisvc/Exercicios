import './App.css';
import Pokemon from './Pokemon';
import data from './data';

function App() {
  return (
    <>
    <h1> POKEDEX </h1>
      <section className='container-cards'>
        {
          data.map(avatar => <Pokemon key={avatar.id} pokem={avatar} />)
        }
      </section>
    </>
  );
}

export default App;
