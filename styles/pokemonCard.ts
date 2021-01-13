import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';

interface Style {
  container: ViewStyle;
  title: ViewStyle;
  image: ImageStyle;
}

const styles = StyleSheet.create<Style>({
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
    margin: 10,
    borderRadius: 5,
  },
});

export default styles;
