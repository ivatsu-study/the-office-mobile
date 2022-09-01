import { ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { GET_QUOTES } from '../../api/url';
import AppContainer from '../../components/shared/AppContainer/AppContainer';

import styles from './styles';

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
      <ScrollView style={styles.scrollContainer}>
        {data?.data.map((quote) => (
          <View key={quote._id} style={styles.quoteContainer}>
            <Text style={styles.quoteText}>{quote.content}</Text>
            <Text style={styles.quouteAuthor}>{`${quote.character.firstname} ${quote.character.lastname}`}</Text>
          </View>
        ))}
      </ScrollView>
    </AppContainer>
  );
}

export default QuotesScreen;
