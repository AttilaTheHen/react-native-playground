import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
// @ts-ignore
import { Card } from 'galio-framework';

import { View } from './Themed';
import getPokemon from '../services/pokeApi';

const Pokedex = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  
  useEffect(() => {
    getPokemon()
      .then(data => setData(data.results))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);
  
  const Item = ({ item, onPress }: { item: any, onPress: any }) => (
    <TouchableOpacity onPress={onPress}>
      <Card
        flex
        title={item.name}
      />
    </TouchableOpacity>
  )
  
  const renderItem = ({ item }: { item: any }) => (
    <Item 
      item={item} 
      onPress={() => setSelectedItem(item.name)}
    />
  );
  
  return (
    <View>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          style={{ margin: 5, flex: 1 }}
          numColumns={2}
          data={data}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default Pokedex;