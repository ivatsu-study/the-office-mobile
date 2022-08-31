import { Text, View } from 'react-native';
import AppContainer from '../components/shared/AppContainer/AppContainer';

function QuotesScreen() {
  return (
    <AppContainer withStatusBar>
      <View>
        <Text>Quotes</Text>
      </View>
    </AppContainer>
  );
}

export default QuotesScreen;
