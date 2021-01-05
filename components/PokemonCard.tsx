import React from 'react';
import { Image } from 'react-native';

import { View, Text } from './Themed';

const PokemonCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <View>
      <Image source={{ uri: image }} />
      <Text>{title}</Text>
    </View>
  );
};

export default PokemonCard;
