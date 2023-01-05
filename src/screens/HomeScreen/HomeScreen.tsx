import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { HeroImage } from '../../components/HomeScreen'
import { AppContainer, NavButton } from '../../components/shared'
import {
  CHARACTERS_SCREEN,
  CREW_SCREEN,
  EPISODES_SCREEN,
  HOME_SCREEN,
  QUOTES_SCREEN,
} from '../../navigation/screens'
import { IRootStackParamList } from '../../navigation/types'

import styles from './styles'

type HomeScreenPropTypes = NativeStackScreenProps<
  IRootStackParamList,
  typeof HOME_SCREEN.NAME
>

const HomeScreen: React.FunctionComponent<HomeScreenPropTypes> = ({
  navigation,
}: HomeScreenPropTypes) => {
  const insets = useSafeAreaInsets()

  const navigateToQuotesScreen: () => void = () =>
    navigation.navigate(QUOTES_SCREEN.NAME)
  const navigateToCharactersScreen: () => void = () =>
    navigation.navigate(CHARACTERS_SCREEN.NAME)
  const navigateToEpisodesScreen: () => void = () =>
    navigation.navigate(EPISODES_SCREEN.NAME)
  const navigateToCrewScreen: () => void = () =>
    navigation.navigate(CREW_SCREEN.NAME)

  return (
    <AppContainer withStatusBar>
      <View
        style={
          // Paddings to handle safe area
          {
            paddingTop: insets.top,
          }
        }
      >
        <Text style={[styles.headingText]}>
          Quotes, facts and information on NBC’s beloved mockumentary series The
          Office.
        </Text>
      </View>
      <HeroImage />

      <View style={styles.navButtonContainer}>
        <NavButton
          onPress={navigateToQuotesScreen}
          navText={QUOTES_SCREEN.TITLE}
        />
        <NavButton
          onPress={navigateToCharactersScreen}
          navText={CHARACTERS_SCREEN.TITLE}
        />
        <NavButton
          onPress={navigateToEpisodesScreen}
          navText={EPISODES_SCREEN.TITLE}
        />
        <NavButton onPress={navigateToCrewScreen} navText={CREW_SCREEN.TITLE} />
      </View>
    </AppContainer>
  )
}

export default HomeScreen
