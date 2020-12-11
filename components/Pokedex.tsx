import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
// @ts-ignore
import { Card } from 'galio-framework';

import { View } from './Themed';
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
  
  const renderItem = ({ item }: { item: any }) => (
    <Card
      flex
      title={item.name}
      style={{ margin: 5 }}
    />
  );
  
  return (
    <View style={{ margin: 5 }}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default Pokedex;