import React from 'react';

import { Text } from '../components/Themed';
import { Props } from '../types';

const Pokemon = ({ navigation, route }: Props) => {
  return <Text style={{ margin: 10 }}>{route.params.name}</Text>;
};

export default Pokemon;
