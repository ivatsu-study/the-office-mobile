import { Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { fetchCharacters } from '../../api/queries';
import { AppContainer, ScrollViewContainer } from '../../components/shared';
import { LoadingPrisonMikeContainer } from '../../containers/shared';

import styles from './styles';
import { Character } from './types';

function CharactersScreen() {
  const { isLoading, error, data } = useQuery(['charactersData'], fetchCharacters);
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

  return (
    <AppContainer withStatusBar>
      <ScrollViewContainer>
        {data?.data.map((character: Character) => (
          <View key={character._id} style={styles.characterContainer}>
            {/* NOTE: backend returns 'null' as text */}
            <Text style={styles.character}>{character.lastname !== 'null' ? `${character.firstname} ${character.lastname}` : `${character.firstname}`}</Text>
          </View>
        ))}
      </ScrollViewContainer>
    </AppContainer>
  );
}

export default CharactersScreen;
