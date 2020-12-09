{/* import * as WebBrowser from 'expo-web-browser'; */}
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import { Text, View } from './Themed';
import getPokemon from '../services/pokeApi';

const Pokedex = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getPokemon()
      .then(data => setData(data.results))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <View>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ name }) => name}
          renderItem={({ item }: { item: any }) => (
            <Text>{item.name}</Text>
          )}
        />
      )}
    </View>
  );
};

export default Pokedex;