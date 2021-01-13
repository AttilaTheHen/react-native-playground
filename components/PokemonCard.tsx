import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { View, Text } from './Themed';
import { Props } from '../types';
import PokemonTypeColors from '../constants/PokemonTypeColors';

const PokemonCard = ({
  title,
  image,
  pokemonType,
}: {
  title: string;
  image: string;
  pokemonType: string | null;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{ uri: image }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 250,
    margin: 5,
    backgroundColor: '#FFDE00',
    borderRadius: 5,
  },
  title: {
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    backgroundColor: 'black',
    margin: 10,
    borderRadius: 5,
  },
});

export default PokemonCard;
