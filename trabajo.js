const pokemonContainer = document.querySelector(".listapokemon");
let NuevoPokemon = 0;

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
        CrearPokemones(data)
    });
}

function fetchPokemones(number) {
    for (let i = 1; i <= number; i++){

        NuevoPokemon=Math.round(Math.random()*150);
        fetchPokemon(NuevoPokemon);
    } 
}

function CrearPokemones(pokemon) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("pokemon-block");
  
    const contenedor = document.createElement("div");
    contenedor.classList.add("img-container");
  
    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;
  
    contenedor.appendChild(sprite);

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;
    tarjeta.appendChild(name);
    tarjeta.appendChild(contenedor);
   
    pokemonContainer.appendChild(tarjeta);
  }
  fetchPokemones(6);

