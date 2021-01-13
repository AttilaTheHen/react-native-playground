import React from 'react';
import { Image } from 'react-native';

import { View, Text } from './Themed';
import styles from '../styles/pokemonCard';

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
      <Image style={styles.formatImage(pokemonType)} source={{ uri: image }} />
    </View>
  );
};

export default PokemonCard;
