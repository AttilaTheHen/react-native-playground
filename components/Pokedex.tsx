import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
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
  const formatName = (name: string) => {
    if (name === 'mr-mime') {
      return 'Mr. Mime';
    }
    if (name.split('-').length > 1) {
      const firstName = name.split('-')[0];
      const other = name.split('-')[1];
      return `${firstName[0].toUpperCase()}${firstName.slice(1)} (${other.toUpperCase()})`;
    } else {
      return name[0].toUpperCase() + name.slice(1);
    }
  };

  useEffect(() => {
    getPokemon()
      .then(data => setData(data.results))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item, index }: { item: pokemonItem; index: number }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Pokemon', {
          name: item.name,
          id: index + 1,
          displayName: formatName(item.name),
        })
      }
      style={{ flex: 0.5 }}
    >
      <Card
        flex
        shadowColor={'black'}
        borderless
        title={formatName(item.name)}
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

{
  /* const styles = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    zIndex: 999,
    flex: 0.5,
  },
}); */
}
