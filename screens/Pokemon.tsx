import React from 'react';

import { Text } from '../components/Themed';
import { Props } from '../types';

const Pokemon = ({ navigation, route }: Props) => {
  return <Text>{route.params.name}</Text>;
};

export default Pokemon;
