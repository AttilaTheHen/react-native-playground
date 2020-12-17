import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  Pokemon: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type PokemonScreenNavigationProp = StackNavigationProp<TabOneParamList, 'Pokemon'>;
export type PokemonScreenRouteProp = RouteProp<TabOneParamList, 'Pokemon'>;

export type Props = {
  route: PokemonScreenRouteProp;
  navigation: PokemonScreenNavigationProp;
};
