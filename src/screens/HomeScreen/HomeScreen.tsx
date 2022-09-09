import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HeroImage } from '../../components/HomeScreen';
import { AppContainer, NavButton } from '../../components/shared';
import {
  CHARACTERS_SCREEN_NAME,
  CREW_SCREEN_NAME,
  EPISODES_SCREEN_NAME,
  HOME_SCREEN_NAME,
  QUOTES_SCREEN_NAME,
} from '../../navigation/screens';
import { RootStackParamList } from '../../navigation/types';

import styles from './styles';

type HomeScreenPropTypes = NativeStackScreenProps<RootStackParamList, typeof HOME_SCREEN_NAME>;

function HomeScreen({ navigation }: HomeScreenPropTypes) {
  const navigateToQoutesScreen = () => navigation.navigate(QUOTES_SCREEN_NAME);
  const navigateToCharactersScreen = () => navigation.navigate(CHARACTERS_SCREEN_NAME);
  const navigateToEpisodesScreen = () => navigation.navigate(EPISODES_SCREEN_NAME);
  const navigateToCrewScreen = () => navigation.navigate(CREW_SCREEN_NAME);

  return (
    <AppContainer withStatusBar>
      <HeroImage />
      <Text style={styles.headingText}>
        Quotes, facts and information on NBC’s beloved mockumentary series
        The Office.
      </Text>
      <View style={styles.navButtonContainer}>
        <NavButton onPress={navigateToQoutesScreen} navText="Quotes" />
        <NavButton onPress={navigateToCharactersScreen} navText="Characters" />
        <NavButton onPress={navigateToEpisodesScreen} navText="Episodes" />
        <NavButton onPress={navigateToCrewScreen} navText="Crew" />
      </View>
    </AppContainer>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    reset: PropTypes.func,
    goBack: PropTypes.func,
    setParams: PropTypes.func,
    dispatch: PropTypes.func,
    setOptions: PropTypes.func,
    isFocused: PropTypes.func,
    addListener: PropTypes.func,
  }).isRequired,
};

export default HomeScreen;
