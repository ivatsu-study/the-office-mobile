import { Text, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

import { HeroImage } from '../../components/HomeScreen'
import { AppContainer, NavButton } from '../../components/shared'
import {
  CHARACTERS_SCREEN_NAME,
  CREW_SCREEN_NAME,
  EPISODES_SCREEN_NAME,
  HOME_SCREEN_NAME,
  QUOTES_SCREEN_NAME,
} from '../../navigation/screens'
import { IRootStackParamList } from '../../navigation/types'

import styles from './styles'

type HomeScreenPropTypes = NativeStackScreenProps<
  IRootStackParamList,
  typeof HOME_SCREEN_NAME
>

const HomeScreen: React.FunctionComponent<HomeScreenPropTypes> = ({
  navigation,
}: HomeScreenPropTypes) => {
  const navigateToQoutesScreen: () => void = () =>
    navigation.navigate(QUOTES_SCREEN_NAME)
  const navigateToCharactersScreen: () => void = () =>
    navigation.navigate(CHARACTERS_SCREEN_NAME)
  const navigateToEpisodesScreen: () => void = () =>
    navigation.navigate(EPISODES_SCREEN_NAME)
  const navigateToCrewScreen: () => void = () =>
    navigation.navigate(CREW_SCREEN_NAME)

  return (
    <AppContainer withStatusBar>
      <HeroImage />
      <Text style={styles.headingText}>
        Quotes, facts and information on NBC’s beloved mockumentary series The
        Office.
      </Text>
      <View style={styles.navButtonContainer}>
        <NavButton onPress={navigateToQoutesScreen} navText="Quotes" />
        <NavButton onPress={navigateToCharactersScreen} navText="Characters" />
        <NavButton onPress={navigateToEpisodesScreen} navText="Episodes" />
        <NavButton onPress={navigateToCrewScreen} navText="Crew" />
      </View>
    </AppContainer>
  )
}

export default HomeScreen
