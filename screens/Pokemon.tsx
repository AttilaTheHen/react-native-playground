import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

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
    getPokemon(route.params.name)
      .then(data => setData(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ paddingBottom: 20 }}>
      <Text style={{ margin: 10 }}>{route.params.displayName}</Text>
      {isLoading ? (
        <ActivityIndicator style={{ margin: 10 }} />
      ) : (
        <Text style={{ margin: 10 }}>{data.base_experience}</Text>
      )}
    </View>
  );
};

export default Pokemon;
