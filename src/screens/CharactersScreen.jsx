import { Text, View } from 'react-native';
import AppContainer from '../components/shared/AppContainer/AppContainer';

function CharactersScreen() {
  return (
    <AppContainer withStatusBar>
      <View>
        <Text>Characters</Text>
      </View>
    </AppContainer>
  );
}

export default CharactersScreen;
