const getPokemon = (name?: string) => {
  const url = name
    ? `https://pokeapi.co/api/v2/pokemon/${name}`
    : 'https://pokeapi.co/api/v2/pokemon?limit=151';
  return fetch(url).then(res => res.json());
};

export default getPokemon;
