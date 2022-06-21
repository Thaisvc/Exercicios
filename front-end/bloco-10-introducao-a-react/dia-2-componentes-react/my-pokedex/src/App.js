import './App.css';
import Pokemon from './Pokemon';
import data from './data';

function App() {
  return (
    <>
      <section className='container-cards'>
        {
          data.map(avatar => <Pokemon key={avatar.id} pokem={avatar} />)
        }
      </section>
    </>
  );
}

export default App;
