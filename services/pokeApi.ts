const getPokemon = (id?: number) => {
  const url = id
    ? `https://pokeapi.co/api/v2/pokemon/${id}`
    : 'https://pokeapi.co/api/v2/pokemon?limit=151';
  return fetch(url).then(res => res.json());
};

export default getPokemon;
