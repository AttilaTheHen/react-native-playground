import React, { useState, useEffect } from 'react';

import { Text, View } from '../components/Themed';
import { Props } from '../types';
import getPokemon from '../services/pokeApi';

interface singlePokemon {
  base_experience: number;
}

const Pokemon = ({ navigation, route }: Props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({} as singlePokemon);

  useEffect(() => {
    getPokemon(route.params.id)
      .then(data => setData(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      <Text style={{ margin: 10 }}>{route.params.name}</Text>
      <Text style={{ margin: 10 }}>{data.base_experience}</Text>
    </View>
  );
};

export default Pokemon;
