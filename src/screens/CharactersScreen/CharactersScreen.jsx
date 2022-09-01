import { Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { GET_CHARACTERS } from '../../api/url';
import { AppContainer, ScrollViewContainer } from '../../components/shared';

import styles from './styles';

function CharactersScreen() {
  const { isLoading, error, data } = useQuery(['charactersData'], () => fetch(GET_CHARACTERS).then((res) => res.json()));
  if (isLoading) return <Text>Loading...</Text>;
  if (error) {
    return (
      <Text>{`An error has occurred: ${error.message}`}</Text>
    );
  }

  return (
    <AppContainer withStatusBar>
      <ScrollViewContainer>
        {data?.data.map((character) => (
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
