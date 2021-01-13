import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';

import { View } from './Themed';
import { Props } from '../types';
import PokemonCard from '../components/PokemonCard';
import getPokemon from '../services/pokeApi';
import basicPokemon from '../services/basicPokemon';

interface PokemonItem {
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

  const renderItem = ({ item, index }: { item: PokemonItem; index: number }) => (
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
      <PokemonCard
        title={formatName(item.name)}
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`}
        pokemonType={basicPokemon[index + 1]?.type || null}
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
