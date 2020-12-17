import { RouteProp, NavigatorScreenParams } from '@react-navigation/native';
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
  Pokemon: { name: string };
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

type PokemonScreenNavigationProp = StackNavigationProp<TabOneParamList, 'Pokemon'>;
type PokemonScreenRouteProp = RouteProp<TabOneParamList, 'Pokemon'>;

export type Props = {
  route: PokemonScreenRouteProp;
  navigation: PokemonScreenNavigationProp;
};
