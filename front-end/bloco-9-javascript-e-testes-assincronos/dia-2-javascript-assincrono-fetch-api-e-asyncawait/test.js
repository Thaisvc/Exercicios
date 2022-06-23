/* function append(data) {
    const ul = document.querySelector('ul');
  
    const li = document.createElement('li');
    const divNome = document.createElement('div');
    const divImage = document.createElement('div');
    const img = document.createElement('img');
  
    divNome.innerHTML = data.name;
    img.src = data.imageUrl;
    divImage.appendChild(img);
  
    li.appendChild(divNome);
    li.appendChild(divImage);
  
    ul.appendChild(li);
  }


async function fetchPokemon(pokemonName) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  
      const data = await response.json();
      const pokemon = {
        name: data.name,
        imageUrl: data.sprites.front_default
      }
      append(pokemon);
    } catch (error) {
      console.log('Vishi deu erro')
    }
  }

  async function requestPokemons(){
    try {
      await fetchPokemon('ditto');
      await fetchPokemon('bulbasaur');
      await fetchPokemon('squirtle');
      await fetchPokemon('dratini');
    } catch (error) {
      console.log(error);
    }
  }
  
  

  
  window.onload = requestPokemons;


 */
















  // api.js
const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';
  
    const coins = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.data)
      .catch((error) => error.toString());
  console.log(coins);
    return coins;
  }
  
  const setCoins = async () => {
    const coins = await fetchCoins();
  
    const coinsList = document.getElementById('coins-list');
  
    coins
      .filter((_, index) => index < 10)
      .forEach((coin) => {
        const newLi = document.createElement('li');
  
        newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;
  
        coinsList.appendChild(newLi);
      });
  }
  
  window.onload = () => setCoins();















