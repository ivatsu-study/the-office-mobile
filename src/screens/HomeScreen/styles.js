import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    width: 200,
    height: 200,
    aspectRatio: 1 * 1.8,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headingText: {
    margin: 12,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navButtonContainer: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
  },
});

export default styles;
