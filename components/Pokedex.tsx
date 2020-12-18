import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
// @ts-ignore
import { Card } from 'galio-framework';

import { View } from './Themed';
import { Props } from '../types';
import getPokemon from '../services/pokeApi';

interface pokemonItem {
  name: string;
}

const Pokedex = ({ navigation }: Props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getPokemon()
      .then(data => setData(data.results))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item, index }: { item: pokemonItem; index: number }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Pokemon', { name: item.name, id: index + 1 })}
      style={{ flex: 0.5 }}
    >
      <Card
        flex
        title={item.name}
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`}
        style={{ margin: 5 }}
      />
    </TouchableOpacity>
  );

  return (
    <View style={{ margin: 5, marginBottom: 75, marginHorizontal: 10 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => item.name}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default Pokedex;
