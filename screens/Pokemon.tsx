import React from 'react';

import { Text } from '../components/Themed';

const Pokemon = ({ route }: { route: any }) => {
  return <Text>{route.params.name}</Text>;
};

export default Pokemon;