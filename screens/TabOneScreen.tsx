import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import Pokedex from '../components/Pokedex';
{/* import pokedex from '../assets/pokedex/pokemon'; */}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
      <View>
        <Pokedex />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 10,
  }
});
