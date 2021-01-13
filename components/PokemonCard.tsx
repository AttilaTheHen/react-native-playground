import React from 'react';
import { Image } from 'react-native';

import { View, Text } from './Themed';
import styles from '../styles/pokemonCard';
import { colors, icons } from '../constants/PokemonTypes';

const PokemonCard = ({
  title,
  image,
  pokemonType,
}: {
  title: string;
  image: string;
  pokemonType: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image
        style={[styles.image, { backgroundColor: colors[pokemonType] || 'black' }]}
        source={{ uri: image }}
      />
    </View>
  );
};

export default PokemonCard;
