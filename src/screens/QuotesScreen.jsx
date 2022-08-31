import { ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { GET_QUOTES } from '../api/url';
import AppContainer from '../components/shared/AppContainer/AppContainer';

function QuotesScreen() {
  const { isLoading, error, data } = useQuery(['quotesData'], () => fetch(GET_QUOTES).then((res) => res.json()));
  if (isLoading) return <Text>Loading...</Text>;
  if (error) {
    return (
      <Text>{`An error has occurred: ${error.message}`}</Text>
    );
  }

  return (
    <AppContainer withStatusBar>
      <View>
        <Text>Quotes</Text>
      </View>
      <ScrollView>
        {data?.data.map((quote) => (
          <View key={quote._id}>
            <Text>{quote.content}</Text>
            <Text>{`${quote.character.firstname} ${quote.character.lastname}`}</Text>
          </View>
        ))}
      </ScrollView>
    </AppContainer>
  );
}

export default QuotesScreen;
