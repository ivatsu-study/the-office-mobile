import { Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { GET_QUOTES } from '../../api/url';
import { AppContainer, ScrollViewContainer } from '../../components/shared';

import { Character } from '../CharactersScreen/types';

import styles from './styles';

type Quote = {
  _id: string;
  character: Character;
  content: string;
}

function QuotesScreen() {
  const { isLoading, error, data } = useQuery(['quotesData'], () => fetch(GET_QUOTES).then((res) => res.json()));
  if (isLoading) return <Text>Loading...</Text>;
  if (error instanceof Error) {
    return (
      <Text>{`An error has occurred: ${error.message}`}</Text>
    );
  }

  return (
    <AppContainer withStatusBar>
      <ScrollViewContainer>
        {data?.data.map((quote: Quote) => (
          <View key={quote._id} style={styles.quoteContainer}>
            <Text style={styles.quoteText}>{quote.content}</Text>
            <Text style={styles.quouteAuthor}>{`${quote.character.firstname} ${quote.character.lastname}`}</Text>
          </View>
        ))}
      </ScrollViewContainer>
    </AppContainer>
  );
}

export default QuotesScreen;
