import { useQuery } from '@tanstack/react-query'
import { Text, View } from 'react-native'

import { fetchCharacters } from '../../api/queries'
import { ICharacter } from '../../api/types'
import { AppContainer, ScrollViewContainer } from '../../components/shared'
import { LoadingPrisonMikeContainer } from '../../containers/shared'
import styles from './styles'

const CharactersScreen: React.FunctionComponent = () => {
  const { isLoading, error, data } = useQuery(
    ['charactersData'],
    fetchCharacters,
  )
  if (isLoading) {
    return <LoadingPrisonMikeContainer />
  }
  if (error instanceof Error) {
    return <Text>{`An error has occurred: ${error.message}`}</Text>
  }

  return (
    <AppContainer withStatusBar>
      <ScrollViewContainer>
        {data?.map((character: ICharacter) => (
          <View key={character._id} style={styles.characterContainer}>
            {/* NOTE: backend returns 'null' as text */}
            {character.lastname !== 'null' ? (
              <Text
                style={styles.character}
              >{`${character.firstname} ${character.lastname}`}</Text>
            ) : (
              <Text style={styles.character}>{`${character.firstname}`}</Text>
            )}
          </View>
        ))}
      </ScrollViewContainer>
    </AppContainer>
  )
}

export default CharactersScreen
