import { Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { fetchQuotes } from '../../api/queries';
import { AppContainer, ScrollViewContainer } from '../../components/shared';
import { LoadingPrisonMikeContainer } from '../../containers/shared';

import { Character } from '../CharactersScreen/types';

import styles from './styles';

type Quote = {
  _id: string;
  character: Character;
  content: string;
}

function QuotesScreen() {
  const { isLoading, error, data } = useQuery(['quotesData'], fetchQuotes);
  if (isLoading) {
    return (
      <LoadingPrisonMikeContainer />
    );
  }
  if (error instanceof Error) {
    return (
      <Text>{`An error has occurred: ${error.message}`}</Text>
    );
  }

  const { data: quotesData } = data;

  return (
    <AppContainer withStatusBar>
      {quotesData ? (
        <ScrollViewContainer>
          {quotesData.map((quote: Quote) => (
            <View key={quote._id} style={styles.quoteContainer}>
              <Text style={styles.quoteText}>{quote.content}</Text>
              <Text style={styles.quouteAuthor}>{`${quote.character.firstname} ${quote.character.lastname}`}</Text>
            </View>
          ))}
        </ScrollViewContainer>
      ) : (
        <Text>Oops! There's nothing to show 😱</Text>
      )}
    </AppContainer>
  );
}

export default QuotesScreen;
